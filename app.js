// =========================================================
// 1. INITIALIZATION & CONFIGURATION
// =========================================================
const catalog = {
  film: typeof filmCatalog !== 'undefined' ? filmCatalog : [],
  tv:   typeof tvCatalog !== 'undefined' ? tvCatalog : []
};

const allTitles = {
  film: typeof movieTitles !== 'undefined' ? movieTitles : [],
  tv:   typeof tvTitles !== 'undefined' ? tvTitles : []
};

// Calculate Day Index
const ANCHOR_DATE = new Date("2026-07-21T00:00:00");
const today = new Date();
const systemDayIndex = Math.floor((today - ANCHOR_DATE) / (1000 * 60 * 60 * 24));

const urlParams = new URLSearchParams(window.location.search);
const isArchiveMode = urlParams.has("day");
const activeDayIndex = isArchiveMode ? parseInt(urlParams.get("day"), 10) : systemDayIndex;
const queryCat = urlParams.get("cat");

// Fuzzy Search Engine
const fuseOptions = { threshold: 0.3, includeScore: true, ignoreLocation: true, keys: ['title'] }
const searchIndex = {
  film: new Fuse(allTitles.film, fuseOptions),
  tv: new Fuse(allTitles.tv, fuseOptions)
};

// =========================================================
// 2. STATE MANAGEMENT & STREAKS (DECOUPLED DATA MODEL)
// =========================================================

// Safe local date string to avoid midnight UTC timezone bugs
function getLocalDateString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// Attendance Streak Logic
function updateDailyStreak(wonToday) {
  if (isArchiveMode) return; // Vault games do not affect streaks

  const todayStr = getLocalDateString();
  let stats = { currentStreak: 0, bestStreak: 0, lastPlayedDate: null, flawless: true };

  try {
    const raw = localStorage.getItem('cinemind_user_stats');
    if (raw) stats = { ...stats, ...JSON.parse(raw) };
  } catch (e) {}

  // If already played today (e.g. finished Film, now playing TV)
  if (stats.lastPlayedDate === todayStr) {
    if (!wonToday) stats.flawless = false; // Strip flawless if they fail the second game today
    localStorage.setItem('cinemind_user_stats', JSON.stringify(stats));
    return;
  }

  // Calculate day difference safely
  let isConsecutive = false;
  if (stats.lastPlayedDate) {
    const [lY, lM, lD] = stats.lastPlayedDate.split('-');
    const [cY, cM, cD] = todayStr.split('-');
    const lastDate = new Date(lY, lM - 1, lD);
    const currDate = new Date(cY, cM - 1, cD);
    const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));
    isConsecutive = (diffDays === 1);
  }

  if (isConsecutive) {
    stats.currentStreak++;
    if (!wonToday) stats.flawless = false;
  } else {
    stats.currentStreak = 1;
    stats.flawless = wonToday;
  }

  stats.lastPlayedDate = todayStr;
  if (stats.currentStreak > stats.bestStreak) stats.bestStreak = stats.currentStreak;

  localStorage.setItem('cinemind_user_stats', JSON.stringify(stats));
}

// Helper to fetch streak for UI rendering
function getStreakData() {
  try { return JSON.parse(localStorage.getItem('cinemind_user_stats')); }
  catch (e) { return null; }
}

class GameManager {
  constructor(dayIndex) {
    this.dayIndex = dayIndex;
    this.storageKey = `cinemind_state_day_${dayIndex}`;
    this.activeTab = (queryCat === "film" || queryCat === "tv") ? queryCat : "film";
    this.state = this.loadState();
  }

  loadState() {
    const defaultState = {
      film: { clueIndex: 0, gameOver: false, message: "", isSuccess: false, guesses: [] },
      tv:   { clueIndex: 0, gameOver: false, message: "", isSuccess: false, guesses: [] }
    };
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return defaultState;
      const parsed = JSON.parse(raw);
      return { 
        film: { ...defaultState.film, ...(parsed.film || {}) }, 
        tv:   { ...defaultState.tv, ...(parsed.tv || {}) } 
      };
    } catch (e) {
      return defaultState;
    }
  }

  saveState() {
    try {
      const existingRaw = localStorage.getItem(this.storageKey);
      const existing = existingRaw ? JSON.parse(existingRaw) : {};
      const toSave = { ...existing, [this.activeTab]: this.state[this.activeTab] };
      localStorage.setItem(this.storageKey, JSON.stringify(toSave));
    } catch (e) {
      console.error("[CINEMIND] LocalStorage write failed:", e);
    }
  }

  getCurrentPuzzle() {
    const cat = catalog[this.activeTab];
    return cat[this.dayIndex % cat.length];
  }

  getCurrentTabState() {
    return this.state[this.activeTab];
  }

  switchTab(tab) {
    if (this.activeTab === tab) return false;
    this.activeTab = tab;
    return true; 
  }

  submitGuess(guess) {
    const tabState = this.getCurrentTabState();
    const puzzle = this.getCurrentPuzzle();
    if (tabState.gameOver) return;

    tabState.guesses.push(guess);

    if (guess.toLowerCase() === puzzle.title.toLowerCase()) {
      tabState.isSuccess = true;
      tabState.gameOver = true;
      tabState.message = "";
      updateDailyStreak(true); // Triggers streak save on win
    } else {
      if (tabState.clueIndex < puzzle.clues.length - 1) {
        tabState.clueIndex++;
        tabState.message = `"${guess}" is incorrect. Clue ${tabState.clueIndex + 1} revealed.`;
      } else {
        tabState.isSuccess = false;
        tabState.gameOver = true;
        tabState.message = "";
        updateDailyStreak(false); // Triggers streak save on loss
      }
    }
    this.saveState();
  }

  skipTurn() {
    const tabState = this.getCurrentTabState();
    const puzzle = this.getCurrentPuzzle();
    if (tabState.gameOver) return;

    tabState.guesses.push("SKIPPED");

    if (tabState.clueIndex < puzzle.clues.length - 1) {
      tabState.clueIndex++;
      tabState.message = `Clue skipped. Clue ${tabState.clueIndex + 1} revealed.`;
    } else {
      tabState.isSuccess = false;
      tabState.gameOver = true;
      tabState.message = "";
      updateDailyStreak(false); // Triggers streak save on skip-loss
    }
    this.saveState();
  }

  searchTitles(query) {
    if (!query) return [];
    return searchIndex[this.activeTab].search(query).map(res => res.item).slice(0, 6);
  }
}

const game = new GameManager(activeDayIndex);

// =========================================================
// 3. DOM BINDING & EVENT LISTENERS
// =========================================================
const DOM = {
  cluesList: document.getElementById("clues-list"),
  guessInput: document.getElementById("guess-input"),
  statusMsg: document.getElementById("status-message"),
  tabs: { film: document.getElementById("tab-film"), tv: document.getElementById("tab-tv") },
  tracker: document.getElementById("progress-tracker"),
  suggestions: document.getElementById("suggestions-list"),
  posterCard: document.getElementById("poster-card"),
  guessContainer: document.querySelector(".guess-container"),
  skipBtn: document.getElementById("skip-btn"),
  dateHeader: document.getElementById("daily-date"),
  helpBtn: document.getElementById("help-btn"),
  helpModal: document.getElementById("help-modal"),
  closeModalBtn: document.getElementById("close-modal-btn"),
  closeModalActionBtn: document.getElementById("close-modal-action-btn")
};

if (DOM.closeModalActionBtn) {
  DOM.closeModalActionBtn.addEventListener("click", () => {
    DOM.helpModal.classList.add("hidden");
  });
}

// Date Header setup
if (isArchiveMode) {
  DOM.dateHeader.innerHTML = `ARCHIVE CASE #${activeDayIndex} · <a href="vault.html" style="color: var(--amber); text-decoration: none; font-weight: 700;">RETURN TO VAULT</a>`;
} else {
  DOM.dateHeader.innerText = `THE DAILY DEDUCTION · ${today.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`;
}

// Help Modal Logic
if (DOM.helpBtn) {
  DOM.helpBtn.addEventListener("click", () => {
    DOM.helpModal.classList.remove("hidden");
  });
}

if (DOM.closeModalBtn) {
  DOM.closeModalBtn.addEventListener("click", () => {
    DOM.helpModal.classList.add("hidden");
  });
}

if (DOM.helpModal) {
  DOM.helpModal.addEventListener("click", (e) => {
    if (e.target === DOM.helpModal) {
      DOM.helpModal.classList.add("hidden");
    }
  });
}

// Inputs & Actions
DOM.guessInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  const tabState = game.getCurrentTabState();
  if (!query || tabState.gameOver) return hideSuggestions();
  renderSuggestions(game.searchTitles(query));
});

DOM.guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const query = DOM.guessInput.value.trim();
    if (!query) return;
    
    const matches = game.searchTitles(query);
    const tabState = game.getCurrentTabState();
    const firstAvailable = matches.find(item => !tabState.guesses.some(g => g.toLowerCase() === item.title.toLowerCase()));
    
    if (firstAvailable) {
      executeSelection(firstAvailable.title);
    } else {
      if (window.statusTimeout) clearTimeout(window.statusTimeout);
      DOM.statusMsg.innerHTML = `<div class="status-consequence">Please select an available title from the list.</div>`;
      DOM.statusMsg.className = "status-panel";
      DOM.statusMsg.classList.remove("hiding");
      window.statusTimeout = setTimeout(() => DOM.statusMsg.classList.add("hiding"), 3500);
    }
  }
});

DOM.skipBtn.addEventListener("click", () => {
  if (game.getCurrentTabState().gameOver) return;
  const previousClueIndex = game.getCurrentTabState().clueIndex;
  DOM.guessInput.value = "";
  hideSuggestions();
  game.skipTurn();
  updateUI(previousClueIndex < game.getCurrentTabState().clueIndex);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".input-wrapper")) hideSuggestions();
});

Object.keys(DOM.tabs).forEach(type => {
  DOM.tabs[type].addEventListener("click", () => {
    if (game.switchTab(type)) {
      hideSuggestions();
      updateUI();
    }
  });
});

// =========================================================
// 4. VIEW RENDERING ENGINE
// =========================================================
function renderSuggestions(matches) {
  DOM.suggestions.innerHTML = "";
  const tabState = game.getCurrentTabState();

  if (matches.length === 0) return hideSuggestions();

  matches.forEach(matchItem => {
    const titleText = matchItem.title;
    const isGuessed = tabState.guesses.some(g => g.toLowerCase() === titleText.toLowerCase());
    
    const item = document.createElement("div");
    item.className = `suggestion-item ${isGuessed ? "disabled" : ""}`;
    
    item.innerHTML = `
      <img src="${matchItem.poster}" alt="${titleText}" class="suggestion-poster" />
      <span class="suggestion-title">${titleText}</span>
    `;
    
    if (!isGuessed) {
      item.addEventListener("click", () => executeSelection(titleText));
    }
    DOM.suggestions.appendChild(item);
  });
  DOM.suggestions.classList.remove("hidden");
}

function hideSuggestions() {
  DOM.suggestions.classList.add("hidden");
}

function executeSelection(title) {
  DOM.guessInput.value = "";
  hideSuggestions();
  const previousClueIndex = game.getCurrentTabState().clueIndex;
  game.submitGuess(title);
  updateUI(previousClueIndex < game.getCurrentTabState().clueIndex);
}

function formatClueHTML(clue) {
  if (clue.format === "scene") {
    return `
      <div class="scene-marker">LOCATION REPORT //</div>
      <div class="script-slugline highlighted-text">${clue.slugline}</div>
      <div class="script-action">${clue.action}</div>
    `;
  }
  if (clue.format === "dialogue") {
    return `
      <div class="char-wrap"><span class="char-redact">${clue.character}</span></div>
      <div class="script-dialogue-block">
        <div class="script-line">${clue.line}</div>
      </div>
    `;
  }
  if (clue.format === "signature") {
    return `
      <div class="stamp">DECLASSIFIED</div>
      <div class="script-character">${clue.character}</div>
      <div class="script-dialogue-block">
        <div class="script-line">${clue.line}</div>
      </div>
    `;
  }
  if (clue.format === "prop") {
    return `
      <div class="evidence-tag">EXHIBIT A : PHYSICAL EVIDENCE</div>
      <div class="script-action prop-text">${clue.item}</div>
    `;
  }
  if (clue.format === "metadata") {
    return `
      <div class="script-metadata">
        <div><b>RELEASE</b> ${clue.year}</div>
        <div><b>GENRE</b> ${clue.genre}</div>
        <div><b>CREDITS</b> ${clue.details}</div>
      </div>
    `;
  }
  return `<div>${clue}</div>`;
}

function updateUI(triggerRevealAnimation = false) {
  const state = game.getCurrentTabState();
  const puzzle = game.getCurrentPuzzle();

  DOM.tabs.film.classList.toggle("active", game.activeTab === "film");
  DOM.tabs.tv.classList.toggle("active", game.activeTab === "tv");

  // Clues Render
  DOM.cluesList.innerHTML = "";
  for (let i = state.clueIndex; i >= 0; i--) {
    const clueObj = puzzle.clues[i];
    const box = document.createElement("div");
    const formatClass = `format-${clueObj.format}`;
    const sigClass = clueObj.format === "signature" ? "is-signature" : "";
    box.className = `clue-box ${formatClass} ${sigClass}`;
    
    if (i === state.clueIndex && triggerRevealAnimation) {
      box.classList.add("reveal");
    }

    box.innerHTML = `
      <div class="clue-header-line">
        <span class="clue-tag">CLUE ${i + 1} OF 5</span>
        <span class="script-page-no">SCENE ${i + 1}${clueObj.format === 'signature' ? ' · DECLASSIFIED' : ''}</span>
      </div>
      <div class="clue-body">
        ${formatClueHTML(clueObj)}
      </div>
    `;
    DOM.cluesList.appendChild(box);
  }

  // Pips Tracker
  DOM.tracker.innerHTML = Array.from({ length: 5 }).map((_, i) => {
    let statusClass = "pip";
    if (state.isSuccess && i === state.clueIndex) statusClass += " correct";
    else if (i < state.clueIndex) statusClass += " failed";
    else if (i === state.clueIndex && !state.gameOver) statusClass += " current";
    else if (state.gameOver && !state.isSuccess && i <= state.clueIndex) statusClass += " failed";
    return `<div class="${statusClass}"></div>`;
  }).join("");

  // Input & Messaging
  if (DOM.guessContainer) {
    DOM.guessContainer.classList.toggle("hidden", state.gameOver);
    if (!state.gameOver) {
      DOM.guessInput.placeholder = game.activeTab === "film" ? "Search & select a movie..." : "Search & select a TV show...";
      DOM.guessInput.value = "";
      DOM.guessInput.disabled = false;
    }
  }

  // Clear running timeout before showing new status
  if (window.statusTimeout) clearTimeout(window.statusTimeout);

  if (state.gameOver) {
    DOM.statusMsg.className = "hidden";
    DOM.statusMsg.innerHTML = "";
  } else if (state.guesses.length > 0) {
    const lastGuess = state.guesses[state.guesses.length - 1];
    
    if (lastGuess === "SKIPPED") {
      DOM.statusMsg.innerHTML = `
        <span class="status-stamp skip-stamp">➔ SKIPPED</span>
        <div class="status-content">
          <div class="status-consequence">Clue ${state.clueIndex + 1} revealed.</div>
        </div>
      `;
    } else {
      DOM.statusMsg.innerHTML = `
        <span class="status-stamp error-stamp">✕ INCORRECT</span>
        <div class="status-content">
          <div class="status-guess">"${lastGuess}"</div>
          <div class="status-consequence">Clue ${state.clueIndex + 1} revealed.</div>
        </div>
      `;
    }
    
    // Strip classes and force DOM reflow to replay the stamp animation
    DOM.statusMsg.className = "";
    void DOM.statusMsg.offsetWidth; 
    
    // Apply visible state
    DOM.statusMsg.className = "status-panel";
    
    // Start fade/collapse timer
    window.statusTimeout = setTimeout(() => {
      DOM.statusMsg.classList.add("hiding");
    }, 3500);
  } else {
    DOM.statusMsg.className = "hidden";
    DOM.statusMsg.innerHTML = "";
  }

  // End Game / Classified Poster Card
  if (DOM.posterCard) {
    if (state.gameOver) {
      const textGrid = Array.from({ length: 5 }).map((_, i) => (state.isSuccess && i === state.clueIndex) ? "🟩" : (i <= state.clueIndex ? "🟥" : "⬛")).join("");
      
      const htmlGrid = Array.from({ length: 5 }).map((_, i) => {
        let pipClass = "empty";
        if (state.isSuccess && i === state.clueIndex) pipClass = "correct";
        else if (i <= state.clueIndex) pipClass = "wrong";
        return `<span class="seal-pip ${pipClass}"></span>`;
      }).join("");

      const metadataClue = puzzle.clues.find(c => c.format === "metadata") || {};

      // 1. Gather Streak Data for Flexbox
      let streakContent = "";
      if (!isArchiveMode) {
        const stats = getStreakData();
        if (stats && stats.currentStreak > 0) {
          const stampColor = "#cc5555"; 
          const paddedStreak = String(stats.currentStreak).padStart(2, '0');
          streakContent = `
            <div style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border: 3px double ${stampColor}; border-radius: 48% 53% 51% 49%; color: ${stampColor}; font-family: 'Courier Prime', monospace; font-size: 15px; font-weight: bold; transform: rotate(-8deg); opacity: 0.85; margin-right: 12px; flex-shrink: 0; text-shadow: 0px 0px 1px rgba(204, 85, 85, 0.4); box-shadow: inset 0 0 1px rgba(204, 85, 85, 0.3), 0 0 1px rgba(204, 85, 85, 0.3);">
              ${paddedStreak}
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center;">
              <span style="color: #dcd0bc; font-size: 13px; font-weight: bold; letter-spacing: 1px;"> DAYS ON THE CASE</span>
              <span style="color: #d4af37; font-size: 10px; opacity: 0.9;">BEST STREAK: ${stats.bestStreak}</span>
            </div>
          `;
        }
      }

      // 2. Vault Link (Manila hex applied)
      const vaultPrompt = !isArchiveMode 
        ? `<a href="vault.html" class="vault-promo-link" style="color: #dcd0bc; font-size: 11px; letter-spacing: 1px; text-decoration: none; margin-top: 10px; display: block;">ACCESS THE VAULT TO CRACK PAST CASES &raquo;</a>`
        : `<a href="vault.html" class="vault-promo-link" style="color: #dcd0bc; font-size: 11px; letter-spacing: 1px; text-decoration: none; margin-top: 10px; display: block;">&raquo; RETURN TO THE VAULT</a>`;

      // 3. Status Stamp (Fixed flexbox stretch and thickened border)
      const statusStamp = state.isSuccess 
        ? `<div style="color: #5bb18f; border: 2px solid #5bb18f; padding: 3px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; letter-spacing: 1px; display: inline-flex; align-self: flex-start; margin-bottom: 8px; transform: rotate(-2deg); box-shadow: inset 0 0 1px rgba(91, 177, 143, 0.3);">✓ CASE SOLVED</div>`
        : `<div style="color: #cc5555; border: 2px solid #cc5555; padding: 3px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; letter-spacing: 1px; display: inline-flex; align-self: flex-start; margin-bottom: 8px; transform: rotate(-2deg); box-shadow: inset 0 0 1px rgba(204, 85, 85, 0.3);">✕ UNRESOLVED</div>`;

      // 4. Master HTML Construction
      DOM.posterCard.className = `dossier-card ${state.isSuccess ? 'victory' : 'defeat'}`;
      DOM.posterCard.innerHTML = `
        
        <!-- ZONE 1: The Case (Poster + Info + Status) -->
        <div style="display: flex; gap: 18px; margin-bottom: 20px;">
          <!-- Evidence Photo Treatment for Poster -->
          <div style="flex-shrink: 0; background: #e0e0e0; padding: 4px; border: 1px solid #111; border-radius: 2px; box-shadow: 2px 3px 6px rgba(0,0,0,0.4); transform: rotate(-1deg);">
            <img class="dossier-poster" src="${puzzle.poster}" alt="${puzzle.title}" style="margin: 0; width: 95px; height: auto; display: block;" />
          </div>
          <div style="display: flex; flex-direction: column; justify-content: flex-start; text-align: left;">
            ${statusStamp}
            <div class="dossier-title" style="margin-top: 0; font-size: 18px; line-height: 1.1; margin-bottom: 6px;">${puzzle.title}</div>
            <div class="dossier-meta" style="color: #999;">${game.activeTab.toUpperCase()} ARCHIVE · ${metadataClue.year || ''}</div>
            <div class="dossier-meta" style="color: #777;">${metadataClue.details || ''}</div>
          </div>
        </div>

        <!-- ZONE 2: The Operative (Side-by-Side Stats) -->
        <div style="display: flex; background: rgba(0,0,0,0.15); border: 1px solid #333; border-radius: 6px; padding: 12px; margin-bottom: 20px;">
          
          <!-- Left side: Streak -->
          <div style="flex: 1; display: flex; align-items: center; justify-content: center; border-right: 1px dashed #444; padding-right: 10px;">
            ${streakContent || `<span style="color:#666; font-size: 11px;">NO ACTIVE STREAK</span>`}
          </div>
          
          <!-- Right side: Timer (High contrast sizes) -->
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding-left: 10px;">
            <span style="color: #dcd0bc; font-size: 9px; font-weight: bold; letter-spacing: 2px; margin-bottom: 4px; text-transform: uppercase;">
              ${isArchiveMode ? 'VAULT ARCHIVE' : 'NEXT CASE UNLOCKS IN'}
            </span>
            <span id="countdown-display" style="color: var(--amber, #d4af37); font-size: 18px; font-weight: bold; letter-spacing: 2px; text-shadow: 0 0 3px rgba(212, 175, 55, 0.2);">
              ${isArchiveMode ? `CASE #${activeDayIndex}` : '00:00:00'}
            </span>
          </div>
        </div>

        <!-- ZONE 3: The Actions (Share + Vault) -->
        <div style="text-align: center;">
          <button id="share-btn" class="share-action-btn" onclick="copyShareScore()" style="width: 100%; padding: 12px; margin-bottom: 5px;">
            <span style="font-size: 14px;">SHARE RESULT</span>
            <div class="visual-result-grid" style="transform: scale(0.85);">${htmlGrid}</div>
          </button>
          ${vaultPrompt}
        </div>
      `;
    } else {
      DOM.posterCard.className = "poster-card mystery-locked";
      DOM.posterCard.innerHTML = `<div class="poster-graphic"><span class="poster-icon">🔒</span></div><div class="poster-info"><div class="poster-status-label">CLASSIFIED PRODUCTION</div><div class="poster-subtext">Official poster reveals upon case completion</div></div>`;
    }
  }
}

// Timer & Share Utilities
setInterval(() => {
  const timerElem = document.getElementById("countdown-display");
  if (!timerElem) return;
  const now = new Date(), midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;
  timerElem.innerText = `${String(Math.floor(diff / 3600000)).padStart(2, "0")}:${String(Math.floor((diff / 60000) % 60)).padStart(2, "0")}:${String(Math.floor((diff / 1000) % 60)).padStart(2, "0")}`;
}, 1000);

window.copyShareScore = function() {
  const state = game.getCurrentTabState();
  const textGrid = Array.from({ length: 5 }).map((_, i) => (state.isSuccess && i === state.clueIndex) ? "🟩" : (i <= state.clueIndex ? "🟥" : "⬛")).join("");
  
  let streakText = "";
  if (!isArchiveMode) {
    const stats = getStreakData();
    if (stats && stats.currentStreak > 0) {
      streakText = `\n🔥 Active Duty: ${stats.currentStreak} Day${stats.currentStreak !== 1 ? 's' : ''}`;
    }
  }

  navigator.clipboard.writeText(`CINEMIND (${game.activeTab.toUpperCase()}) #${activeDayIndex}\n${state.isSuccess ? state.clueIndex + 1 : 'X'}/5 Clues${streakText}\n${textGrid}\nhttps://playcinemind.com`).then(() => {
    const btn = document.getElementById("share-btn");
    const originalHTML = btn.innerHTML; 
    
    btn.innerText = "COPIED TO CLIPBOARD! ✓";
    btn.classList.add("copied");
    
    setTimeout(() => { 
      btn.innerHTML = originalHTML; 
      btn.classList.remove("copied"); 
    }, 2500);
  });
};

updateUI();
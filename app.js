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
const fuseOptions = { threshold: 0.3, includeScore: true, ignoreLocation: true };
const searchIndex = {
  film: new Fuse(allTitles.film, fuseOptions),
  tv: new Fuse(allTitles.tv, fuseOptions)
};

// =========================================================
// 2. STATE MANAGEMENT (DECOUPLED DATA MODEL)
// =========================================================
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
    } else {
      if (tabState.clueIndex < puzzle.clues.length - 1) {
        tabState.clueIndex++;
        tabState.message = `"${guess}" is incorrect. Clue ${tabState.clueIndex + 1} revealed.`;
      } else {
        tabState.isSuccess = false;
        tabState.gameOver = true;
        tabState.message = "";
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
    const firstAvailable = matches.find(title => !tabState.guesses.some(g => g.toLowerCase() === title.toLowerCase()));
    
    if (firstAvailable) {
      executeSelection(firstAvailable);
    } else {
      DOM.statusMsg.innerText = `Please select an available title from the list.`;
      DOM.statusMsg.className = "error";
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

  matches.forEach(title => {
    const isGuessed = tabState.guesses.some(g => g.toLowerCase() === title.toLowerCase());
    const item = document.createElement("div");
    item.className = `suggestion-item ${isGuessed ? "disabled" : ""}`;
    item.innerText = title;
    
    if (!isGuessed) item.addEventListener("click", () => executeSelection(title));
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

  if (state.gameOver) {
    DOM.statusMsg.className = "hidden";
    DOM.statusMsg.innerText = "";
  } else {
    if (!state.message && state.guesses.length > 0) {
      const lastGuess = state.guesses[state.guesses.length - 1];
      state.message = lastGuess === "SKIPPED" 
        ? `Clue skipped. Clue ${state.clueIndex + 1} revealed.` 
        : `"${lastGuess}" was incorrect. Clue ${state.clueIndex + 1} unlocked.`;
    }
    DOM.statusMsg.innerText = state.message;
    DOM.statusMsg.className = state.message ? "error" : "";
  }

  // End Game / Classified Poster Card
if (DOM.posterCard) {
    if (state.gameOver) {
      // 1. Text grid for the clipboard (Emojis hidden from UI)
      const textGrid = Array.from({ length: 5 }).map((_, i) => (state.isSuccess && i === state.clueIndex) ? "🟩" : (i <= state.clueIndex ? "🟥" : "⬛")).join("");
      
      // 2. Visual HTML grid for the button (Using CSS wax seals)
      const htmlGrid = Array.from({ length: 5 }).map((_, i) => {
        let pipClass = "empty";
        if (state.isSuccess && i === state.clueIndex) pipClass = "correct";
        else if (i <= state.clueIndex) pipClass = "wrong";
        return `<span class="seal-pip ${pipClass}"></span>`;
      }).join("");

      DOM.posterCard.className = `dossier-card ${state.isSuccess ? 'victory' : 'defeat'}`;
      
      const vaultPrompt = !isArchiveMode 
        ? `<a href="vault.html" class="vault-promo-link">ACCESS THE VAULT TO CRACK PAST CASES &raquo;</a>`
        : `<a href="vault.html" class="vault-promo-link">&raquo; RETURN TO THE VAULT</a>`;

      // Notice the duplicated <div class="dossier-grid"> is completely gone
      DOM.posterCard.innerHTML = `
        <div class="dossier-header ${state.isSuccess ? 'victory-text' : 'defeat-text'}">
          <span>${state.isSuccess ? '✓ CASE SOLVED' : '✕ CASE UNRESOLVED'}</span>
          <span>${state.isSuccess ? `CRACKED IN ${state.clueIndex + 1}/5` : 'OUT OF CLUES'}</span>
        </div>
        <div class="dossier-body">
          <img class="dossier-poster" src="${puzzle.poster}" alt="${puzzle.title}" />
          <div class="dossier-details">
            <div class="dossier-title">${puzzle.title}</div>
            <div class="dossier-meta">${game.activeTab.toUpperCase()} PRODUCTION ARCHIVE</div>
          </div>
        </div>
        <div class="dossier-footer">
          <div class="countdown-box">${isArchiveMode ? `VAULT ARCHIVE · CASE #${activeDayIndex}` : `NEXT CASE IN <span id="countdown-display" class="countdown-timer"></span>`}</div>
          <button id="share-btn" class="share-action-btn" onclick="copyShareScore()">
            <span>SHARE RESULT</span>
            <div class="visual-result-grid">${htmlGrid}</div>
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
  
  navigator.clipboard.writeText(`CINEMIND (${game.activeTab.toUpperCase()}) #${activeDayIndex}\n${state.isSuccess ? state.clueIndex + 1 : 'X'}/5 Clues\n${textGrid}\nhttps://cinemind.game`).then(() => {
    const btn = document.getElementById("share-btn");
    const originalHTML = btn.innerHTML; // Saves the visual seals layout
    
    btn.innerText = "COPIED TO CLIPBOARD! ✓";
    btn.classList.add("copied");
    
    setTimeout(() => { 
      btn.innerHTML = originalHTML; // Restores the visual seals
      btn.classList.remove("copied"); 
    }, 2500);
  });
};

updateUI();
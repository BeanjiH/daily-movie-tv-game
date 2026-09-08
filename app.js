// Catalog pulled directly from films.js and tv.js
const catalog = {
  film: filmCatalog,
  tv:   tvCatalog
};

// Search bank pulled directly from titles-film.js and titles-tv.js
const allTitles = {
  film: movieTitles,
  tv:   tvTitles
};

// Calculate Day Index & Handle Vault Archive Parameters (?day=X&cat=film/tv)
const ANCHOR_DATE = new Date("2026-01-01T00:00:00");
const today = new Date();
const diffTime = today - ANCHOR_DATE;
const systemDayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const urlParams = new URLSearchParams(window.location.search);
const queryDay = urlParams.get("day");
const queryCat = urlParams.get("cat");

const isArchiveMode = queryDay !== null;
const activeDayIndex = isArchiveMode ? parseInt(queryDay, 10) : systemDayIndex;

let activeTab = (queryCat === "film" || queryCat === "tv") ? queryCat : "film";

const puzzles = {
  film: catalog.film[activeDayIndex % catalog.film.length],
  tv:   catalog.tv[activeDayIndex % catalog.tv.length]
};

// --- Storage & State Persistence per Day ---
const STORAGE_KEY = `cinemind_state_day_${activeDayIndex}`;

function loadSavedState() {
  const defaultState = {
    film: { clueIndex: 0, gameOver: false, message: "", isSuccess: false, guesses: [] },
    tv:   { clueIndex: 0, gameOver: false, message: "", isSuccess: false, guesses: [] }
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return {
      film: { ...defaultState.film, ...(parsed.film || {}) },
      tv:   { ...defaultState.tv, ...(parsed.tv || {}) }
    };
  } catch (e) {
    console.error("Failed to load local storage state:", e);
    return defaultState;
  }
}

function persistState() {
  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const existing = existingRaw ? JSON.parse(existingRaw) : {};
    
    const toSave = {
      ...existing,
      [activeTab]: gameState[activeTab]
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    console.log(`[CINEMIND] Wrote to storage key "${STORAGE_KEY}":`, toSave);
  } catch (e) {
    console.error("[CINEMIND] LocalStorage write failed:", e);
  }
}

const gameState = loadSavedState();

// DOM elements
const cluesList = document.getElementById("clues-list");
const guessInput = document.getElementById("guess-input");
const statusMsg = document.getElementById("status-message");
const tabFilm = document.getElementById("tab-film");
const tabTv = document.getElementById("tab-tv");
const dateHeader = document.getElementById("daily-date");
const tracker = document.getElementById("progress-tracker");
const helpBtn = document.getElementById("help-btn");
const themeBtn = document.getElementById("theme-btn");
const suggestionsList = document.getElementById("suggestions-list");
const posterCard = document.getElementById("poster-card");
const guessContainer = document.querySelector(".guess-container");

// Display formatted date or Vault Archive header
if (isArchiveMode) {
  dateHeader.innerHTML = `ARCHIVE CASE #${activeDayIndex} · <a href="vault.html" style="color: var(--accent); text-decoration: none; font-weight: 700;">RETURN TO VAULT</a>`;
} else {
  dateHeader.innerText = `THE DAILY DEDUCTION · ${today.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`;
}

// Initial category tab styles
tabFilm.classList.toggle("active", activeTab === "film");
tabTv.classList.toggle("active", activeTab === "tv");

// Theme Setup (defaults to dark mode with SVG icon rendering)
const savedTheme = localStorage.getItem("cinemind-theme") || "dark";
applyTheme(savedTheme);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeBtn) {
    if (theme === "dark") {
      themeBtn.innerHTML = `
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
    } else {
      themeBtn.innerHTML = `
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;
    }
  }
  localStorage.setItem("cinemind-theme", theme);
}

// Tab Switching Listeners
tabFilm.addEventListener("click", () => switchTab("film"));
tabTv.addEventListener("click", () => switchTab("tv"));

// Search Input Listeners
guessInput.addEventListener("input", handleInputSearch);
guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    selectFirstAvailableSuggestion();
  }
});

// Close suggestions dropdown if clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".input-wrapper")) {
    hideSuggestions();
  }
});

if (helpBtn) {
  helpBtn.addEventListener("click", () => {
    alert("How to Play:\n\n• Guess the film or TV show in as few clues as possible.\n• Search and select a title from the suggestions.\n• Each incorrect guess reveals another clue (up to 5 clues).\n• New deduction puzzles drop every day at midnight!");
  });
}

// Dynamic Countdown Helper
function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;

  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
  const mins  = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const secs  = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  return `${hours}:${mins}:${secs}`;
}

setInterval(() => {
  const timerElem = document.getElementById("countdown-display");
  if (timerElem) {
    timerElem.innerText = getTimeUntilMidnight();
  }
}, 1000);

// Score Grid String Generator
function getShareGrid(state) {
  let grid = "";
  for (let i = 0; i < 5; i++) {
    if (state.isSuccess && i === state.clueIndex) {
      grid += "🟩 ";
    } else if (i <= state.clueIndex) {
      grid += "🟥 ";
    } else {
      grid += "⬛ ";
    }
  }
  return grid.trim();
}

window.copyShareScore = function() {
  const state = gameState[activeTab];
  const grid = getShareGrid(state);
  const resultText = state.isSuccess ? `${state.clueIndex + 1}/5` : "X/5";

  const sharePayload = `CINEMIND (${activeTab.toUpperCase()}) #${activeDayIndex}\n${resultText} Clues\n${grid}\nhttps://cinemind.game`;

  navigator.clipboard.writeText(sharePayload).then(() => {
    const btn = document.getElementById("share-btn");
    if (btn) {
      btn.innerText = "COPIED TO CLIPBOARD! ✓";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = `<span>SHARE RESULT</span> <span>${grid}</span>`;
        btn.classList.remove("copied");
      }, 2500);
    }
  });
};

// Initial load
updateView();

function switchTab(newTab) {
  if (activeTab === newTab) return;
  activeTab = newTab;

  tabFilm.classList.toggle("active", activeTab === "film");
  tabTv.classList.toggle("active", activeTab === "tv");

  hideSuggestions();
  updateView();
}

// Convert structured clue objects into screenplay HTML
function formatClueHTML(clue) {
  if (clue.format === "scene") {
    return `
      <div class="script-slugline">${clue.slugline}</div>
      <div class="script-action">${clue.action}</div>
    `;
  }

  if (clue.format === "dialogue" || clue.format === "signature") {
    return `
      <div class="script-dialogue-block">
        <div class="script-character">${clue.character}</div>
        <div class="script-line">"${clue.line}"</div>
      </div>
    `;
  }

  if (clue.format === "prop") {
    return `
      <div class="script-slugline">INSERT:</div>
      <div class="script-action">${clue.item}</div>
    `;
  }

  if (clue.format === "metadata") {
    return `
      <div class="script-metadata">
        <div><strong>RELEASE:</strong> ${clue.year}</div>
        <div><strong>GENRE:</strong> ${clue.genre}</div>
        <div><strong>CREDITS:</strong> ${clue.details}</div>
      </div>
    `;
  }

  return `<div>${clue}</div>`;
}

function updateView() {
  const currentPuzzle = puzzles[activeTab];
  const state = gameState[activeTab];

  // Render clues in reverse order: latest clue at top
  cluesList.innerHTML = "";
  for (let i = state.clueIndex; i >= 0; i--) {
    const clueObj = currentPuzzle.clues[i];
    const box = document.createElement("div");
    box.className = "clue-box";
    box.innerHTML = `
      <div class="clue-header-line">
        <span class="clue-tag">Clue ${i + 1} of 5</span>
        <span class="script-page-no">SCENE ${i + 1}</span>
      </div>
      <div class="clue-body">
        ${formatClueHTML(clueObj)}
      </div>
    `;
    cluesList.appendChild(box);
  }

  // Update 5 progress pips with state-aware colors
  tracker.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const pip = document.createElement("div");
    pip.className = "pip";

    if (state.isSuccess && i === state.clueIndex) {
      pip.classList.add("correct");
    } else if (i < state.clueIndex) {
      pip.classList.add("failed");
    } else if (i === state.clueIndex && !state.gameOver) {
      pip.classList.add("current");
    } else if (state.gameOver && !state.isSuccess && i <= state.clueIndex) {
      pip.classList.add("failed");
    }

    tracker.appendChild(pip);
  }

  // Hide or Show Search Bar based on game completion
  if (guessContainer) {
    guessContainer.classList.toggle("hidden", state.gameOver);
    if (!state.gameOver) {
      guessInput.placeholder = activeTab === "film" ? "Search & select a movie..." : "Search & select a TV show...";
      guessInput.value = "";
      guessInput.disabled = false;
    }
  }

  // Message Pill Handling
  if (state.gameOver) {
    statusMsg.className = "hidden";
    statusMsg.innerText = "";
  } else {
    // If returning to a partially played game, summarize previous wrong guesses
    if (!state.message && state.guesses.length > 0) {
      const lastGuess = state.guesses[state.guesses.length - 1];
      state.message = `"${lastGuess}" was incorrect. Clue ${state.clueIndex + 1} unlocked.`;
    }
    statusMsg.innerText = state.message;
    statusMsg.className = state.message ? "error" : "";
  }

  // Update or flip the Poster / Endgame Dossier Card
  if (posterCard) {
    if (state.gameOver) {
      const grid = getShareGrid(state);
      const isWin = state.isSuccess;

      posterCard.className = `dossier-card ${isWin ? 'victory' : 'defeat'}`;
      posterCard.innerHTML = `
        <div class="dossier-header ${isWin ? 'victory-text' : 'defeat-text'}">
          <span>${isWin ? '✓ CASE SOLVED' : '✕ CASE UNRESOLVED'}</span>
          <span>${isWin ? `CRACKED IN ${state.clueIndex + 1}/5` : 'OUT OF CLUES'}</span>
        </div>

        <div class="dossier-body">
          <img class="dossier-poster" src="${currentPuzzle.poster || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80'}" alt="${currentPuzzle.title}" />
          <div class="dossier-details">
            <div class="dossier-title">${currentPuzzle.title}</div>
            <div class="dossier-meta">${activeTab.toUpperCase()} PRODUCTION ARCHIVE</div>
            <div class="dossier-grid">${grid}</div>
          </div>
        </div>

        <div class="dossier-footer">
          <div class="countdown-box">
            ${isArchiveMode ? `VAULT ARCHIVE · CASE #${activeDayIndex}` : `NEXT CASE IN <span id="countdown-display" class="countdown-timer">${getTimeUntilMidnight()}</span>`}
          </div>
          <button id="share-btn" class="share-action-btn" onclick="copyShareScore()">
            <span>SHARE RESULT</span>
            <span>${grid}</span>
          </button>
        </div>
      `;
    } else {
      posterCard.className = "poster-card mystery-locked";
      posterCard.innerHTML = `
        <div class="poster-graphic"><span class="poster-icon">🎬</span></div>
        <div class="poster-info">
          <div class="poster-status-label">CLASSIFIED PRODUCTION</div>
          <div class="poster-subtext">Official poster reveals upon case completion</div>
        </div>
      `;
    }
  }
}

function handleInputSearch() {
  const query = guessInput.value.trim().toLowerCase();
  const state = gameState[activeTab];

  if (!query || state.gameOver) {
    hideSuggestions();
    return;
  }

  const matches = allTitles[activeTab].filter(title => 
    title.toLowerCase().includes(query)
  );

  renderSuggestions(matches);
}

function renderSuggestions(matches) {
  suggestionsList.innerHTML = "";
  const state = gameState[activeTab];

  if (matches.length === 0) {
    hideSuggestions();
    return;
  }

  matches.slice(0, 6).forEach(title => {
    const isAlreadyGuessed = state.guesses.some(
      g => g.toLowerCase() === title.toLowerCase()
    );

    const item = document.createElement("div");
    item.className = "suggestion-item" + (isAlreadyGuessed ? " disabled" : "");
    item.innerText = title;

    if (!isAlreadyGuessed) {
      item.addEventListener("click", () => {
        executeSelection(title);
      });
    }

    suggestionsList.appendChild(item);
  });

  suggestionsList.classList.remove("hidden");
}

function selectFirstAvailableSuggestion() {
  const state = gameState[activeTab];
  const query = guessInput.value.trim().toLowerCase();
  if (!query || state.gameOver) return;

  const availableMatch = allTitles[activeTab].find(title =>
    title.toLowerCase().includes(query) &&
    !state.guesses.some(g => g.toLowerCase() === title.toLowerCase())
  );

  if (availableMatch) {
    executeSelection(availableMatch);
  } else {
    statusMsg.innerText = `Please select an available title from the list.`;
    statusMsg.className = "error";
  }
}

function executeSelection(title) {
  guessInput.value = "";
  hideSuggestions();
  handleGuess(title);
}

function hideSuggestions() {
  suggestionsList.classList.add("hidden");
  suggestionsList.innerHTML = "";
}

function handleGuess(userGuess) {
  const state = gameState[activeTab];
  const puzzle = puzzles[activeTab];

  if (state.gameOver) return;

  state.guesses.push(userGuess);

  if (userGuess.toLowerCase() === puzzle.title.toLowerCase()) {
    state.isSuccess = true;
    state.gameOver = true;
    state.message = "";
  } else {
    if (state.clueIndex < puzzle.clues.length - 1) {
      state.clueIndex++;
      state.message = `"${userGuess}" is incorrect! Clue ${state.clueIndex + 1} revealed.`;
      state.isSuccess = false;
    } else {
      state.isSuccess = false;
      state.gameOver = true;
      state.message = "";
    }
  }

  // Save to the exact day currently being played
  persistState();

  updateView();
}
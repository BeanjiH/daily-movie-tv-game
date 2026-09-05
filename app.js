// Catalog pulled directly from films.js and tv.js
const catalog = {
  film: filmCatalog,
  tv:   tvCatalog
};

// Daily Index Calculator: Days since anchor date % catalog length
const ANCHOR_DATE = new Date("2026-01-01T00:00:00");
const today = new Date();
const diffTime = today - ANCHOR_DATE;
const dayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// Pick today's puzzle using modulo so it loops through catalog
const puzzles = {
  film: catalog.film[dayIndex % catalog.film.length],
  tv:   catalog.tv[dayIndex % catalog.tv.length]
};

// State tracker
const gameState = {
  film: { clueIndex: 0, gameOver: false, message: "", isSuccess: false },
  tv:   { clueIndex: 0, gameOver: false, message: "", isSuccess: false }
};

let activeTab = "film";

// DOM elements
const cluesList = document.getElementById("clues-list");
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const statusMsg = document.getElementById("status-message");
const tabFilm = document.getElementById("tab-film");
const tabTv = document.getElementById("tab-tv");
const dateHeader = document.getElementById("daily-date");
const tracker = document.getElementById("progress-tracker");
const helpBtn = document.getElementById("help-btn");

// Display formatted date
dateHeader.innerText = `THE DAILY DEDUCTION · ${today.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`;

// Tab Switching
tabFilm.addEventListener("click", () => switchTab("film"));
tabTv.addEventListener("click", () => switchTab("tv"));

guessBtn.addEventListener("click", handleGuess);
guessInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleGuess();
});

helpBtn.addEventListener("click", () => {
  alert("How to Play:\n\n• Guess the film or TV show in as few clues as possible.\n• Each incorrect guess reveals another clue (up to 5 clues).\n• New deduction puzzles drop every day at midnight!");
});

// Initial render
updateView();

function switchTab(newTab) {
  if (activeTab === newTab) return;
  activeTab = newTab;

  tabFilm.classList.toggle("active", activeTab === "film");
  tabTv.classList.toggle("active", activeTab === "tv");

  updateView();
}

function updateView() {
  const currentPuzzle = puzzles[activeTab];
  const state = gameState[activeTab];

  // Re-render revealed clues
  cluesList.innerHTML = "";
  for (let i = 0; i <= state.clueIndex; i++) {
    const clueText = currentPuzzle.clues[i];
    const box = document.createElement("div");
    box.className = "clue-box";
    box.innerHTML = `<div class="clue-label">Clue ${i + 1} of 5</div><div>${clueText}</div>`;
    cluesList.appendChild(box);
  }

  // Update 5 progress pips
  tracker.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const pip = document.createElement("div");
    pip.className = "pip" + (i <= state.clueIndex ? " active" : "");
    tracker.appendChild(pip);
  }

  // Update input and status
  guessInput.placeholder = activeTab === "film" ? "Enter movie title..." : "Enter TV show title...";
  guessInput.value = "";
  guessInput.disabled = state.gameOver;
  guessBtn.disabled = state.gameOver;

  statusMsg.innerText = state.message;
  statusMsg.style.color = state.isSuccess ? "#4ade80" : "#f87171";
}

function handleGuess() {
  const state = gameState[activeTab];
  const puzzle = puzzles[activeTab];
  if (state.gameOver) return;

  const userGuess = guessInput.value.trim();
  if (!userGuess) return;

  if (userGuess.toLowerCase() === puzzle.title.toLowerCase()) {
    state.message = `🟩 Brilliant! You got it in ${state.clueIndex + 1} clue(s)!`;
    state.isSuccess = true;
    state.gameOver = true;
  } else {
    if (state.clueIndex < puzzle.clues.length - 1) {
      state.clueIndex++;
      state.message = `Incorrect! Clue ${state.clueIndex + 1} revealed.`;
      state.isSuccess = false;
    } else {
      state.message = `Game Over! The answer was ${puzzle.title}.`;
      state.isSuccess = false;
      state.gameOver = true;
    }
  }

  updateView();
}
// Test puzzle data for both tracks
const puzzles = {
  film: {
    title: "Fargo",
    clues: [
      { type: "Atmosphere", text: "EXT. SNOW-COVERED HIGHWAY - NIGHT: A solitary car tows a brand new tan Ciera through a blizzard." },
      { type: "Dialogue", text: "'I'm not gonna debate you, Jerry. I'm not gonna sit here and debate.'" },
      { type: "Artifact", text: "A stack of cash buried next to a red plastic ice scraper in deep snow." },
      { type: "Metadata", text: "1996 · Crime / Dark Comedy · Directed by the Coen Brothers" },
      { type: "The Signature Beat", text: "'There's more to life than a little money, you know. Don'tcha know that?'" }
    ]
  },
  tv: {
    title: "The Sopranos",
    clues: [
      { type: "Atmosphere", text: "INT. PSYCHIATRIST'S OFFICE - DAY: A man in a polo shirt describes a panic attack triggered by wild ducks leaving his pool." },
      { type: "Dialogue", text: "'What happened to Gary Cooper? The strong, silent type. That was an American.'" },
      { type: "Artifact", text: "The back booth of Holsten's diner, a coin jukebox, and a plate of onion rings." },
      { type: "Metadata", text: "1999–2007 · HBO · Crime Drama · 6 Seasons" },
      { type: "The Signature Beat", text: "The screen cuts abruptly to total black silence mid-scene while 'Don't Stop Believin' plays." }
    ]
  }
};

// State tracker for both tracks
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

// Switch tab listeners
tabFilm.addEventListener("click", () => switchTab("film"));
tabTv.addEventListener("click", () => switchTab("tv"));

guessBtn.addEventListener("click", handleGuess);
guessInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleGuess();
});

// Render the default view on load
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
    const clue = currentPuzzle.clues[i];
    const box = document.createElement("div");
    box.className = "clue-box";
    box.innerHTML = `<div class="clue-label">Clue ${i + 1}: ${clue.type}</div><div>${clue.text}</div>`;
    cluesList.appendChild(box);
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
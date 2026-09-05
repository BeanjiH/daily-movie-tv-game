// A sample puzzle for testing
const puzzle = {
  title: "Fargo",
  clues: [
    { type: "Atmosphere", text: "EXT. SNOW-COVERED HIGHWAY - NIGHT: A solitary car tows a brand new tan Ciera through a blizzard." },
    { type: "Dialogue", text: "'I'm not gonna debate you, Jerry. I'm not gonna sit here and debate.'" },
    { type: "Artifact", text: "A stack of cash buried next to a red plastic ice scraper in deep snow." },
    { type: "Metadata", text: "1996 · Crime / Dark Comedy · Directed by the Coen Brothers" },
    { type: "The Signature Beat", text: "'There's more to life than a little money, you know. Don'tcha know that?'" }
  ]
};

let currentClueIndex = 0;
let gameOver = false;

const cluesList = document.getElementById("clues-list");
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const statusMsg = document.getElementById("status-message");

// Display the first clue immediately
renderClue(currentClueIndex);

guessBtn.addEventListener("click", handleGuess);
guessInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleGuess();
});

function renderClue(index) {
  const clue = puzzle.clues[index];
  const box = document.createElement("div");
  box.className = "clue-box";
  box.innerHTML = `<div class="clue-label">Clue ${index + 1}: ${clue.type}</div><div>${clue.text}</div>`;
  cluesList.appendChild(box);
}

function handleGuess() {
  if (gameOver) return;

  const userGuess = guessInput.value.trim();
  if (!userGuess) return;

  if (userGuess.toLowerCase() === puzzle.title.toLowerCase()) {
    statusMsg.innerText = `🟩 Brilliant! You got it in ${currentClueIndex + 1} clue(s)!`;
    statusMsg.style.color = "#4ade80";
    endGame();
    return;
  }

  // Incorrect guess
  currentClueIndex++;
  guessInput.value = "";

  if (currentClueIndex < puzzle.clues.length) {
    renderClue(currentClueIndex);
    statusMsg.innerText = `Incorrect! Clue ${currentClueIndex + 1} revealed.`;
    statusMsg.style.color = "#f87171";
  } else {
    statusMsg.innerText = `Game Over! The film was ${puzzle.title}.`;
    statusMsg.style.color = "#f87171";
    endGame();
  }
}

function endGame() {
  gameOver = true;
  guessInput.disabled = true;
  guessBtn.disabled = true;
}
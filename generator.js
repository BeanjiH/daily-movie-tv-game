const fs = require('fs');

// 1. Read the original file from your data folder
const rawData = fs.readFileSync('./data/tv.js', 'utf-8');

// 2. Extract the array from the JS file
// This strips the "const tvCatalog = " wrapper so Node can evaluate just the raw data
const arrayString = rawData.replace('const tvCatalog =', '').trim().replace(/;$/, '');
const tvArray = eval('(' + arrayString + ')');

// 3. The Fisher-Yates Shuffle Algorithm
function shuffle(array) {
  const shuffled = [...array]; // Create a copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
}

const shuffledCatalog = shuffle(tvArray);

// 4. Write it to a new file and strip the JSON quotes off the keys
const outputContent = `const tvCatalog = ${JSON.stringify(shuffledCatalog, null, 2).replace(/"([a-zA-Z0-9_]+)":/g, '$1:')};\n`;

fs.writeFileSync('./data/tv-shuffled.js', outputContent, 'utf-8');

console.log("✓ TV Shuffle complete! Check data/tv-shuffled.js to verify the new order.");
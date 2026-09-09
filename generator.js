import fs from "fs";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

if (!TMDB_API_KEY) {
  console.error("Missing TMDB_API_KEY in .env file.");
  process.exit(1);
}

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const TARGET_COUNT = 2000; // Target 2000 films

// TMDB returns 20 movies per page; calculating pages needed (plus a small buffer for skipped items)
const PAGES_TO_FETCH = Math.ceil(TARGET_COUNT / 20) + 15;

async function fetchMovieDetails(movieId) {
  try {
    const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`;
    const res = await fetch(detailsUrl);
    if (!res.ok) return null;
    const details = await res.json();

    const releaseYear = details.release_date ? details.release_date.split("-")[0] : "N/A";

    // Only accept entries that have both a poster, a title, and a valid release year
    if (!details.poster_path || !details.title || releaseYear === "N/A") return null;

    return {
      title: details.title,
      year: releaseYear,
      poster: `${IMAGE_BASE}${details.poster_path}`
    };
  } catch (err) {
    return null;
  }
}

async function run() {
  console.log(`=== HARVESTING ~${TARGET_COUNT} MOVIES FOR TITLES-FILM.JS ===\n`);
  const catalog = [];
  const seenTitles = new Set();

  for (let page = 1; page <= PAGES_TO_FETCH; page++) {
    console.log(`--> Fetching TMDB Popular/Acclaimed Movies Page ${page}/${PAGES_TO_FETCH}...`);

    // Sort movies by vote_count to capture culturally recognized films
    const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&sort_by=vote_count.desc&vote_count.gte=100&include_adult=false&page=${page}`;

    try {
      const pageRes = await fetch(discoverUrl);
      const pageData = await pageRes.json();

      if (!pageData.results || pageData.results.length === 0) break;

      for (const movie of pageData.results) {
        if (catalog.length >= TARGET_COUNT) break;
        if (seenTitles.has(movie.title)) continue;

        const movieData = await fetchMovieDetails(movie.id);
        if (movieData) {
          seenTitles.add(movieData.title);
          catalog.push(movieData);
          console.log(`  [${catalog.length}/${TARGET_COUNT}] ✓ ${movieData.title} (${movieData.year})`);
        }

        // Small 50ms pause to respect API rate limits
        await new Promise(r => setTimeout(r, 50));
      }
    } catch (err) {
      console.error(`Error on page ${page}:`, err.message);
    }

    if (catalog.length >= TARGET_COUNT) break;
  }

  // Format as a JS file export for your film catalog
  const fileContent = `const movieTitles = ${JSON.stringify(catalog, null, 2)};\n`;
  fs.writeFileSync("new-titles-film.js", fileContent);
  
  console.log(`\nSUCCESS: Generated titles-film.js with ${catalog.length} entries!`);
}

run();
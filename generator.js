import fs from "fs";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

if (!TMDB_API_KEY) {
  console.error("Missing TMDB_API_KEY in .env file.");
  process.exit(1);
}

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const TARGET_COUNT = 200; // Will harvest 200 TV shows

// TMDB returns 20 shows per page; 10 pages = 200 shows
const PAGES_TO_FETCH = Math.ceil(TARGET_COUNT / 20);

async function fetchDetails(tvId) {
  try {
    const detailsUrl = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${TMDB_API_KEY}&append_to_response=credits`;
    const res = await fetch(detailsUrl);
    if (!res.ok) return null;
    const details = await res.json();

    // TV shows use created_by or Executive Producer crew credits
    const creator =
      details.created_by?.length > 0
        ? details.created_by.map(c => c.name).join(", ")
        : details.credits?.crew?.find(c => c.job === "Executive Producer")?.name || "Unknown Creator";

    const startYear = details.first_air_date ? details.first_air_date.split("-")[0] : "N/A";
    const endYear = details.status === "Ended" && details.last_air_date
      ? details.last_air_date.split("-")[0]
      : "PRESENT";
    const years = startYear === endYear ? startYear : `${startYear}–${endYear}`;

    const seasons = details.number_of_seasons || 1;
    const network = details.networks?.[0]?.name || "Television";

    const genres = details.genres?.length
      ? details.genres.map(g => g.name).join(" / ")
      : "Drama";

    // Only accept entries that have both a poster and a backdrop
    if (!details.poster_path || !details.backdrop_path) return null;

    return {
      title: details.name,
      year: years,
      genre: genres,
      creator,
      network,
      seasons,
      details: `${network} · ${seasons} Season${seasons > 1 ? "s" : ""} · Created by ${creator}`,
      poster: `${IMAGE_BASE}${details.poster_path}`,
      backdrop: `${IMAGE_BASE}${details.backdrop_path}`
    };
  } catch (err) {
    return null;
  }
}

async function run() {
  console.log(`=== HARVESTING ~${TARGET_COUNT} RECOGNIZED TV SHOWS FROM TMDB ===\n`);
  const catalog = [];
  const seenTitles = new Set();

  for (let page = 1; page <= PAGES_TO_FETCH; page++) {
    console.log(`--> Fetching TMDB Popular/Acclaimed TV Page ${page}/${PAGES_TO_FETCH}...`);

    // Sort by vote_count to capture universal culturally recognized shows
    const discoverUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&sort_by=vote_count.desc&vote_count.gte=1000&include_null_first_air_dates=false&page=${page}`;

    try {
      const pageRes = await fetch(discoverUrl);
      const pageData = await pageRes.json();

      if (!pageData.results || pageData.results.length === 0) break;

      for (const show of pageData.results) {
        if (catalog.length >= TARGET_COUNT) break;
        if (seenTitles.has(show.name)) continue;

        const showData = await fetchDetails(show.id);
        if (showData) {
          seenTitles.add(showData.title);
          catalog.push(showData);
          console.log(`  [${catalog.length}/${TARGET_COUNT}] ✓ ${showData.title} (${showData.year})`);
        }

        // Small 50ms pause to respect API rate limits
        await new Promise(r => setTimeout(r, 50));
      }
    } catch (err) {
      console.error(`Error on page ${page}:`, err.message);
    }

    if (catalog.length >= TARGET_COUNT) break;
  }

  fs.writeFileSync("tmdb-tv-catalog.json", JSON.stringify(catalog, null, 2));
  console.log(`\nSUCCESS: Harvested ${catalog.length} complete TV profiles into tmdb-tv-catalog.json`);
}

run();
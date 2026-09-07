const ANCHOR_DATE = new Date("2026-01-01T00:00:00");
const today = new Date();
const diffTime = today - ANCHOR_DATE;
const currentDayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const catalog = {
  film: filmCatalog,
  tv:   tvCatalog
};

let activeTab = "film";

// DOM Elements
const sheetContainer = document.getElementById("contact-sheet");
const archiveStat = document.getElementById("archive-stat");
const tabFilmBtn = document.getElementById("tab-film-btn");
const tabTvBtn = document.getElementById("tab-tv-btn");

// Global Theme
const savedTheme = localStorage.getItem("cinemind-theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

tabFilmBtn.addEventListener("click", () => switchVaultTab("film"));
tabTvBtn.addEventListener("click", () => switchVaultTab("tv"));

function switchVaultTab(tab) {
  if (activeTab === tab) return;
  activeTab = tab;

  tabFilmBtn.classList.toggle("active", activeTab === "film");
  tabTvBtn.classList.toggle("active", activeTab === "tv");

  renderContactSheet();
}

function getStoredDayState(day) {
  try {
    const raw = localStorage.getItem(`cinemind_state_day_${day}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed[activeTab] || null;
  } catch (e) {
    return null;
  }
}

function renderContactSheet() {
  sheetContainer.innerHTML = "";
  sheetContainer.className = `contact-sheet theme-${activeTab}`;
  
  const catList = catalog[activeTab];
  let playedCount = 0;
  const TOTAL_DAYS = Math.min(50, currentDayIndex + 1);

  for (let i = 0; i < TOTAL_DAYS; i++) {
    const day = currentDayIndex - i;
    const puzzle = catList[day % catList.length];
    const state = getStoredDayState(day);

    const isCompleted = Boolean(state && state.gameOver);
    const isSuccess = Boolean(state && state.isSuccess);
    const scoreText = isSuccess ? `${state.clueIndex + 1}/5` : "X/5";

    if (isCompleted) playedCount++;

    const dateObj = new Date(ANCHOR_DATE);
    dateObj.setDate(dateObj.getDate() + day);
    const dateLabel = (day === currentDayIndex) ? "Today" : 
                      (day === currentDayIndex - 1) ? "Yesterday" : 
                      dateObj.toLocaleDateString(undefined, { month: "short", day: "numeric" });

    const link = `index.html?day=${day}&cat=${activeTab}`;
    const frame = document.createElement("a");
    frame.href = link;
    frame.className = `film-strip-unit ${activeTab}-mode`;

    // Visual labels change based on Film (35mm stock) vs TV (Broadcast Master tape)
    const headerLeft = activeTab === "film" ? "EASTMAN · 5219" : "U-MATIC · REC";
    const headerLeftSealed = activeTab === "film" ? "SAFETY FILM" : "BROADCAST TAPE";
    const headerRight = activeTab === "film" ? `EXP · ${day}` : `TC · 00:${String(day).padStart(2, '0')}:00`;
    const defaultPlaceholder = activeTab === "film" ? "🎬" : "📺";

    if (isCompleted) {
      frame.innerHTML = `
        <div class="sprocket-rail ${activeTab === 'tv' ? 'tv-rail' : ''}">
          <div class="sprocket-hole"></div>
          <div class="sprocket-hole"></div>
          <div class="sprocket-hole"></div>
        </div>
        <div class="frame-center">
          <img class="frame-poster-thumb" src="${puzzle.poster || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=250&q=80'}" alt="${puzzle.title}" />
          <div class="frame-info">
            <div class="edge-code ${activeTab === 'tv' ? 'tv-code' : ''}">
              <span>${headerLeft}</span>
              <span>${headerRight}</span>
            </div>
            <div class="frame-title">${puzzle.title}</div>
            <div class="frame-sub">${dateLabel} · Case #${day}</div>
            <span class="wax-stamp ${isSuccess ? 'solved' : 'failed'}">${isSuccess ? `CRACKED · ${scoreText}` : 'COLD CASE · X/5'}</span>
          </div>
        </div>
        <div class="sprocket-rail ${activeTab === 'tv' ? 'tv-rail' : ''}">
          <div class="sprocket-hole"></div>
          <div class="sprocket-hole"></div>
          <div class="sprocket-hole"></div>
        </div>
      `;
    } else {
      frame.innerHTML = `
        <div class="sprocket-rail ${activeTab === 'tv' ? 'tv-rail' : ''}">
          <div class="sprocket-hole"></div>
          <div class="sprocket-hole"></div>
          <div class="sprocket-hole"></div>
        </div>
        <div class="frame-center">
          <div class="sealed-negative-thumb">${defaultPlaceholder}</div>
          <div class="frame-info">
            <div class="edge-code ${activeTab === 'tv' ? 'tv-code' : ''}">
              <span>${headerLeftSealed}</span>
              <span>${headerRight}</span>
            </div>
            <div class="frame-title" style="color: var(--text-muted, #94a3b8);">${activeTab === 'film' ? 'Classified Reel' : 'Classified Broadcast'}</div>
            <div class="frame-sub">${dateLabel} · Case #${day}</div>
            <span class="wax-stamp sealed">${activeTab === 'film' ? 'SEALED NEGATIVE' : 'ARCHIVED TAPE'}</span>
          </div>
        </div>
        <div class="sprocket-rail ${activeTab === 'tv' ? 'tv-rail' : ''}">
          <div class="sprocket-hole"></div>
          <div class="sprocket-hole"></div>
          <div class="sprocket-hole"></div>
        </div>
      `;
    }

    sheetContainer.appendChild(frame);
  }

  archiveStat.innerText = `ARCHIVE ${playedCount}/${TOTAL_DAYS} LOGGED`;
}

// Initial render
renderContactSheet();
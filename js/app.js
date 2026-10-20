import { fetchGames } from "./games.js";

const gridEl = document.getElementById("game-grid");
let games = [];

async function init() {
  try {
    games = await fetchGames();

    gridEl.innerHTML = games.map(game => `
      <div class="game-card">
        <h3>${game.name}</h3>
        <p>${game.description}</p> <!-- Fixed closing tag -->
      </div>
    `).join("");
  } catch (error) {
    console.error("Failed to load games:", error);
    gridEl.innerHTML = "<p>Error loading games.</p>";
  }
}

init();

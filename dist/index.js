var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API = "http://localhost:3000/items";
const container = document.getElementById("character-list");
function fetchCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(API);
        if (!res.ok)
            throw new Error(`Failed to fetch: ${res.status}`);
        // json-server returns an array when hitting /items
        const data = yield res.json();
        return data;
    });
}
function characterCard(c) {
    return `
    <article class="card">
      <img src="${c.image}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">
      <div class="content">
        <span class="badge">${c.affiliation || "Unknown"}</span>
        <h3>${c.name}</h3>
        <div class="meta">${c.race} • ${c.gender}</div>
        <a class="btn" href="details.html?id=${c.id}">View Details</a>
      </div>
    </article>
  `;
}
function render() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            container.innerHTML = "<p class='muted'>Loading fighters…</p>";
            const chars = yield fetchCharacters();
            container.innerHTML = chars.map(characterCard).join("");
        }
        catch (e) {
            container.innerHTML = `<p style="color:#ffb3b3">Error loading characters. ${e.message}</p>`;
        }
    });
}
document.addEventListener("DOMContentLoaded", render);
export {};
//# sourceMappingURL=index.js.map
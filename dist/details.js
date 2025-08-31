var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const detailsRoot = document.getElementById("character-details");
function getIdFromUrl() {
    const id = new URLSearchParams(window.location.search).get("id");
    return id ? Number(id) : null;
}
function fetchById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`http://localhost:3000/items/${id}`);
        if (!res.ok)
            throw new Error(`Not found (${res.status})`);
        return res.json();
    });
}
function renderDetails(c) {
    detailsRoot.innerHTML = `
    <img src="${c.image}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">
    <div>
      <span class="badge">${c.affiliation}</span>
      <h2>${c.name}</h2>
      <p class="meta">${c.race} • ${c.gender}</p>
      <p><strong>Ki:</strong> ${c.ki} &nbsp; | &nbsp; <strong>Max Ki:</strong> ${c.maxKi}</p>
      <p>${c.description}</p>
    </div>
  `;
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const id = getIdFromUrl();
        if (!id) {
            detailsRoot.innerHTML = "<p style='color:#ffb3b3'>Missing ?id in URL.</p>";
            return;
        }
        try {
            detailsRoot.innerHTML = "<p class='muted'>Loading character…</p>";
            const char = yield fetchById(id);
            renderDetails(char);
        }
        catch (e) {
            detailsRoot.innerHTML = `<p style="color:#ffb3b3">Error: ${e.message}</p>`;
        }
    });
}
document.addEventListener("DOMContentLoaded", init);
export {};
//# sourceMappingURL=details.js.map
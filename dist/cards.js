"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetcCharacters() {
    const res = await fetch("http://localhost:3000/items");
    const data = await res.json();
    const container = document.getElementById("character-list");
    data.forEach((character) => {
        const div = document.createElement("div");
        div.className = "character-card";
        div.innerHTML = `
        <img src = "${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.race}</p>
        <a href="details.html?id=${character.id}">View Details</a>
       
        `;
        container?.appendChild(div);
    });
}
//# sourceMappingURL=cards.js.map
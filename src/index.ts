type Nullable<T> = T | null;

interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: Nullable<string>;
}

const API = "http://localhost:3000/items";
const container = document.getElementById("character-list") as HTMLElement;

async function fetchCharacters(): Promise<Character[]> {
  const res = await fetch(API);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
  // json-server returns an array when hitting /items
  const data: Character[] = await res.json();
  return data;
}

function characterCard(c: Character): string {
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

async function render() {
  try {
    container.innerHTML = "<p class='muted'>Loading fighters…</p>";
    const chars = await fetchCharacters();
    container.innerHTML = chars.map(characterCard).join("");
  } catch (e) {
    container.innerHTML = `<p style="color:#ffb3b3">Error loading characters. ${(e as Error).message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", render);

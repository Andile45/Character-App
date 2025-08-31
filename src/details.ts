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
}

const detailsRoot = document.getElementById("character-details") as HTMLElement;

function getIdFromUrl(): number | null {
  const id = new URLSearchParams(window.location.search).get("id");
  return id ? Number(id) : null;
}

async function fetchById(id: number): Promise<Character> {
  const res = await fetch(`http://localhost:3000/items/${id}`);
  if (!res.ok) throw new Error(`Not found (${res.status})`);
  return res.json();
}

function renderDetails(c: Character) {
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

async function init() {
  const id = getIdFromUrl();
  if (!id) {
    detailsRoot.innerHTML = "<p style='color:#ffb3b3'>Missing ?id in URL.</p>";
    return;
  }
  try {
    detailsRoot.innerHTML = "<p class='muted'>Loading character…</p>";
    const char = await fetchById(id);
    renderDetails(char);
  } catch (e) {
    detailsRoot.innerHTML = `<p style="color:#ffb3b3">Error: ${(e as Error).message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", init);

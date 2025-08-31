# 🐉 Dragon Ball Z Character Browser

A simple web app built with **TypeScript, HTML, and CSS** that displays Dragon Ball Z characters from a local JSON API (`json-server`).  
Each character is shown as a card with their image, race, gender, and affiliation, with links to detailed pages.

---

## ✨ Features
- 📜 List of Dragon Ball Z characters from `dbz.json`
- 🖼️ Character cards with images, name, race, gender, and affiliation
- 🔗 "View Details" link for each character (`details.html?id=...`)
- 🚨 Error handling with friendly messages
- 🎨 Responsive CSS card layout
- 🛠️ Built with **TypeScript → compiled to JavaScript**

---

## 📂 Project Structure
├── dbz.json # Character data for json-server
├── index.html # Main page
├── details.html # Character details page (to be implemented)
├── styles.css # Styling
├── src/
│ └── index.ts # TypeScript source
├── dist/
│ └── index.js # Compiled JavaScript (from TypeScript)
├── tsconfig.json # TypeScript configuration
├── package.json # npm scripts and dependencies
└── README.md # This file


---

## 🚀 Getting Started

### 1️⃣ Clone this repo
```bash
git clone https://github.com/YOUR_USERNAME/dbz-browser.git
cd dbz-browser

2️⃣ Install dependencies
npm install

3️⃣ Run the local API (json-server)
npm run dev:api


This will start json-server at:

http://localhost:3000/items

4️⃣ Build & start the app
npm run build   # compile TypeScript → JavaScript
npm run dev     # serve index.html with live-server


App will open in your browser at:

http://127.0.0.1:5500/index.html

⚙️ Available Scripts

npm run dev:api → Start json-server with dbz.json

npm run build → Compile TypeScript (src/ → dist/)

npm run dev → Run build + serve index.html with live-server

# 🔮 Arcana Engine Beta

Arcana Engine Beta is a browser-based spiritual companion tool that connects a Haskell backend to a Next.js frontend. It helps tarot practitioners reflect on their card pulls and deepen their understanding through AI-assisted interpretation. Powered by the OpenAI API, the app offers gentle insight after a user inputs their reflections on a tarot spread.

Originally built as a command-line program, Arcana Engine Beta now runs in the browser using `xterm.js` to emulate a terminal interface.

---

## ✨ Features

- 🃏 Input a tarot card spread and your personal reflections
- 🤖 Receive an AI-powered interpretation using OpenAI’s API
- 📜 Terminal-style UI embedded in the browser via `xterm.js`
- ⚙️ Haskell backend manages CLI logic and input/output
- 🌐 Modern Next.js frontend with future extensibility

---

## 🧰 Tech Stack

- **Haskell** – CLI logic and tarot interpreter
- **Next.js** – Frontend app with server-side rendering
- **xterm.js** – Terminal emulator in the browser
- **OpenAI API** – AI-generated insights and analysis

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dakotafabro/arcana-engine-beta.git
cd arcana-engine-beta
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your OpenAI Key

Create a .env file in the root directory:

```bash
touch .env
```

Then add:

```bash
OPENAI_API_KEY=your-api-key-here
```

### 4. Run the app

```bash
npm run start
```

## 🖥️ Usage

- Open your browser and navigate to http://localhost:3000

- You’ll see a terminal interface powered by xterm.js

- Type your tarot spread or reflection and press Enter

- The AI will respond with a deeper interpretation

## 🗺️ Roadmap

- 📱 Build a React Native companion app for mobile tarot practice

- 🎴 Add support for card recognition via photo upload

- 🔮 Introduce spread layouts and positional meanings

- 🛠️ Make AI prompts customizable and extensible

## 📜 License

MIT © Dakota Fabro

\_\_

#### 🧙‍♀️ “To know, to will, to dare, and to reflect.”

Let your practice speak — and let Arcana listen.

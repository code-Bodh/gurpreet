# Gurpreet Kaur — Senior UI/UX Designer Portfolio

Source code deployed locally from **[github.com/code-Bodh/gurpreet](https://github.com/code-Bodh/gurpreet)**.

---

## ⚡️ Live Development Server

The development server is currently **active and running**:
👉 **[http://localhost:3000](http://localhost:3000)**

> **Hot Reloading Enabled:** Any changes you make to components, text, or CSS will update in your browser instantly in real-time.

---

## 🎨 Where to Make Design Changes

### 1. Text Content, Projects & Bio
Edit **`src/lib/data.ts`**:
- `profile`: Name, role, headline, contact info, bio, quote, social links.
- `skills`: Periodic table items, categories, tags.
- `projects`: Featured projects, descriptions, tags, case study URLs.
- `experiences`: Work history, roles, companies, bullets.
- `achievements`: Metrics, titles, descriptions.

### 2. Page Sections & Layout
Each section has its own modular component in **`src/components/`**:
- **Navigation & Header**: `src/components/Navigation.tsx`
- **Hero Section & Video**: `src/components/hero/Hero.tsx`
- **About & Flippable ID Badge**: `src/components/sections/About.tsx`
- **Periodic Table of Skills**: `src/components/sections/Skills.tsx`
- **Selected Work**: `src/components/sections/Work.tsx`
- **Experience Timeline**: `src/components/sections/Experience.tsx`
- **Achievements / Metrics**: `src/components/sections/Achievements.tsx`
- **Footer & Contact**: `src/components/sections/Contact.tsx`

### 3. Styling, Colors & Fonts
- **Global Theme & Tailwind CSS**: `src/app/globals.css`
- **Local Web Fonts**: `src/fonts/` (Instrument Serif, Inter Tight, JetBrains Mono)

### 4. Images, Videos & Résumé
- **Hero Video**: `public/hero/hero.mp4` and `public/hero/hero.webm`
- **Portrait Photo**: `public/portrait-bust.webp`
- **Résumé File**: `public/resume.pdf`

---

## 🛠 Terminal Commands

From the project directory (`cd /Users/gurpreetkaur/Desktop/AI-Portfolio`):

| Command | Action |
| :--- | :--- |
| `./start-dev.sh` | Start the local development server in background |
| `./stop-dev.sh` | Stop the local development server |
| `npm run dev` | Run development server interactively |
| `npm run build` | Build the optimized production bundle |
| `npm run start` | Run the production server |

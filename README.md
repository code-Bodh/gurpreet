# Gurpreet Kaur — Senior UI/UX Designer Portfolio

A production-ready, ultra-lightweight, and responsive personal portfolio website built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, and Lenis.

Quiet, editorial, Awwwards-inspired aesthetic strictly in black, white, and grays with brand-authentic platform badges.

---

## 1. Quick Start

### Prerequisites
- Node.js 20+ (Node 18+ supported)
- npm or pnpm or bun
- Python 3.10+ with `ffmpeg` and `ffprobe` (for regenerating hero video assets)

### Installation & Run Locally
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Opens at http://localhost:3000

# 3. Production static build & test
npm run build
npm run start
```

---

## 2. GitHub Desktop & Git Setup

This project is fully initialized as a Git repository and configured with a clean `.gitignore`.

### To Open in GitHub Desktop:
1. Open **GitHub Desktop**.
2. Click **File** → **Add Local Repository...** (or press `Ctrl+O` / `Cmd+O`).
3. Click **Choose...** and browse to this directory:
   ```
   /Users/pardeeppatel/Documents/Antigravity/Gurpreet
   ```
4. Click **Add Repository**.
5. Click **Publish repository** to push it to your personal or organization GitHub account.

---

## 3. Deploying on Cloudflare Pages

The project is pre-configured with Next.js static HTML export (`output: "export"` in `next.config.ts`), ensuring 0ms cold starts and zero worker configuration.

### Cloudflare Pages Deployment Steps:
1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select your newly published repository from GitHub.
3. In the **Set up builds and deployments** screen, configure:
   - **Framework preset**: `None` (or `Next.js (Static HTML Export)`)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave default)
4. (Optional) In **Environment variables**, set:
   - `NODE_VERSION`: `20` (also defined via `.nvmrc`)
5. Click **Save and Deploy**. Cloudflare Pages will build and deploy your live site globally across 300+ edge locations!

---

## 2. Page Architecture & Sections Table

| Order | Section | Tag | Component | Interactive Mechanism |
|---|---|---|---|---|
| 00 | **Navigation** | — | `Navigation.tsx` | Initials mark (spins 360°, solid on scroll), sliding ink indicator pill, 2px top scroll progress bar, mobile clip-path full-screen drawer |
| 01 | **Hero** | — | `Hero.tsx` | Centered 16:9 looping video with `mix-blend-mode: multiply`, background ghost typography, muted sound unlock on first gesture, 35% viewport intersection auto-pause, round ▶/❚❚ sound control |
| 02 | **About** | `01 — About` | `About.tsx` | 3-column equal-height grid, hanging lanyard ID card with spring-damped pendulum swing and 3D backface flip (hover, touch tap, Space/Enter keyboard) |
| 03 | **Skills** | `02 — Stack` | `Skills.tsx` | Periodic table of stack (8 cols desktop / 4 cols mobile) with atomic numbers, 2-letter symbols, category filter chips, diagonal wave reveal, and sticky Element Inspector with 150px logo pop |
| 04 | **Work** | `03 — Selected Work` | `Work.tsx` | Expanding accordion gallery (`flex: 8` on active), folded slim spines with vertical titles, 2-column feature list, illustrative pure CSS/JSX mini-UI |
| 05 | **Experience** | `04 — Trajectory` | `Experience.tsx` | Vertical chronological trajectory (Hashbrown Systems, B.Tech, Diploma) with scroll-progress scaled spine and lighting node stops |
| 06 | **Achievements** | `05 — Milestones` | `Achievements.tsx` | `position: sticky; height: 100svh` horizontal card slider, progress bar, 12px center card lift with soft glow, `easeOutQuart` counting numbers |
| 07 | **Contact & Footer**| `06 — Contact` | `Contact.tsx` | Letter-hop bounce hover animation, large underlined email with instant "Copied ✓" aria-live chip, rotating "say hello" badge, copyright, and back-to-top |

*(Note: Certifications section omitted per Rule 1 as no certifications data exists in the official résumé).*

---

## 3. Hero Video Pipeline (`scripts/build-hero-assets.py`)

The hero asset pipeline converts `CV/intro.mp4` into high-efficiency, seamless looping video and web formats without audible clicks or visible jumps:

```bash
# Run with Python (requires numpy, soundfile, pillow, ffmpeg)
python3 scripts/build-hero-assets.py

# Or via uv without installing global dependencies:
uv run --with numpy --with soundfile --with scipy --with pillow python3 scripts/build-hero-assets.py
```

### Steps Performed:
1. **Calibrated Centering Crop**: `crop=800:1000:715:25`, scaled to `768:960`, positioning the subject at horizontal center (`x = 384`) head-to-toe.
2. **Background Whitening**: `colorlevels=rimax=0.98:gimax=0.98:bimax=0.98` for seamless integration into the `--paper` palette.
3. **Picture Crossfade**: 0.5s `xfade` between the clip's tail and head.
4. **Sample-Accurate Audio Crossfade**: 0.5s linear power-crossfade in NumPy (`soundfile`), ensuring lip sync is preserved with no time stretching or retiming.
5. **Multi-Format Export**:
   - `public/hero/hero.mp4`: H.264 `yuv420p`, CRF 24, `-preset slow`, AAC 96k, `+faststart`.
   - `public/hero/hero.webm`: VP9, CRF 36, Opus 80k.
   - `public/portrait-bust.webp`: 480×600 head-to-shirt crop.
   - `public/og.jpg`: 1200×630 Open Graph preview image.

---

## 4. Brand Logos & Licenses

Brand logos are used solely for factual, editorial skills and platform attribution:
- **Figma**: Trademark of Figma, Inc.
- **Adobe XD, Photoshop, Illustrator, Adobe Express, Adobe Firefly**: Registered trademarks of Adobe Systems Incorporated.
- **Canva**: Trademark of Canva Pty Ltd.
- **Keynote**: Registered trademark of Apple Inc.
- **ChatGPT**: Registered trademark of OpenAI, LLC.
- **Claude**: Registered trademark of Anthropic, PBC.
- **Gemini**: Registered trademark of Google LLC.
- **Meta AI**: Registered trademark of Meta Platforms, Inc.

All concept skills (UI/UX Design, Data Visualization, Dashboard Design, Design Systems, Responsive Design, Mobile-First, User Research, Wireframing, Prototyping, User Flows, Developer Handoff) use custom handcrafted monochrome SVG line icons.

---

## 5. Performance & Quality Guarantees
- **Bundle Weight**: First-load JavaScript is ~132 kB (matching the ~130 kB target).
- **Self-Hosted Typography**: Inter Tight (variable), Instrument Serif (regular & italic), and JetBrains Mono (variable) bundled locally in `src/fonts/`.
- **Zero External Runtime CDNs**: No external fonts, scripts, or image CDNs loaded at runtime.
- **Zero Horizontal Overflow**: Fluidly responsive from 360 px to 1920 px.

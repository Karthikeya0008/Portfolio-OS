# DK Portfolio OS — Next.js + TypeScript

A futuristic JARVIS-style personal portfolio for **Dara Karthikeya**.

## Tech Stack
- **Next.js 16** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS**
- **Framer Motion** (animations)

## Project Structure
```
jarvis-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + Google Fonts
│   ├── page.tsx            # Main page (orchestrates all sections)
│   └── globals.css         # JARVIS CSS variables + animations
├── components/
│   ├── HexCanvas.tsx       # Animated hex grid + particle network
│   ├── HUDCorners.tsx      # SVG corner decorations
│   ├── Loader.tsx          # Terminal boot sequence
│   ├── MouseGlow.tsx       # Cursor glow effect
│   ├── Navbar.tsx          # HUD navigation bar
│   ├── CommandPalette.tsx  # Ctrl+K command palette
│   ├── StatusBar.tsx       # Bottom status + ticker
│   ├── sections/
│   │   ├── Hero.tsx        # Hero + profile photo + stats
│   │   ├── Skills.tsx      # Skills with animated bars
│   │   ├── Projects.tsx    # Project cards
│   │   ├── Work.tsx        # Work experience
│   │   ├── Education.tsx   # Education timeline
│   │   └── Contact.tsx     # Contact links
│   └── ui/
│       └── SectionHeader.tsx
└── lib/
    └── data.ts             # All resume data (edit here!)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Your Photo

1. Place your photo as **`public/profile.jpg`**
2. The profile ring in the Hero section will automatically show it
3. Recommended: square crop, min 400×400px

## Customising Content

All resume data lives in **`lib/data.ts`** — edit that single file to update name, bio, projects, skills, education, and contact info.

## Features
- Terminal boot loader with animated BIOS logs
- Live hex-grid canvas background with particle network
- Mouse-tracking glow effect
- Orbiting rings around profile photo
- Animated skill progress bars (scroll-triggered)
- Framer Motion page and scroll animations
- `Ctrl+K` command palette for section navigation
- Live clock in status bar
- Scrolling tech ticker in status bar
- HUD corner brackets
- Fully responsive (desktop, tablet, mobile)

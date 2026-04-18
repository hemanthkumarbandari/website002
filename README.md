# ASP Website

A modern React + Vite website for ASP (Analytical & Scientific Products), featuring product pages, services, and environmental monitoring solutions.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
ASPwebsite/
├── .agents/                        # AI agent skills & configuration
│   └── skills/
│       ├── design-md/              # Stitch design system synthesis skill
│       ├── enhance-prompt/         # Prompt enhancement skill
│       ├── react-components/       # Stitch → React components skill
│       ├── remotion/               # Walkthrough video generation skill
│       ├── shadcn-ui/              # shadcn/ui integration skill
│       ├── stitch-design/          # Unified Stitch design entry skill
│       ├── stitch-loop/            # Iterative website building skill
│       └── taste-design/           # Semantic design system skill
│
├── public/                         # Static assets served as-is
│   ├── favicon.svg
│   └── icons.svg
│
├── src/                            # Application source code
│   ├── assets/                     # Images & static assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/                 # Reusable UI components
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ServiceCard.jsx
│   │
│   ├── layout/                     # Layout wrappers
│   │   └── MainLayout.jsx
│   │
│   ├── pages/                      # Route-level page components
│   │   ├── AmbientAirQualityMonitoring.jsx
│   │   ├── Analytical.jsx
│   │   ├── CAAQMS.jsx
│   │   ├── CEMS.jsx
│   │   ├── Contact.jsx
│   │   ├── ContinuousEmissionMonitoring.jsx
│   │   ├── EQMS.jsx
│   │   ├── GasChromatography.jsx
│   │   ├── GasDetection.jsx
│   │   ├── Home.jsx
│   │   ├── Portable.jsx
│   │   ├── Services.jsx
│   │   ├── Water.jsx
│   │   └── WaterQualityMonitoring.jsx
│   │
│   ├── App.css                     # Global app styles
│   ├── App.jsx                     # Root app component & routing
│   ├── index.css                   # Base / reset styles
│   ├── main.jsx                    # React entry point
│   └── products.jpg                # Products image asset
│
├── .gitignore
├── ASPlogo.jpg                     # Company logo
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML entry point
├── install.cmd                     # Dependency install script
├── package.json                    # Project dependencies & scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── vite.config.js                  # Vite build configuration
└── README.md                       # Project documentation
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## 🤖 AI Skills (`.agents/skills/`)

This project includes 8 Stitch AI agent skills from [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills):

| Skill | Purpose |
|---|---|
| `stitch-design` | Unified entry point for Stitch design work |
| `stitch-loop` | Iteratively build multi-page websites from a single prompt |
| `design-md` | Analyze Stitch projects and generate `DESIGN.md` files |
| `enhance-prompt` | Transform vague UI ideas into polished Stitch-optimized prompts |
| `react-components` | Convert Stitch designs into modular React components |
| `remotion` | Generate walkthrough videos from Stitch projects |
| `shadcn-ui` | Expert guidance for shadcn/ui integration |
| `taste-design` | Semantic design system enforcing premium UI standards |


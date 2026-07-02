<div align="center">
  <img src="https://raw.githubusercontent.com/Anshikasaxenaa/anshika-saxena-portfolio/main/public/profile.png" alt="Anshika Saxena Logo" width="120" height="120" style="border-radius: 50%; border: 4px solid #c26d4d;">
  
  <h1 align="center">Anshika Saxena — Portfolio</h1>

  <p align="center">
    A meticulously crafted personal portfolio showcasing advanced Framer Motion animations, a warm editorial design aesthetic, and performant server-side rendering.
  </p>

  <p align="center">
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer-Motion-E2178A?style=for-the-badge&logo=framer" alt="Framer Motion" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
  </p>
</div>

<br />

## ✦ The Vision
This portfolio is not just a digital resume—it's an interactive **Editorial Spread**. Designed to feel like a high-end design magazine, the interface utilizes a bespoke "Warm Editorial" color palette (warm papers, creams, and terracottas) combined with SVG fractal noise to create a tangible, human feel.

It focuses heavily on **micro-interactions** and **choreographed animations**, proving that performant web engineering and breathtaking design can coexist.

## ✦ Key Features

- **Magnetic UI Elements:** Navigation links and buttons feature custom physical mouse-tracking (magnetic) effects for a highly tactile feel.
- **Alternating Panoramic Projects:** The work section is engineered using alternating full-width panoramic strips, complete with a terracotta "curtain reveal", 3D mouse tilt, and a custom cursor pill that physically follows the pointer.
- **Organic Shape Shifting:** The "About" section utilizes continuously morphing, asymmetric `border-radius` values to make the portrait frame feel alive and breathing.
- **SVG Fractal Noise:** Mathematical noise overlays are applied across the gradient backgrounds to provide a rich, printed-paper grain texture.
- **Intersection Observers:** A custom intersection observer tracks the user's scroll position to dynamically highlight the active section in the sticky navbar.

## ✦ Tech Stack

| Domain | Technologies |
| --- | --- |
| **Framework** | Next.js 14 (App Router) |
| **Library** | React 18 |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Language** | TypeScript |
| **Icons** | React Icons (`react-icons/hi`, `react-icons/fa6`) |

## ✦ Color Palette
This project strictly adheres to a highly curated custom theme defined in `tailwind.config.ts`:

- **Backgrounds:** `warm-paper` (#faf7f2), `warm-cream` (#f3efe8)
- **Typography:** `warm-ink` (#1a1714), `warm-charcoal` (#2d2a26), `warm-taupe` (#8c8279)
- **Accents:** `terracotta` (#c26d4d), `sage` (#7d9b7e)

## ✦ Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anshikasaxenaa/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## ✦ Project Architecture

All dynamic content and copy are extracted out of the JSX and managed centrally.

```text
src/
├── app/                  # Next.js App Router layout and pages
├── components/           # Core React components (Hero, About, Navbar)
│   └── ui/               # Reusable micro-components (ProjectStrip, MagneticElement)
├── data/                 
│   └── portfolioData.ts  # Centralized data (Projects, Skills, Bio)
└── styles/
    └── globals.css       # Tailwind entry and base typography
```

## ✦ About the Developer

**Anshika Saxena** is a creative developer living at the intersection of logic and imagination. With a strong foundation in Data Structures, Full Stack development, and Agentic AI, she builds applications that don't just function—they reason and resonate.

<div align="center">
  <br />
  <a href="https://github.com/Anshikasaxenaa">GitHub</a> • 
  <a href="https://www.linkedin.com/in/anshika-saxena-18a7a8286/">LinkedIn</a> • 
  <a href="mailto:anshikasaxena314@gmail.com">Email</a>
</div>

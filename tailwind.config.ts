import type { Config } from "tailwindcss";

/**
 * TAILWIND CONFIG — PREMIUM DARK DESIGN SYSTEM
 * ─────────────────────────────────────────────
 * Philosophy: Deep zinc backgrounds + cyber-blue/emerald neon accents.
 * Every color token is named for intent, not appearance.
 *
 * HOW TO PERSONALISE:
 *  - Swap `accent` hex values to change your glow color (cyber-blue → emerald → violet)
 *  - Adjust `brand` shades in globals.css for a different primary gradient
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // ── COLOUR SYSTEM ─────────────────────────────────────────────────────
      colors: {
        // Canvas — deep zinc (slightly blue-tinted, not pure black)
        canvas: {
          DEFAULT: "var(--canvas)",  // page background
          muted:   "var(--canvas-muted)",  // card/section background
          subtle:  "var(--canvas-subtle)",  // elevated surface (nav, modals)
          border:  "var(--canvas-border)",  // borders & dividers
        },
        // Foreground text scale
        text: {
          primary:   "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted:     "var(--text-muted)",
        },
        // Cyber-blue neon accent — CHANGE THIS to swap glow color
        accent: {
          50:  "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",   // main CTA color
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          glow: "var(--accent-glow)",  // used in box-shadow glows
        },
        // Emerald secondary accent for tags / highlights
        emerald: {
          glow: "var(--emerald-glow)",
        },
      },

      // ── TYPOGRAPHY ────────────────────────────────────────────────────────
      fontFamily: {
        // Display: used for H1/hero text — bold, slightly condensed
        display: ["var(--font-cal)", "system-ui", "sans-serif"],
        // Body: clean & legible at small sizes
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
        // Mono: code snippets, tech tags
        mono:    ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },

      // ── SPACING / GRID ────────────────────────────────────────────────────
      // Max content width with breathing room
      maxWidth: {
        site: "1200px",
      },

      // ── ANIMATION / KEYFRAMES ─────────────────────────────────────────────
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float":      "float 6s ease-in-out infinite",
        "blob":       "blob 7s infinite",
        "grid-fade":  "grid-fade 8s ease-in-out infinite",
        "shimmer":    "shimmer 2.5s linear infinite",
        "scan-line":  "scan-line 4s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":       { opacity: "1",   transform: "scale(1.05)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-20px)" },
        },
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.03" },
          "50%":       { opacity: "0.07" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scan-line": {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },

      // ── BACKDROP BLUR ─────────────────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },

      // ── BOX SHADOW (neon glows) ───────────────────────────────────────────
      boxShadow: {
        "glow-sm":  "0 0 10px rgba(59,130,246,0.3)",
        "glow-md":  "0 0 25px rgba(59,130,246,0.4)",
        "glow-lg":  "0 0 50px rgba(59,130,246,0.35)",
        "glow-em":  "0 0 25px rgba(16,185,129,0.4)",  // emerald variant
        "card":     "0 4px 24px rgba(0,0,0,0.5)",
      },

      // ── BORDER RADIUS ─────────────────────────────────────────────────────
      borderRadius: {
        "2xl":  "16px",
        "3xl":  "24px",
        "4xl":  "32px",
      },
    },
  },
  plugins: [],
};

export default config;
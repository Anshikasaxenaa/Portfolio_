import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        warm: {
          paper:    '#faf7f2',  // Main background
          cream:    '#f3efe8',  // Card surfaces
          sand:     '#e6e0d5',  // Borders, dividers
          taupe:    '#8c8279',  // Secondary text
          charcoal: '#2d2a26',  // Body text
          ink:      '#1a1714',  // Headings
        },
        terracotta: {
          DEFAULT: '#c26d4d',   // Primary accent
          light:   '#d48b70',   // Hover states
          dark:    '#a8583a',   // Active states
          subtle:  '#f2e4db',   // Selection, light backgrounds
        },
        sage: {
          DEFAULT: '#7d9b7e',   // Secondary accent
          light:   '#9db59e',   // Hover states
          dark:    '#5f7a60',   // Active states
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
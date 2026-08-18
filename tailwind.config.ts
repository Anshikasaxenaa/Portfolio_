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
      fontSize: {
        xs: ['clamp(0.7rem, 0.7vw + 0.5rem, 0.875rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.8rem, 0.8vw + 0.6rem, 1rem)', { lineHeight: '1.5' }],
        base: ['clamp(0.95rem, 1vw + 0.7rem, 1.125rem)', { lineHeight: '1.5' }],
        lg: ['clamp(1.05rem, 1.2vw + 0.8rem, 1.25rem)', { lineHeight: '1.75' }],
        xl: ['clamp(1.15rem, 1.5vw + 0.9rem, 1.5rem)', { lineHeight: '1.75' }],
        '2xl': ['clamp(1.3rem, 2vw + 1rem, 2rem)', { lineHeight: '1.2' }],
        '3xl': ['clamp(1.6rem, 2.5vw + 1.2rem, 2.5rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2rem, 3.5vw + 1.5rem, 3.5rem)', { lineHeight: '1.1' }],
        '5xl': ['clamp(2.5rem, 5vw + 2rem, 4.5rem)', { lineHeight: '1.1' }],
        '6xl': ['clamp(3rem, 7vw + 2.5rem, 6rem)', { lineHeight: '1.1' }],
        '7xl': ['clamp(3.5rem, 9vw + 3rem, 8rem)', { lineHeight: '1' }],
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
        blob: "blob 7s infinite",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
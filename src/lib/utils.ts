import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Variants } from "framer-motion";

/* ──────────────────────────────────────────────────────────────
   cn() — Tailwind class merger
   Usage: cn("base-class", condition && "conditional-class")
   Handles conflicts: cn("px-2 px-4") → "px-4"
────────────────────────────────────────────────────────────── */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ──────────────────────────────────────────────────────────────
   FRAMER MOTION ANIMATION VARIANTS
   
   Centralised so every section uses consistent timing.
   Import the ones you need in each component.

   Philosophy:
   - Stagger children for a cascading feel (like Linear.app)
   - Use ease-out easing for entrances (natural, not bouncy)
   - Short durations (0.4–0.7s) keep the site feeling snappy
────────────────────────────────────────────────────────────── */

/* Fade up — most common entrance variant */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // expo out — feels premium
    },
  },
};

/* Stagger container — wraps a list of children */
export const staggerContainerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren:  0.1,
      delayChildren:    0.15,
    },
  },
};

/* Scale in — for cards and icons */
export const scaleInVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1], // spring-like
    },
  },
};

/* Slide in from left — for timeline */
export const slideLeftVariants: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Slide in from right */
export const slideRightVariants: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Hero letter-by-letter stagger */
export const letterVariants: Variants = {
  hidden:  { opacity: 0, y: 32, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Viewport trigger config — used with whileInView */
export const defaultViewport = {
  once:   true,   // animate only the first time it enters view
  margin: "-80px", // trigger 80px before the element enters viewport
};
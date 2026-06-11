"use client";

/**
 * SECTION WRAPPER
 * ─────────────────────────────────────────────────────────────
 * A reusable layout wrapper for every portfolio section.
 *
 * WHY THIS EXISTS:
 *  - Prevents layout shift: we animate opacity + y-translate ONLY.
 *    No width/height changes that would cause CLS (Core Web Vitals).
 *  - `once: true` means the animation fires once and stays visible,
 *    no annoying re-animations on scroll back up.
 *  - `margin: "-80px"` triggers the animation slightly BEFORE the
 *    section enters view, so content is already fading in by the
 *    time the user's eye lands on it.
 *
 * USAGE:
 *  <SectionWrapper id="about" className="py-24">
 *    <h2>About</h2>
 *  </SectionWrapper>
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?:          string;
  className?:   string;
  children:     React.ReactNode;
  // Override default fade-up behavior
  direction?:   "up" | "left" | "right" | "none";
  delay?:       number;
}

const directionMap = {
  up:    { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  none:  { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export function SectionWrapper({
  id,
  className,
  children,
  direction = "up",
  delay = 0,
}: SectionWrapperProps) {
  const variants = directionMap[direction];

  return (
    <motion.section
      id={id}
      className={cn("relative z-10", className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once:   true,
        // Trigger 80px before entering viewport for smooth UX
        margin: "-80px",
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo-out — feels high-end
      }}
    >
      {children}
    </motion.section>
  );
}
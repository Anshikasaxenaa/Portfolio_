"use client";

/**
 * MAGNETIC BUTTON
 * ─────────────────────────────────────────────────────────────
 * A button that magnetically attracts toward the cursor when
 * the mouse is nearby. Classic Apple/Linear interaction.
 *
 * HOW IT WORKS:
 *  1. `onMouseMove` calculates how far the cursor is from the
 *     button's centre as a percentage of its bounding box.
 *  2. We multiply that offset by `magnetStrength` (0–1) to get
 *     the translation amount.
 *  3. `useSpring` smooths the movement.
 *  4. On `onMouseLeave` we animate back to 0,0.
 *
 * USAGE:
 *  <MagneticButton onClick={...} variant="primary">
 *    View My Work
 *  </MagneticButton>
 */

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children:     React.ReactNode;
  onClick?:     () => void;
  href?:        string;
  variant?:     "primary" | "secondary" | "ghost";
  className?:   string;
  magnetStrength?: number; // 0–1, how much it moves (default 0.35)
  disabled?:    boolean;
  "aria-label"?: string;
}

export function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className,
  magnetStrength = 0.35,
  disabled,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for x/y offset
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring for smooth snap
  const x = useSpring(rawX, { stiffness: 200, damping: 15, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 200, damping: 15, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;
    const rect   = ref.current.getBoundingClientRect();
    const centreX = rect.left + rect.width / 2;
    const centreY = rect.top  + rect.height / 2;
    const deltaX = e.clientX - centreX;
    const deltaY = e.clientY - centreY;
    rawX.set(deltaX * magnetStrength);
    rawY.set(deltaY * magnetStrength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  // ── Variant styles ─────────────────────────────────────────
  const variants = {
    primary: cn(
      "relative inline-flex items-center justify-center gap-2",
      "rounded-xl px-7 py-3.5 text-sm font-semibold text-white",
      "bg-accent-600",
      "shadow-glow-sm hover:shadow-glow-md",
      "transition-shadow duration-300",
      // Shimmer overlay on hover
      "overflow-hidden",
      "before:absolute before:inset-0 before:bg-gradient-to-r",
      "before:from-white/0 before:via-white/10 before:to-white/0",
      "before:translate-x-[-100%] hover:before:translate-x-[100%]",
      "before:transition-transform before:duration-500 before:ease-out",
    ),
    secondary: cn(
      "relative inline-flex items-center justify-center gap-2",
      "rounded-xl px-7 py-3.5 text-sm font-semibold",
      "border border-canvas-border bg-canvas-subtle",
      "text-text-primary",
      "hover:border-accent-500/50 hover:bg-canvas-muted",
      "hover:shadow-glow-sm",
      "transition-all duration-300",
    ),
    ghost: cn(
      "relative inline-flex items-center justify-center gap-2",
      "rounded-xl px-5 py-2.5 text-sm font-medium",
      "text-text-secondary hover:text-text-primary",
      "hover:bg-canvas-subtle",
      "transition-all duration-200",
    ),
  };

  const Tag     = href ? "a" : "button";
  const tagProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick, type: "button" as const, disabled };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      // Subtle scale on hover — complements the magnetic movement
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
     
      <Tag
        {...tagProps}
        aria-label={ariaLabel}
        data-cursor="pointer"
        className={cn(variants[variant], className)}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
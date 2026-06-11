"use client";

/**
 * CUSTOM CURSOR
 * ─────────────────────────────────────────────────────────────
 * A dual-ring cursor that:
 *  1. Tracks mouse position smoothly (spring physics)
 *  2. Scales up on hover (mix-blend-mode: difference for contrast)
 *  3. Shows a label on data-cursor-label elements
 *  4. Hides on touch devices (pointer: coarse)
 *
 * USAGE:
 *  - Add data-cursor="pointer" to any interactive element
 *  - Add data-cursor-label="View" to show a text label in the cursor
 *
 * HOW IT WORKS:
 *  useMotionValue + useSpring creates buttery smooth lag between
 *  actual cursor and the rendered circle. The outer ring follows
 *  with more lag (stiffness: 100) than the inner dot (stiffness: 300).
 */

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "pointer" | "text" | "hidden";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");
  const [isVisible, setIsVisible]     = useState(false);

  // Raw mouse position
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // ── Inner dot: fast spring (feels snappy) ──
  const dotX = useSpring(rawX, { stiffness: 400, damping: 28, mass: 0.5 });
  const dotY = useSpring(rawY, { stiffness: 400, damping: 28, mass: 0.5 });

  // ── Outer ring: slower spring (creates lag effect) ──
  const ringX = useSpring(rawX, { stiffness: 100, damping: 20, mass: 0.8 });
  const ringY = useSpring(rawY, { stiffness: 100, damping: 20, mass: 0.8 });

  const isPointer    = cursorState === "pointer";
  const isTextCursor = cursorState === "text";

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave  = () => setIsVisible(false);
    const onMouseEnter  = () => setIsVisible(true);

    // Detect hoverable elements to change cursor state
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el     = target.closest("[data-cursor]") as HTMLElement | null;

      if (el) {
        const state = el.dataset.cursor as CursorState;
        setCursorState(state ?? "pointer");
        setCursorLabel(el.dataset.cursorLabel ?? "");
      } else if (
        target.matches('a, button, [role="button"], input, textarea, select, label')
      ) {
        setCursorState("pointer");
        setCursorLabel("");
      } else if (target.matches("p, h1, h2, h3, h4, h5, h6, span, li")) {
        setCursorState("text");
        setCursorLabel("");
      } else {
        setCursorState("default");
        setCursorLabel("");
      }
    };

    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mouseover",  onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseover",  onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [rawX, rawY, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* ── Outer ring ─────────────────────────────────────── */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-accent-400/60"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:   isPointer ? 48 : isTextCursor ? 2 : 32,
          height:  isPointer ? 48 : isTextCursor ? 32 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isPointer
            ? "rgba(59,130,246,0.9)"
            : "rgba(59,130,246,0.5)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {/* Optional label inside cursor */}
        {cursorLabel && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-accent-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>

      {/* ── Inner dot ──────────────────────────────────────── */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-accent-400"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:   isPointer ? 6 : isTextCursor ? 2 : 8,
          height:  isPointer ? 6 : isTextCursor ? 20 : 8,
          opacity: isVisible ? (isPointer ? 0.4 : 1) : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
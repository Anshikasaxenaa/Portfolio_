"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Heavy Blur Glow Trailing */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-40 opacity-40 mix-blend-multiply blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(194, 109, 77, 0.6) 0%, rgba(125, 155, 126, 0.2) 50%, transparent 100%)",
        }}
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 0.8,
        }}
      />

      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(194, 109, 77, 0.8) 0%, rgba(194, 109, 77, 0) 70%)",
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  );
}

"use client";

import { motion } from "framer-motion";

export default function HoverRevealText({ text, className = "" }: { text: string; className?: string }) {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      className={`relative inline-block overflow-hidden whitespace-nowrap ${className}`}
    >
      <div className="relative z-10 flex">
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
            className="inline-block"
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 z-20 flex">
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
            className="inline-block"
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
}

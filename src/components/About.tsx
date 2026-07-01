"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { aboutContent } from "../data/portfolioData";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.span
      onViewportEnter={() => {
        if (!isInView) {
          setIsInView(true);
          animate(count, to, { duration, ease: "easeOut" });
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {rounded}
    </motion.span>
  );
}

export default function About() {
  const { statement, bio, pillars, personal, highlight } = aboutContent;
  const [isPortraitHovered, setIsPortraitHovered] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <section id="about" className="relative w-full overflow-hidden bg-warm-paper">
      
      {/* BAND 1: The Portrait & Statement */}
      <div className="min-h-[90vh] max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative">
        
        {/* Floating Smudge */}
        <motion.div
          animate={{ x: ["-5%", "5%", "-5%"], y: ["-3%", "3%", "-3%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] w-96 h-96 bg-terracotta blur-3xl opacity-[0.06] rounded-full pointer-events-none"
        />

        {/* Left Column: Portrait */}
        <div className="w-full md:w-[40%] flex justify-center relative z-10">
          <motion.div
            className="relative"
            onMouseEnter={() => setIsPortraitHovered(true)}
            onMouseLeave={() => setIsPortraitHovered(false)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Gradient Ring */}
            <motion.div
              className="p-[3px] bg-gradient-to-br from-terracotta via-terracotta-light to-sage shadow-terracotta-subtle/30 shadow-2xl relative"
              animate={{
                borderRadius: [
                  "40% 60% 55% 45% / 45% 50% 60% 55%", 
                  "45% 55% 60% 40% / 50% 45% 55% 60%", 
                  "40% 60% 55% 45% / 45% 50% 60% 55%"
                ],
                rotate: isPortraitHovered ? 15 : 0,
              }}
              transition={{
                borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 0.8, ease: "easeOut" }
              }}
            >
              {/* Inner Portrait Container */}
              <motion.div 
                className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-warm-cream relative overflow-hidden flex items-center justify-center"
                animate={{
                  borderRadius: [
                    "38% 58% 53% 43% / 43% 48% 58% 53%",
                    "43% 53% 58% 38% / 48% 43% 53% 58%",
                    "38% 58% 53% 43% / 43% 48% 58% 53%"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Fallback portrait gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-warm-sand via-terracotta-subtle to-warm-cream opacity-50 mix-blend-multiply" />
                
                {/* Real Image placeholder (assuming you replace /profile.png) */}
                <img src="/profile.png" alt="Portrait" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />

                {/* Grain Overlay */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 mix-blend-overlay">
                  <filter id="portraitNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#portraitNoise)" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Statement */}
        <div className="w-full md:w-[60%] text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-warm-taupe text-xs tracking-[0.3em] uppercase mb-8"
          >
            About
          </motion.div>

          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-6xl text-warm-ink leading-[1.05] max-w-2xl flex flex-wrap gap-x-2 md:gap-x-3 justify-center md:justify-start">
            {statement.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.06), ease: [0.25, 0.1, 0.25, 1] }}
                className="inline-block relative group"
              >
                {word}
                {/* Highlight effect for certain words, triggered by hover on any word for fun, or we could single it out. Let's make it on hover. */}
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-terracotta/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.span>
            ))}
          </h2>

          <div className="mt-8 flex flex-col items-center md:items-start gap-8">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-terracotta"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.8 + (statement.split(" ").length * 0.06) }}
              className="text-warm-charcoal/80 text-base md:text-lg leading-relaxed max-w-xl group"
            >
              {/* Highlight effect applied to bio text manually */}
              {bio.split(' ').map((word, idx) => (
                <span key={idx} className="relative inline-block mr-1 group-hover:text-warm-ink transition-colors">
                  {word}
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-terracotta/20 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left cursor-default" />
                </span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>

      {/* BAND 2: The Philosophy Pillars */}
      <div className="py-24 max-w-6xl mx-auto px-6 relative">
        {/* Gradient Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-warm-sand to-transparent mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              onMouseEnter={() => setHoveredPillar(i)}
              onMouseLeave={() => setHoveredPillar(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`p-8 rounded-3xl transition-colors duration-500 flex flex-col items-center md:items-start text-center md:text-left ${hoveredPillar === i ? 'bg-terracotta-subtle/20' : 'bg-transparent'}`}
            >
              {/* Geometric Shape */}
              <div className="h-12 w-12 flex items-center justify-center mb-6">
                {pillar.shape === "circle" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    animate={{ scale: hoveredPillar === i ? 1.2 : 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-3 h-3 rounded-full bg-terracotta"
                  />
                )}
                {pillar.shape === "square" && (
                  <motion.div
                    initial={{ rotate: 0, opacity: 0 }}
                    whileInView={{ rotate: 45, opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ rotate: hoveredPillar === i ? 60 : 45 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-3 h-3 bg-sage"
                  />
                )}
                {pillar.shape === "line" && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 24 }}
                    viewport={{ once: true }}
                    animate={{ height: hoveredPillar === i ? 32 : 24 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-[2px] bg-terracotta"
                  />
                )}
              </div>
              
              <h3 className="font-serif italic text-2xl text-warm-ink mb-3">{pillar.title}</h3>
              <p className="text-warm-taupe text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BAND 3: The Human Touch */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="py-24 bg-warm-cream w-full"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Personal */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-warm-taupe text-xs tracking-[0.3em] uppercase mb-6">Beyond the screen</h4>
            <p className="text-warm-charcoal text-base leading-relaxed max-w-md mb-8">
              {personal.text}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {personal.interests.map((interest, i) => (
                <span key={i} className="text-xs text-warm-taupe border border-warm-sand rounded-full px-3 py-1">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Highlight */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end border-t md:border-t-0 md:border-l border-warm-sand pt-12 md:pt-0 md:pl-12">
            {highlight.type === "stat" ? (
              <>
                <div className="font-serif italic text-7xl md:text-8xl text-terracotta mb-2 flex items-baseline justify-center md:justify-end">
                  <Counter from={0} to={parseInt(highlight.statValue)} duration={2.5} />
                  <span>+</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-warm-taupe text-sm tracking-wide"
                >
                  {highlight.statLabel}
                </motion.div>
              </>
            ) : (
              <>
                <h3 className="font-serif italic text-3xl md:text-4xl text-warm-ink leading-tight mb-4">
                  "{(highlight as any).quote}"
                </h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-warm-taupe text-sm"
                >
                  — {(highlight as any).attribution}
                </motion.div>
              </>
            )}
          </div>

        </div>
      </motion.div>
    </section>
  );
}

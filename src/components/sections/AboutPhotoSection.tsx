"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function AboutPhotoSection() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center py-24 overflow-hidden dot-grid"
    >
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ── LEFT: Outstanding Photo Presentation ── */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md lg:w-1/2"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 -m-8 scale-110 blur-3xl bg-accent-500/20 rounded-full animate-pulse" />
            
            {/* Glassmorphism Frame */}
            <div className="relative aspect-[4/5] w-full rounded-3xl glass p-2 shimmer-border overflow-visible group">
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-canvas-muted border border-canvas-border">
                <Image
                  src="/profile.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-80" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-medium text-white shadow-xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for work
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">
                    {personalInfo.name}
                  </h3>
                  <p className="text-white/80 text-sm font-medium">Software Developer</p>
                </div>
              </div>

              {/* Floating Element 1 */}
              <motion.div
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 border border-canvas-border shadow-glow-sm flex flex-col gap-1 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="text-accent-400 w-5 h-5 mb-1" />
                <span className="text-xs font-bold text-text-primary">Creative</span>
                <span className="text-[10px] text-text-secondary">Developer</span>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                className="absolute -bottom-4 -left-8 glass rounded-full px-5 py-2.5 border border-canvas-border shadow-glow-sm flex items-center gap-2 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-2 h-2 rounded-full bg-accent-500" />
                <span className="text-xs font-mono text-text-primary">100% Passion</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
              Crafting <span className="gradient-text">digital experiences</span> with precision.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              I am a final-year B.Tech CSE student passionate about bridging the gap between beautiful design and robust engineering. Whether it's architecting a complex backend or perfecting a micro-interaction on the frontend, I obsess over the details.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              When I'm not writing code, you can find me exploring new UI trends, solving algorithmic challenges, or contributing to open-source projects.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

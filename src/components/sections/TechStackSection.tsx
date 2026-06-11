"use client";

/**
 * TECH STACK SECTION — BENTO GRID
 * ─────────────────────────────────────────────────────────────
 * Instead of boring progress bars, skills are displayed in a
 * responsive Bento-style grid. Each card:
 *  1. Hover: 3D tilt via CSS perspective + transform
 *  2. Hover: neon glow matching the category's accent color
 *  3. Skills listed as badges (no fake progress bars)
 *  4. Scroll-triggered stagger entrance
 *
 * BENTO LAYOUT:
 *  Desktop: 3-col grid where some cells span 2 columns
 *  Mobile:  Single column, cards stack naturally
 *
 * TO PERSONALISE:
 *  - Edit skillGroups in src/lib/data.ts (not here!)
 *  - Change the accent color per group in data.ts
 */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { skillGroups }   from "@/lib/data";
import { cn }            from "@/lib/utils";
import type { SkillGroup } from "@/types";

/* ── Bento cell tilt hook ─────────────────────────────────── */
function useTilt(strength = 15) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect    = ref.current.getBoundingClientRect();
    const centreX = rect.left + rect.width / 2;
    const centreY = rect.top  + rect.height / 2;
    const pctX    = (e.clientX - centreX) / (rect.width / 2);
    const pctY    = (e.clientY - centreY) / (rect.height / 2);
    setTilt({ x: pctY * -strength, y: pctX * strength });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return { ref, tilt, hovered, setHovered, handleMouseMove, handleMouseLeave };
}

/* ── Individual Bento Card ────────────────────────────────── */
function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, tilt, hovered, setHovered, handleMouseMove, handleMouseLeave } =
    useTilt(10);

  // First two cards span 2 columns on desktop for visual rhythm
  const isWide = index === 0 || index === 3;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group relative rounded-2xl border border-canvas-border bg-canvas-muted p-6 cursor-default",
        "transition-colors duration-300",
        isWide ? "md:col-span-2" : "md:col-span-1"
      )}
      style={{
        // 3D tilt transform
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.02 : 1})`,
        transition: "transform 0.15s ease, box-shadow 0.3s ease",
        // Dynamic glow color from data
        boxShadow: hovered
          ? `0 0 35px ${group.accent}30, 0 4px 24px rgba(0,0,0,0.5)`
          : "0 4px 24px rgba(0,0,0,0.3)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── Gradient border on hover ──────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${group.accent}15, transparent 60%)`,
        }}
      />

      {/* ── Card header ──────────────────────────────── */}
      <div className="mb-5 flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
          style={{ background: `${group.accent}18` }}
        >
          {group.icon}
        </span>
        <div>
          <h3 className="text-sm font-semibold text-text-primary">
            {group.category}
          </h3>
          <p className="text-[11px] text-text-muted">
            {group.skills.length} skills
          </p>
        </div>

        {/* Accent dot — glows on hover */}
        <motion.div
          className="ml-auto h-2 w-2 rounded-full"
          style={{ background: group.accent }}
          animate={{ opacity: hovered ? 1 : 0.3, scale: hovered ? 1.4 : 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* ── Skills as badges ─────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <motion.span
            key={skill.name}
            className="relative inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200"
            style={{
              color:      hovered ? group.accent : "#a1a1aa",
              background: hovered ? `${group.accent}12` : "rgba(255,255,255,0.04)",
              border:     `1px solid ${hovered ? group.accent + "30" : "#27272a"}`,
            }}
            // Skill proficiency shown by opacity
            initial={{ opacity: skill.level / 5 * 0.7 + 0.3 }}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>

      {/* ── Proficiency visual (replaces bars) ────────── */}
      {/* Five dots = proficiency level */}
      <div className="mt-5 pt-4 border-t border-canvas-border/50">
        <div className="flex items-center justify-between text-[10px] text-text-muted">
          <span>Proficiency range</span>
          <div className="flex gap-1">
            {[1,2,3,4,5].map((dot) => (
              <div
                key={dot}
                className="h-1.5 w-4 rounded-full transition-colors duration-300"
                style={{
                  background: dot <= Math.max(...group.skills.map((s) => s.level))
                    ? group.accent
                    : "#27272a",
                  opacity: hovered ? 1 : 0.6,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export function TechStackSection() {
  return (
    <SectionWrapper id="skills" className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <motion.span
            className="font-mono text-xs text-accent-400 tracking-widest uppercase"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            02 · Technical Arsenal
          </motion.span>
          <motion.h2
            className="font-display text-3xl font-bold text-text-primary sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The tools I reach for.
          </motion.h2>
          <motion.p
            className="max-w-lg text-sm text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Hover each card to explore. Opacity of each badge reflects
            how deeply I&apos;ve used it in production.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
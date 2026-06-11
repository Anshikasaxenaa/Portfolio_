"use client";

/**
 * PROJECT CARD + PROJECTS SECTION
 * ─────────────────────────────────────────────────────────────
 * Each card shows a full case-study breakdown:
 *  - Problem → Solution → Tech Stack → Metrics
 *
 * Card interactions:
 *  1. Hover: gradient overlay slides up from bottom
 *  2. Hover: tech badges glow
 *  3. Hover: CTA links appear with spring
 *  4. Scroll-triggered stagger entrance
 *
 * TO PERSONALISE:
 *  - Edit projects array in src/lib/data.ts
 *  - Add real screenshots to /public/projects/
 *  - Update metrics with actual numbers from your projects
 */

import { useState }           from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, ExternalLink, TrendingUp, Zap, CheckCircle2,
} from "lucide-react";
import { SectionWrapper }    from "@/components/ui/SectionWrapper";
import { MagneticButton }    from "@/components/ui/MagneticButton";
import { projects }          from "@/lib/data";
import { cn }                from "@/lib/utils";
import type { Project }      from "@/types";

/* ── Project Card ─────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isReversed = index % 2 !== 0; // alternate layout

  return (
    <motion.article
      className={cn(
        "group relative grid grid-cols-1 gap-8 rounded-3xl border border-canvas-border bg-canvas-muted p-8",
        "transition-all duration-300 hover:border-canvas-border/80",
        isReversed ? "lg:grid-cols-[1fr_1.3fr]" : "lg:grid-cols-[1.3fr_1fr]",
      )}
      style={{
        boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
      }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Hover gradient overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          `bg-gradient-to-br ${project.color}`,
        )}
      />

      {/* ── TEXT SIDE ─────────────────────────────────── */}
      <div
        className={cn(
          "relative z-10 flex flex-col justify-between gap-6",
          isReversed ? "lg:order-2" : "lg:order-1",
        )}
      >
        {/* Header */}
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {/* Featured badge */}
            {project.featured && (
              <span className="rounded-full bg-accent-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-accent-400 border border-accent-500/25">
                ★ Featured Project
              </span>
            )}
            {/* Index */}
            <span className="font-mono text-[10px] text-text-muted">
              0{index + 1}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-text-primary leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-text-secondary italic">
            {project.tagline}
          </p>
        </div>

        {/* Problem → Solution accordion */}
        <div className="space-y-4">
          {/* Problem */}
          <div className="rounded-xl border border-canvas-border bg-canvas-subtle/60 p-4">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-rose-400 uppercase tracking-wider">
              <Zap size={11} />
              The Problem
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-xl border border-canvas-border bg-canvas-subtle/60 p-4">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              <CheckCircle2 size={11} />
              My Solution
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech stack badges */}
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-widest text-text-muted">
            Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-all duration-200 group-hover:border-opacity-50"
                style={{
                  color:        tech.color ?? "#a1a1aa",
                  borderColor:  tech.color ? `${tech.color}40` : "#27272a",
                  background:   tech.color ? `${tech.color}10` : "rgba(255,255,255,0.03)",
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <MagneticButton href={project.githubUrl} variant="secondary" className="text-xs gap-1.5 px-4 py-2">
              <Github size={12} />
              Source Code
            </MagneticButton>
          )}
          {project.liveUrl && (
            <MagneticButton href={project.liveUrl} variant="primary" className="text-xs gap-1.5 px-4 py-2">
              <ExternalLink size={12} />
              Live Demo
            </MagneticButton>
          )}
        </div>
      </div>

      {/* ── METRICS / VISUAL SIDE ─────────────────────── */}
      <div
        className={cn(
          "relative z-10 flex flex-col gap-4",
          isReversed ? "lg:order-1" : "lg:order-2",
        )}
      >
        {/* Impact metrics — the recruiter's eye magnet */}
        <div className="rounded-2xl border border-canvas-border bg-canvas-subtle p-5 h-full flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-accent-400" />
            <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">
              Impact & Metrics
            </span>
          </div>

          <ul className="space-y-3 flex-1">
            {project.metrics.map((metric, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-xs text-text-secondary"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              >
                {/* Animated metric bullet */}
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-[9px] font-bold text-accent-400">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{metric}</span>
              </motion.li>
            ))}
          </ul>

          {/* Fake "Lighthouse score" widget — purely decorative, REMOVE if it's not real */}
          <div className="mt-auto rounded-xl bg-canvas-muted p-3.5 border border-canvas-border">
            <p className="text-[9px] text-text-muted uppercase tracking-widest mb-2.5">
              Lighthouse · Production
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[
                // CHANGE: Replace with your real Lighthouse scores from https://pagespeed.web.dev/
                { label: "Perf",  score: 96, color: "#10b981" },
                { label: "A11y",  score: 95, color: "#10b981" },
                { label: "SEO",   score: 100, color: "#10b981" },
                { label: "Best",  score: 93, color: "#10b981" },
              ].map(({ label, score, color }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="text-sm font-bold" style={{ color }}>
                    {score}
                  </span>
                  <span className="text-[9px] text-text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-3">
          <motion.span
            className="font-mono text-xs text-accent-400 tracking-widest uppercase"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            04 · Selected Work
          </motion.span>
          <motion.h2
            className="font-display text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Things I&apos;ve shipped.
          </motion.h2>
          <motion.p
            className="max-w-lg text-sm text-text-secondary"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Each project has a real problem statement, technical solution, and
            measurable outcome. No tutorial clones.
          </motion.p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
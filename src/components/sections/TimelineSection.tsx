"use client";

/**
 * TIMELINE / JOURNEY SECTION
 * ─────────────────────────────────────────────────────────────
 * A vertical timeline with:
 *  1. A growing line that draws itself as you scroll
 *  2. Each item alternates left/right on desktop (centred on mobile)
 *  3. Type icons (internship, education, achievement)
 *  4. Scroll-triggered entrance per card
 *
 * TO PERSONALISE:
 *  - Edit timelineItems in src/lib/data.ts
 *  - Type emojis / colors are in typeConfig below
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef }                           from "react";
import { ExternalLink }                     from "lucide-react";
import { SectionWrapper }                   from "@/components/ui/SectionWrapper";
import { timelineItems }                    from "@/lib/data";
import { cn }                               from "@/lib/utils";
import type { TimelineItem }                from "@/types";

/* ── Type config — icon + color per timeline event type ──── */
const typeConfig: Record<TimelineItem["type"], { emoji: string; color: string; bg: string }> = {
  internship:  { emoji: "💼", color: "#3b82f6", bg: "rgba(59,130,246,0.12)" },
  bootcamp:    { emoji: "🚀", color: "#10b981", bg: "rgba(16,185,129,0.12)" },
  education:   { emoji: "🎓", color: "#8b5cf6", bg: "rgba(139,92,246,0.12)" },
  achievement: { emoji: "🏆", color: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
  project:     { emoji: "🛠️", color: "#06b6d4", bg: "rgba(6,182,212,0.12)" },
};

/* ── Individual timeline card ─────────────────────────────── */
function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const isLeft   = index % 2 === 0;  // alternating layout on desktop
  const config   = typeConfig[item.type];

  return (
    <div
      className={cn(
        "relative flex w-full items-start gap-0",
        "md:gap-8",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* ── Half-width content (desktop) ──────────────── */}
      <div className={cn("hidden md:flex md:w-[calc(50%-28px)]", isLeft ? "justify-end" : "justify-start")}>
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <TimelineCardContent item={item} config={config} />
        </motion.div>
      </div>

      {/* ── Centre dot ────────────────────────────────── */}
      <div className="relative z-10 flex flex-shrink-0 flex-col items-center">
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 text-xl"
          style={{
            borderColor: config.color,
            background:  config.bg,
            boxShadow:   `0 0 16px ${config.color}40`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200, delay: 0.05 }}
        >
          {config.emoji}
        </motion.div>
      </div>

      {/* ── Mobile & right-side content ───────────────── */}
      <div className={cn("flex-1 pb-12 md:w-[calc(50%-28px)] md:flex-none", isLeft ? "md:hidden" : "md:flex md:flex-col")}>
        <motion.div
          className="mt-2 md:max-w-sm"
          initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Mobile also gets content */}
          <div className="md:hidden mt-2">
            <TimelineCardContent item={item} config={config} />
          </div>
          {/* Desktop right-side */}
          {!isLeft && (
            <div className="hidden md:block">
              <TimelineCardContent item={item} config={config} />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function TimelineCardContent({
  item,
  config,
}: {
  item: TimelineItem;
  config: { emoji: string; color: string; bg: string };
}) {
  return (
    <div
      className="group relative rounded-2xl border border-canvas-border bg-canvas-muted p-5 transition-all duration-300 hover:border-opacity-50"
      style={{
        // @ts-expect-error — CSS variable trick for hover glow
        "--glow": config.color,
      }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${config.color}10, transparent 70%)` }}
      />

      {/* Period badge */}
      <div className="mb-3 flex items-center gap-2">
        <span
          className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide"
          style={{ color: config.color, background: config.bg }}
        >
          {item.type.toUpperCase()}
        </span>
        <span className="text-[11px] text-text-muted font-mono">{item.period}</span>
      </div>

      <h3 className="text-sm font-bold text-text-primary leading-tight">{item.title}</h3>
      <p className="mt-0.5 text-xs text-accent-400 font-medium">{item.organisation}</p>

      <p className="mt-3 text-xs text-text-secondary leading-relaxed">{item.description}</p>

      {/* Highlights */}
      <ul className="mt-3 space-y-1.5">
        {item.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-[11px] text-text-secondary">
            <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: config.color }} />
            {h}
          </li>
        ))}
      </ul>

      {/* Skills */}
      {item.skills && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.skills.map((s) => (
            <span key={s} className="tech-badge text-[10px] px-2 py-0.5">
              {s}
            </span>
          ))}
        </div>
      )}

      {/* External link */}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-[11px] text-text-muted hover:text-accent-400 transition-colors"
        >
          View details <ExternalLink size={10} />
        </a>
      )}
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target:  containerRef,
    offset: ["start 80%", "end 20%"],
  });
  // The vertical line "draws" itself as you scroll
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionWrapper id="timeline" className="py-24">
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
            03 · Journey
          </motion.span>
          <motion.h2
            className="font-display text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How I got here.
          </motion.h2>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-canvas-border md:left-1/2">
            <motion.div
              className="h-full w-full origin-top"
              style={{
                scaleY:     lineScaleY,
                background: "linear-gradient(to bottom, #3b82f6, #10b981, #8b5cf6)",
              }}
            />
          </div>

          {/* Cards */}
          <div className="relative flex flex-col pl-16 md:pl-0">
            {timelineItems.map((item, i) => (
              <TimelineCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
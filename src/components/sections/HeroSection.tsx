"use client";

/**
 * HERO SECTION
 * ─────────────────────────────────────────────────────────────
 * The first impression. Everything here fires on mount (no scroll
 * trigger) for immediate impact.
 *
 * ANIMATIONS:
 *  1. Eyebrow badge slides down (delay 0.1s)
 *  2. Main headline: word-by-word stagger (delay 0.3s)
 *  3. Subtitle fades up (delay 0.7s)
 *  4. CTA buttons pop in with spring (delay 0.9s)
 *  5. Floating UI card: continuous float animation
 *  6. Scan-line effect on the floating card (ambient)
 *
 * TO PERSONALISE:
 *  - Change HEADLINE_WORDS to your name split into words
 *  - Update SUBTITLE with your bio
 *  - The floating card shows a fake "Live Stats" widget — replace
 *    it with a screenshot of your best project or a code snippet
 */

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { MagneticButton }  from "@/components/ui/MagneticButton";
import { personalInfo }    from "@/lib/data";

// ── Stagger config for hero entrance ──────────────────────────
const heroContainer = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemUp = {
  hidden:  { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

// Word-level stagger for headline
const wordContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const word = {
  hidden:  { opacity: 0, y: 40, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

// CHANGE: Split your headline into words for the stagger effect
// Format: [ ["First line words"], ["Second line words"] ]
const HEADLINE = [
  ["I", "Build", "Things"],
  ["for", "the", "Web."],
];

export function HeroSection() {
  const scrollToWork = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden dot-grid"
    >
      {/* ── Ambient glow orbs ──────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/12 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-violet-500/8 blur-[80px]" />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

        {/* ── LEFT: Text content ──────────────────────────── */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemUp} className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-medium text-accent-400">
              <Sparkles size={11} className="animate-pulse" />
              {/* CHANGE: Your availability status */}
              Open to SDE & Frontend Roles · 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-text-muted">
              <MapPin size={11} />
              {/* CHANGE: Your location */}
              {personalInfo.location}
            </span>
          </motion.div>

          {/* Main headline — word-by-word stagger */}
          <motion.div variants={itemUp}>
            <motion.h1
              className="font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl perspective-[800px]"
              variants={wordContainer}
              initial="hidden"
              animate="visible"
            >
              {HEADLINE.map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  {line.map((w, wi) => (
                    <motion.span
                      key={wi}
                      variants={word}
                      className={`inline-block mr-[0.25em] ${
                        // CHANGE: Adjust which words get the gradient treatment
                        li === 0 && wi >= 1
                          ? "gradient-text"
                          : "text-text-primary"
                      }`}
                    >
                      {w}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemUp}
            className="max-w-lg text-base text-text-secondary leading-relaxed"
          >
            {/* CHANGE: Your bio — keep it to 2-3 lines, punchy */}
            {personalInfo.bio}
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={itemUp}
            className="flex flex-wrap gap-6 text-sm"
          >
            {[
              // CHANGE: Your actual numbers
              { label: "Projects Shipped",      value: "5+" },
              { label: "LeetCode Problems",     value: "200+" },
              { label: "GitHub Contributions",  value: "100+" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-bold text-text-primary font-display">
                  {value}
                </span>
                <span className="text-text-muted text-xs mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemUp} className="flex flex-wrap gap-3 pt-2">
            <MagneticButton
              onClick={scrollToWork}
              variant="primary"
              className="gap-2"
              data-cursor-label="View"
            >
              View My Work
              <ArrowRight size={15} />
            </MagneticButton>

            <MagneticButton
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              variant="secondary"
              className="gap-2"
            >
              <Linkedin size={14} />
              {/* CHANGE: Your LinkedIn slug */}
              Connect on LinkedIn
            </MagneticButton>

            <MagneticButton
              href={`https://github.com/${personalInfo.github}`}
              variant="ghost"
              className="gap-2"
            >
              <Github size={14} />
              GitHub
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Floating UI element ──────────────────── */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating container */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-md"
          >
            {/* Main card — fake IDE / dashboard widget */}
            <div className="glass rounded-2xl p-6 shimmer-border overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] text-text-muted font-mono">
                  {/* CHANGE: Your name or a project name */}
                  [Anshika Saxena]/portfolio · main
                </span>
              </div>

              {/* Code snippet — replace with your real code */}
              <pre className="text-xs font-mono leading-relaxed text-text-secondary">
                <code>
                  {[
                    { type: "keyword", text: "const " },
                    { type: "fn", text: "developer" },
                    { type: "plain", text: " = {" },
                  ].map((t, i) => (
                    <span key={i} className={
                      t.type === "keyword" ? "text-violet-400" :
                      t.type === "fn" ? "text-accent-400" : "text-text-secondary"
                    }>{t.text}</span>
                  ))}
                  {`\n  `}<span className="text-emerald-400">{"name"}</span>
                  {`: `}<span className="text-amber-300">{`"${personalInfo.name}"`}</span>
                  {`,\n  `}<span className="text-emerald-400">{"role"}</span>
                  {`: `}<span className="text-amber-300">{`"SDE · Full-Stack"`}</span>
                  {`,\n  `}<span className="text-emerald-400">{"stack"}</span>
                  {`: [`}
                  {[`"React"`, `"Node"`, `"TS"`].map((s, i, a) => (
                    <span key={s}>
                      <span className="text-amber-300">{s}</span>
                      {i < a.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  {`],\n  `}
                  <span className="text-emerald-400">{"openToWork"}</span>
                  {`: `}<span className="text-blue-400">{"true"}</span>
                  {`\n}`}
                </code>
              </pre>

              {/* Divider */}
              <div className="my-5 h-px bg-canvas-border" />

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  // CHANGE: Your real numbers
                  { label: "Projects", value: "10+",   color: "text-accent-400" },
                  { label: "DSA",      value: "200+",  color: "text-emerald-400" },
                  { label: "GitHub",   value: "150+",  color: "text-violet-400" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="rounded-lg bg-canvas-muted p-3 text-center">
                    <div className={`text-lg font-bold font-display ${color}`}>{value}</div>
                    <div className="text-[10px] text-text-muted mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Scan line ambient animation */}
              <motion.div
                className="pointer-events-none absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent"
                animate={{ y: ["-100%", "400%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              />
            </div>

            {/* Decorative floating chips */}
            {[
              { text: "React 19",       delay: 0,    x: -40, y: -30 },
              { text: "Node.js",        delay: 0.5,  x: 30,  y: -20 },
              { text: "Open to work ✓", delay: 1,    x: -30, y: 280 },
            ].map(({ text, delay, x, y }) => (
              <motion.div
                key={text}
                className="absolute glass rounded-full px-3 py-1.5 text-[11px] font-medium text-text-secondary border border-canvas-border/50"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] text-text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          className="h-8 w-[1px] bg-gradient-to-b from-accent-500 to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
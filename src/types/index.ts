/* ============================================================
   TYPES.TS — Shared TypeScript interfaces for portfolio data
   ============================================================
   Define your data shapes here. Components import from this
   file, giving you a single place to adjust data structures.
   ============================================================ */

/* ── Project ──────────────────────────────────────────────── */
export interface ProjectTech {
  name: string;
  color?: string; // optional accent color for the badge
}

export interface Project {
  id:            string;
  title:         string;
  tagline:       string;       // one-line elevator pitch
  problem:       string;       // the pain point you solved
  solution:      string;       // what you built and how
  techStack:     ProjectTech[];
  metrics:       string[];     // impact bullets ("API latency ↓ 40%")
  githubUrl?:    string;
  liveUrl?:      string;
  imageUrl?:     string;       // optional project screenshot
  featured:      boolean;
  color:         string;       // gradient accent for the card
}

/* ── Timeline / Experience ────────────────────────────────── */
export interface TimelineItem {
  id:          string;
  type:        "internship" | "bootcamp" | "education" | "achievement" | "project";
  title:       string;
  organisation: string;
  period:      string;         // e.g. "Jun 2024 – Aug 2024"
  description: string;
  highlights:  string[];       // key bullet points
  skills?:     string[];
  link?:       string;
}

/* ── Skill / Tech stack ───────────────────────────────────── */
export interface SkillItem {
  name:  string;
  icon?: string;  // path to icon or emoji
  level: 1 | 2 | 3 | 4 | 5;  // proficiency (used for visual weight)
}

export interface SkillGroup {
  category: string;
  icon:     string;            // lucide icon name or emoji
  skills:   SkillItem[];
  accent:   string;            // CSS color for glow on hover
}

/* ── Social links ─────────────────────────────────────────── */
export interface SocialLink {
  name:  string;
  url:   string;
  icon:  string;  // lucide icon name
}
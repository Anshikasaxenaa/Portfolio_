import type { Project, TimelineItem, SkillGroup, SocialLink } from "@/types";

/* ============================================================
   DATA.TS — YOUR SINGLE SOURCE OF TRUTH
   ============================================================
   Replace every [PLACEHOLDER] with your real information.
   Components import from here — you never touch component
   files to update content.
   ============================================================ */

/* ── PERSONAL INFO ────────────────────────────────────────── */
export const personalInfo = {
  // CHANGE: Your full name (shown in hero)
  name:       "Anshika Saxena",
  // CHANGE: Your role tagline
  title:      "Full-Stack Developer & SDE Aspirant",
  // CHANGE: 2-3 sentence bio for the hero section
  bio:        "Final-year B.Tech CSE student at [College]. I build production-grade full-stack apps and obsess over clean architecture, performance, and great developer experience. Looking for SDE / Full-Stack roles.",
  // CHANGE: Your location
  location:   "India",
  // CHANGE: Your professional email
  email:      "anshikasaxena314@gmail.com",
  // CHANGE: GitHub username
  github:     "https://github.com/Anshikasaxenaa",
  // CHANGE: LinkedIn profile slug
  linkedin:   "https://www.linkedin.com/in/anshika-saxena-87119a267/",
  // CHANGE: LeetCode username
  leetcode:   "https://leetcode.com/u/anshikasaxena135/",
  // CHANGE: Your resume Google Drive or direct link
  resumeUrl:  "https://drive.google.com/your-resume-link",
};

/* ── SOCIAL LINKS ─────────────────────────────────────────── */
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    // CHANGE: Your GitHub URL
    url:  `https://github.com/${personalInfo.github}`,
    icon: "Github",
  },
  {
    name: "LinkedIn",
    // CHANGE: Your LinkedIn URL
    url:  `https://linkedin.com/in/${personalInfo.linkedin}`,
    icon: "Linkedin",
  },
  {
    name: "LeetCode",
    // CHANGE: Your LeetCode URL
    url:  `https://leetcode.com/${personalInfo.leetcode}`,
    icon: "Code2",
  },
  {
    name: "Email",
    url:  `mailto:${personalInfo.email}`,
    icon: "Mail",
  },
];

/* ── SKILL GROUPS (Bento Grid) ───────────────────────────── */
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon:      "🎨",
    // CHANGE: Add/remove your actual skills
    skills: [
      { name: "React.js",       level: 5 },
      { name: "Next.js",        level: 4 },
      { name: "TypeScript",     level: 4 },
      { name: "Tailwind CSS",   level: 5 },
      { name: "Framer Motion",  level: 3 },
      { name: "Redux Toolkit",  level: 4 },
    ],
    accent: "#3b82f6", // cyber-blue
  },
  {
    category: "Backend",
    icon:      "⚙️",
    skills: [
      { name: "Node.js",        level: 4 },
      { name: "Express.js",     level: 4 },
      { name: "REST APIs",      level: 5 },
      { name: "WebSockets",     level: 3 },
      { name: "JWT / OAuth",    level: 3 },
      // CHANGE: Add your backend skills
    ],
    accent: "#10b981", // emerald
  },
  {
    category: "Databases",
    icon:      "🗄️",
    skills: [
      { name: "MongoDB",        level: 4 },
      { name: "PostgreSQL",     level: 3 },
      { name: "MySQL",          level: 3 },
      { name: "Mongoose",       level: 4 },
    ],
    accent: "#f59e0b", // amber
  },
  {
    category: "Languages",
    icon:      "💻",
    skills: [
      { name: "Java",     level: 4 },
      { name: "TypeScript",     level: 4 },
      { name: "JavaScript",           level: 4 },
      // CHANGE: Add your language stack
    ],
    accent: "#8b5cf6", // violet
  },
  {
    category: "Dev Tools & Cloud",
    icon:      "🛠️",
    skills: [
      { name: "Git & GitHub",   level: 5 },
      { name: "Vercel",         level: 4 },
      { name: "Postman",        level: 5 },
      { name: "Linux / Bash",   level: 3 },
      // CHANGE: Add your actual tools
    ],
    accent: "#06b6d4", // cyan
  },
  {
    category: "AI & Data",
    icon:      "🤖",
    skills: [
      { name: "OpenAI API",     level: 3 },
      { name: "Gemini API",     level: 3 },
      // CHANGE: Add your AI/ML exposure
    ],
    accent: "#ec4899", // pink
  },
];

/* ── PROJECTS ──────────────────────────────────────────────── */
export const projects: Project[] = [
  {
    id:      "prepai",
    // CHANGE: Your project name
    title:   "PrepAI — AI Interview Platform",
    tagline: "Full-stack SaaS that turns nervous candidates into confident hires.",
    // CHANGE: Describe the real pain point
    problem:
      "Interview preparation is fragmented — candidates juggle 5+ tools for mock interviews, resume reviews, and DSA practice, losing hours to context switching.",
    // CHANGE: What you actually built
    solution:
      "Built a unified MERN-stack platform with six integrated modules: AI mock interviews (Gemini API), resume ATS scoring, a Monaco Editor coding sandbox, Recharts performance analytics, learning roadmaps, and an AI chatbot widget.",
    techStack: [
      { name: "React",       color: "#61dafb" },
      { name: "Node.js",     color: "#8cc84b" },
      { name: "MongoDB",     color: "#4db33d" },
      { name: "Gemini API",  color: "#4285f4" },
      { name: "Cloudinary",  color: "#3448c5" },
      { name: "JWT",         color: "#f59e0b" },
      { name: "Tailwind",    color: "#38bdf8" },
    ],
    // CHANGE: Real measurable impact — this is your differentiator!
    metrics: [
      "Auth flow reduced to <1.2s via JWT refresh token rotation",
      "Resume ATS parser achieves 91% keyword extraction accuracy",
      "Monaco Editor sandbox loads in <800ms via code-splitting",
      "Glassmorphism UI built with 0 external component libraries",
    ],
    // CHANGE: Your actual GitHub repo
    githubUrl: "https://github.com/Anshikasaxenaa/careerpilot-ai",
    liveUrl:   "https://prepai.vercel.app",
    imageUrl:  "/projects/prepai.png",
    featured:  true,
    color:     "from-blue-500/20 to-violet-500/20",
  },
  {
    id:      "project-2",
    // CHANGE: Your second project
    title:   "[Project 2 Title]",
    tagline: "[One-line description of what it does]",
    problem: "[What problem did this solve? Who was affected?]",
    solution:
      "[How did you solve it? What was your technical approach?]",
    techStack: [
      { name: "Java",        color: "#f89820" },
      { name: "Spring Boot", color: "#6db33f" },
      { name: "MySQL",       color: "#4479a1" },
      // CHANGE: Your actual stack
    ],
    metrics: [
      // CHANGE: Real metrics — latency, accuracy, users, performance gains
      "[Metric 1 — e.g. Query time reduced from 2.1s → 340ms via indexing]",
      "[Metric 2 — e.g. REST API handles 500 concurrent requests]",
      "[Metric 3 — e.g. 95% unit test coverage with JUnit 5]",
    ],
    githubUrl: "https://github.com/[your-github]/[repo]",
    imageUrl:  "/projects/project2.png",
    featured:  true,
    color:     "from-emerald-500/20 to-cyan-500/20",
  },
  {
    id:      "project-3",
    // CHANGE: Your third project
    title:   "[Project 3 Title]",
    tagline: "[One-line description]",
    problem: "[Pain point solved]",
    solution: "[Technical solution]",
    techStack: [
      { name: "Python",        color: "#3776ab" },
      { name: "scikit-learn",  color: "#f7931e" },
      { name: "Flask",         color: "#ffffff" },
      // CHANGE: Your actual stack
    ],
    metrics: [
      "[Metric 1]",
      "[Metric 2]",
    ],
    githubUrl: "https://github.com/[your-github]/[repo]",
    imageUrl:  "/projects/project3.png",
    featured:  true,
    color:     "from-orange-500/20 to-rose-500/20",
  },
];

/* ── TIMELINE / EXPERIENCE ────────────────────────────────── */
export const timelineItems: TimelineItem[] = [
  {
    id:           "internship-1",
    type:         "internship",
    // CHANGE: Your actual internship
    title:        "[Your Role] Intern",
    organisation: "[Company Name]",
    period:       "[Month Year] – [Month Year]",
    description:
      "[What did you do? Be specific — which product/feature/system did you work on?]",
    highlights: [
      // CHANGE: Real bullet points from your experience
      "[Impact point 1 — e.g. Migrated legacy jQuery codebase to React, reducing bundle size by 42%]",
      "[Impact point 2 — e.g. Built REST API endpoints that serve 10K+ daily active users]",
      "[Impact point 3]",
    ],
    skills: ["React", "Node.js", "REST APIs"],
    link:  "https://linkedin.com/in/[your-linkedin]",
  },
  {
    id:           "bootcamp-1",
    type:         "bootcamp",
    // CHANGE: Your actual bootcamp / training
    title:        "[Bootcamp / Training Name]",
    organisation: "[Platform / Organisation]",
    period:       "[Month Year] – [Month Year]",
    description:  "[What did you learn? What did you build?]",
    highlights: [
      "[Highlight 1]",
      "[Highlight 2]",
    ],
    skills: ["[Skill 1]", "[Skill 2]"],
  },
  {
    id:           "education",
    type:         "education",
    // CHANGE: Your college and degree
    title:        "B.Tech Computer Science Engineering",
    organisation: "[Your College Name]",
    period:       "2021 – 2025",
    description:
      "Relevant coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.",
    highlights: [
      // CHANGE: Real achievements
      "[Achievement — e.g. GPA: 8.4/10]",
      "[Activity — e.g. Technical Secretary, Computer Science Club]",
      "[Achievement — e.g. Qualified for Smart India Hackathon 2024]",
    ],
  },
  {
    id:           "achievement-1",
    type:         "achievement",
    // CHANGE: A notable achievement
    title:        "[Hackathon / Competition Win]",
    organisation: "[Host Organisation]",
    period:       "[Month Year]",
    description:  "[What was the problem statement? What did you build?]",
    highlights: [
      "[Placement — e.g. Top 10 out of 200+ teams]",
      "[What you built]",
    ],
  },
];
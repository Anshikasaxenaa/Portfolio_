import type { Project, TimelineItem, SkillGroup, SocialLink } from "@/types";

/* ============================================================
   DATA.TS — YOUR SINGLE SOURCE OF TRUTH
   ============================================================ */

/* ── PERSONAL INFO ────────────────────────────────────────── */
export const personalInfo = {
  name:       "Anshika Saxena",
  title:      "Software Engineer | Full Stack Developer",
  bio:        "Final-year B.Tech Computer Science student with strong foundations in Data Structures Algorithms, Core Java, and Full Stack Development. Seeking Software Engineer and Full Stack Developer opportunities where I can apply my technical skills to build scalable and impactful solutions.",
  location:   "Jaipur, Rajasthan",
  email:      "anshikasaxena314@gmail.com",
  github:     "Anshikasaxenaa",
  linkedin:   "anshika-saxena-87119a267",
  leetcode:   "anshikasaxena135",
  resumeUrl:  "#", 
};

/* ── SOCIAL LINKS ─────────────────────────────────────────── */
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url:  `https://github.com/${personalInfo.github}`,
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url:  `https://linkedin.com/in/${personalInfo.linkedin}`,
    icon: "Linkedin",
  },
  {
    name: "LeetCode",
    url:  `https://leetcode.com/u/${personalInfo.leetcode}`,
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
    category: "Languages",
    icon:      "💻",
    skills: [
      { name: "Java",           level: 5 },
      { name: "JavaScript",     level: 5 },
      { name: "TypeScript",     level: 4 },
      { name: "HTML/CSS",       level: 5 },
      { name: "SQL",            level: 4 },
    ],
    accent: "#8b5cf6", // violet
  },
  {
    category: "Frameworks & Libraries",
    icon:      "🎨",
    skills: [
      { name: "React.js",       level: 5 },
      { name: "Next.js",        level: 4 },
      { name: "Node.js",        level: 4 },
      { name: "Express.js",     level: 4 },
      { name: "TailwindCSS",    level: 5 },
    ],
    accent: "#3b82f6", // cyber-blue
  },
  {
    category: "Databases",
    icon:      "🗄️",
    skills: [
      { name: "MySQL",          level: 4 },
      { name: "MongoDB",        level: 4 },
    ],
    accent: "#f59e0b", // amber
  },
  {
    category: "Core CS Subjects",
    icon:      "⚙️",
    skills: [
      { name: "Data Structures & Algorithms", level: 5 },
      { name: "Object Oriented Programming", level: 5 },
      { name: "Database Management Systems", level: 4 },
      { name: "Operating Systems", level: 4 },
      { name: "Computer Networks", level: 3 },
    ],
    accent: "#10b981", // emerald
  },
  {
    category: "Soft Skills & Languages",
    icon:      "🛠️",
    skills: [
      { name: "Problem Solving", level: 5 },
      { name: "Team Collaboration", level: 5 },
      { name: "Communication", level: 5 },
      { name: "Hindi (Native)", level: 5 },
      { name: "English (Advanced)", level: 4 },
      { name: "Spanish (Beginner)", level: 2 },
    ],
    accent: "#ec4899", // pink
  },
];

/* ── PROJECTS ──────────────────────────────────────────────── */
export const projects: Project[] = [
  {
    id:      "ai-powered-interview-platform",
    title:   "AI-Powered Interview Platform",
    tagline: "A full-stack interview preparation platform using React, Node.js, Express, MongoDB, and AI APIs.",
    problem: "Candidates often lack real-time interview simulation and automated feedback to improve their performance.",
    solution: "Implemented real-time interview simulation and automated feedback generation. Added authentication, interview history, and performance tracking features.",
    techStack: [
      { name: "React",       color: "#61dafb" },
      { name: "Node.js",     color: "#8cc84b" },
      { name: "Express",     color: "#ffffff" },
      { name: "MongoDB",     color: "#4db33d" },
      { name: "AI APIs",     color: "#4285f4" },
    ],
    metrics: [
      "Real-time interview simulation capabilities",
      "Automated feedback generation for performance improvement",
      "Comprehensive performance tracking and interview history",
    ],
    githubUrl: "https://github.com/Anshikasaxenaa/careerpilot-ai",
    liveUrl:   "#",
    imageUrl:  "/projects/prepai.png", // Keeping default image if specific one is not available
    featured:  true,
    color:     "from-blue-500/20 to-violet-500/20",
  },
  {
    id:      "portfolio-website",
    title:   "Portfolio Website",
    tagline: "A responsive personal portfolio showcasing projects, skills, and contact information.",
    problem: "Needed a professional online presence to effectively showcase technical skills and completed projects.",
    solution: "Created a responsive personal portfolio using Next.js and Tailwind CSS. Deployed on Vercel for fast delivery.",
    techStack: [
      { name: "Next.js",     color: "#ffffff" },
      { name: "Tailwind CSS", color: "#38bdf8" },
      { name: "Vercel",      color: "#000000" },
    ],
    metrics: [
      "Responsive design tailored for multiple devices",
      "Seamless deployment on Vercel",
    ],
    githubUrl: "https://github.com/Anshikasaxenaa/Portfolio_",
    liveUrl:   "https://anshika-saxena-portfolio.vercel.app/", // Placeholder from resume
    imageUrl:  "/projects/project2.png",
    featured:  true,
    color:     "from-emerald-500/20 to-cyan-500/20",
  },
  {
    id:      "post-app",
    title:   "Post App",
    tagline: "A full-stack photo sharing web application built using the MERN stack.",
    problem: "Users needed a platform to upload images from their gallery, add captions, and share them seamlessly.",
    solution: "Built a photo sharing app utilizing the MERN stack. Integrated ImageKit for optimized image storage and fast URL-based delivery.",
    techStack: [
      { name: "MongoDB",     color: "#4db33d" },
      { name: "Express",     color: "#ffffff" },
      { name: "React",       color: "#61dafb" },
      { name: "Node.js",     color: "#8cc84b" },
      { name: "ImageKit",    color: "#f59e0b" },
    ],
    metrics: [
      "Optimized image storage via ImageKit",
      "Fast URL-based delivery of uploaded media",
      "Seamless user experience for sharing with captions",
    ],
    githubUrl: "https://github.com/Anshikasaxenaa/Post_app",
    imageUrl:  "/projects/project3.png",
    featured:  true,
    color:     "from-orange-500/20 to-rose-500/20",
  },
  {
    id:      "image-animation",
    title:   "Image Animation",
    tagline: "Engaging interactive card components that come to life.",
    problem: "Static text lacks engagement, requiring captivating animations to improve user interaction.",
    solution: "Developed interactive card components with stunning hover and click effects to bring text animations to life.",
    techStack: [
      { name: "HTML",        color: "#e34f26" },
      { name: "CSS",         color: "#1572b6" },
      { name: "JavaScript",  color: "#f7df1e" },
    ],
    metrics: [
      "Captivating text animations",
      "Stunning hover and click interactive effects",
    ],
    githubUrl: "https://github.com/Anshikasaxenaa",
    imageUrl:  "/projects/project3.png",
    featured:  false,
    color:     "from-pink-500/20 to-purple-500/20",
  },
];

/* ── TIMELINE / EXPERIENCE ────────────────────────────────── */
export const timelineItems: TimelineItem[] = [
  {
    id:           "education",
    type:         "education",
    title:        "Bachelor of Technology - Computer Science",
    organisation: "Arya College of Engineering and IT",
    period:       "2023 – 2027",
    description:
      "Final-year B.Tech Computer Science student with strong foundations in Data Structures Algorithms, Core Java, Full Stack Development.",
    highlights: [
      "CGPA - 8.7",
    ],
  },
  {
    id:           "extracurricular-1",
    type:         "achievement",
    title:        "Problem Solving & Competitive Programming",
    organisation: "LeetCode & Coding Platforms",
    period:       "Present",
    description:  "Active participant in the competitive programming community to continuously improve algorithmic problem-solving skills.",
    highlights: [
      "Solved 500+ DSA problems across LeetCode and other coding platforms.",
      "Participated in various coding contests and hackathons.",
    ],
  },
  {
    id:           "extracurricular-2",
    type:         "achievement",
    title:        "Open Source & DevOps Learning",
    organisation: "GitHub & Personal Projects",
    period:       "Present",
    description:  "Self-driven exploration of modern development practices.",
    highlights: [
      "Actively learning DevOps tools and cloud technologies.",
      "Contributed to GitHub projects and built personal development projects.",
    ],
  },
];
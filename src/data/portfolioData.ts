export const projects = [
  {
    id: 1,
    title: "AI-Powered Interview Platform",
    description: "An intelligent mock interview platform using large language models. It provides real-time feedback, analyzes facial expressions, and generates dynamic technical questions based on the candidate's resume.",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    image: "/project-1.jpg", 
    imageGradient: "from-terracotta-subtle via-warm-cream to-sage-light",
    link: "https://github.com/Anshikasaxenaa/careerpilot-ai",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A meticulously crafted personal portfolio showcasing advanced Framer Motion animations, a warm editorial design aesthetic, and performant server-side rendering.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/project-2.png", 
    imageGradient: "from-warm-cream via-terracotta-subtle to-warm-sand",
    link: "https://anshika-saxena-portfolio.vercel.app/",
  },
  {
    id: 3,
    title: "Post App",
    description: "A full-stack social media application enabling users to share visual stories. Features secure authentication, real-time image processing, and a highly responsive masonry layout.",
    tags: ["React", "Node.js", "MongoDB", "ImageKit"],
    image: "/project-3.png", 
    imageGradient: "from-sage-light via-warm-cream to-terracotta-subtle",
    link: "https://github.com/Anshikasaxenaa/Post_app",
  },
  {
    id: 4,
    title: "Image Animation",
    description: "An experimental frontend interface exploring complex CSS and JavaScript animations. Focuses on orchestrating fluid transitions and micro-interactions without heavy libraries.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/project-4.jpg", 
    imageGradient: "from-warm-sand via-terracotta-subtle to-sage-light",
    link: "https://github.com/Anshikasaxenaa",
  }
];

export const bio = `I am Anshika Saxena, a final-year B.Tech Computer Science student with strong foundations in Data Structures Algorithms, Core Java, and Full Stack Development. I thrive at the intersection of logic and creativity, building scalable, performant, and impactful solutions.

My approach combines algorithmic efficiency with structural integrity. Whether it's crafting intelligent backends with Node.js and MongoDB, or designing immersive frontend architectures in React and Next.js, I treat every project as an opportunity to push boundaries and solve real-world problems.

I am an active participant in the competitive programming community with over 150+ DSA problems solved across LeetCode and coding platforms. When I'm not coding, you can find me exploring DevOps, learning new cloud technologies, or actively learning AI tools. Let's create something extraordinary together.`;

export const experienceData = [
  {
    id: 1,
    title: "Agentic AI Intern",
    company: "Grras Solutions (P) Ltd",
    location: "Jaipur, Rajasthan",
    date: "June 2026 - Current",
    points: [
      "Learnt and applied Agentic AI concepts to build intelligent assistants capable of reasoning, planning, and executing multi-step tasks.",
      "Assisted in integrating AI models, APIs, and automation tools to create scalable AI-driven solutions."
    ]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology - Computer Science",
    institution: "Arya College of engineering and IT",
    date: "2023 - 2027",
    cgpa: "8.7"
  }
];

export const skillsData = [
  {
    category: "Technical Skills",
    items: ["Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "TailwindCSS"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"]
  },
  {
    category: "AI",
    items: ["Prompt Engineering", "Generative AI", "LLMs", "OpenAI API Integration"]
  },
  {
    category: "Core CS Subjects",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Communication"]
  }
];

export const aboutContent = {
  statement: "I believe digital products should feel like a conversation — intelligent, intuitive, and deeply human.",
  bio: "I'm a creative developer who lives at the intersection of logic and imagination. With a strong foundation in Data Structures and Full Stack development, and a current focus on Agentic AI, I build applications that don't just function—they reason and resonate. Every line of code I write is intentional, every architecture considered.",
  pillars: [
    { title: "Craft", description: "Treating every line of code as an opportunity to build robust, scalable architectures.", shape: "circle" },
    { title: "Clarity", description: "Distilling complex algorithmic problems into elegant, intuitive digital solutions.", shape: "square" },
    { title: "Curiosity", description: "Constantly exploring the frontiers of Agentic AI, DevOps, and cloud technologies.", shape: "line" },
  ],
  personal: {
    text: "When I'm not pushing pixels or solving LeetCode algorithms, you'll find me exploring new AI frameworks and diving into cloud engineering.",
    interests: ["Competitive Programming", "Agentic AI", "Cloud Tech", "Problem Solving"],
  },
  highlight: {
    type: "stat",
    statValue: "150+",
    statLabel: "DSA problems solved across competitive coding platforms.",
  },
};

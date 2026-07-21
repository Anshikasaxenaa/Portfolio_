export const projects = [
  {
    id: 1,
    title: "AI-Powered Interview Platform",
    description: "An intelligent mock interview platform using large language models. It provides real-time feedback, analyzes facial expressions, and generates dynamic technical questions based on the candidate's resume.",
    problem: "Candidates often struggle with interview anxiety and lack realistic, personalized practice environments before crucial job interviews.",
    solution: "An intelligent platform that simulates real interviews, analyzes facial expressions, and dynamically tailors technical questions to the user's resume.",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    image: "/project-1.png", 
    imageGradient: "from-terracotta-subtle via-warm-cream to-sage-light",
    link: "https://github.com/Anshikasaxenaa/careerpilot-ai",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A meticulously crafted personal portfolio showcasing advanced Framer Motion animations, a warm editorial design aesthetic, and performant server-side rendering.",
    problem: "Standard portfolios often feel static and fail to communicate a developer's unique design sensibilities and engineering rigor.",
    solution: "A deeply interactive, server-side rendered application utilizing advanced Framer Motion choreography and a warm editorial aesthetic to stand out.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/project-2.png", 
    imageGradient: "from-warm-cream via-terracotta-subtle to-warm-sand",
    link: "https://anshika-saxena-portfolio.vercel.app",
  },
  {
    id: 3,
    title: "Post App",
    description: "A full-stack social media application enabling users to share visual stories. Features secure authentication, real-time image processing, and a highly responsive masonry layout.",
    problem: "Users needed a highly responsive, secure platform to share visual stories without compromising on image load times or layout stability.",
    solution: "A full-stack social application with real-time image processing, secure JWT authentication, and a dynamic masonry layout for seamless browsing.",
    tags: ["React", "Node.js", "MongoDB", "ImageKit"],
    image: "/project-3.png", 
    imageGradient: "from-sage-light via-warm-cream to-terracotta-subtle",
    link: "https://github.com/Anshikasaxenaa/Post_app",
  },
  {
    id: 4,
    title: "Image Animation",
    description: "An experimental frontend interface exploring complex CSS and JavaScript animations. Focuses on orchestrating fluid transitions and micro-interactions without heavy libraries.",
    problem: "Modern web interfaces require fluid, non-intrusive micro-interactions, but relying on heavy animation libraries can severely impact performance.",
    solution: "An experimental frontend interface built from scratch to orchestrate complex CSS and JavaScript transitions, ensuring optimal rendering speed.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/project-4.png", 
    imageGradient: "from-warm-sand via-terracotta-subtle to-sage-light",
    link: "https://github.com/Anshikasaxenaa",
  },
  {
    id: 5,
    title: "DocuWise",
    description: "A full-stack AI-powered document management platform that enables users to securely upload, organize, summarize, and interact with documents using intelligent AI features. Built with Next.js, Node.js, Express, MongoDB, and Gemini AI.",

    problem: "Managing large collections of documents and extracting key information manually is time-consuming. Existing solutions often lack AI-powered insights, secure authentication, and an intuitive document organization system.",

   solution: "DocuWise combines secure JWT and Google OAuth authentication with AI-powered document summarization, intelligent search, and efficient document management in a modern, responsive interface, helping users quickly organize and understand their documents.",

   tags: [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "Google OAuth",
  "Gemini AI",
  "Tailwind CSS"
],

  image: "/project-5.png",

imageGradient: "from-blue-500 via-cyan-500 to-indigo-600",
    link: "https://docu-wise-dusky.vercel.app",
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

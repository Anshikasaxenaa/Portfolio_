export const projects = [
  {
    id: 1,
    title: "DocuWise",
    description: "A full-stack AI-powered document management platform that enables users to securely upload, organize, summarize, and interact with documents using intelligent AI features. Built with Next.js, Node.js, Express, MongoDB, and Gemini AI.",
    problem: "Managing large collections of documents and extracting key information manually is time-consuming. Existing solutions often lack AI-powered insights, secure authentication, and an intuitive document organization system.",
    solution: "DocuWise combines secure JWT and Google OAuth authentication with AI-powered document summarization, intelligent search, and efficient document management in a modern, responsive interface, helping users quickly organize and understand their documents.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth", "Gemini AI", "Tailwind CSS"],
    image: "/project-5.png",
    imageGradient: "from-blue-500 via-cyan-500 to-indigo-600",
    link: "https://docu-wise-dusky.vercel.app",
  },
  {
    id: 2,
    title: "PrepAI - AI-Powered Interview Platform",
    description: "An intelligent mock interview platform using large language models. It provides real-time feedback, analyzes facial expressions, and generates dynamic technical questions based on the candidate's resume.",
    problem: "Candidates often struggle with interview anxiety and lack realistic, personalized practice environments before crucial job interviews.",
    solution: "An intelligent platform that simulates real interviews, analyzes facial expressions, and dynamically tailors technical questions to the user's resume.",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    image: "/project-1.png", 
    imageGradient: "from-terracotta-subtle via-warm-cream to-sage-light",
    link: "https://github.com/Anshikasaxenaa/careerpilot-ai",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    title: "Image Animation",
    description: "An experimental frontend interface exploring complex CSS and JavaScript animations. Focuses on orchestrating fluid transitions and micro-interactions without heavy libraries.",
    problem: "Modern web interfaces require fluid, non-intrusive micro-interactions, but relying on heavy animation libraries can severely impact performance.",
    solution: "An experimental frontend interface built from scratch to orchestrate complex CSS and JavaScript transitions, ensuring optimal rendering speed.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/project-4.png", 
    imageGradient: "from-warm-sand via-terracotta-subtle to-sage-light",
    link: "https://github.com/Anshikasaxenaa",
  }
];



export const experienceData = [
  {
    id: 1,
    title: "Agentic AI Intern",
    company: "Grras Solutions (P) Ltd",
    location: "Jaipur, Rajasthan",
    date: "June 2026 - Current",
    points: [
      "Built AI-powered assistants capable of multi-step reasoning and task execution.",
      "Integrated LLM APIs and automation workflows into intelligent applications.",
      "Collaborated on scalable AI-driven software solutions."
    ]
  },
  {
    id: 2,
    title: "Fullstack developer",
    company: "Cognifyz",
    location: "Remote",
    date: "May 2026 - June 2026",
    points: [
      "Developed scalable MERN applications using MongoDB, Express.js, React.js, and Node.js.",
      "Designed REST APIs and integrated backend services with responsive frontend interfaces.",
      "Worked on authentication, database operations, and API integration."
    ]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology - Computer Science",
    institution: "Arya College of Engineering and IT",
    date: "2023 - 2027",
    cgpa: "8.7"
  },
  {
    id: 2,
    degree: "Senior Secondary (Class XII)",
    institution: "Maharaja Agarsen Public School (ICSE)",
    date: "2023",
    cgpa: "86%"
  }
];

export const skillsData = [
  {
    category: "Technical Skills",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
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
    category: "Software Engineering",
    items: ["REST APIs", "JWT Authentication", "Git", "GitHub", "Postman"]
  },
  {
    category: "AI",
    items: ["Prompt Engineering", "OpenAI APIs", "LLM Integration", "Agentic AI"]
  },
  {
    category: "Core CS Subjects",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
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
    statValue: "170+",
    statLabel: "DSA problems solved across competitive coding platforms.",
  },
};

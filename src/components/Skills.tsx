"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolioData";
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, 
  FaGitAlt, FaAws, FaFigma 
} from "react-icons/fa6";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

export default function Skills() {
  const marqueeIcons = [
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaJava, name: "Java" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: FaPython, name: "Python" },
    { icon: FaDocker, name: "Docker" },
    { icon: FaGitAlt, name: "Git" },
    { icon: FaAws, name: "AWS" },
    { icon: FaFigma, name: "Figma" },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-warm-paper">
      
      {/* Animated Marquee Strip */}
      <div className="py-10 border-y border-warm-sand bg-warm-cream/50 overflow-hidden flex mb-24">
        <div className="flex gap-8 group w-max">
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex gap-8"
          >
            {marqueeIcons.map((skill, idx) => (
              <div
                key={`first-${idx}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-warm-sand bg-warm-paper transition-colors"
              >
                <skill.icon className="text-xl text-warm-taupe" />
                <span className="text-warm-charcoal font-medium whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex gap-8"
          >
            {marqueeIcons.map((skill, idx) => (
              <div
                key={`second-${idx}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-warm-sand bg-warm-paper transition-colors"
              >
                <skill.icon className="text-xl text-warm-taupe" />
                <span className="text-warm-charcoal font-medium whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-warm-ink">
            Technical <span className="text-terracotta">Expertise</span>
          </h2>
          <p className="text-warm-taupe text-lg">A comprehensive overview of my skills and tools.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-warm-cream border border-warm-sand rounded-3xl p-8 hover:border-terracotta/30 transition-colors shadow-sm"
            >
              <h3 className="text-xl font-heading font-bold text-warm-ink mb-6 pb-4 border-b border-warm-sand">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-warm-paper rounded-full text-sm font-medium text-warm-charcoal border border-warm-sand/50 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

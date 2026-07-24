"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolioData";
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaRobot } from "react-icons/fa6";
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, 
  SiJavascript, SiExpress, SiMysql 
} from "react-icons/si";

export default function Skills() {
  const marqueeIcons = [
    { icon: FaJava, name: "Java" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMysql, name: "MySQL" },
    { icon: FaRobot, name: "Gen AI & LLMs" },
    { icon: FaGitAlt, name: "Git" },
  ];

  return (
    <section id="skills" className="py-24 md:py-32">
      
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
          initial={{ opacity: 0, y: 100, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top" }}
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
              initial={{ opacity: 0, y: 60, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="bg-warm-cream border border-warm-sand rounded-3xl p-8 hover:border-terracotta/30 transition-colors shadow-sm relative overflow-hidden"
            >
              {/* Choreographed border line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.15, ease: "easeInOut" }}
                style={{ originX: 0 }}
                className="absolute top-0 left-0 w-full h-1 bg-terracotta/20"
              />
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

"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiNodedotjs, 
  SiFigma, 
  SiThreedotjs 
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Figma", icon: SiFigma },
  { name: "Three.js", icon: SiThreedotjs },
];

export default function SkillsMarquee() {
  return (
    <section className="py-20 border-y border-warm-sand bg-warm-cream/50 overflow-hidden flex">
      <div className="flex gap-8 group w-max">
        {/* We need two identical sets for a seamless infinite marquee */}
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* First Set */}
          {skills.map((skill) => (
            <div
              key={`first-${skill.name}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-warm-sand bg-warm-paper group-hover:border-terracotta-light transition-colors"
            >
              <skill.icon className="text-xl text-warm-taupe group-hover:text-terracotta transition-colors" />
              <span className="text-warm-charcoal font-medium whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
          {/* Second Set */}
          {skills.map((skill) => (
            <div
              key={`second-${skill.name}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-warm-sand bg-warm-paper group-hover:border-terracotta-light transition-colors"
            >
              <skill.icon className="text-xl text-warm-taupe group-hover:text-terracotta transition-colors" />
              <span className="text-warm-charcoal font-medium whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

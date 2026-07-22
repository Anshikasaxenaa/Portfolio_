"use client";

import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import BentoProjectCard from "./ui/BentoProjectCard";

export default function ProjectSection() {
  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden bg-warm-paper">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <div className="text-warm-taupe text-xs tracking-[0.3em] uppercase mb-4">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-warm-ink leading-tight">
            Engineering <span className="text-terracotta">Elegance.</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            // Determine column span based on index:
            // Project 1 (index 0) is full width (2 columns)
            // Project 2 (index 1) is half width (1 column)
            // Project 3 (index 2) is half width (1 column)
            // Project 4 (index 3) is full width (2 columns)
            const isFullWidth = index === 0 || index === 3;
            const colSpanClass = isFullWidth ? "md:col-span-2" : "md:col-span-1";

            return (
              <BentoProjectCard 
                key={project.id} 
                project={project} 
                colSpanClass={colSpanClass} 
                index={index} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

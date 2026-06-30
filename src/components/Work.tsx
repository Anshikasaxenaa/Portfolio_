"use client";

import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-warm-ink">
          <span className="text-terracotta">Featured Work</span>
        </h2>
        <p className="text-warm-taupe text-lg">A selection of my recent projects and experiments.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className={`group relative overflow-hidden rounded-3xl ${project.colSpan} bg-warm-cream border border-warm-sand min-h-[400px] flex items-end p-8`}
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-warm-ink/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-10 flex flex-col justify-end p-8" />
            
            {/* Content Revealed on Hover */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-y-4 group-hover:translate-y-0">
              <h3 className="text-3xl font-heading font-bold text-warm-paper mb-3">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-warm-paper/10 backdrop-blur-md rounded-full text-sm text-warm-cream border border-warm-paper/20">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-warm-paper font-semibold group/link"
              >
                View Project 
                <span className="ml-2 group-hover/link:translate-x-2 transition-transform">→</span>
                <div className="absolute bottom-7 left-8 h-px bg-terracotta w-0 group-hover/link:w-[120px] transition-all duration-500" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

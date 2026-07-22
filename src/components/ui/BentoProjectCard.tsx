"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  tags: string[];
  image: string;
  imageGradient: string;
  link: string;
}

interface BentoProjectCardProps {
  project: Project;
  colSpanClass: string;
  index: number;
}

export default function BentoProjectCard({ project, colSpanClass, index }: BentoProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden rounded-[2rem] border border-warm-sand/60 bg-warm-cream shadow-sm flex flex-col justify-end min-h-[450px] p-8 md:p-10 ${colSpanClass}`}
    >
      {/* Background Image Container (Clickable) */}
      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0 overflow-hidden bg-warm-cream cursor-pointer block"
      >
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1.15, filter: isHovered ? "blur(0px)" : "blur(8px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full relative opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} mix-blend-multiply opacity-60`} />
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>
      </a>

      {/* Dark Overlay for Text Readability (Appears on Hover) - pointer events none so clicks pass to image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/80 to-black/10 pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full justify-end pointer-events-none">
        {/* Number Badge */}
        <div className={`absolute top-0 right-0 font-serif italic text-4xl font-bold transition-colors duration-500 pointer-events-auto ${isHovered ? 'text-white/30' : 'text-warm-taupe/30'}`}>
          0{project.id}
        </div>

        {/* Title */}
        <h3 className={`font-serif italic text-4xl md:text-5xl font-bold leading-tight mb-4 transition-colors duration-500 pointer-events-auto ${isHovered ? 'text-white' : 'text-warm-ink'}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm md:text-base font-medium leading-relaxed max-w-xl transition-colors duration-500 mb-6 line-clamp-3 pointer-events-auto ${isHovered ? 'text-gray-200' : 'text-warm-charcoal/90'}`}>
          {project.description}
        </p>

        {/* Problem / Solution (Only visible on hover) */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          {project.problem && (
            <div className="mb-4 pointer-events-auto">
              <span className="text-terracotta-light text-xs uppercase tracking-widest font-bold block mb-1">Problem</span>
              <p className="text-gray-300 font-medium text-sm">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div className="mb-6 pointer-events-auto">
              <span className="text-sage text-xs uppercase tracking-widest font-bold block mb-1">Solution</span>
              <p className="text-gray-300 font-medium text-sm">{project.solution}</p>
            </div>
          )}
        </motion.div>

        {/* Tags & Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto pt-6 border-t border-warm-sand/50 group-hover:border-white/20 transition-colors duration-500">
          <div className="flex flex-wrap gap-2 pointer-events-auto">
            {project.tags.slice(0, 4).map((tag) => (
              <span 
                key={tag} 
                className={`text-xs px-3 py-1 rounded-full font-bold transition-colors duration-500 ${isHovered ? 'bg-white/20 text-white backdrop-blur-md' : 'bg-warm-paper text-warm-ink border border-warm-sand'}`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className={`text-xs px-2 py-1 rounded-full font-bold transition-colors duration-500 ${isHovered ? 'text-white/70' : 'text-warm-taupe'}`}>
                +{project.tags.length - 4}
              </span>
            )}
          </div>
          
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`text-sm tracking-widest uppercase font-bold flex items-center gap-2 pointer-events-auto transition-colors duration-500 ${isHovered ? 'text-white hover:text-terracotta-light' : 'text-terracotta hover:text-terracotta'}`}>
            Explore <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

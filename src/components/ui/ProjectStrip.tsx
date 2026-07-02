"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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

interface ProjectStripProps {
  project: Project;
  index: number;
}

export default function ProjectStrip({ project, index }: ProjectStripProps) {
  const isEven = index % 2 === 1; // 0-indexed, so index 1 is the 2nd project (even project in 1-based indexing)
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Breathing animation
  const controls = useAnimation();
  
  useEffect(() => {
    if (!isHovered) {
      controls.start({
        filter: ["brightness(1)", "brightness(1.03)", "brightness(0.97)", "brightness(1)"],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      });
    } else {
      controls.stop();
      controls.set({ filter: "brightness(1)" });
    }
  }, [isHovered, controls]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMousePos({ x, y });
  };

  const numberStr = `0${project.id}`;

  return (
    <motion.div
      ref={containerRef}
      id={`project-${project.id}`}
      className="relative w-full py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Strip Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-terracotta-subtle/10 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <div className={`relative z-10 w-full max-w-none flex flex-col md:flex-row items-center h-[280px] md:h-[350px] lg:h-[500px] ${isEven ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Image Side (60%) */}
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          ref={imageRef as any}
          onMouseMove={handleMouseMove}
          className={`relative w-full block md:w-[60%] h-full overflow-hidden rounded-2xl ring-1 ring-warm-sand/50 group cursor-none ${isEven ? 'md:rounded-r-none md:rounded-l-2xl' : 'md:rounded-l-none md:rounded-r-2xl'}`}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-80`} />
          
          {/* Noise Overlay */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20 mix-blend-overlay z-10">
            <filter id={`noiseFilter-${project.id}`}>
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter={`url(#noiseFilter-${project.id})`} />
          </svg>

          {/* Large Watermark Number */}
          <div className={`absolute bottom-[-10%] ${isEven ? 'left-4' : 'right-4'} text-warm-paper/20 text-9xl font-serif italic pointer-events-none select-none z-10`}>
            {numberStr}
          </div>

          {/* Actual Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            animate={controls}
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-500 ease-out"
            style={{
              transform: isHovered 
                ? `scale(1.02) perspective(1000px) rotateX(${(mousePos.y / 250) - 1}deg) rotateY(${-(mousePos.x / 250 - 1)}deg) translateZ(3px)` 
                : 'scale(1)',
            }}
          />

          {/* Hover Border Fade */}
          <motion.div
            className="absolute inset-0 border border-terracotta z-20 rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Curtain Reveal */}
          <motion.div
            className="absolute inset-0 bg-terracotta z-30"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: isEven ? "left" : "right" }}
          />

          {/* Custom Cursor Pill */}
          <motion.div
            className="absolute pointer-events-none z-50 bg-warm-ink text-warm-paper text-xs rounded-full px-3 py-1.5 font-medium whitespace-nowrap shadow-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0.5,
              x: mousePos.x - 30, // center offset roughly
              y: mousePos.y - 15
            }}
            transition={{ 
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
              x: { type: "spring", stiffness: 1000, damping: 50, mass: 0.1 },
              y: { type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }
            }}
          >
            View Project
          </motion.div>
        </a>

        {/* Content Side (40%) */}
        <div className={`w-full md:w-[40%] flex flex-col justify-center px-8 md:px-16 py-8 ${isEven ? 'items-start text-left' : 'items-end text-right'}`}>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.7 }}
            className={`text-xs tracking-[0.3em] uppercase mb-4 transition-colors duration-500 ${isHovered ? 'text-terracotta' : 'text-warm-taupe'}`}
          >
            Project {numberStr}
          </motion.div>

          <h3 
            className="font-serif italic text-5xl md:text-7xl text-warm-ink leading-[0.95] mb-6 flex flex-wrap gap-x-3 transition-all duration-500"
            style={{
              filter: isHovered ? 'drop-shadow(0 0 20px rgba(194,109,77,0.08))' : 'none',
              justifyContent: isEven ? 'flex-start' : 'flex-end'
            }}
          >
            {project.title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.7, delay: 0.1 + (i * 0.08), ease: [0.25, 0.1, 0.25, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className={`text-warm-charcoal/90 font-medium text-base leading-relaxed max-w-md mb-6 ${isEven ? 'text-left' : 'text-right'}`}
          >
            {project.description}
          </motion.p>

          {(project.problem || project.solution) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col gap-4 mb-8 max-w-md ${isEven ? 'text-left' : 'text-right'}`}
            >
              {project.problem && (
                <div>
                  <span className="text-terracotta font-semibold text-sm tracking-wide uppercase block mb-1">The Problem</span>
                  <p className="text-warm-charcoal/70 text-sm leading-relaxed">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <span className="text-sage font-semibold text-sm tracking-wide uppercase block mb-1">The Solution</span>
                  <p className="text-warm-charcoal/70 text-sm leading-relaxed">{project.solution}</p>
                </div>
              )}
            </motion.div>
          )}

          <div className={`flex flex-wrap gap-2 mb-10 ${isEven ? 'justify-start' : 'justify-end'}`}>
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.7, delay: 0.7 + (i * 0.05), ease: [0.25, 0.1, 0.25, 1] }}
                className="text-xs text-warm-taupe bg-warm-sand/50 rounded-full px-4 py-1.5"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.a
            href={project.link}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="group/link text-terracotta text-sm tracking-wide uppercase flex items-center gap-2 relative pb-1"
          >
            View Details 
            <span className="transform transition-transform duration-300 group-hover/link:translate-x-[6px]">→</span>
            
            {/* Animated Underline */}
            <motion.div 
              className="absolute bottom-0 left-0 h-[1px] bg-terracotta w-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.7, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ originX: 0 }}
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

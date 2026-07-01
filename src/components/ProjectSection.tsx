"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolioData";
import ProjectStrip from "./ui/ProjectStrip";

export default function ProjectSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setHasScrolled(true);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setActiveProject((prev) => {
          const next = Math.min(prev + 1, projects.length - 1);
          scrollToProject(next);
          return next;
        });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveProject((prev) => {
          const next = Math.max(prev - 1, 0);
          scrollToProject(next);
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle detecting actual scroll to hide hint
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const scrollToProject = (index: number) => {
    const element = document.getElementById(`project-${projects[index].id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section ref={containerRef} id="work" className="relative py-24 md:py-32 w-full max-w-[100vw] overflow-hidden bg-warm-paper">
      
      {/* Scroll Progress Indicator (Right Side) */}
      <motion.div 
        className="fixed right-6 top-[20%] bottom-[20%] w-[1px] bg-warm-sand z-50 hidden xl:block"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]) }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full bg-terracotta origin-top"
          style={{ height: progressHeight }}
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-28"
        >
          <div className="text-warm-taupe text-sm tracking-[0.3em] uppercase mb-4">
            Selected
          </div>
          <div className="relative inline-block">
            <h2 className="font-serif italic text-7xl md:text-9xl text-warm-ink">
              Work
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ originX: 0 }}
              className="absolute -bottom-2 left-0 h-[1px] bg-terracotta w-[120px]"
            />
          </div>
        </motion.div>

        {/* Browse Hint */}
        <AnimatePresence>
          {!hasScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute left-6 top-[350px] text-warm-taupe/40 text-xs tracking-wider animate-bounce"
            >
              ↓ Browse (Arrow Keys)
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Strips */}
        <div className="flex flex-col items-center w-full">
          {projects.map((project, index) => (
            <div key={project.id} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ProjectStrip project={project} index={index} />
              </motion.div>
              
              {/* Divider between strips */}
              {index !== projects.length - 1 && (
                <div className="w-full flex justify-center py-20">
                  <motion.div
                    animate={{
                      height: ["64px", "80px", "64px"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-[1px] bg-warm-sand"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

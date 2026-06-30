"use client";

import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Breathing Animated Orb Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] -z-10">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            x: ["-2%", "2%", "-2%"],
            y: ["-1%", "1%", "-1%"],
          }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          className="w-full h-full rounded-full blur-3xl opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #c26d4d 0%, #7d9b7e 100%)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-warm-sand bg-warm-cream text-warm-taupe text-sm font-medium mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
          I craft digital experiences at the intersection of{" "}
          <span className="text-gradient">design and code.</span>
        </h1>
        
        <p className="text-warm-taupe text-xl md:text-2xl font-medium max-w-2xl mb-10">
          Software Engineer & Full Stack Developer
        </p>

        <div className="flex gap-4">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-warm-ink hover:bg-terracotta text-warm-paper rounded-full font-bold shadow-md transition-all flex items-center gap-2"
          >
            Download Resume
            <span className="text-xl">↓</span>
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#work"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center text-warm-taupe hover:text-terracotta transition-colors"
        >
          <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>
          <HiChevronDown className="text-2xl" />
        </motion.a>
      </motion.div>
    </section>
  );
}

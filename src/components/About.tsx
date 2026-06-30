"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { bio } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 max-w-6xl mx-auto px-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative justify-self-center md:justify-self-start"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-terracotta">
            <div className="w-full h-full rounded-full bg-warm-paper border-4 border-warm-cream flex items-center justify-center overflow-hidden relative">
              <Image 
                src="/profile.png" 
                alt="Anshika Saxena" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-10 -right-5 w-10 h-10 rounded-full bg-terracotta/20 blur-xl"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-10 -left-5 w-14 h-14 rounded-full bg-sage/20 blur-xl"
          />
        </motion.div>

        {/* Right Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-warm-ink">
            Designing with <span className="text-terracotta">Purpose.</span>
          </h2>
          
          <div className="space-y-6 text-warm-charcoal text-lg leading-relaxed">
            {bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

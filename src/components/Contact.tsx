"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-terracotta-subtle rounded-[100%] blur-3xl -z-10 opacity-50" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-warm-ink">
            Let's <span className="text-terracotta">Work Together</span>
          </h2>
          
          <div className="mb-12">
            <motion.a
              href="mailto:anshikasaxena314@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-terracotta hover:bg-terracotta-light text-warm-paper rounded-full text-xl font-bold shadow-md transition-colors"
            >
              Say Hi 👋
            </motion.a>
          </div>
          
          <a 
            href="mailto:anshikasaxena314@gmail.com" 
            className="group relative inline-block text-xl md:text-2xl font-medium text-warm-charcoal hover:text-terracotta transition-all duration-300 mb-16"
          >
            anshikasaxena314@gmail.com
            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-terracotta group-hover:w-full transition-all duration-700" />
          </a>

          <div className="flex justify-center gap-6 mb-24">
            {[
              { icon: FaGithub, href: "https://github.com/Anshikasaxenaa" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/anshika-saxena-87119a267" },
              { icon: FaXTwitter, href: "#" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full border border-warm-sand bg-warm-cream flex items-center justify-center text-warm-taupe hover:text-terracotta hover:border-terracotta transition-colors relative group"
              >
                <div className="absolute inset-0 rounded-full bg-terracotta-subtle opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10" />
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </div>

          <p className="text-warm-taupe text-sm">
            © {currentYear} Anshika Saxena. Crafted with precision.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

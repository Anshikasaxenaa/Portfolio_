"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import MagneticElement from "./ui/MagneticElement";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Setup intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-heading font-bold text-warm-ink tracking-tighter">
          Anshika.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <MagneticElement key={link.name}>
                <a
                  href={link.href}
                  className={`transition-colors text-sm font-medium px-3 py-1 block rounded-full ${
                    isActive ? "text-terracotta bg-terracotta/10" : "text-warm-taupe hover:text-terracotta"
                  }`}
                >
                  {link.name}
                </a>
              </MagneticElement>
            );
          })}
          <MagneticElement strength={30}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-terracotta hover:bg-terracotta-light text-warm-paper px-6 py-2 rounded-full text-sm font-semibold transition-colors inline-block"
            >
              Let&apos;s Talk
            </motion.a>
          </MagneticElement>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-2xl text-warm-ink hover:text-terracotta"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-warm-cream/95 backdrop-blur-xl border-b border-warm-sand flex flex-col py-6 px-6 gap-6"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-medium transition-colors px-4 py-2 rounded-xl ${
                    isActive ? "text-terracotta bg-terracotta/10" : "text-warm-ink hover:text-terracotta"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-terracotta text-warm-paper text-center py-3 rounded-xl font-semibold"
            >
              Let&apos;s Talk
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

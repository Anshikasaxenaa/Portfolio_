"use client";

/**
 * NAVBAR
 * ─────────────────────────────────────────────────────────────
 * Sticky top nav with:
 *  - Glassmorphism blur that appears on scroll
 *  - Active section highlighting via Intersection Observer
 *  - Animated underline on hover
 *  - Mobile hamburger menu
 *  - Resume download CTA
 *
 * TO PERSONALISE:
 *  - Update navLinks to match your section IDs
 *  - Replace "Resume" href with your actual CV link
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#timeline" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // ── Scroll detection for glassmorphism backdrop ──────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section highlighting ──────────────────────────────
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 glass border-b border-canvas-border/50"
            : "py-5 bg-transparent",
        )}
      >
        <nav className="section-container flex items-center justify-between">
          {/* ── Logo / Name ──────────────────────────────────── */}
          <motion.a
            href="#hero"
            onClick={() => handleNav("#hero")}
            className="font-display text-lg font-bold tracking-tight text-text-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* CHANGE: Your initials or name */}
            <span className="gradient-text">[ANSHIKA SAXENA]</span>
            <span className="ml-2 text-text-secondary text-sm font-mono">
              .dev
            </span>
          </motion.a>

          {/* ── Desktop Navigation ───────────────────────────── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <motion.button
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary",
                    )}
                    whileHover={{ scale: 1.02 }}
                  >
                    {link.label}
                    {/* Animated underline for active link */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-accent-500"
                        layoutId="nav-underline"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </motion.button>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ──────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <MagneticButton
              href="/resume.pdf"
              variant="secondary"
              className="text-xs gap-1.5 px-4 py-2"
            >
              <Download size={13} />
              Resume
            </MagneticButton>
          </div>

          {/* ── Mobile hamburger & Theme Toggle ─────────────────────────────── */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-canvas-subtle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 pt-20 glass md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="section-container py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-lg font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-canvas-subtle transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                className="mt-4 pt-4 border-t border-canvas-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <MagneticButton
                  href="/resume.pdf"
                  variant="primary"
                  className="w-full justify-center"
                >
                  <Download size={14} />
                  Download Resume
                </MagneticButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

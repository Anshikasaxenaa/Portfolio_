"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaArrowRight, FaPaperPlane, FaCircleCheck } from "react-icons/fa6";
import MagneticElement from "./ui/MagneticElement";

export default function Contact() {
  const currentYear = new Date().getFullYear();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Construct the mailto URL with form data
    const mailtoLink = `mailto:anshikasaxena314@gmail.com?subject=${encodeURIComponent(
      form.subject || "New Contact from Portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    
    // Open default mail client
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <footer id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-sage/10 rounded-[100%] blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* ── LEFT COLUMN: Info ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-warm-ink">
                Let&apos;s <span className="text-terracotta">Talk</span>
              </h2>
              <p className="text-warm-taupe text-lg max-w-sm">
                Have a project in mind, a job opportunity, or just want to say hi? I&apos;d love to hear from you.
              </p>
            </div>

            <div className="pt-8 border-t border-warm-sand">
              <div className="relative z-10">
                <p className="text-sm text-warm-taupe uppercase tracking-widest font-semibold mb-3">Direct Contact</p>
                <a
                  href="mailto:anshikasaxena314@gmail.com"
                  className="text-2xl md:text-3xl font-heading font-medium text-warm-ink hover:text-terracotta transition-colors block mb-2"
                >
                  anshikasaxena314@gmail.com
                </a>
                <p className="text-sm text-warm-taupe">Typical response time: &lt;24 hours</p>
              </div>
            </div>

            <div>
              <p className="mb-6 text-sm font-semibold text-warm-taupe uppercase tracking-widest">
                Also find me on
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "GitHub", href: "https://github.com/Anshikasaxenaa", icon: FaGithub },
                  { label: "LinkedIn", href: "https://linkedin.com/in/anshika-saxena-87119a267", icon: FaLinkedin },
                  { label: "Twitter / X", href: "#", icon: FaXTwitter },
                ].map((social) => (
                  <MagneticElement key={social.label} strength={15}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-warm-sand bg-warm-cream p-4 text-warm-taupe hover:text-terracotta hover:border-terracotta transition-all duration-300 shadow-sm w-full block"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center w-full">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm-paper text-warm-ink group-hover:text-terracotta transition-colors">
                          <social.icon className="text-xl" />
                        </span>
                        <span className="font-medium text-warm-ink ml-4">{social.label}</span>
                        <FaArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.a>
                  </MagneticElement>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Form ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-4 md:p-8 relative"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center min-h-[450px] text-center"
                >
                  <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <FaCircleCheck className="text-terracotta text-5xl mb-4" />
                  </motion.div>
                  <h3 className="text-3xl font-heading font-bold text-warm-ink mb-4">Message Sent!</h3>
                  <p className="text-warm-taupe mb-8">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 bg-warm-paper border border-warm-sand text-warm-charcoal rounded-full font-medium hover:text-terracotta transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-warm-ink uppercase tracking-wider">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-transparent border-b-2 border-warm-sand py-3 text-warm-charcoal placeholder:text-warm-taupe/40 focus:outline-none focus:border-terracotta transition-colors rounded-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-semibold text-warm-ink uppercase tracking-wider">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b-2 border-warm-sand py-3 text-warm-charcoal placeholder:text-warm-taupe/40 focus:outline-none focus:border-terracotta transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="subject" className="text-sm font-semibold text-warm-ink uppercase tracking-wider">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="w-full bg-transparent border-b-2 border-warm-sand py-3 text-warm-charcoal placeholder:text-warm-taupe/40 focus:outline-none focus:border-terracotta transition-colors rounded-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="message" className="text-sm font-semibold text-warm-ink uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-transparent border-b-2 border-warm-sand py-3 text-warm-charcoal placeholder:text-warm-taupe/40 focus:outline-none focus:border-terracotta transition-colors rounded-none resize-none"
                    />
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="px-8 py-4 bg-terracotta hover:bg-terracotta-light text-warm-paper rounded-full font-bold shadow-md transition-all flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                      {status !== "sending" && <FaPaperPlane className="text-sm" />}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── FOOTER ─────────────────────────────────── */}
        <div className="mt-32 pt-8 border-t border-warm-sand flex flex-col md:flex-row items-center justify-between gap-4 text-warm-taupe text-sm">
          <p>© {currentYear} Anshika Saxena. Crafted with precision.</p>
          <p>Built with Next.js, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

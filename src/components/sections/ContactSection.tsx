"use client";

/**
 * CONTACT SECTION
 * ─────────────────────────────────────────────────────────────
 * Glassmorphism form with:
 *  1. Animated input focus rings
 *  2. Magnetic submit button (from MagneticButton component)
 *  3. Success state animation on form submit
 *  4. Social links with hover glow
 *
 * NOTE: This is a frontend-only form. To actually send emails:
 *  Option A: Use Resend (https://resend.com) — free tier, easy Next.js setup
 *  Option B: Use EmailJS — no backend needed
 *  Option C: Use Next.js Route Handler at /api/contact
 *
 * CURRENT STATE: Form logs to console (replace with real API call).
 *
 * TO PERSONALISE:
 *  - Update socialLinks in src/lib/data.ts
 *  - Replace console.log with your email API call
 *  - Update the CTA text and emoji
 */

import { useState }          from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, Code2,
  CheckCircle2, Send, ArrowRight,
} from "lucide-react";
import { SectionWrapper }    from "@/components/ui/SectionWrapper";
import { MagneticButton }    from "@/components/ui/MagneticButton";
import { personalInfo }      from "@/lib/data";
import { cn }                from "@/lib/utils";

/* ── Form field component ─────────────────────────────────── */
function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  multiline = false,
  required,
}: {
  label:       string;
  name:        string;
  type?:       string;
  placeholder: string;
  value:       string;
  onChange:    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?:  boolean;
  required?:   boolean;
}) {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? "textarea" : "input";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-text-secondary" htmlFor={name}>
        {label} {required && <span className="text-accent-400">*</span>}
      </label>
      <div className="relative">
        {/* Animated focus ring */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl border-2"
          animate={{
            borderColor: focused
              ? "rgba(59,130,246,0.6)"
              : "rgba(39,39,42,0)",
            boxShadow: focused
              ? "0 0 15px rgba(59,130,246,0.15)"
              : "none",
          }}
          transition={{ duration: 0.2 }}
        />
        
        <Tag
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={multiline ? 5 : undefined}
          className={cn(
            "w-full rounded-xl border border-canvas-border bg-canvas-subtle",
            "px-4 py-3 text-sm text-text-primary placeholder:text-text-muted",
            "outline-none transition-colors duration-200",
            "hover:border-canvas-border/80",
            multiline ? "resize-none" : "",
          )}
        />
      </div>
    </div>
  );
}

/* ── Social links ─────────────────────────────────────────── */
const socials = [
  {
    label: "GitHub",
    href:  `https://github.com/${personalInfo.github}`,
    Icon:  Github,
    color: "#e2e8f0",
  },
  {
    label: "LinkedIn",
    href:  `https://linkedin.com/in/${personalInfo.linkedin}`,
    Icon:  Linkedin,
    color: "#0a66c2",
  },
  {
    label: "LeetCode",
    href:  `https://leetcode.com/${personalInfo.leetcode}`,
    Icon:  Code2,
    color: "#ffa116",
  },
  {
    label: "Email",
    href:  `mailto:${personalInfo.email}`,
    Icon:  Mail,
    color: "#3b82f6",
  },
];

/* ── Section ──────────────────────────────────────────────── */
export function ContactSection() {
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      /**
       * CHANGE: Replace this with your actual email API call.
       * 
       * Example with Resend:
       * const res = await fetch("/api/contact", {
       *   method: "POST",
       *   headers: { "Content-Type": "application/json" },
       *   body: JSON.stringify(form),
       * });
       * if (!res.ok) throw new Error("Failed");
       */

      // Simulated delay — remove in production
      await new Promise((r) => setTimeout(r, 1200));

      console.log("Form submitted:", form); // REMOVE in production
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <motion.span
            className="font-mono text-xs text-accent-400 tracking-widest uppercase"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            05 · Contact
          </motion.span>
          <motion.h2
            className="font-display text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let&apos;s work together.
          </motion.h2>
          <motion.p
            className="max-w-md text-sm text-text-secondary"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* CHANGE: Your CTA message */}
            I&apos;m actively looking for SDE / Full-Stack roles starting 2025.
            If you have an opportunity, a project, or just want to say hi — reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr]">

          {/* ── LEFT: Info + Socials ──────────────────── */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Email CTA */}
            <div className="glass rounded-2xl p-6 flex flex-col gap-3">
              <p className="text-xs text-text-muted uppercase tracking-wider">Preferred Contact</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-accent-400 font-mono text-sm hover:underline transition-colors"
              >
                {/* CHANGE: Your email */}
                {personalInfo.email}
              </a>
              <p className="text-xs text-text-secondary">
                {/* CHANGE: Realistic response time */}
                Typical response time: &lt;24 hours
              </p>
            </div>

            {/* Social links */}
            <div>
              <p className="mb-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                Also find me on
              </p>
              <div className="flex flex-col gap-2">
                {socials.map(({ label, href, Icon, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-canvas-border bg-canvas-muted p-3.5 text-text-secondary hover:text-text-primary transition-all duration-200 hover:border-canvas-border/60"
                    whileHover={{
                      x: 4,
                      boxShadow: `0 0 16px ${color}25`,
                    }}
                    data-cursor="pointer"
                  >
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
                      style={{ background: `${color}15` }}
                    >
                      <Icon size={15} style={{ color }} />
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                    <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Glassmorphism form ─────────────── */}
          <motion.div
            className="glass rounded-3xl p-8"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* ── Success state ───────────────────── */
                <motion.div
                  key="success"
                  className="flex h-full min-h-[400px] flex-col items-center justify-center gap-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <CheckCircle2 size={48} className="text-emerald-400" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    Message sent!
                  </h3>
                  <p className="text-sm text-text-secondary max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs text-accent-400 hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* ── Form ────────────────────────────── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      label="Name"
                      name="name"
                      placeholder="Anshika Saxena"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="anshikasaxena314@gmail.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <FormField
                    label="Subject"
                    name="subject"
                    placeholder="Job opportunity / Collaboration / Say hi"
                    value={form.subject}
                    onChange={handleChange}
                  />

                  <FormField
                    label="Message"
                    name="message"
                    placeholder="Tell me about the role, project, or just say hello..."
                    value={form.message}
                    onChange={handleChange}
                    multiline
                    required
                  />

                  {status === "error" && (
                    <p className="text-xs text-rose-400">
                      Something went wrong. Please email me directly at {personalInfo.email}
                    </p>
                  )}

                  {/* Submit — Magnetic Button */}
                  <div className="mt-2 flex justify-end">
                    <MagneticButton
                      variant="primary"
                      className="gap-2 px-8"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <>
                          <motion.div
                            className="h-3.5 w-3.5 rounded-full border-2 border-white/40 border-t-white"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={13} />
                        </>
                      )}
                    </MagneticButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Footer ──────────────────────────────────── */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-2 border-t border-canvas-border pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xs text-text-muted">
            {/* CHANGE: Your name */}
            Designed & built by{" "}
            <span className="text-accent-400 font-medium">{personalInfo.name}</span>
            {" "}· {new Date().getFullYear()}
          </p>
          <p className="text-[11px] text-text-muted font-mono">
            Next.js 14 · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
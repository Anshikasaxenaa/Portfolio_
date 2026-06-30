"use client";

import { motion } from "framer-motion";
import { experienceData, educationData } from "@/data/portfolioData";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-warm-ink">
            Experience & <span className="text-terracotta">Education</span>
          </h2>
          <p className="text-warm-taupe text-lg">My professional and academic journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-terracotta-subtle text-terracotta flex items-center justify-center text-xl">
                <FaBriefcase />
              </div>
              <h3 className="text-2xl font-heading font-bold text-warm-ink">Work Experience</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-warm-sand before:to-transparent hidden-before">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-warm-sand/50 z-0" />
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="relative z-10 pl-16"
                >
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-warm-paper border-4 border-terracotta" />
                  <div className="bg-warm-cream border border-warm-sand p-8 rounded-3xl hover:border-terracotta/50 transition-colors shadow-sm">
                    <span className="inline-block px-3 py-1 bg-terracotta-subtle text-terracotta-dark text-sm font-semibold rounded-full mb-4">
                      {exp.date}
                    </span>
                    <h4 className="text-xl font-bold text-warm-ink mb-1">{exp.title}</h4>
                    <p className="text-warm-taupe font-medium mb-4">{exp.company} • {exp.location}</p>
                    <ul className="space-y-2 text-warm-charcoal">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-terracotta mt-1.5">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-sage-light/20 text-sage-dark flex items-center justify-center text-2xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-heading font-bold text-warm-ink">Education</h3>
            </div>
            
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-warm-sand/50 z-0" />
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="relative z-10 pl-16"
                >
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-warm-paper border-4 border-sage" />
                  <div className="bg-warm-cream border border-warm-sand p-8 rounded-3xl hover:border-sage/50 transition-colors shadow-sm">
                    <span className="inline-block px-3 py-1 bg-sage-light/20 text-sage-dark text-sm font-semibold rounded-full mb-4">
                      {edu.date}
                    </span>
                    <h4 className="text-xl font-bold text-warm-ink mb-1">{edu.degree}</h4>
                    <p className="text-warm-taupe font-medium mb-4">{edu.institution}</p>
                    <p className="text-warm-charcoal font-semibold">
                      CGPA: <span className="text-sage-dark">{edu.cgpa}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

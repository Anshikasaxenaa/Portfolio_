import { HeroSection }       from "@/components/sections/HeroSection";
import { AboutPhotoSection } from "@/components/sections/AboutPhotoSection";
import { TechStackSection }   from "@/components/sections/TechStackSection";
import { TimelineSection }    from "@/components/sections/TimelineSection";
import { ProjectsSection }    from "@/components/sections/ProjectSection";
import { ContactSection }     from "@/components/sections/ContactSection";

/**
 * HOME PAGE — Single-page portfolio
 * 
 * All sections are assembled here. Each is a self-contained component
 * with its own Framer Motion scroll animations, so load order is safe.
 * 
 * Section order:
 *  1. Hero        — explosive intro, CTA
 *  2. Tech Stack  — Bento grid of skills
 *  3. Timeline    — journey / experience
 *  4. Projects    — deep-dive case studies
 *  5. Contact     — glassmorphism form
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPhotoSection />
      <TechStackSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(194,109,77,0.1),rgba(255,255,255,0))] overflow-hidden">
      
      <CustomCursor />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ProjectSection />
        <Contact />
      </div>
      <BackToTop />
    </main>
  );
}
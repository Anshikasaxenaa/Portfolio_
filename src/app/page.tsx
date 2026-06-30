import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative bg-warm-paper bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(194,109,77,0.1),rgba(255,255,255,0))] overflow-hidden">
      {/* Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#8c8279_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      
      <CustomCursor />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </div>
      <BackToTop />
    </main>
  );
}
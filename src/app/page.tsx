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
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-terracotta/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-sage/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-terracotta-light/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>
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
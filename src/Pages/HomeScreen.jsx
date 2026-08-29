import { useState, useEffect } from "react";
import Lenis from "lenis";

// V7 Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Graphics from "../components/Graphics";
import Certificates from "../components/Certificates";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', (e) => {
      setScrollProgress(e.progress * 100);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initial Loading Simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-[#050505] z-50 flex items-center justify-center">
          <div className="text-white font-mono text-sm tracking-widest uppercase animate-pulse">
            Loading...
          </div>
        </div>
      ) : (
        <div className="relative min-h-screen bg-[#050505] text-[#F4F4F5] selection:bg-white selection:text-black">
          
          {/* Top Progress Bar */}
          <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-transparent">
            <div 
              className="h-full bg-white transition-all duration-100 ease-out" 
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <Navbar />

          <main className="relative z-10 w-full overflow-hidden">
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Graphics />
            <Journey />
            <Certificates />
            <Contact />
          </main>

          <Footer />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}

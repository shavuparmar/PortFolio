import { useState, useEffect } from "react";
import Lenis from "lenis";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import BusinessCard from "../components/BusinessCard";
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
    // Lenis Smooth Scrolling Configuration
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.8,
      infinite: false,
    });

    lenis.on("scroll", (e) => {
      setScrollProgress(e.progress * 100);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-[#090A0D] z-[100] flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-2xl glass-dock border border-white/10 text-white font-display font-extrabold flex items-center justify-center text-lg shadow-2xl relative">
            <span className="text-[#D4FF00]">SP</span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D4FF00] animate-pulse"></div>
          </div>
          <div className="text-[#9A9AA4] font-mono text-xs tracking-widest uppercase flex items-center gap-2">
            <span>Saurabh Parmar</span>
            <span className="text-[#5E606B]">•</span>
            <span className="text-[#D4FF00]">Creative Developer</span>
          </div>
        </div>
      ) : (
        <div className="relative min-h-screen bg-[#090A0D] text-[#F4F4F8] selection:bg-[#D4FF00] selection:text-black">
          {/* Top Scroll Indicator Progress Bar in Electric Lime */}
          <div className="fixed top-0 left-0 w-full h-[2.5px] z-[70] bg-transparent pointer-events-none">
            <div
              className="h-full bg-[#D4FF00] shadow-[0_0_12px_#D4FF00] transition-all duration-75 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <Navbar />

          <main className="relative z-10 w-full overflow-hidden">
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <BusinessCard />
            <Graphics />
            <Certificates />
            <Journey />
            <Contact />
          </main>

          <Footer />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}

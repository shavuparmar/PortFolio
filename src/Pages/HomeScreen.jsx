import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

// V5 Immersive Components (V4 Rebuild)
import ScrollProgress from "../components/v5/ScrollProgress";
import Navigation from "../components/v5/Navigation";
import Hero from "../components/v5/Hero";
import About from "../components/v5/About";
import WhatIDo from "../components/v5/WhatIDo";
import Skills from "../components/v5/Skills";
import SelectedWork from "../components/v5/SelectedWork";
import GraphicsGallery from "../components/v5/GraphicsGallery";
import Journey from "../components/v5/Journey";
import CertificateArc from "../components/v5/CertificateArc";
import Contact from "../components/v5/Contact";
import Footer from "../components/v5/Footer";
import FloatingWhatsApp from "../components/v5/FloatingWhatsApp";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`relative min-h-screen overflow-x-hidden bg-[#050505] text-[#F4F4F5] ${isLoading ? 'hidden' : ''}`}>
        
        <ScrollProgress />
        <Navigation />

        <main className="relative z-10">
          <Hero />
          <About />
          <WhatIDo />
          <Skills />
          <SelectedWork />
          <GraphicsGallery />
          <Journey />
          <CertificateArc />
          <Contact />
        </main>

        <Footer />
        <FloatingWhatsApp />

      </div>
    </>
  );
}

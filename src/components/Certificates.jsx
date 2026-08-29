import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import certificates from "../details/certificates";

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextCert = () => setActiveIndex((prev) => (prev + 1) % certificates.length);
  const prevCert = () => setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) nextCert();
    else if (info.offset.x > swipeThreshold) prevCert();
  };

  const handleKeyDown = (e) => {
    if (isFullscreen) {
      if (e.key === "Escape") setIsFullscreen(false);
      return;
    }
    if (e.key === "ArrowRight") nextCert();
    if (e.key === "ArrowLeft") prevCert();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const activeCert = certificates[activeIndex];

  // Calculate 3D Arc Styles Based on distance from active
  const get3DArcStyles = (index) => {
    const diff = (index - activeIndex + certificates.length) % certificates.length;
    let normalizedDiff = diff;
    if (diff > certificates.length / 2) {
      normalizedDiff = diff - certificates.length;
    }

    const absDiff = Math.abs(normalizedDiff);
    const direction = Math.sign(normalizedDiff);

    // Active
    if (absDiff === 0) {
      return {
        scale: 1,
        rotateY: 0,
        z: 100, 
        x: 0,
        opacity: 1,
        zIndex: 50,
        filter: "brightness(1) grayscale(0%)",
      };
    }
    
    // Immediate neighbors (partial view on mobile, visible on tablet/desktop)
    if (absDiff === 1) {
      return {
        scale: 0.85,
        rotateY: direction * -15,
        z: 0,
        x: direction * (window.innerWidth < 768 ? 120 : 250),
        opacity: 0.8,
        zIndex: 40,
        filter: "brightness(0.6) grayscale(50%)",
      };
    }
    
    // Far neighbors (visible on desktop)
    if (absDiff === 2) {
      return {
        scale: 0.7,
        rotateY: direction * -30,
        z: -100,
        x: direction * (window.innerWidth < 768 ? 200 : 450),
        opacity: window.innerWidth < 1024 ? 0 : 0.6, // Hide on mobile/tablet
        zIndex: 30,
        filter: "brightness(0.4) grayscale(80%)",
      };
    }
    
    // Hidden others
    return {
      scale: 0.5,
      rotateY: direction * -45,
      z: -200,
      x: direction * 600,
      opacity: 0,
      zIndex: 10,
      filter: "brightness(0.2) grayscale(100%)",
    };
  };

  return (
    <>
      <section id="certificates" className="py-32 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="mb-24 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-4 text-[#888888] font-mono text-xs tracking-widest uppercase">
              <span>07 / Recognition</span>
              <span className="w-12 h-[1px] bg-[#333333]"></span>
            </div>
            
            <div className="flex items-center gap-6 self-start md:self-auto">
              <span className="text-white font-mono text-sm tracking-widest bg-[#111111] px-4 py-2 border border-[#333333] rounded-full">
                {String(activeIndex + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
              </span>
              <div className="flex gap-2">
                <button onClick={prevCert} className="p-3 bg-[#111111] border border-[#333333] rounded-full text-white hover:bg-white hover:text-black transition-colors" aria-label="Previous Certificate">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={nextCert} className="p-3 bg-[#111111] border border-[#333333] rounded-full text-white hover:bg-white hover:text-black transition-colors" aria-label="Next Certificate">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-[60vh] flex items-center justify-center perspective-[1200px]">
            {certificates.map((cert, index) => {
              const styles = get3DArcStyles(index);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={cert.id}
                  initial={false}
                  animate={styles}
                  transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  onClick={() => isActive ? setIsFullscreen(true) : setActiveIndex(index)}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`absolute top-1/2 left-1/2 -mt-[25vh] -ml-[40vw] sm:-ml-[30vw] md:-ml-[25vw] lg:-ml-[20vw] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] aspect-[4/3] ${
                    isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                  } bg-[#0a0a0a] border border-[#222222] p-3 shadow-2xl flex flex-col group`}
                >
                  <div className="relative flex-1 overflow-hidden pointer-events-none bg-[#111111] border border-[#222222]">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" draggable={false} />
                  </div>
                  
                  {isActive && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-mono text-xs uppercase tracking-widest border border-white px-6 py-3 bg-black/50 backdrop-blur-md">
                        Click to Expand
                      </span>
                    </div>
                  )}
                  
                  <div className="pt-4 pb-2 text-center">
                    <h4 className="text-white font-bold tracking-tighter uppercase">{cert.title}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <p className="text-[#888888] font-mono text-xs uppercase tracking-widest animate-pulse">
              Swipe to navigate
            </p>
          </div>
        </div>
      </section>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullscreen(false)}
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-5xl h-[85vh] flex flex-col pointer-events-auto bg-[#0a0a0a] border border-[#222222] shadow-2xl"
            >
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-[#222222]">
                <h3 className="text-lg md:text-2xl font-bold text-white uppercase tracking-tighter">
                  {activeCert.title}
                </h3>
                <div className="flex items-center gap-4">
                  {activeCert.pdf && (
                    <a
                      href={activeCert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-black bg-white hover:bg-[#E5E5E5] transition-colors px-4 py-2"
                    >
                      <span>Open PDF</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <button onClick={() => setIsFullscreen(false)} className="text-[#888888] hover:text-white transition-colors p-2 bg-[#111111] rounded-full border border-[#333333]">
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-4 md:p-8 flex items-center justify-center overflow-hidden bg-[#111111]">
                <img src={activeCert.image} alt={activeCert.title} className="max-w-full max-h-full object-contain drop-shadow-xl" />
              </div>

              {activeCert.pdf && (
                <div className="sm:hidden p-4 border-t border-[#222222] flex justify-center">
                   <a
                      href={activeCert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase text-black bg-white w-full py-3"
                    >
                      <span>Open PDF</span>
                      <ExternalLink size={14} />
                    </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

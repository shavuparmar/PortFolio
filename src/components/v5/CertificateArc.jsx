import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";
import certificates from "../../details/certificates";

export default function CertificateArc() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = certificates.length;

  const next = () => setActiveIndex((prev) => (prev + 1) % total);
  const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (offset < -50 || velocity < -500) {
      next();
    } else if (offset > 50 || velocity > 500) {
      prev();
    }
  };

  // Mathematical approach for the ARC
  const getTransform = (index) => {
    // Calculate the shortest distance in a circular array
    let diff = index - activeIndex;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    // Mobile specific simplified curve
    if (isMobile) {
      if (diff === 0) return { scale: 1, x: 0, y: 0, rotate: 0, opacity: 1, zIndex: 50 };
      if (diff === 1 || diff === -1) return { scale: 0.8, x: diff * 80, y: 20, rotate: diff * 5, opacity: 0.5, zIndex: 40 };
      return { scale: 0.6, x: diff * 120, y: 40, rotate: diff * 10, opacity: 0, zIndex: 30 };
    }

    // Desktop Full Arc
    if (diff === 0) {
      return { scale: 1, x: 0, y: 0, rotate: 0, opacity: 1, zIndex: 50 };
    } else if (diff === 1 || diff === -1) {
      return { scale: 0.85, x: diff * 60 + "%", y: 40, rotate: diff * 8, opacity: 0.7, zIndex: 40 };
    } else if (diff === 2 || diff === -2) {
      return { scale: 0.65, x: diff * 45 + "%", y: 100, rotate: diff * 15, opacity: 0.3, zIndex: 30 };
    } else {
      return { scale: 0.5, x: diff > 0 ? "150%" : "-150%", y: 150, rotate: diff > 0 ? 20 : -20, opacity: 0, zIndex: 20 };
    }
  };

  return (
    <>
      <section id="certificates" className="py-32 lg:py-48 bg-[#F4F4F5] text-[#050505] overflow-hidden border-t border-[#CCC]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-24 flex justify-between items-end border-b border-[#CCC] pb-12 relative z-50">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#888] mb-4 block">
                08 / ACHIEVEMENTS
              </span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
              >
                CERTIFICATES
              </motion.h2>
            </div>
            
            <div className="hidden md:flex flex-col items-end gap-6">
              <span className="text-sm font-black tracking-[0.3em] uppercase text-[#050505]">
                {String(activeIndex + 1).padStart(2, '0')} <span className="text-[#888]">/ {String(total).padStart(2, '0')}</span>
              </span>
              <div className="flex gap-4">
                <button onClick={prev} className="w-12 h-12 rounded-full border border-[#CCC] flex items-center justify-center text-[#050505] hover:bg-[#050505] hover:text-[#F4F4F5] transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <button onClick={next} className="w-12 h-12 rounded-full border border-[#CCC] flex items-center justify-center text-[#050505] hover:bg-[#050505] hover:text-[#F4F4F5] transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* THE ARC CAROUSEL */}
          <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center mt-12 mb-32">
            
            {/* Draggable invisible overlay for swiping without triggering image drags */}
            <motion.div
              className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            />

            {certificates.map((cert, index) => {
              const transform = getTransform(index);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={cert.id}
                  initial={false}
                  animate={{
                    scale: transform.scale,
                    x: transform.x,
                    y: transform.y,
                    rotate: transform.rotate,
                    opacity: transform.opacity,
                    zIndex: transform.zIndex,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] max-w-[600px] aspect-[4/3] bg-white border border-[#E5E5E5] p-4 md:p-8 flex items-center justify-center shadow-2xl pointer-events-none"
                  style={{ transformOrigin: "bottom center" }}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-contain"
                    draggable="false"
                  />
                  
                  {isActive && (
                    <motion.button 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute inset-0 z-10 bg-[#050505]/0 hover:bg-[#050505]/80 transition-colors duration-300 flex items-center justify-center group pointer-events-auto"
                      onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                    >
                      <span className="text-[#F4F4F5] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                        View Certificate
                      </span>
                    </motion.button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Active Certificate Info & Mobile Controls */}
          <div className="relative z-50 text-center max-w-3xl mx-auto flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4">
              {certificates[activeIndex].title}
            </h3>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#666]">
              {certificates[activeIndex].issuer}
            </p>

            <div className="flex md:hidden items-center justify-between w-full mt-12 border-t border-[#CCC] pt-8">
              <button onClick={prev} className="p-4 text-[#050505]">
                <ArrowLeft size={24} />
              </button>
              <span className="text-sm font-black tracking-[0.3em] uppercase text-[#050505]">
                {String(activeIndex + 1).padStart(2, '0')} <span className="text-[#888]">/ {String(total).padStart(2, '0')}</span>
              </span>
              <button onClick={next} className="p-4 text-[#050505]">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* PDF / Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-6xl h-[95vh] flex flex-col pointer-events-none"
            >
              <div className="absolute top-0 right-0 flex gap-6 pointer-events-auto w-full justify-between items-center px-4 md:px-8 py-6 border-b border-[#222]">
                <a
                  href={certificates[activeIndex].pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-black tracking-widest uppercase text-[#F4F4F5] hover:text-[#888] transition-colors border border-[#333] px-6 py-3"
                >
                  <ExternalLink size={16} /> OPEN ORIGINAL PDF
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#F4F4F5] hover:text-[#888] transition-colors"
                >
                  <X size={36} strokeWidth={1} />
                </button>
              </div>

              <div className="w-full h-[75vh] mt-24 pointer-events-auto flex items-center justify-center relative px-4">
                <img 
                  src={certificates[activeIndex].image} 
                  alt={certificates[activeIndex].title} 
                  className="max-w-full max-h-full object-contain shadow-2xl"
                  draggable="false"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

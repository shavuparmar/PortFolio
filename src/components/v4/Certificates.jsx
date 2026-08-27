import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";
import certificates from "../../details/certificates";

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dragConstraintsRef = useRef(null);
  
  const length = certificates.length;
  const activeCert = certificates[currentIndex];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + length) % length);

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50 || velocity.x < -500) nextSlide();
    else if (swipe > 50 || velocity.x > 500) prevSlide();
  };

  return (
    <>
      <section id="certificates" className="py-20 lg:py-40 bg-[#F9F9F9] text-[#111] border-t border-[#E5E5E5] overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          
          <div className="mb-24 flex justify-between items-end border-b border-[#111] pb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter uppercase leading-none"
            >
              CERTIFICATES
            </motion.h2>
            
            <div className="hidden md:flex items-center gap-8">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#888]">
                08 / 10
              </span>
              <div className="flex gap-4">
                <button onClick={prevSlide} className="text-[#111] hover:text-[#888] transition-colors p-2">
                  <ArrowLeft size={24} strokeWidth={1.5} />
                </button>
                <button onClick={nextSlide} className="text-[#111] hover:text-[#888] transition-colors p-2">
                  <ArrowRight size={24} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative" ref={dragConstraintsRef}>
            <motion.div 
              className="w-full max-w-4xl mx-auto aspect-[4/3] sm:aspect-video bg-[#E5E5E5] overflow-hidden relative group cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              onClick={() => setIsModalOpen(true)}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 p-8 md:p-12"
                >
                  <img 
                    src={activeCert.image} 
                    alt={activeCert.title} 
                    className="w-full h-full object-contain drop-shadow-xl"
                    draggable="false"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Hover overlay for preview text */}
              <div className="absolute inset-0 bg-[#111]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white font-bold tracking-[0.2em] uppercase text-sm">
                  Click to Expand
                </span>
              </div>
            </motion.div>
            
            <div className="mt-8 text-center max-w-4xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#888] mb-4 block">
                {String(currentIndex + 1).padStart(2, '0')} / {String(length).padStart(2, '0')}
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 text-[#111]">
                {activeCert.title}
              </h3>
              <p className="text-xs font-bold tracking-widest uppercase text-[#555]">
                {activeCert.issuer}
              </p>
              
              {/* Mobile Controls */}
              <div className="flex md:hidden items-center justify-center gap-6 mt-8">
                <button onClick={prevSlide} className="text-[#111] p-2 bg-[#E5E5E5] rounded-full">
                  <ArrowLeft size={20} />
                </button>
                <button onClick={nextSlide} className="text-[#111] p-2 bg-[#E5E5E5] rounded-full">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Lightbox / PDF Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#111]/95 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-5xl h-[90vh] flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="absolute top-0 right-0 flex gap-4 pointer-events-auto w-full justify-between items-center px-4">
                <a
                  href={activeCert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white hover:text-[#AAA] transition-colors"
                >
                  <ExternalLink size={14} /> Open PDF
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:text-[#AAA] transition-colors p-2"
                >
                  <X size={32} strokeWidth={1} />
                </button>
              </div>

              <div className="w-full h-[75vh] mt-12 pointer-events-auto flex items-center justify-center relative">
                <img 
                  src={activeCert.image} 
                  alt={activeCert.title} 
                  className="max-w-full max-h-full object-contain"
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

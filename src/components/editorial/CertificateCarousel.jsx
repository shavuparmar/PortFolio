import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import certificates from "../../details/certificates";

export default function CertificateCarousel() {
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
      <section id="certificates" className="py-20 lg:py-40 bg-zinc-950 text-white relative border-t border-zinc-900 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6">
                07 — Recognition
              </p>
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter uppercase leading-[0.9]"
              >
                CERTIFICATES & <br className="hidden md:block"/>
                <span className="text-zinc-600">AWARDS.</span>
              </motion.h2>
            </div>
            
            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={prevSlide} className="h-14 w-14 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all">
                <ChevronLeft size={24} />
              </button>
              <span className="text-lg font-black tracking-widest text-zinc-600">
                <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(length).padStart(2, '0')}
              </span>
              <button onClick={nextSlide} className="h-14 w-14 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative" ref={dragConstraintsRef}>
            <motion.div 
              className="w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] bg-zinc-900 overflow-hidden cursor-grab active:cursor-grabbing relative group"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              onClick={() => setIsModalOpen(true)}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img 
                    src={activeCert.image} 
                    alt={activeCert.title} 
                    className="w-full h-full object-contain p-4 md:p-12 opacity-80"
                    draggable="false"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="flex flex-col items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white font-black uppercase tracking-widest mb-2 border-b border-white/30 pb-2">
                    Click to Preview
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    {activeCert.issuer}
                  </span>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-8 text-center md:text-left max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white">
                  {activeCert.title}
                </h3>
                <p className="text-sm font-bold tracking-widest uppercase text-zinc-500 mt-2">
                  {activeCert.issuer}
                </p>
              </div>
              
              {/* Mobile Controls */}
              <div className="flex md:hidden items-center justify-center gap-6 mt-4">
                <button onClick={prevSlide} className="h-12 w-12 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 active:bg-zinc-800">
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm font-black tracking-widest text-zinc-600">
                  <span className="text-white">{currentIndex + 1}</span> / {length}
                </span>
                <button onClick={nextSlide} className="h-12 w-12 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 active:bg-zinc-800">
                  <ChevronRight size={20} />
                </button>
              </div>
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
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-6xl h-[90vh] flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="absolute top-0 right-0 flex gap-4 pointer-events-auto">
                <a
                  href={activeCert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-zinc-900 border border-zinc-800 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
                >
                  View PDF <ExternalLink size={16} />
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="w-full h-full max-h-[75vh] mt-16 pointer-events-auto flex items-center justify-center relative group">
                <img 
                  src={activeCert.image} 
                  alt={activeCert.title} 
                  className="max-w-full max-h-full object-contain"
                  draggable="false"
                />
                
                <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 bg-zinc-900/80 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-md">
                  <ChevronLeft size={28} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 bg-zinc-900/80 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-md">
                  <ChevronRight size={28} />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

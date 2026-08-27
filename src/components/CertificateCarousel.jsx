import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import certificates from "../details/certificates";

export default function CertificateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const length = certificates.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % length);
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  }, [length]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) prevSlide();
    else if (info.offset.x < -swipeThreshold) nextSlide();
  };

  const getCardStyle = (index) => {
    let diff = (index - currentIndex + length) % length;
    if (diff > length / 2) diff -= length;

    const absDiff = Math.abs(diff);
    const isCenter = diff === 0;

    // Fully responsive values via CSS clamp and max limits
    const dir = diff > 0 ? 1 : -1;
    const x = isCenter ? "0%" : `${dir * (100 + absDiff * 20)}%`;
    const rotateY = isCenter ? 0 : dir * -15; // Subtle 3D rotation, not aggressive
    const scale = isCenter ? 1 : Math.max(0.7, 1 - absDiff * 0.15);
    const opacity = isCenter ? 1 : Math.max(0, 1 - absDiff * 0.3);
    const zIndex = 40 - absDiff;

    return { x, rotateY, scale, opacity, zIndex, isCenter };
  };

  const activeCert = certificates[currentIndex];

  return (
    <>
      <div className="w-full max-w-[100vw] overflow-hidden bg-zinc-900 py-20 lg:py-32 relative text-[#F4F1EA]">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black tracking-tighter uppercase leading-[0.9] text-white">
              CERTIFICATES
            </h2>
          </div>

          <div
            className="relative mx-auto flex h-[350px] sm:h-[450px] lg:h-[600px] w-full max-w-4xl items-center justify-center"
            style={{ perspective: "1500px" }}
          >
            {certificates.map((cert, index) => {
              const { x, rotateY, scale, opacity, zIndex, isCenter } = getCardStyle(index);

              return (
                <motion.div
                  key={cert.id}
                  className="absolute w-[85%] sm:w-[70%] max-w-[800px] aspect-[4/3] cursor-pointer"
                  animate={{
                    x,
                    rotateY,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    if (isCenter) setIsModalOpen(true);
                    else setCurrentIndex(index);
                  }}
                  style={{ pointerEvents: opacity > 0 ? "auto" : "none" }}
                >
                  <div className={`w-full h-full rounded-[1rem] overflow-hidden bg-white shadow-2xl transition-all duration-300 ${isCenter ? 'ring-4 ring-green-500' : 'opacity-60'}`}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading={Math.abs(index - currentIndex) <= 2 ? "eager" : "lazy"}
                      className="w-full h-full object-contain bg-zinc-100 p-2"
                      draggable="false"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="mt-16 flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-8">
              <button
                onClick={prevSlide}
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-zinc-700 bg-transparent text-white transition-all hover:bg-white hover:text-black active:scale-95"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={28} />
              </button>

              <div className="flex flex-col items-center min-w-[80px]">
                <span className="text-xl font-black text-white tracking-widest">
                  {String(currentIndex + 1).padStart(2, '0')} <span className="text-zinc-500">/ {length}</span>
                </span>
              </div>

              <button
                onClick={nextSlide}
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-zinc-700 bg-transparent text-white transition-all hover:bg-white hover:text-black active:scale-95"
                aria-label="Next certificate"
              >
                <ChevronRight size={28} />
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm font-bold tracking-widest text-zinc-400 uppercase hover:text-white transition-colors border-b border-zinc-700 pb-1"
            >
              Click center certificate to preview
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[95vw] h-[90vh] flex flex-col items-center justify-center pointer-events-none px-4"
            >
              {/* Modal Controls */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex gap-4 pointer-events-auto">
                <a
                  href={activeCert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black shadow-lg"
                >
                  View PDF <ExternalLink size={18} />
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white hover:text-black shadow-lg"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Arrows for Modal */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-white hover:text-black pointer-events-auto backdrop-blur-md opacity-50 hover:opacity-100"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-white hover:text-black pointer-events-auto backdrop-blur-md opacity-50 hover:opacity-100"
              >
                <ChevronRight size={32} />
              </button>

              <div className="w-full max-w-5xl aspect-[4/3] max-h-[70vh] bg-zinc-100 rounded-[1.5rem] p-4 pointer-events-auto shadow-2xl flex items-center justify-center mt-12 sm:mt-0">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>

              <div className="mt-8 text-center pointer-events-auto">
                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter">
                  {activeCert.title}
                </h3>
                <p className="mt-3 text-sm font-bold tracking-widest text-zinc-400 uppercase">
                  {activeCert.issuer}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
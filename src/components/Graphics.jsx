import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Fallback graphics data if details/graphics.js is not present or clean
const graphicsData = [
  { id: 1, title: "Brand Identity", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=contain" },
  { id: 2, title: "Poster Series", category: "Typography", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=contain" },
  { id: 3, title: "Social Campaign", category: "Marketing", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=contain" },
  { id: 4, title: "Event Visuals", category: "Graphic Design", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=contain" },
  { id: 5, title: "App Icon Set", category: "UI/UX", image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1200&auto=format&fit=contain" },
  { id: 6, title: "Album Cover", category: "Art Direction", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=contain" },
];

export default function Graphics() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % graphicsData.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + graphicsData.length) % graphicsData.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextImage();
    if (distance < -50) prevImage();
    setTouchStart(null);
  };

  return (
    <>
      <section id="graphics" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="mb-24 flex items-center gap-4 text-[#888888] font-mono text-xs tracking-widest uppercase">
            <span>06 / Visual Work</span>
            <span className="w-12 h-[1px] bg-[#333333]"></span>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {graphicsData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid cursor-pointer group flex flex-col gap-4"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="w-full bg-[#111111] p-4 border border-[#222222] transition-colors group-hover:border-[#555555]">
                  {/* NEVER crop important content. Always object-contain. */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex justify-between items-baseline px-2">
                  <h3 className="text-white font-bold tracking-tighter uppercase text-lg group-hover:text-[#E5E5E5] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[#888888] font-mono text-xs uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-[90vw] h-[90vh] flex flex-col pointer-events-none"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4 pointer-events-auto shrink-0">
                <span className="text-[#888888] font-mono text-xs tracking-widest uppercase border border-[#333333] px-3 py-1 rounded-full">
                  {String(selectedIndex + 1).padStart(2, '0')} / {String(graphicsData.length).padStart(2, '0')}
                </span>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="text-white hover:text-[#888888] transition-colors p-2 bg-[#111111] rounded-full border border-[#333333]"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Image Area */}
              <div 
                className="relative flex-1 w-full flex items-center justify-center pointer-events-auto select-none"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img 
                  src={graphicsData[selectedIndex].image} 
                  alt={graphicsData[selectedIndex].title} 
                  className="max-w-full max-h-[80vh] object-contain drop-shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                  draggable={false}
                />
                
                {/* Desktop Nav Buttons */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white hover:text-[#888888] transition-colors bg-[#0a0a0a]/50 backdrop-blur-sm hidden md:block"
                >
                  <ChevronLeft size={32} strokeWidth={1} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white hover:text-[#888888] transition-colors bg-[#0a0a0a]/50 backdrop-blur-sm hidden md:block"
                >
                  <ChevronRight size={32} strokeWidth={1} />
                </button>
              </div>

              {/* Footer text */}
              <div className="mt-4 text-center shrink-0 pointer-events-auto">
                 <h3 className="text-xl font-bold text-white uppercase tracking-tighter">
                  {graphicsData[selectedIndex].title}
                </h3>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder graphic design items
const graphics = [
  { id: 1, title: "Brand Identity", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=contain" },
  { id: 2, title: "Poster Series", category: "Typography", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=contain" },
  { id: 3, title: "Social Campaign", category: "Marketing", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=contain" },
  { id: 4, title: "Event Visuals", category: "Graphic Design", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=contain" },
  { id: 5, title: "App Icon Set", category: "UI/UX", image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1200&auto=format&fit=contain" },
  { id: 6, title: "Album Cover", category: "Art Direction", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=contain" },
];

export default function GraphicsMasonry() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % graphics.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + graphics.length) % graphics.length);
  };

  // Keyboard navigation for lightbox
  const handleKeyDown = (e) => {
    if (selectedIndex === null) return;
    if (e.key === "Escape") setSelectedIndex(null);
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <>
      <section id="graphics" className="py-20 lg:py-40 bg-[#F9F9F9] text-[#111] relative border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          
          <div className="mb-32 flex justify-between items-end border-b border-[#111] pb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
            >
              VISUAL WORK
            </motion.h2>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#888] hidden sm:block">
              04 / 10
            </span>
          </div>

          {/* 
            CRITICAL REQUIREMENT: TRUE MASONRY / AUTO GRID
            Using columns instead of strict CSS grid to allow natural heights without cropping.
            Mobile: 1 column
            Tablet: 2 columns
            Desktop: 3 columns
            Gap: 24px (desktop) / 16px (mobile)
          */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {graphics.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedIndex(index)}
                className="relative group cursor-pointer bg-[#EEEEEE] break-inside-avoid overflow-hidden rounded-sm"
              >
                {/* 
                  CRITICAL: object-fit contain/auto ensures NO CROPPING. 
                  The image determines its own height.
                */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                />
                
                <div className="absolute inset-0 bg-[#111]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white font-black uppercase tracking-widest text-lg mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#888] font-bold uppercase tracking-widest text-[10px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 focus:outline-none"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={el => el && el.focus()}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute inset-0 bg-[#111]/95 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-[95vw] h-[95vh] flex flex-col pointer-events-none"
            >
              {/* Image Container */}
              <div className="relative flex-1 w-full flex items-center justify-center pointer-events-auto">
                <img 
                  src={graphics[selectedIndex].image} 
                  alt={graphics[selectedIndex].title} 
                  className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center bg-transparent text-white hover:text-[#CCC] transition-colors"
                >
                  <X size={32} strokeWidth={1} />
                </button>

                {/* Nav Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center text-white hover:text-[#CCC] transition-colors"
                >
                  <ChevronLeft size={48} strokeWidth={1} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center text-white hover:text-[#CCC] transition-colors"
                >
                  <ChevronRight size={48} strokeWidth={1} />
                </button>
              </div>

              {/* Info & Counter */}
              <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-auto flex flex-col items-center">
                <span className="text-[#888] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                  {String(selectedIndex + 1).padStart(2, '0')} / {String(graphics.length).padStart(2, '0')}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">
                  {graphics[selectedIndex].title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

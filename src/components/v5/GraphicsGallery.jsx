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

export default function GraphicsGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % graphics.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + graphics.length) % graphics.length);
  };

  const handleKeyDown = (e) => {
    if (selectedIndex === null) return;
    if (e.key === "Escape") setSelectedIndex(null);
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <>
      <section id="graphics" className="py-32 lg:py-48 bg-[#F4F4F5] text-[#050505] relative">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          
          <div className="mb-24 flex justify-between items-end border-b border-[#CCC] pb-12">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#888] mb-4 block">
                06 / GALLERY
              </span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
              >
                GRAPHICS
              </motion.h2>
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {graphics.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedIndex(index)}
                className="relative group cursor-pointer bg-white border border-[#E5E5E5] break-inside-avoid overflow-hidden p-4"
              >
                <div className="w-full h-auto overflow-hidden bg-[#F9F9F9]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                
                <div className="pt-6 pb-2 flex flex-col">
                  <h3 className="text-[#050505] font-black uppercase tracking-widest text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#888] font-bold uppercase tracking-widest text-[10px]">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
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
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-[95vw] h-[95vh] flex flex-col pointer-events-none"
            >
              <div className="relative flex-1 w-full flex items-center justify-center pointer-events-auto mt-12 mb-20">
                <img 
                  src={graphics[selectedIndex].image} 
                  alt={graphics[selectedIndex].title} 
                  className="max-w-full max-h-[75vh] object-contain shadow-2xl bg-[#111]"
                  onClick={(e) => e.stopPropagation()}
                />
                
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute -top-12 right-0 flex h-12 w-12 items-center justify-center bg-transparent text-[#F4F4F5] hover:text-[#888] transition-colors"
                >
                  <X size={32} strokeWidth={1.5} />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center text-[#F4F4F5] hover:text-[#888] transition-colors"
                >
                  <ChevronLeft size={48} strokeWidth={1} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center text-[#F4F4F5] hover:text-[#888] transition-colors"
                >
                  <ChevronRight size={48} strokeWidth={1} />
                </button>
              </div>

              <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-auto flex flex-col items-center justify-center border-t border-[#222] pt-6 max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl font-black text-[#F4F4F5] uppercase tracking-widest mb-2">
                  {graphics[selectedIndex].title}
                </h3>
                <span className="text-[#888] text-[10px] font-bold tracking-[0.3em] uppercase">
                  {String(selectedIndex + 1).padStart(2, '0')} / {String(graphics.length).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

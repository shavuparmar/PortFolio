import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import graphicsData from "../details/graphics";

const filterCategories = ["All", "UI/UX & Web", "Branding", "Posters"];

export default function Graphics() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = graphicsData.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const nextImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
  }, [selectedIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
  }, [selectedIndex, filteredItems.length]);

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
  }, [selectedIndex, nextImage, prevImage]);

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
    <section id="graphics" className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9A9AA4] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
              <Palette size={13} className="text-[#D4FF00]" />
              <span>06 // Visual & Graphic Arts</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              Graphic Design Gallery<span className="text-[#D4FF00]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9A9AA4] max-w-xl font-sans">
              Original branding systems, UI/UX screens, marketing banners, and festive social media artwork crafted for real brands and campaigns.
            </p>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.25)]"
                    : "glass-dock text-[#9A9AA4] hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid rounded-2xl p-4 glass-panel border border-white/10 hover:border-white/25 transition-all flex flex-col gap-3 group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Image Frame */}
              <div className="relative w-full rounded-xl overflow-hidden glass-dock border border-white/5 flex items-center justify-center p-2 bg-black/50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain rounded transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4FF00] text-black text-xs font-mono font-bold shadow-lg">
                    <Maximize2 size={12} />
                    <span>Enlarge</span>
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="px-1 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#D4FF00] uppercase">{item.category}</span>
                  <span className="text-[#5E606B]">#{item.id}</span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-[#D4FF00] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#9A9AA4] leading-relaxed line-clamp-2 font-sans">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded glass-dock border border-white/5 text-[10px] font-mono text-[#9A9AA4]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && filteredItems[selectedIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-2xl p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full glass-dock text-white/80 hover:text-white transition-colors z-20 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>

            {/* Previous Navigation Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full glass-dock text-white/80 hover:text-white transition-colors z-20 cursor-pointer"
              aria-label="Previous Graphic"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Navigation Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full glass-dock text-white/80 hover:text-white transition-colors z-20 cursor-pointer"
              aria-label="Next Graphic"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              key={filteredItems[selectedIndex].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden glass-dock border border-white/10 p-2 sm:p-4 bg-black/60 shadow-2xl flex items-center justify-center">
                <img
                  src={filteredItems[selectedIndex].image}
                  alt={filteredItems[selectedIndex].title}
                  className="max-w-full max-h-[72vh] object-contain rounded-xl"
                />
              </div>

              {/* Caption and Meta Bar */}
              <div className="w-full mt-4 p-4 rounded-xl glass-panel border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#D4FF00] uppercase mb-1">
                    <span>{filteredItems[selectedIndex].category}</span>
                    <span>•</span>
                    <span>Piece {selectedIndex + 1} of {filteredItems.length}</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-white">
                    {filteredItems[selectedIndex].title}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  {filteredItems[selectedIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md glass-dock border border-white/5 text-[10px] font-mono text-[#EDEDF2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

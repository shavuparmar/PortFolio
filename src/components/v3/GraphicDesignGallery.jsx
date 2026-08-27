import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder graphic design items
const graphics = [
  { id: 1, title: "Brand Identity", category: "Branding", type: "featured", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Poster Series", category: "Typography", type: "standard", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Social Campaign", category: "Marketing", type: "standard", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Event Visuals", category: "Graphic Design", type: "tall", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "App Icon Set", category: "UI/UX", type: "wide", image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Album Cover", category: "Art Direction", type: "standard", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop" },
];

export default function GraphicDesignGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const getSpan = (type) => {
    // Desktop layout using responsive classes
    switch (type) {
      case "featured": return "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto";
      case "tall": return "md:col-span-1 md:row-span-2 aspect-square md:aspect-auto";
      case "wide": return "md:col-span-2 md:row-span-1 aspect-square md:aspect-[2/1]";
      default: return "md:col-span-1 md:row-span-1 aspect-square";
    }
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % graphics.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + graphics.length) % graphics.length);
  };

  return (
    <>
      <section id="design" className="mx-auto max-w-[1600px] px-6 py-20 lg:py-40">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85]"
          >
            GRAPHIC <br/>
            <span className="text-zinc-400">DESIGN</span>
          </motion.h2>
        </div>

        {/* CSS Grid for Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] gap-6">
          {graphics.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className={`relative group overflow-hidden rounded-[1.5rem] cursor-pointer bg-zinc-200 ${getSpan(item.type)}`}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content Reveal */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-bold tracking-widest text-white/70 uppercase mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-6xl max-h-[90vh] flex flex-col pointer-events-none"
            >
              {/* Controls */}
              <div className="absolute -top-16 right-0 flex gap-4 pointer-events-auto">
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-black"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Image Container */}
              <div className="relative flex-1 w-full flex items-center justify-center pointer-events-auto group">
                <img 
                  src={graphics[selectedIndex].image} 
                  alt={graphics[selectedIndex].title} 
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Nav Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 backdrop-blur-md"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 backdrop-blur-md"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              {/* Info */}
              <div className="mt-8 text-center pointer-events-auto">
                <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2 block">
                  {graphics[selectedIndex].category}
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
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

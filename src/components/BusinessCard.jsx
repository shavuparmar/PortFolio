import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Maximize2,
  X,
  RotateCw,
  Phone,
  Globe,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { businessCardData } from "../details/graphics";

export default function BusinessCard() {
  const [activeSide, setActiveSide] = useState("front");
  const [lightboxImage, setLightboxImage] = useState(null);

  const toggleSide = () => {
    setActiveSide((prev) => (prev === "front" ? "back" : "front"));
  };

  return (
    <section
      id="business-card"
      className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop"
    >
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9A9AA4] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
            <CreditCard size={13} className="text-[#D4FF00]" />
            <span>05 // Dedicated Design Showcase</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Deyzora Infotech Business Card<span className="text-[#D4FF00]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9A9AA4] max-w-2xl font-sans">
            A real-world corporate identity and physical print collateral design project. Showcasing both front and back surfaces at full resolution with original geometry and typography.
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Card Display with Switcher */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* View Controls */}
            <div className="flex items-center justify-between">
              <div className="inline-flex p-1 rounded-xl glass-dock border border-white/10">
                <button
                  onClick={() => setActiveSide("front")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeSide === "front"
                      ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.3)]"
                      : "text-[#9A9AA4] hover:text-white"
                  }`}
                >
                  Front Side
                </button>
                <button
                  onClick={() => setActiveSide("back")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeSide === "back"
                      ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.3)]"
                      : "text-[#9A9AA4] hover:text-white"
                  }`}
                >
                  Back Side
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleSide}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-dock border border-white/10 text-xs font-mono text-[#EDEDF2] hover:text-[#D4FF00] hover:border-[#D4FF00]/40 transition-colors cursor-pointer"
                  title="Flip between Front and Back"
                >
                  <RotateCw size={13} />
                  <span>Flip</span>
                </button>

                <button
                  onClick={() =>
                    setLightboxImage(
                      activeSide === "front"
                        ? businessCardData.frontImage
                        : businessCardData.backImage
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-dock border border-white/10 text-xs font-mono text-[#EDEDF2] hover:text-[#D4FF00] hover:border-[#D4FF00]/40 transition-colors cursor-pointer"
                  title="Enlarge view"
                >
                  <Maximize2 size={13} />
                  <span className="hidden sm:inline">Zoom</span>
                </button>
              </div>
            </div>

            {/* Prominent Card Frame */}
            <div className="rounded-2xl p-4 sm:p-7 glass-panel border border-white/10 shadow-2xl">
              <div
                onClick={() =>
                  setLightboxImage(
                    activeSide === "front"
                      ? businessCardData.frontImage
                      : businessCardData.backImage
                  )
                }
                className="relative aspect-[16/9] w-full rounded-xl overflow-hidden glass-dock border border-white/10 flex items-center justify-center p-3 sm:p-5 cursor-pointer group shadow-lg"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSide}
                    src={
                      activeSide === "front"
                        ? businessCardData.frontImage
                        : businessCardData.backImage
                    }
                    alt={
                      activeSide === "front"
                        ? "Deyzora Infotech Business Card Front View"
                        : "Deyzora Infotech Business Card Back View"
                    }
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-contain rounded drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </AnimatePresence>

                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-[#EDEDF2] font-mono text-[11px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md">
                  <Maximize2 size={11} className="text-[#D4FF00]" />
                  <span>Click to Enlarge</span>
                </div>
              </div>

              {/* Dual Small Thumbnails */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div
                  onClick={() => setActiveSide("front")}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                    activeSide === "front"
                      ? "border-[#D4FF00] glass-dock shadow-[0_0_15px_rgba(212,255,0,0.15)]"
                      : "border-white/5 glass-panel opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="aspect-[16/9] overflow-hidden rounded bg-black/40 flex items-center justify-center p-1">
                    <img
                      src={businessCardData.frontImage}
                      alt="Front Thumbnail"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="block text-center font-mono text-[10px] text-[#9A9AA4] mt-1.5">
                    Front • Details & Contact
                  </span>
                </div>

                <div
                  onClick={() => setActiveSide("back")}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                    activeSide === "back"
                      ? "border-[#D4FF00] glass-dock shadow-[0_0_15px_rgba(212,255,0,0.15)]"
                      : "border-white/5 glass-panel opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="aspect-[16/9] overflow-hidden rounded bg-black/40 flex items-center justify-center p-1">
                    <img
                      src={businessCardData.backImage}
                      alt="Back Thumbnail"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="block text-center font-mono text-[10px] text-[#9A9AA4] mt-1.5">
                    Back • Brand Identity & Logo
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Thoughtful Design Explanation */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 flex flex-col gap-5">
              
              <div>
                <span className="font-mono text-[10px] text-[#D4FF00] uppercase tracking-wider block mb-1">
                  Corporate Collateral
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {businessCardData.title}
                </h3>
                <p className="font-mono text-xs text-[#9A9AA4] mt-0.5">
                  {businessCardData.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#9A9AA4] leading-relaxed font-sans">
                {businessCardData.description}
              </p>

              {/* Design Principles / Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-[11px] text-white uppercase tracking-wider block">
                  Design Specifications & Identity
                </span>
                {businessCardData.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#EDEDF2] font-sans">
                    <CheckCircle2 size={13} className="text-[#D4FF00] mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Verified Contact Details Placed on the Card */}
              <div className="p-4 rounded-xl glass-dock border border-white/5 space-y-2 text-xs font-mono text-[#9A9AA4]">
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-[#D4FF00]" />
                  <span>Kim, Surat, Gujarat — 394110</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-[#D4FF00]" />
                  <span>+91 98790 01603 / +91 63522 44221</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={12} className="text-[#D4FF00]" />
                  <span>www.deyzora.online</span>
                </div>
              </div>

              {/* Specs Pill List */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {businessCardData.specs.map((spec) => (
                  <span
                    key={spec}
                    className="px-2.5 py-1 rounded-md glass-dock border border-white/5 text-[10px] font-mono text-[#EDEDF2]"
                  >
                    {spec}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* High-Resolution Zoom Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              <img
                src={lightboxImage}
                alt="High Resolution Business Card Inspection"
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              <div className="mt-4 flex items-center gap-4 text-xs font-mono text-[#9A9AA4]">
                <span>Deyzora Infotech Corporate Identity</span>
                <span>•</span>
                <span className="text-[#D4FF00]">High-Resolution Print Quality</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  Maximize2,
  X,
  CheckCircle2,
  LayoutGrid,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import certificates from "../details/certificates";

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState("showcase"); // 'showcase' | 'grid'
  const [selectedCert, setSelectedCert] = useState(null);

  const nextCert = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  }, []);

  const prevCert = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, []);

  const activeCert = certificates[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedCert !== null) {
        if (e.key === "Escape") setSelectedCert(null);
        return;
      }
      if (viewMode === "showcase") {
        if (e.key === "ArrowRight") nextCert();
        if (e.key === "ArrowLeft") prevCert();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert, viewMode, nextCert, prevCert]);

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextCert();
    if (distance < -50) prevCert();
    setTouchStart(null);
  };

  return (
    <section id="certificates" className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9A9AA4] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
              <Award size={13} className="text-[#D4FF00]" />
              <span>07 // Accredited Credentials</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              Certificates & Credentials<span className="text-[#D4FF00]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9A9AA4] max-w-xl font-sans">
              14 accredited credentials from Google, Google Cloud, Scrimba, and Universities. Every certificate has an authentic verification link and printable PDF.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="inline-flex p-1 rounded-xl glass-dock border border-white/10">
              <button
                onClick={() => setViewMode("showcase")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === "showcase"
                    ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.3)]"
                    : "text-[#9A9AA4] hover:text-white"
                }`}
              >
                Showcase View
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.3)]"
                    : "text-[#9A9AA4] hover:text-white"
                }`}
              >
                <LayoutGrid size={13} />
                <span>All Grid (14)</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: Interactive Showcase View */}
        {viewMode === "showcase" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Visual Certificate Preview Frame */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div
                className="relative aspect-[16/11] rounded-2xl glass-panel border border-white/10 p-4 sm:p-6 flex items-center justify-center cursor-pointer group shadow-2xl"
                onClick={() => setSelectedCert(activeCert)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCert.id}
                    src={activeCert.image}
                    alt={activeCert.title}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="max-h-full max-w-full object-contain rounded-lg drop-shadow-md"
                  />
                </AnimatePresence>

                {/* Enlarge Hint */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md">
                  <Maximize2 size={12} className="text-[#D4FF00]" />
                  <span>Inspect Certificate</span>
                </div>

                {/* Index Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-dock text-[11px] font-mono text-[#D4FF00] border border-[#D4FF00]/30">
                  {String(activeCert.id).padStart(2, "0")} / 14
                </div>
              </div>

              {/* Navigation Controls & Progress */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevCert}
                    className="p-2.5 rounded-xl glass-dock border border-white/10 hover:border-white/30 text-white transition-colors cursor-pointer"
                    aria-label="Previous Certificate"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextCert}
                    className="p-2.5 rounded-xl glass-dock border border-white/10 hover:border-white/30 text-white transition-colors cursor-pointer"
                    aria-label="Next Certificate"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <span className="text-xs font-mono text-[#5E606B] ml-2">
                    {activeIndex + 1} of {certificates.length}
                  </span>
                </div>

                {/* Quick Thumbnails Dots */}
                <div className="hidden sm:flex items-center gap-1.5 max-w-xs overflow-x-auto">
                  {certificates.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activeIndex === i
                          ? "w-6 bg-[#D4FF00]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Jump to certificate ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Credential Metadata */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-7 rounded-2xl glass-panel border border-white/10 flex flex-col gap-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="font-mono text-xs text-[#D4FF00] uppercase tracking-wider">
                    {activeCert.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck size={12} />
                    <span>Verified</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl text-white tracking-tight leading-snug">
                    {activeCert.title}
                  </h3>
                  <p className="font-mono text-xs text-[#9A9AA4] mt-1">
                    Issued by <span className="text-white font-semibold">{activeCert.issuer}</span>
                  </p>
                </div>

                {/* Credential Data Points */}
                <div className="space-y-3 font-mono text-xs text-[#EDEDF2] pt-2">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#5E606B]">Completion Date</span>
                    <span>{activeCert.date}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#5E606B]">Credential ID</span>
                    <span className="text-[#D4FF00]">{activeCert.credentialId}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#5E606B]">Issuing Organization</span>
                    <span>{activeCert.issuer}</span>
                  </div>
                </div>

                {/* Verification Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D4FF00] text-black font-bold text-xs font-mono hover:bg-white transition-colors"
                  >
                    <span>Verify On Coursera</span>
                    <ExternalLink size={12} />
                  </a>

                  <a
                    href={activeCert.pdf}
                    download
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-dock border border-white/10 text-white text-xs font-mono hover:border-white/30 transition-colors"
                  >
                    <Download size={13} />
                    <span>PDF</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: Complete 14-Item Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-5 glass-panel border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/10] rounded-xl overflow-hidden glass-dock border border-white/5 p-2 mb-4 cursor-pointer flex items-center justify-center bg-black/40"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain rounded transition-transform group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-2.5 py-1 rounded-full bg-[#D4FF00] text-black font-mono text-[10px] font-bold">
                        Inspect
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-[#D4FF00] uppercase">{cert.category}</span>
                    <span className="text-[#5E606B]">#{cert.id}</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#D4FF00] transition-colors leading-snug mb-1">
                    {cert.title}
                  </h3>

                  <p className="font-mono text-xs text-[#9A9AA4] mb-3">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EDEDF2] hover:text-[#D4FF00] flex items-center gap-1 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink size={11} />
                  </a>

                  <a
                    href={cert.pdf}
                    download
                    className="text-[#9A9AA4] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Download size={11} />
                    <span>PDF</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Fullscreen Certificate Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[92vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Certificate Modal"
              >
                <X size={24} />
              </button>

              <div className="relative rounded-2xl overflow-hidden glass-dock border border-white/10 p-3 sm:p-6 bg-black/70 shadow-2xl flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />
              </div>

              {/* Action Bar */}
              <div className="mt-4 w-full p-4 rounded-xl glass-panel border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    {selectedCert.title}
                  </h4>
                  <span className="text-[#9A9AA4]">
                    {selectedCert.issuer} • ID: {selectedCert.credentialId}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D4FF00] text-black font-bold hover:bg-white transition-colors"
                  >
                    <span>Verify On Coursera</span>
                    <ExternalLink size={12} />
                  </a>

                  <a
                    href={selectedCert.pdf}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass-dock border border-white/10 text-white hover:border-white/30 transition-colors"
                  >
                    <Download size={13} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

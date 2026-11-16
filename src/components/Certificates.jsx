import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  Maximize2,
  X,
  ShieldCheck,
  LayoutGrid,
  Sparkles,
  MousePointerClick,
} from "lucide-react";
import certificates from "../details/certificates";

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState("arc"); // 'arc' | 'grid'
  const [selectedCert, setSelectedCert] = useState(null);
  const arcContainerRef = useRef(null);

  const total = certificates.length;

  const nextCert = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCert = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const activeCert = certificates[activeIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedCert !== null) {
        if (e.key === "Escape") setSelectedCert(null);
        return;
      }
      if (viewMode === "arc") {
        if (e.key === "ArrowRight") nextCert();
        if (e.key === "ArrowLeft") prevCert();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert, viewMode, nextCert, prevCert]);

  // Touch and mouse drag swipe handlers
  const [dragStartX, setDragStartX] = useState(null);

  const handleTouchStart = (e) => setDragStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (dragStartX === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = dragStartX - touchEnd;
    if (distance > 45) nextCert();
    if (distance < -45) prevCert();
    setDragStartX(null);
  };

  const handleMouseDown = (e) => setDragStartX(e.clientX);
  const handleMouseUp = (e) => {
    if (dragStartX === null) return;
    const distance = dragStartX - e.clientX;
    if (distance > 60) nextCert();
    if (distance < -60) prevCert();
    setDragStartX(null);
  };

  // Helper to calculate shortest circular distance along the arc
  const getDiff = (idx) => {
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="certificates" className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop overflow-hidden">
      {/* Background radial ambient lights for curved theatrical atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4FF00]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
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
              14 verified credentials from Google, Google Cloud, Scrimba, and accredited Universities, presented in a cinematic curved arc gallery.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="inline-flex p-1 rounded-xl glass-dock border border-white/10">
              <button
                onClick={() => setViewMode("arc")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === "arc"
                    ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.3)]"
                    : "text-[#9A9AA4] hover:text-white"
                }`}
              >
                Curved Arc (3D)
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

        {/* ============================================================== */}
        {/* VIEW 1: CINEMATIC CURVED ARC CAROUSEL                          */}
        {/* ============================================================== */}
        {viewMode === "arc" && (
          <div className="flex flex-col items-center">
            
            {/* Curved Arc Stage Viewport */}
            <div
              ref={arcContainerRef}
              className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] flex items-center justify-center select-none overflow-visible"
              style={{ perspective: "1100px" }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              {certificates.map((cert, idx) => {
                const diff = getDiff(idx);
                const absDiff = Math.abs(diff);

                // We display the center card (0), first neighbors (±1), and second neighbors (±2)
                const isVisible = absDiff <= 2;
                const isCenter = diff === 0;

                // Arc math calculation:
                // Scale drops as distance from center increases
                const scale = isCenter ? 1.0 : absDiff === 1 ? 0.82 : 0.66;

                // Blur levels requested: center has 0 blur, side certificates have ~30% blur (3.5px) and outer cards have more blur
                const blur = isCenter ? "0px" : absDiff === 1 ? "3.5px" : "7px";

                // Opacity reduces for side cards
                const opacity = isCenter ? 1.0 : absDiff === 1 ? 0.65 : 0.32;

                // 3D inward rotation along curved arc (like curved display screen)
                const rotateY = isCenter ? 0 : diff * -16;

                // Arc horizontal displacement
                const translateX = diff * 86; // in %

                // Arc vertical curve offset (curves down as it spreads left/right)
                const translateY = Math.pow(absDiff, 1.7) * 16; // in px

                // Z-index priority: center is highest
                const zIndex = isCenter ? 40 : 30 - absDiff * 10;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={cert.id}
                    onClick={() => {
                      if (isCenter) {
                        setSelectedCert(cert);
                      } else {
                        setActiveIndex(idx);
                      }
                    }}
                    animate={{
                      scale,
                      opacity,
                      x: `${translateX}%`,
                      y: `${translateY}px`,
                      rotateY,
                      filter: `blur(${blur})`,
                      zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                      mass: 0.8,
                    }}
                    className={`absolute w-[290px] sm:w-[380px] md:w-[440px] aspect-[16/11] rounded-2xl glass-panel p-3 sm:p-4 flex flex-col items-center justify-center cursor-pointer transition-shadow ${
                      isCenter
                        ? "border-[#D4FF00] shadow-[0_0_35px_rgba(212,255,0,0.25)] ring-1 ring-[#D4FF00]/50"
                        : "border-white/10 hover:border-white/30"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      willChange: "transform, filter, opacity",
                    }}
                  >
                    {/* Certificate Image Frame */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/60 flex items-center justify-center p-1 sm:p-2 border border-white/5">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain rounded transition-transform"
                        draggable={false}
                      />

                      {/* Center card hover badge */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-black/35 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4FF00] text-black text-xs font-mono font-bold shadow-lg">
                            <Maximize2 size={12} />
                            <span>Click to Enlarge</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Top status indicator on active certificate */}
                    {isCenter && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/90 border border-[#D4FF00] text-[10px] font-mono text-[#D4FF00] font-bold shadow-md flex items-center gap-1">
                        <Sparkles size={10} />
                        <span>Featured Credential</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Arc Navigation Controls & Drag Hint */}
            <div className="w-full max-w-xl mt-6 flex flex-col items-center gap-4">
              
              {/* Prev / Next / Indicator Toolbar */}
              <div className="flex items-center justify-between w-full px-4">
                <button
                  onClick={prevCert}
                  className="p-2.5 rounded-xl glass-dock border border-white/10 hover:border-[#D4FF00]/40 text-white hover:text-[#D4FF00] transition-colors cursor-pointer"
                  aria-label="Previous Certificate"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Arc Track Dots */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-[280px] sm:max-w-md py-1">
                  {certificates.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activeIndex === i
                          ? "w-7 bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Jump to certificate ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextCert}
                  className="p-2.5 rounded-xl glass-dock border border-white/10 hover:border-[#D4FF00]/40 text-white hover:text-[#D4FF00] transition-colors cursor-pointer"
                  aria-label="Next Certificate"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Center Active Certificate Detail Card */}
              <motion.div
                key={activeCert.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D4FF00] uppercase mb-1.5">
                    <span>{activeCert.category}</span>
                    <span>•</span>
                    <span className="text-[#5E606B]">Credential {activeIndex + 1} of {total}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                    {activeCert.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-mono text-[#9A9AA4]">
                    <span>Issuer: <strong className="text-white font-medium">{activeCert.issuer}</strong></span>
                    <span>•</span>
                    <span>Completed: <strong className="text-white font-medium">{activeCert.date}</strong></span>
                    <span>•</span>
                    <span>ID: <code className="text-[#D4FF00]">{activeCert.credentialId}</code></span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D4FF00] text-black font-bold text-xs font-mono hover:bg-white transition-colors"
                  >
                    <span>Verify Coursera</span>
                    <ExternalLink size={12} />
                  </a>

                  <a
                    href={activeCert.pdf}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl glass-dock border border-white/10 text-white text-xs font-mono hover:border-white/30 transition-colors"
                  >
                    <Download size={13} />
                    <span>PDF</span>
                  </a>
                </div>
              </motion.div>

              {/* Interaction Hint */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#5E606B]">
                <MousePointerClick size={12} className="text-[#D4FF00]" />
                <span>Swipe horizontally or click side certificate to rotate arc</span>
              </div>

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: COMPLETE 14-ITEM GRID VIEW                             */}
        {/* ============================================================== */}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-2xl p-4 sm:p-8"
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

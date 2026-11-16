import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Plus, Minus, ArrowUpRight } from "lucide-react";
import services from "../details/services";

export default function Services() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="services" className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9A9AA4] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
            <Briefcase size={13} className="text-[#D4FF00]" />
            <span>03 // Professional Offerings</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            What I Deliver<span className="text-[#D4FF00]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9A9AA4] max-w-xl font-sans">
            End-to-end design and engineering services—bridging high-performance code execution with bespoke graphic design.
          </p>
        </div>

        {/* Services Accordion List */}
        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => {
            const isOpen = activeAccordion === index;

            return (
              <div
                key={service.num}
                className="border-b border-white/10 transition-colors hover:bg-white/[0.02]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 sm:py-8 px-2 sm:px-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-mono text-xs sm:text-sm text-[#5E606B] group-hover:text-[#D4FF00] transition-colors">
                      {service.num}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white group-hover:text-[#D4FF00] transition-colors tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block font-mono text-[11px] text-[#5E606B] uppercase tracking-wider">
                      {service.tags[0]}
                    </span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      isOpen
                        ? "border-[#D4FF00] bg-[#D4FF00] text-black shadow-[0_0_15px_rgba(212,255,0,0.3)]"
                        : "border-white/10 text-white group-hover:border-white/30"
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 px-2 sm:px-4 pl-12 sm:pl-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <p className="text-[#9A9AA4] text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2 items-center">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-lg glass-dock border border-white/5 text-[#EDEDF2] text-xs font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

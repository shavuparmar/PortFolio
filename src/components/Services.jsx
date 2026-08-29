import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "../details/services";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Map the user's services to the strict list if needed, or just use the data
  const defaultServices = [
    { title: "FULL-STACK DEVELOPMENT", desc: "Building scalable web applications from robust backends to interactive frontends." },
    { title: "FRONTEND DEVELOPMENT", desc: "Crafting pixel-perfect, accessible, and highly performant user interfaces." },
    { title: "BACKEND DEVELOPMENT", desc: "Designing secure databases, RESTful APIs, and efficient server logic." },
    { title: "GRAPHICS DESIGN", desc: "Creating modern branding, marketing assets, and premium digital visuals." },
    { title: "UI / UX DESIGN", desc: "Structuring intuitive user experiences and aesthetic interface designs." },
    { title: "WEBSITE DEVELOPMENT", desc: "Developing complete, production-ready marketing and portfolio websites." }
  ];

  // We will use the structured list requested by the user, filling in descriptions
  const displayServices = defaultServices.map((ds, i) => {
    // If there's matching data in services.js, we could merge, but the prompt gave an explicit list:
    return {
      ...ds,
      num: `0${i + 1}`
    };
  });

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-24 flex items-center gap-4 text-[#888888] font-mono text-xs tracking-widest uppercase">
          <span>03 / What I Do</span>
          <span className="w-12 h-[1px] bg-[#333333]"></span>
        </div>

        <div className="flex flex-col border-t border-[#222222]">
          {displayServices.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={index}
                className="group border-b border-[#222222] relative cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated background fill on hover */}
                <div 
                  className={`absolute inset-0 bg-[#0a0a0a] transform transition-transform duration-500 ease-out origin-left ${
                    isHovered ? "scale-x-100" : "scale-x-0"
                  }`} 
                />

                <div className="relative z-10 py-8 md:py-12 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className={`font-mono text-sm transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#555555]'}`}>
                      {service.num}
                    </span>
                    <h3 className={`text-2xl md:text-5xl font-bold tracking-tighter uppercase transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#888888]'}`}>
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-8 flex-1 md:ml-16">
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="hidden md:block text-[#A0A0A0] text-sm font-light max-w-xs text-right"
                        >
                          {service.desc}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden ml-auto md:ml-0">
                      <motion.span 
                        animate={{ 
                          x: isHovered ? 0 : -40,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute text-white"
                      >
                        →
                      </motion.span>
                      <motion.span 
                        animate={{ 
                          x: isHovered ? 40 : 0,
                          opacity: isHovered ? 0 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute text-[#555555]"
                      >
                        +
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Mobile description always visible slightly or expands */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="md:hidden relative z-10 px-4 pb-8 text-[#A0A0A0] text-sm font-light"
                    >
                      {service.desc}
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

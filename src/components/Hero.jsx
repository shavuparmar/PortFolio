import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import personal from "../details/personal";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[100vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          style={{ y: yText, opacity }} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 text-[#888888] font-mono text-xs tracking-widest uppercase mb-8"
            >
              <span>01 / Hello</span>
              <span className="w-12 h-[1px] bg-[#333333]"></span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[clamp(3rem,12vw,8rem)] font-bold leading-[0.85] tracking-tighter uppercase text-white mb-6 break-words"
            >
              Saurabh<br />
              <span className="text-[#888888]">Parmar</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-8 leading-snug">
                FULL-STACK<br />
                DEVELOPER<br />
                <span className="text-[#888888]">+ GRAPHICS<br />DESIGNER</span>
              </h2>

              <p className="text-[#A0A0A0] text-sm sm:text-base font-light max-w-sm mb-12 leading-relaxed">
                {personal.shortIntro}
              </p>

              <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest">
                <a 
                  href="#work" 
                  className="px-6 py-3 border border-white bg-white text-black hover:bg-transparent hover:text-white transition-all font-bold group flex items-center gap-2"
                >
                  <span>Explore Work</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border border-[#333333] hover:border-white text-white transition-all flex items-center gap-2 group"
                >
                  <span>Contact Me</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Block */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              style={{ scale: scaleImage }}
              className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] max-w-sm lg:max-w-none mx-auto relative overflow-hidden bg-[#0a0a0a] border border-[#222222]"
            >
              {/* Using a layered composition or graphic artwork placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#050505]" />
              <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="self-end text-[#333] font-black text-6xl tracking-tighter">SP</div>
                <div className="text-[#888] font-mono text-xs uppercase tracking-widest writing-vertical-rl rotate-180">
                  EST. 2024
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[#888888] font-mono text-xs uppercase tracking-widest"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#888888] to-transparent animate-pulse" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

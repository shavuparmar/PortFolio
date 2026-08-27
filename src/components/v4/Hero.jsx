import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#F9F9F9]">
      <motion.div 
        style={{ y: yText, opacity }} 
        className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Intro */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#666] mb-8"
        >
          HELLO, I'M SAURABH.
        </motion.p>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3.5rem,10vw,12rem)] font-black tracking-tighter uppercase leading-[0.85] text-[#111] flex flex-col mb-12"
        >
          <span>FULL-STACK</span>
          <span className="text-[#888]">DEVELOPER</span>
          <span className="text-[#CCC]">&</span>
          <span className="text-[#888]">GRAPHICS</span>
          <span>DESIGNER.</span>
        </motion.h1>

        {/* Description & CTAs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-[#E5E5E5] pt-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl"
          >
            <p className="text-lg md:text-xl font-medium leading-relaxed text-[#555]">
              I build digital products and visual experiences that combine robust software engineering, strategic design, and creativity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a 
              href="#work"
              className="w-full sm:w-auto text-center text-xs font-black tracking-widest uppercase text-[#F9F9F9] bg-[#111] px-8 py-4 hover:bg-[#333] hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto text-center text-xs font-black tracking-widest uppercase text-[#111] border border-[#111] px-8 py-4 hover:bg-[#111] hover:text-[#F9F9F9] hover:-translate-y-1 transition-all duration-300"
            >
              Let's Talk
            </a>
          </motion.div>

        </div>

        {/* Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-[-4rem] right-6 md:right-12"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#888]">
            01 / 10
          </span>
        </motion.div>

      </motion.div>
    </section>
  );
}

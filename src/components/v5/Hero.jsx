import { motion, useScroll, useTransform } from "framer-motion";
import personal from "../../details/personal";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Background Graphic Element */}
      <motion.div 
        style={{ y: y2, opacity }} 
        className="absolute right-0 top-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#111] rounded-full blur-[120px] pointer-events-none"
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 pt-20">
        
        <motion.div style={{ y: y1, opacity }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#888] mb-12 flex items-center gap-4"
            >
              <span>01 / INTRODUCTION</span>
              <span className="w-12 h-[1px] bg-[#333]" />
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(4rem,10vw,12rem)] font-black tracking-tighter uppercase leading-[0.85] text-[#F4F4F5] flex flex-col mb-12"
            >
              <span>{personal.name.split(' ')[0]}</span>
              <span className="text-[#333]">{personal.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-xl md:text-3xl font-black uppercase tracking-widest text-[#AAA] mb-6">
                FULL-STACK DEVELOPER <br/> <span className="text-[#555]">+</span> GRAPHICS DESIGNER
              </h2>
              <p className="text-sm md:text-base font-medium text-[#666] max-w-lg leading-relaxed mb-12">
                I build digital products and visual experiences where technology meets creativity.
              </p>
              
              <a 
                href="#about"
                className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-[#F4F4F5] hover:text-[#AAA] transition-colors group"
              >
                <span className="w-8 h-[1px] bg-[#F4F4F5] group-hover:w-16 transition-all duration-300" />
                SCROLL TO EXPLORE
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
             {/* Optional Right Side abstract graphic */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.4 }}
               className="w-full aspect-[3/4] border border-[#222] relative overflow-hidden"
             >
               <div className="absolute inset-0 bg-gradient-to-tr from-[#111] to-[#050505]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[150%] bg-[#222] rotate-45" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[150%] bg-[#222] -rotate-45" />
             </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

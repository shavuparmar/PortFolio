import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import personal from "../../details/personal";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-zinc-950">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-zinc-800 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-zinc-900 blur-[150px]" />
      </div>

      <motion.div style={{ y, opacity }} className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Meta Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-8 mb-12 gap-6">
          <div className="flex items-center gap-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">
              Available for freelance
            </span>
          </div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 text-right max-w-xs">
            01 — Introduction
          </p>
        </div>

        {/* Main Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-end">
          
          {/* Left: Typography */}
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,8vw,10rem)] font-black tracking-tighter uppercase leading-[0.85] text-white flex flex-col"
            >
              <span>I BUILD</span>
              <span className="text-zinc-600">DIGITAL</span>
              <span>EXPERIENCES.</span>
            </motion.h1>
          </div>

          {/* Right: Info & Actions */}
          <div className="lg:col-span-4 flex flex-col gap-12 lg:pb-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="border-l-2 border-zinc-800 pl-6"
            >
              <h2 className="text-lg font-bold tracking-widest text-zinc-300 uppercase mb-4">
                Full-Stack Developer <br/> & Graphics Designer
              </h2>
              <p className="text-sm font-medium leading-relaxed text-zinc-500">
                {personal.shortIntro || "Building useful digital products, modern interfaces, and visual experiences from the ground up."}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#work"
                className="group flex items-center justify-center gap-3 bg-white text-zinc-950 px-8 py-4 rounded-full text-xs font-black tracking-widest uppercase transition-transform hover:scale-105 active:scale-95"
              >
                View Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href={personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-transparent border border-zinc-800 text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:bg-zinc-900 active:scale-95"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}

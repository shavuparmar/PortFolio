import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import personal from "../../details/personal";
import social from "../../details/social";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-[#F4F1EA]">
      {/* Background subtle elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-zinc-200/50 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-zinc-300/30 blur-[120px]" />
      </div>

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-[1600px] relative z-10 flex flex-col justify-center min-h-[70vh]">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm self-start mb-12 shadow-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">Available for freelance</span>
        </motion.div>

        {/* Main Headline */}
        <div className="flex flex-col gap-2 md:gap-4 mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,8vw,9rem)] font-black tracking-tighter uppercase leading-[0.85] text-zinc-900"
          >
            FULL-STACK <br />
            <span className="text-zinc-400">DEVELOPER</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 my-4 md:my-0 ml-2"
          >
            <span className="text-4xl md:text-7xl font-black text-zinc-300">×</span>
            <span className="text-sm md:text-lg font-bold tracking-widest uppercase text-zinc-500 border-l-2 border-zinc-300 pl-6 max-w-sm leading-relaxed">
              I design digital experiences and build them into real products.
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,8vw,9rem)] font-black tracking-tighter uppercase leading-[0.85] text-zinc-900"
          >
            GRAPHICS <br />
            <span className="text-zinc-400">DESIGNER</span>
          </motion.h1>
        </div>

        {/* Action Buttons & Socials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-12 border-t border-zinc-200 pt-12"
        >
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="group flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#F4F1EA] transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-xl shadow-zinc-900/20"
            >
              Explore Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-green-600 hover:scale-105 active:scale-95 shadow-xl shadow-green-500/20"
            >
              <MessageCircle size={18} />
              Let's Chat
            </a>

            <a 
              href={personal.resumeLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border-2 border-zinc-900 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              <Download size={18} className="transition-transform group-hover:-translate-y-1" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            {social.map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-widest uppercase text-zinc-500 transition-colors hover:text-zinc-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

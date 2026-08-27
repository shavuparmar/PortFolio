import { motion } from "framer-motion";
import personal from "../../details/personal";

export default function Contact() {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-[#050505] text-[#F4F4F5]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 text-center">
        
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666] mb-8 block">
          09 / FINAL
        </span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[clamp(4rem,10vw,12rem)] font-black tracking-tighter uppercase leading-[0.85] mb-24"
        >
          LET'S <br/>
          MAKE <br/>
          <span className="text-[#333]">SOMETHING.</span>
        </motion.h2>

        <p className="text-sm font-black tracking-[0.2em] uppercase text-[#888] mb-16">
          Available for: <span className="text-[#F4F4F5]">Development</span> · <span className="text-[#F4F4F5]">Design</span> · <span className="text-[#F4F4F5]">Creative Projects</span>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
          
          <a
            href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full md:w-auto px-12 py-6 border border-[#222] text-[#F4F4F5] text-xs font-black tracking-[0.2em] uppercase hover:bg-[#F4F4F5] hover:text-[#050505] transition-colors"
          >
            CALL ME
          </a>

          <a
            href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Saurabh, I found your portfolio and would like to discuss a project with you.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-12 py-6 bg-[#F4F4F5] text-[#050505] text-xs font-black tracking-[0.2em] uppercase hover:bg-[#CCC] transition-colors"
          >
            WHATSAPP
          </a>

        </div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import personal from "../../details/personal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-40 bg-[#111] text-[#F9F9F9] border-t border-[#333]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 text-center">
        
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666] mb-12 block">
          09 / 10 — CONTACT
        </span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[clamp(4rem,12vw,14rem)] font-black tracking-tighter uppercase leading-[0.8] mb-20"
        >
          LET'S <br/>
          <span className="text-[#555]">BUILD</span> <br/>
          SOMETHING.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-[#333] pt-12">
          
          <a
            href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Saurabh, I found your portfolio and would like to discuss a project with you.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 text-center"
          >
            <h3 className="text-xs font-black tracking-widest uppercase text-white group-hover:text-[#AAA] transition-colors">WhatsApp</h3>
            <span className="text-sm font-medium text-[#666] group-hover:text-white transition-colors flex items-center gap-2">
              Message Me <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="group flex flex-col items-center gap-4 text-center"
          >
            <h3 className="text-xs font-black tracking-widest uppercase text-white group-hover:text-[#AAA] transition-colors">Email</h3>
            <span className="text-sm font-medium text-[#666] group-hover:text-white transition-colors flex items-center gap-2">
              {personal.email} <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
            className="group flex flex-col items-center gap-4 text-center"
          >
            <h3 className="text-xs font-black tracking-widest uppercase text-white group-hover:text-[#AAA] transition-colors">Phone</h3>
            <span className="text-sm font-medium text-[#666] group-hover:text-white transition-colors flex items-center gap-2">
              {personal.phone} <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </a>

          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="text-xs font-black tracking-widest uppercase text-white">Location</h3>
            <span className="text-sm font-medium text-[#666]">
              {personal.location}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

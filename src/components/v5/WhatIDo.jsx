import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import services from "../../details/services";

export default function WhatIDo() {
  return (
    <section id="services" className="py-32 lg:py-48 bg-[#050505] text-[#F4F4F5] border-t border-[#111]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        
        <div className="mb-24">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666] mb-4 block">
            03 / SERVICES
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none text-[#F4F4F5]"
          >
            WHAT I DO
          </motion.h2>
        </div>

        <div className="flex flex-col border-t border-[#222]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative border-b border-[#222] py-10 lg:py-16 overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-[#111] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
                <div className="flex items-center gap-8 lg:gap-16">
                  <span className="text-xl font-black text-[#444] group-hover:text-[#AAA] transition-colors duration-300">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-[#CCC] group-hover:text-[#F4F4F5] group-hover:translate-x-4 transition-all duration-500">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-6 self-start md:self-auto md:ml-auto">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#555] group-hover:text-[#AAA] transition-colors duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                    Explore
                  </p>
                  <ArrowRight size={28} className="text-[#333] group-hover:text-[#F4F4F5] transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

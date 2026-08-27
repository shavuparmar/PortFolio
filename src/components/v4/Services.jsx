import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import services from "../../details/services";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-40 bg-[#111] text-[#F9F9F9] border-t border-[#333]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        
        <div className="mb-32 flex justify-between items-end border-b border-[#333] pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
          >
            SERVICES
          </motion.h2>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666] hidden sm:block">
            05 / 10
          </span>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group border-b border-[#333] py-8 lg:py-12 cursor-pointer relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16 relative z-10">
                <span className="text-xl font-black text-[#555] group-hover:text-white transition-colors duration-300 w-12">
                  0{index + 1}
                </span>
                
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#CCC] group-hover:text-white group-hover:translate-x-4 transition-all duration-300 flex-1">
                  {service.title}
                </h3>
                
                <div className="flex-1 lg:max-w-sm flex items-center justify-between gap-8">
                  <p className="text-sm font-medium text-[#666] group-hover:text-[#AAA] transition-colors duration-300 line-clamp-2">
                    {service.description}
                  </p>
                  <ArrowUpRight size={24} className="text-[#333] group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

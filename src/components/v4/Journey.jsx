import { motion } from "framer-motion";
import journey from "../../details/journy";

export default function Journey() {
  return (
    <section className="py-20 lg:py-40 bg-[#111] text-[#F9F9F9] border-t border-[#333]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter uppercase leading-none mb-8"
            >
              JOURNEY
            </motion.h2>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666]">
              07 / 10
            </span>
          </div>
        </div>

        <div className="lg:col-span-8 border-l border-[#333] pl-6 md:pl-12">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="relative mb-24 last:mb-0 group"
            >
              {/* Dot */}
              <div className="absolute -left-[29px] md:-left-[53px] top-2 h-3 w-3 rounded-full bg-[#333] transition-colors duration-500 group-hover:bg-white" />
              
              <span className="text-xs font-black tracking-widest text-[#666] mb-4 block">
                {item.year}
              </span>
              
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white">
                {item.title}
              </h3>
              
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#888] mb-6 pb-6 border-b border-[#333] inline-block">
                {item.institution}
              </p>
              
              <p className="text-base text-[#AAA] max-w-2xl leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

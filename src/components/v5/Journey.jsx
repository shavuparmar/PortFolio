import { motion } from "framer-motion";
import journey from "../../details/journy";

export default function Journey() {
  return (
    <section className="py-32 lg:py-48 bg-[#050505] text-[#F4F4F5] border-t border-[#111]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        
        <div className="mb-24 flex justify-between items-end border-b border-[#222] pb-12">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666] mb-4 block">
              07 / TIMELINE
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
            >
              JOURNEY
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-16 border-b border-[#111] group"
            >
              <div className="md:col-span-3">
                <span className="text-4xl md:text-5xl font-black text-[#222] group-hover:text-[#F4F4F5] transition-colors duration-500">
                  {item.year}
                </span>
              </div>
              
              <div className="md:col-span-9 flex flex-col">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-[#CCC] group-hover:text-[#F4F4F5] transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666] mb-8">
                  {item.institution}
                </p>
                
                <p className="text-base text-[#888] font-medium leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

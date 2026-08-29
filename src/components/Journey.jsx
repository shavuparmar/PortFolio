import { motion } from "framer-motion";
import journy from "../details/journy";

export default function Journey() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="mb-24 flex items-center gap-4 text-[#888888] font-mono text-xs tracking-widest uppercase">
          <span>08 / Journey</span>
          <span className="w-12 h-[1px] bg-[#333333]"></span>
        </div>

        <div className="flex flex-col gap-16 relative">
          
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-[7px] md:left-[19px] w-[1px] bg-gradient-to-b from-[#333333] via-[#222222] to-transparent" />

          {journy.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-10 md:pl-20 group"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-3 top-2 w-[15px] h-[15px] bg-[#050505] border border-[#555555] rounded-full group-hover:bg-white group-hover:border-white transition-colors duration-500 shadow-[0_0_0_4px_#050505]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <span className="text-[#888888] font-mono text-xs uppercase tracking-widest min-w-[100px]">
                  {item.year}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-white group-hover:text-[#E5E5E5] transition-colors">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-[#A0A0A0] text-base font-light leading-relaxed md:pl-[132px] max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

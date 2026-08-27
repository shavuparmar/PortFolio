import { motion } from "framer-motion";
import journey from "../../details/journy";

export default function JourneySection() {
  return (
    <section className="py-20 lg:py-40 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        <div className="lg:w-1/3 lg:sticky lg:top-40 self-start">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6">
            08 — Experience
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter uppercase leading-[0.9]"
          >
            THE <br className="hidden md:block"/>
            <span className="text-zinc-600">JOURNEY.</span>
          </motion.h2>
        </div>

        <div className="lg:w-2/3 border-l border-zinc-800 ml-4 md:ml-0">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-16 mb-20 last:mb-0 group"
            >
              {/* Animated Dot */}
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-zinc-800 transition-colors duration-500 group-hover:bg-white" />
              
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-xs font-black tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {item.year}
                </span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-6 pb-6 border-b border-zinc-900 inline-block">
                {item.institution}
              </p>
              
              <p className="text-base md:text-lg text-zinc-500 max-w-2xl leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

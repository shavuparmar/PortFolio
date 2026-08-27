import { motion } from "framer-motion";
import journey from "../../details/journy";

export default function JourneyTimeline() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 lg:py-40 bg-[#F4F1EA]">
      <div className="mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85] text-zinc-900"
        >
          MY <br/>
          <span className="text-zinc-400">JOURNEY</span>
        </motion.h2>
      </div>

      <div className="relative border-l-2 border-zinc-200 ml-4 md:ml-8 pb-12">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-16 relative pl-10 md:pl-16 last:mb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-1 h-4 w-4 rounded-full bg-zinc-900 ring-8 ring-[#F4F1EA]" />
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <span className="text-sm font-black tracking-[0.2em] uppercase text-zinc-400">
                {item.year}
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-zinc-900 leading-none">
                {item.title}
              </h3>
            </div>
            
            <p className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-6">
              {item.institution}
            </p>
            
            <p className="text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

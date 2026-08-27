import { motion } from "framer-motion";
import services from "../../details/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-40 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6">
              03 — What I Do
            </p>
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter uppercase leading-[0.9]"
            >
              SERVICES & <br className="hidden md:block"/>
              <span className="text-zinc-600">CAPABILITIES.</span>
            </motion.h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              I offer a complete end-to-end workflow, from initial design concepts to fully deployed production-ready applications.
            </p>
          </div>
        </div>

        <div className="flex flex-col border-t border-zinc-900">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative border-b border-zinc-900 py-10 md:py-16 hover:bg-zinc-900/50 transition-colors duration-500 cursor-pointer overflow-hidden px-4 md:px-8 -mx-4 md:-mx-8"
            >
              {/* Animated reveal background */}
              <div className="absolute inset-0 bg-white scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 mix-blend-difference pointer-events-none z-10" />

              <div className="relative z-20 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                
                <div className="w-16">
                  <span className="text-sm font-black tracking-widest text-zinc-600 group-hover:text-zinc-300 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-300 group-hover:text-white transition-colors duration-500 leading-none">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex-1 md:max-w-md overflow-hidden">
                  <p className="text-sm font-medium leading-relaxed text-zinc-500 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

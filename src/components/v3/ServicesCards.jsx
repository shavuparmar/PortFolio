import { motion } from "framer-motion";
import services from "../../details/services";

export default function ServicesCards() {
  return (
    <section id="services" className="mx-auto max-w-[1600px] px-6 py-20 lg:py-40">
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85]"
        >
          MY <br/>
          <span className="text-zinc-400">SERVICES</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group rounded-[2rem] bg-white border border-zinc-200 p-10 hover:bg-zinc-900 transition-colors duration-500 cursor-pointer flex flex-col justify-between aspect-square max-h-[400px]"
          >
            <div>
              <span className="text-xl font-black text-zinc-300 group-hover:text-zinc-700 transition-colors">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-2xl font-black uppercase tracking-tighter text-zinc-900 group-hover:text-white transition-colors leading-tight">
                {service.title}
              </h3>
            </div>
            
            <p className="text-sm font-medium leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors line-clamp-4">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import skills from "../../details/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-40 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        <div className="mb-24">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6">
            06 — Technology
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter uppercase leading-[0.9]"
          >
            TOOLS & <br className="hidden md:block"/>
            <span className="text-zinc-600">TECHNOLOGIES.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 border-b border-zinc-900 pb-4 mb-6">
                <span className="text-xs font-black tracking-widest text-zinc-600">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-black uppercase tracking-widest text-white">
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li 
                    key={item} 
                    className="text-sm font-bold tracking-widest uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

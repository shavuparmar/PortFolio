import { motion } from "framer-motion";
import skills from "../../details/skills";

export default function SkillsBento() {
  return (
    <section id="skills" className="mx-auto max-w-[1600px] px-6 py-20 lg:py-40">
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85]"
        >
          TECH <br/>
          <span className="text-zinc-400">STACK</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-[2rem] bg-white p-8 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all group"
          >
            <h3 className="text-xl font-black uppercase tracking-widest text-zinc-900 mb-8 pb-4 border-b border-zinc-100 group-hover:border-zinc-900 transition-colors">
              {skillGroup.category}
            </h3>
            <ul className="space-y-4">
              {skillGroup.items.map((item) => (
                <li 
                  key={item} 
                  className="text-sm font-bold tracking-widest uppercase text-zinc-500 flex items-center gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 group-hover:bg-green-400 transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

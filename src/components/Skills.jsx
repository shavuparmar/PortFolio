import { motion } from "framer-motion";
import { Layers, Code2, Wrench, Palette, Sparkles, Terminal } from "lucide-react";
import skillsData from "../details/skills";

const categoryIcons = {
  "Web Development": Code2,
  "Tools & Databases": Wrench,
  "Graphics Design": Palette,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9A9AA4] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
            <Layers size={13} className="text-[#D4FF00]" />
            <span>02 // Capabilities & Stack</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Skills & Stack<span className="text-[#D4FF00]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9A9AA4] max-w-xl font-sans">
            Actual technologies, developer tools, and design software I use daily to build functional digital applications and visual identities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category, catIdx) => {
            const Icon = categoryIcons[category.category] || Layers;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="p-7 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg glass-dock border border-white/10 flex items-center justify-center text-[#D4FF00]">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {category.category}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#5E606B]">
                      0{catIdx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-[#9A9AA4] leading-relaxed mb-6 font-sans">
                    {category.description}
                  </p>

                  {/* Clean Brutalist Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-dock border border-white/5 hover:border-[#D4FF00]/40 text-xs font-mono text-[#EDEDF2] hover:text-[#D4FF00] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]/60 group-hover:bg-[#D4FF00]"></span>
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#5E606B]">
                  <span>{category.items.length} verified competencies</span>
                  <span className="text-[#D4FF00] flex items-center gap-1">
                    <Terminal size={10} />
                    Active
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

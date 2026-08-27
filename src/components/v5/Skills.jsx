import { motion } from "framer-motion";

const techGroups = [
  {
    category: "DEVELOPMENT",
    items: ["JavaScript", "React", "Node.js", "Express.js"]
  },
  {
    category: "DATABASE",
    items: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    category: "DESIGN",
    items: ["Figma", "Canva"]
  },
  {
    category: "TOOLS",
    items: ["Git", "GitHub", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section className="py-32 lg:py-48 bg-[#F4F4F5] text-[#050505]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        
        <div className="mb-24 flex justify-between items-end">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#888] mb-4 block">
              04 / EXPERTISE
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
            >
              SKILLS
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 border-t border-[#CCC] pt-16">
          {techGroups.map((group, index) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-black tracking-[0.3em] uppercase text-[#050505] mb-8 pb-4 border-b border-[#CCC]">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.items.map(item => (
                  <li key={item} className="text-xl font-medium text-[#555] hover:text-[#050505] transition-colors cursor-default">
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

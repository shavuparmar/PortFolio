import { motion } from "framer-motion";

const techGroups = [
  {
    category: "DEVELOPMENT",
    items: ["JavaScript (ES6+)", "React.js", "Next.js", "Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "DATABASE",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"]
  },
  {
    category: "DESIGN",
    items: ["Figma", "Canva", "Adobe Suite", "UI/UX Design", "Wireframing"]
  },
  {
    category: "TOOLS & ECOSYSTEM",
    items: ["Git & GitHub", "Vite", "Tailwind CSS", "Framer Motion", "VS Code"]
  }
];

export default function TechStack() {
  return (
    <section className="py-20 lg:py-40 bg-[#F9F9F9] text-[#111] border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        
        <div className="mb-32 flex justify-between items-end border-b border-[#111] pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
          >
            TECHNOLOGY
          </motion.h2>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#888] hidden sm:block">
            06 / 10
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {techGroups.map((group, index) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-sm font-black tracking-[0.2em] uppercase text-[#111] mb-8 pb-4 border-b border-[#CCC]">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.items.map(item => (
                  <li key={item} className="text-lg md:text-xl font-medium text-[#555] hover:text-[#111] transition-colors cursor-default">
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

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "DEVELOPMENT",
      skills: ["React", "JavaScript", "Vite", "Node.js", "Express.js"]
    },
    {
      title: "DATABASE",
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "DESIGN",
      skills: ["Figma", "Canva", "Adobe Suite"]
    },
    {
      title: "TOOLS",
      skills: ["Git", "GitHub", "VS Code", "Vercel"]
    }
  ];

  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-24 flex items-center gap-4 text-[#888888] font-mono text-xs tracking-widest uppercase">
          <span>04 / Stack</span>
          <span className="w-12 h-[1px] bg-[#333333]"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-[#888888] font-mono text-sm tracking-widest uppercase border-b border-[#222222] pb-4">
                {category.title}
              </h3>
              
              <ul className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-xl md:text-2xl font-light text-white tracking-wide">
                    {skill}
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

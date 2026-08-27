import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projects from "../../details/projects";

export default function SelectedWork() {
  return (
    <section id="work" className="py-32 lg:py-48 bg-[#050505] text-[#F4F4F5] relative border-t border-[#111]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        <div className="mb-32 flex justify-between items-end border-b border-[#222] pb-12">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666] mb-4 block">
              05 / SHOWCASE
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
            >
              SELECTED WORK
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col gap-40 lg:gap-64">
          {projects.map((project, index) => {
            
            const isFeatured = index === 0;
            const isEven = index % 2 === 0;

            if (isFeatured) {
              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col group"
                >
                  <div className="flex justify-between items-end mb-8 border-b border-[#222] pb-8">
                    <span className="text-5xl lg:text-7xl font-black text-[#222] group-hover:text-[#444] transition-colors">0{index + 1}</span>
                    <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-[#F4F4F5] hover:text-[#AAA] transition-colors group/link">
                      VIEW PROJECT
                      <ArrowUpRight size={18} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-8">
                      <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-video overflow-hidden bg-[#111] block">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#333] font-bold uppercase tracking-widest text-xs">Loading</div>
                        )}
                        <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors duration-500" />
                      </a>
                    </div>
                    <div className="lg:col-span-4 flex flex-col pt-4">
                      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                        {project.title}
                      </h3>
                      <p className="text-base text-[#888] font-medium mb-12 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-auto">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-bold tracking-widest uppercase border border-[#222] px-3 py-1 text-[#666]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group`}
              >
                <div className={`lg:col-span-6 ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                  <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-[4/5] md:aspect-[3/2] overflow-hidden bg-[#111] block">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#333]">Loading</div>
                    )}
                  </a>
                </div>
                
                <div className={`lg:col-span-6 flex flex-col ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <span className="text-4xl lg:text-5xl font-black text-[#222] group-hover:text-[#444] transition-colors mb-8 block">0{index + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                    {project.title}
                  </h3>
                  <p className="text-base text-[#888] font-medium mb-12 leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#666] uppercase mb-12 flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.join(" · ")}
                  </p>
                  <div>
                    <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-[#F4F4F5] border-b border-transparent hover:border-[#F4F4F5] transition-colors pb-1 group/link">
                      VIEW PROJECT
                      <ArrowUpRight size={16} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

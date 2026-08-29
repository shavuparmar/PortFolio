import { motion } from "framer-motion";
import projects from "../details/projects";

export default function Projects() {
  return (
    <section id="work" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-32 flex items-center gap-4 text-[#888888] font-mono text-xs tracking-widest uppercase">
          <span>05 / Selected Work</span>
          <span className="w-12 h-[1px] bg-[#333333]"></span>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => {
            // Alternate layouts: 
            // 0 -> Image Right, Text Left
            // 1 -> Image Left, Text Right
            // 2 -> Full width image
            const layoutType = index % 3;
            
            if (layoutType === 2) {
              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-8 group"
                >
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                    <div>
                      <span className="text-[#555555] font-mono text-xl block mb-2">0{index + 1}</span>
                      <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[#888888] font-mono text-xs uppercase tracking-widest max-w-xs text-left md:text-right">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <div className="w-full aspect-video md:aspect-[21/9] bg-[#111111] overflow-hidden relative">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#0a0a0a] group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-50 mix-blend-overlay">
                       <span className="text-8xl font-black text-white uppercase tracking-tighter">{project.title.substring(0,3)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between gap-8 mt-4">
                    <p className="text-[#A0A0A0] text-lg font-light max-w-2xl leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-col gap-4 items-start md:items-end">
                      <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                        {project.tech.map(t => (
                          <span key={t} className="text-xs font-mono text-[#555555] uppercase">{t}</span>
                        ))}
                      </div>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#888] font-mono text-sm uppercase tracking-widest transition-colors mt-4">
                        View Live ↗
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            }

            const isReversed = layoutType === 1;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center group`}
              >
                {/* Visual Side */}
                <div className="w-full md:w-3/5 aspect-[4/3] bg-[#111111] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay opacity-30">
                    <span className="text-[12rem] font-black text-white uppercase tracking-tighter">{project.title.substring(0,1)}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <span className="text-[#555555] font-mono text-xl block mb-6">0{index + 1}</span>
                  <h3 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-white mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#888888] font-mono text-xs uppercase tracking-widest mb-6">
                    {project.subtitle}
                  </p>

                  <p className="text-[#A0A0A0] text-base font-light leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-12">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 border border-[#222222] text-[#888] font-mono text-xs uppercase bg-[#0a0a0a]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#888] font-mono text-sm uppercase tracking-widest transition-colors">
                      Live Site ↗
                    </a>
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#888] hover:text-white font-mono text-sm uppercase tracking-widest transition-colors">
                        Source ↗
                      </a>
                    )}
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

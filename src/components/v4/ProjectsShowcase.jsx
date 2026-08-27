import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projects from "../../details/projects";

export default function ProjectsShowcase() {
  return (
    <section id="work" className="py-20 lg:py-40 bg-[#111] text-[#F9F9F9] relative">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        
        <div className="mb-32 flex justify-between items-end border-b border-[#333] pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
          >
            SELECTED WORK
          </motion.h2>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666] hidden sm:block">
            03 / 10
          </span>
        </div>

        <div className="flex flex-col gap-32 lg:gap-48">
          {projects.map((project, index) => {
            
            // Vary layouts based on index
            const isEven = index % 2 === 0;
            const isFeatured = index === 0;

            if (isFeatured) {
              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col gap-8 group"
                >
                  <span className="text-4xl font-black text-[#333]">0{index + 1}</span>
                  
                  {/* Image Container with Fallback */}
                  <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-[#222] block">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#555] font-bold uppercase tracking-widest text-xs">
                        Loading Image...
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </a>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-8">
                      <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
                        {project.title}
                      </h3>
                      <p className="text-lg text-[#AAA] font-medium max-w-xl">
                        {project.description}
                      </p>
                    </div>
                    <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
                      <p className="text-xs font-bold tracking-[0.2em] text-[#666] uppercase md:text-right">
                        {project.tech.join(" · ")}
                      </p>
                      <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-white border-b border-transparent hover:border-white transition-colors pb-1 group/link">
                        View Project
                        <ArrowUpRight size={16} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                      </a>
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
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group ${isEven ? '' : 'direction-rtl'}`}
              >
                <div className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-[4/3] overflow-hidden bg-[#222] block">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#555] font-bold uppercase tracking-widest text-xs">
                        Loading Image...
                      </div>
                    )}
                  </a>
                </div>
                
                <div className={`lg:col-span-5 flex flex-col ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <span className="text-2xl font-black text-[#333] mb-6">0{index + 1}</span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-6">
                    {project.title}
                  </h3>
                  <p className="text-base text-[#AAA] font-medium mb-8">
                    {project.description}
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#666] uppercase mb-8">
                    {project.tech.join(" · ")}
                  </p>
                  <div>
                    <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-white border-b border-transparent hover:border-white transition-colors pb-1 group/link">
                      View Project
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

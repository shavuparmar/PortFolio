import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import projects from "../../details/projects";
import ProjectModal from "../ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Split projects for layout variety
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1, 3);
  const remainingProjects = projects.slice(3);

  return (
    <>
      <section id="work" className="py-20 lg:py-40 bg-zinc-950 text-white relative border-t border-zinc-900">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          
          <div className="mb-24">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6">
              04 — Selected Work
            </p>
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter uppercase leading-[0.9]"
            >
              DIGITAL <br className="hidden md:block"/>
              <span className="text-zinc-600">PRODUCTS.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-12 lg:gap-32">
            
            {/* FEATURED PROJECT (Massive) */}
            {featuredProject && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group cursor-pointer flex flex-col gap-8"
                onClick={() => setSelectedProject(featuredProject)}
              >
                <div className="relative w-full h-[50vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden bg-zinc-900">
                  {featuredProject.image ? (
                    <img 
                      src={featuredProject.image} 
                      alt={featuredProject.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-zinc-800 transition-colors duration-[2s] group-hover:bg-zinc-700" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white text-black rounded-full flex items-center justify-center font-black tracking-widest text-xs uppercase opacity-0 scale-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-100 mix-blend-screen pointer-events-none z-20">
                    View Project
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className="lg:col-span-8 flex flex-col">
                    <span className="text-4xl font-black text-zinc-800 mb-4">01</span>
                    <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-tighter uppercase leading-[0.9] text-white">
                      {featuredProject.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-4 flex flex-col pt-2 lg:pt-14">
                    <p className="text-sm font-medium leading-relaxed text-zinc-400 mb-6">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.tech.slice(0, 4).map(tech => (
                        <span key={tech} className="px-3 py-1 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6">
                      {featuredProject.live && featuredProject.live !== "#" && (
                        <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="group/link flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-white hover:text-zinc-400 transition-colors">
                          <ExternalLink size={14} /> Live Site
                        </a>
                      )}
                      {featuredProject.github && featuredProject.github !== "#" && (
                        <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="group/link flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-white hover:text-zinc-400 transition-colors">
                          <Github size={14} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SECONDARY PROJECTS (2 Columns) */}
            {secondaryProjects.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {secondaryProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer flex flex-col gap-6"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                        />
                      ) : (
                        <div className="absolute inset-0 bg-zinc-800 transition-colors duration-[2s] group-hover:bg-zinc-700" />
                      )}
                      
                      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex gap-4 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          {project.live && project.live !== "#" && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                              <ExternalLink size={16} />
                            </a>
                          )}
                          {project.github && project.github !== "#" && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                              <Github size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-black tracking-tighter uppercase text-white">
                          {project.title}
                        </h3>
                        <span className="text-xl font-black text-zinc-800">0{index + 2}</span>
                      </div>
                      <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4 line-clamp-1">
                        {project.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map(tech => (
                          <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* REMAINING PROJECTS (Simple List) */}
            {remainingProjects.length > 0 && (
              <div className="flex flex-col border-t border-zinc-900 mt-12">
                {remainingProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-zinc-900 hover:px-6 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center gap-6 mb-4 sm:mb-0">
                      <span className="text-sm font-black text-zinc-800 hidden md:block">
                        {String(index + 4).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-xl font-black uppercase tracking-tighter text-white group-hover:text-zinc-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="hidden lg:flex gap-4 text-xs font-bold tracking-widest text-zinc-600 uppercase">
                        {project.tech.slice(0, 3).join(" · ")}
                      </div>
                      <ArrowRight size={20} className="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* Re-use existing modal logic */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

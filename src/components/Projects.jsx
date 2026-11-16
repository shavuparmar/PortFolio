import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Maximize2,
  X,
  Lock,
  ArrowUpRight,
  Terminal,
  Sparkles,
  Layers,
} from "lucide-react";
import projects from "../details/projects";

const filterOptions = ["All", "Featured", "Full Stack", "Frontend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop">
      {/* Anchor alias so both #work and #projects resolve smoothly */}
      <span id="projects" className="absolute -top-20" aria-hidden="true" />

      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9A9AA4] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
              <FolderGit2 size={13} className="text-[#D4FF00]" />
              <span>04 // Curated Portfolio</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              Selected Works<span className="text-[#D4FF00]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9A9AA4] max-w-xl font-sans">
              Real-world software systems, client websites, and web applications engineered with clean code and purpose.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_15px_rgba(212,255,0,0.25)]"
                    : "glass-dock text-[#9A9AA4] hover:text-white hover:border-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Part 1: Hero Featured Case Studies (Asymmetric editorial layout) */}
        {featuredProjects.length > 0 && (
          <div className="space-y-12 sm:space-y-16 mb-16">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl glass-panel overflow-hidden border border-white/10 hover:border-white/20 transition-all p-6 sm:p-8"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Visual Mockup Container */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="relative aspect-[16/10] rounded-xl overflow-hidden glass-dock border border-white/10 cursor-pointer group flex items-center justify-center p-3"
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain rounded drop-shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                            <Terminal size={36} className="text-[#D4FF00] mb-3 opacity-80" />
                            <span className="font-display font-bold text-lg text-white">
                              {project.title}
                            </span>
                            <span className="font-mono text-xs text-[#5E606B] mt-1">
                              {project.subtitle}
                            </span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4FF00] text-black text-xs font-mono font-bold shadow-lg">
                            <Maximize2 size={12} />
                            <span>View Case Details</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div
                      className={`lg:col-span-6 flex flex-col justify-between ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="font-mono text-xs uppercase tracking-wider text-[#D4FF00]">
                            0{idx + 1} // {project.category}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full glass-dock text-[10px] font-mono text-[#EDEDF2] border border-[#D4FF00]/30">
                            Featured Work
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                          {project.title}
                        </h3>

                        <p className="font-mono text-xs text-[#9A9AA4] mb-4">
                          {project.subtitle}
                        </p>

                        <p className="text-sm text-[#9A9AA4] leading-relaxed mb-6 font-sans">
                          {project.description}
                        </p>

                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md glass-dock border border-white/5 text-[11px] font-mono text-[#EDEDF2]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                        {project.live && project.live !== "#" ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-[#D4FF00] transition-colors"
                          >
                            <span>Live Application</span>
                            <ArrowUpRight size={13} />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-dock text-[11px] font-mono text-[#5E606B]">
                            <Lock size={11} />
                            <span>Client Production System</span>
                          </span>
                        )}

                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-dock text-xs font-mono text-[#EDEDF2] hover:text-white hover:border-white/30 transition-colors"
                          >
                            <Github size={13} />
                            <span>Source Code</span>
                          </a>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-mono text-[#9A9AA4] hover:text-[#D4FF00] underline ml-auto cursor-pointer"
                        >
                          Deep Dive →
                        </button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Part 2: Curated Grid of Production & Utility Projects */}
        {regularProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#5E606B]">
                Additional Systems & Products ({regularProjects.length})
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-2xl p-6 glass-panel border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                      <span className="text-[#D4FF00] uppercase">
                        {project.category}
                      </span>
                      <span className="text-[#5E606B]">
                        #{project.id}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[#D4FF00] transition-colors mb-1">
                      {project.title}
                    </h3>

                    <p className="font-mono text-[11px] text-[#5E606B] mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-[#9A9AA4] leading-relaxed mb-5 line-clamp-3 font-sans">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded glass-dock border border-white/5 text-[10px] font-mono text-[#9A9AA4]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-3">
                      {project.live && project.live !== "#" ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#EDEDF2] hover:text-[#D4FF00] flex items-center gap-1 transition-colors"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight size={11} />
                        </a>
                      ) : (
                        <span className="text-[#5E606B] flex items-center gap-1 text-[11px]">
                          <Lock size={10} />
                          <span>Internal</span>
                        </span>
                      )}

                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#9A9AA4] hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <Github size={11} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#5E606B] hover:text-[#D4FF00] transition-colors cursor-pointer"
                      title="Inspect Details"
                    >
                      <Maximize2 size={13} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Case Study Deep Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-elevated border border-white/15 p-6 sm:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-dock text-[#9A9AA4] hover:text-white transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X size={18} />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#D4FF00] uppercase mb-2">
                    <span>{selectedProject.category}</span>
                    <span>•</span>
                    <span>Production Architecture</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-xs text-[#9A9AA4] mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Optional Media Preview */}
                {selectedProject.image && (
                  <div className="w-full rounded-2xl overflow-hidden glass-dock border border-white/10 p-2 max-h-80 flex items-center justify-center bg-black/40">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto max-h-72 object-contain rounded-xl"
                    />
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4 className="font-mono text-xs uppercase text-[#5E606B] tracking-wider mb-2">
                    Project Overview & Purpose
                  </h4>
                  <p className="text-sm sm:text-base text-[#EDEDF2] leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-mono text-xs uppercase text-[#5E606B] tracking-wider mb-2.5">
                    Technologies & Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg glass-dock border border-white/10 text-xs font-mono text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  {selectedProject.live && selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4FF00] text-black font-semibold text-xs font-mono hover:bg-white transition-colors"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-dock border border-white/15 text-white font-mono text-xs hover:border-white/40 transition-colors"
                    >
                      <Github size={14} />
                      <span>View GitHub Repository</span>
                    </a>
                  )}

                  {(!selectedProject.live || selectedProject.live === "#") && (!selectedProject.github || selectedProject.github === "#") && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-dock text-xs font-mono text-[#9A9AA4]">
                      <Lock size={12} className="text-[#D4FF00]" />
                      <span>Proprietary Client Architecture / Offline Tool</span>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

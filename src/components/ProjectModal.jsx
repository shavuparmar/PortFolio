import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Prevent scrolling when modal is open
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#F4F1EA]/80 backdrop-blur-md"
          />

          {/* Modal Content - Full Screen Immersive */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-10 w-full h-full bg-[#F4F1EA] overflow-y-auto overflow-x-hidden"
          >
            {/* Header Navbar */}
            <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 bg-[#F4F1EA]/90 backdrop-blur-md border-b border-zinc-200">
              <button
                onClick={onClose}
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-900 transition hover:text-zinc-600"
              >
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </button>
            </div>

            <div className="mx-auto max-w-5xl px-6 pt-12 pb-32">
              {/* Title Area */}
              <div className="mb-12">
                <span className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-4 block">
                  Case Study — {project.subtitle}
                </span>
                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-zinc-900 mb-8">
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap gap-4">
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:scale-105 hover:bg-zinc-800"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-900 transition hover:scale-105 hover:border-zinc-400"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden bg-zinc-200 mb-16 shadow-2xl">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-zinc-400 tracking-widest uppercase">Project Preview</span>
                  </div>
                )}
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6">Overview</h2>
                  <div className="prose prose-zinc prose-lg text-zinc-600 leading-relaxed">
                    <p>{project.description}</p>
                    <p className="mt-6">
                      This project was built with a strong focus on clean architecture, smooth user interactions, and robust performance. 
                      Every detail was crafted to provide an exceptional user experience while maintaining a scalable codebase.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6">Technologies</h2>
                  <div className="flex flex-col gap-3">
                    {project.tech?.map((tech) => (
                      <div key={tech} className="flex items-center gap-3 border-b border-zinc-200 pb-3">
                        <span className="h-2 w-2 rounded-full bg-zinc-900" />
                        <span className="text-sm font-bold tracking-widest text-zinc-600 uppercase">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

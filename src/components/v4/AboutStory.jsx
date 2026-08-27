import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import about from "../../details/about";

export default function AboutStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="about" className="py-20 lg:py-40 bg-[#F9F9F9] text-[#111] border-t border-[#E5E5E5]" ref={containerRef}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        
        {/* Title */}
        <div className="mb-32 flex justify-between items-end border-b border-[#111] pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none"
          >
            ABOUT ME
          </motion.h2>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#888] hidden sm:block">
            02 / 10
          </span>
        </div>

        {/* 01 WHO I AM */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-xs font-black tracking-widest uppercase text-[#555] sticky top-32">
              01 — Who I Am
            </h3>
          </div>
          <div className="md:col-span-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-[1.1] mb-12"
            >
              I'm interested in the space where technology meets visual design.
            </motion.p>
            <div className="prose prose-lg text-[#555] max-w-none">
              <p className="mb-6 leading-relaxed">
                I am Saurabh Parmar, a passionate software developer and designer focused on building modern, practical, and scalable digital solutions. My work revolves around creating clean user interfaces, smooth user experiences, and production-ready applications.
              </p>
              <p className="leading-relaxed">
                By combining technical engineering with a keen eye for aesthetics, I ensure that the products I build don't just function flawlessly—they look exceptional.
              </p>
            </div>
          </div>
        </div>

        {/* Parallax Image / Visual Break */}
        <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden bg-[#E5E5E5] mb-32 relative">
          <motion.div style={{ y: imgY }} className="absolute inset-[-100px] w-full h-[150%]">
            <div className="w-full h-full bg-[#111] flex items-center justify-center">
              {/* Abstract structural representation instead of fake photo */}
              <div className="grid grid-cols-3 gap-1 w-full h-full opacity-20">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="bg-white/10" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 02 WHAT I DO */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-xs font-black tracking-widest uppercase text-[#555] sticky top-32">
              02 — What I Do
            </h3>
          </div>
          <div className="md:col-span-8 space-y-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-l-2 border-[#111] pl-8"
            >
              <h4 className="text-xl font-black uppercase tracking-widest mb-4">Developer</h4>
              <p className="text-[#555] leading-relaxed">
                Building functional digital products. With hands-on experience in React, JavaScript, Node.js, Express, and MongoDB, I build complete full-stack MERN applications with scalable architecture. I specialize in integrating AI APIs and intelligent features into modern web platforms.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-l-2 border-[#111] pl-8"
            >
              <h4 className="text-xl font-black uppercase tracking-widest mb-4">Designer</h4>
              <p className="text-[#555] leading-relaxed">
                Creating visual experiences. I design clean UI and smooth UX with modern frontend practices. From graphics design to full brand identity, I ensure the visual presentation matches the technical quality.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-l-2 border-[#111] pl-8"
            >
              <h4 className="text-xl font-black uppercase tracking-widest mb-4">Builder</h4>
              <p className="text-[#555] leading-relaxed">
                Turning ideas into real projects. From admin dashboards to private software tools and booking platforms, I transform complex requirements into responsive, production-ready systems.
              </p>
            </motion.div>

          </div>
        </div>

        {/* 03 HOW I WORK & 04 WHAT I AM BUILDING */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-xs font-black tracking-widest uppercase text-[#555] sticky top-32">
              03 — How I Work
            </h3>
          </div>
          <div className="md:col-span-8">
            <div className="prose prose-lg text-[#555] max-w-none">
              <p className="mb-6 leading-relaxed">
                I am dedicated to writing clean, maintainable code and continuously learning new technologies. I believe that good engineering is invisible, while good design is obvious.
              </p>
              <p className="leading-relaxed">
                My current focus is on delivering high-quality software that is visually polished, efficient, and deeply user-focused. Whether I'm building a backend API or a frontend interface, the goal is always the same: solve the problem elegantly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

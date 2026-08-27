import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 lg:py-48 bg-[#050505] text-[#F4F4F5] border-t border-[#111]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#222]">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666] mb-4 block">
              02 / SECTION
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-none text-[#F4F4F5]"
            >
              ABOUT ME
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 text-right"
          >
            <span className="text-sm font-black tracking-[0.2em] uppercase text-[#AAA]">I BUILD THINGS.</span>
            <span className="text-sm font-black tracking-[0.2em] uppercase text-[#888]">I DESIGN THINGS.</span>
            <span className="text-sm font-black tracking-[0.2em] uppercase text-[#555]">I KEEP LEARNING.</span>
          </motion.div>
        </div>

        {/* Content Blocks */}
        <div className="flex flex-col gap-32 lg:gap-48">
          
          {/* WHO I AM */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#555] sticky top-32">
                WHO I AM
              </h3>
            </div>
            <div className="md:col-span-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-12 text-[#F4F4F5]"
              >
                I'm a developer who enjoys turning ideas into real digital products.
              </motion.p>
              <div className="text-base text-[#888] font-medium leading-relaxed max-w-2xl flex flex-col gap-6">
                <p>
                  I am Saurabh Parmar, a Full-Stack Developer and Graphics Designer. I've spent my time learning how to bridge the gap between complex backend architecture and stunning visual frontend design.
                </p>
                <p>
                  My core interest lies in the intersection of technology and visual design. Whether it is building a completely custom MERN stack application, setting up a database, or designing a brand identity, I approach every problem with the same mindset: solve it elegantly.
                </p>
              </div>
            </div>
          </div>

          {/* LARGE TYPOGRAPHY BREAK */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full py-20 border-y border-[#111] flex flex-wrap justify-between items-center gap-4 text-[#222]"
          >
            {["CODE.", "DESIGN.", "BUILD.", "LEARN.", "REPEAT."].map((word, i) => (
              <span key={i} className="text-4xl md:text-7xl font-black tracking-tighter uppercase hover:text-[#F4F4F5] transition-colors duration-500 cursor-default">
                {word}
              </span>
            ))}
          </motion.div>

          {/* WHAT I DO & HOW I THINK */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#555] sticky top-32">
                WHAT I DO
              </h3>
            </div>
            <div className="md:col-span-8">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-black uppercase tracking-widest text-[#CCC] mb-6"
              >
                Development + Design
              </motion.h4>
              <div className="text-base text-[#888] font-medium leading-relaxed max-w-2xl flex flex-col gap-6">
                <p>
                  I specialize in frontend and full-stack development. Utilizing modern technologies like React, Node.js, Express, and MongoDB, I build systems that scale. On the visual side, my UI/UX and graphics design skills ensure the final product is highly polished.
                </p>
              </div>
            </div>
          </div>

          {/* HOW I WORK */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#555] sticky top-32">
                HOW I WORK
              </h3>
            </div>
            <div className="md:col-span-8">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-black uppercase tracking-widest text-[#CCC] mb-6"
              >
                Build → Test → Improve → Ship
              </motion.h4>
              <div className="text-base text-[#888] font-medium leading-relaxed max-w-2xl flex flex-col gap-6">
                <p>
                  My approach is iterative. I believe in writing clean, maintainable code, rigorous testing, and continuous improvement. I am always exploring new tools, integrating AI APIs, and refining my development processes to deliver better products faster.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import personal from "../../details/personal";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-40 bg-zinc-950 text-white relative">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        <div className="mb-20 lg:mb-32">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6">
            02 — About Me
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter uppercase leading-[0.9]"
          >
            I'M A DEVELOPER WHO ENJOYS <br className="hidden md:block"/>
            TURNING IDEAS INTO USEFUL <br className="hidden md:block"/>
            <span className="text-zinc-600">DIGITAL PRODUCTS.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start border-t border-zinc-900 pt-16">
          
          {/* Left Column: Long-form text */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none text-zinc-400 font-medium leading-relaxed"
            >
              <p className="text-xl md:text-2xl text-zinc-200 mb-8 font-bold leading-tight">
                Bridging the gap between aesthetic visual design and robust software engineering.
              </p>
              <p className="mb-6">
                With a deep background in both Full-Stack Development and Graphic Design, I approach digital products holistically. A beautiful interface means nothing if the underlying architecture fails, and a scalable backend is wasted if the user experience is frustrating.
              </p>
              <p className="mb-6">
                On the <strong className="text-white">engineering</strong> side, I specialize in building responsive, scalable applications using React, Node.js, and modern JavaScript ecosystems. I care deeply about clean code, performance optimization, and robust APIs.
              </p>
              <p>
                On the <strong className="text-white">design</strong> side, I craft intuitive UI/UX layouts, compelling brand identities, and strong visual compositions. I believe design is not just how it looks, but how it works.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Stats & Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {personal.heroStats.map((stat, i) => (
                <div key={i} className="flex flex-col border-l border-zinc-800 pl-6">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Core Identity Pillars */}
            <div className="space-y-8">
              {[
                { num: "01", title: "Developer", desc: "Building scalable logic and responsive interfaces." },
                { num: "02", title: "Designer", desc: "Crafting visual identities and intuitive experiences." },
                { num: "03", title: "Builder", desc: "Turning complex problems into elegant solutions." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <span className="text-xs font-black tracking-widest text-zinc-600 mt-1 transition-colors group-hover:text-white">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-widest text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

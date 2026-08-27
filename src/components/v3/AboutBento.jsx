import { motion } from "framer-motion";
import personal from "../../details/personal";

export default function AboutBento() {
  return (
    <section id="about" className="mx-auto max-w-[1600px] px-6 py-40">
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85]"
        >
          ABOUT <br/>
          <span className="text-zinc-400">ME</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[auto]">
        
        {/* Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 rounded-[2rem] bg-zinc-900 p-10 sm:p-14 text-[#F4F1EA] flex flex-col justify-between"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter leading-tight mb-6">
              Bridging the gap between <span className="text-green-400">Design</span> and <span className="text-zinc-400">Engineering</span>.
            </h3>
            <p className="text-lg sm:text-xl font-medium leading-relaxed text-zinc-300">
              {personal.shortIntro}
            </p>
          </div>
          <div className="mt-20 flex flex-wrap gap-8">
            {personal.heroStats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-black text-white">{stat.value}</span>
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Location / Availability Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-[2rem] border-2 border-zinc-900 bg-transparent p-10 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="h-12 w-12 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-8">
              📍
            </div>
            <h4 className="text-xl font-black uppercase tracking-tighter text-zinc-900 mb-2">Based In</h4>
            <p className="text-sm font-bold tracking-widest uppercase text-zinc-500">{personal.location}</p>
          </div>
          
          <div className="mt-20 relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-500/30 bg-green-50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-green-700">Open to work</span>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 rounded-[2rem] bg-zinc-200 p-10 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-12"
        >
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-tight text-zinc-900 mb-4">
              My Philosophy
            </h3>
            <p className="text-lg text-zinc-600 font-medium leading-relaxed">
              I believe that great products are built at the intersection of stunning visual design and robust software architecture. A beautiful interface means nothing if the backend fails, and a scalable backend is wasted if the user experience is poor. I strive to deliver both.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="#contact" 
              className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-zinc-900 text-[#F4F1EA] text-sm font-bold tracking-widest uppercase transition-transform hover:scale-105 active:scale-95"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

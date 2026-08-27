import { motion } from "framer-motion";

export default function DesignCodeSplit() {
  return (
    <section id="design-code" className="mx-auto max-w-[1600px] px-6 py-40">
      
      <div className="mb-20">
        <h2 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85]">
          DESIGN <br/>
          <span className="text-zinc-400">× CODE</span>
        </h2>
        <p className="mt-8 text-xl font-medium leading-relaxed text-zinc-600 max-w-2xl">
          I combine visual design with full-stack development to create digital products from idea to implementation.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full min-h-[60vh] gap-6">
        
        {/* DESIGN SIDE */}
        <motion.div 
          whileHover={{ flex: 1.5 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="flex-1 rounded-[2rem] bg-zinc-900 p-10 flex flex-col justify-between text-[#F4F1EA] overflow-hidden group cursor-pointer"
        >
          <div>
            <h3 className="text-4xl font-black tracking-tighter uppercase mb-8">Design</h3>
            <ul className="space-y-4">
              {['Typography', 'Branding', 'Graphic Design', 'UI/UX', 'Visual Systems'].map((item) => (
                <li key={item} className="text-lg font-bold tracking-widest uppercase text-zinc-400 group-hover:text-[#F4F1EA] transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-20">
            <div className="h-[2px] w-full bg-zinc-800 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-[#F4F1EA]"
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* DEVELOPMENT SIDE */}
        <motion.div 
          whileHover={{ flex: 1.5 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="flex-1 rounded-[2rem] border-2 border-zinc-900 p-10 flex flex-col justify-between text-zinc-900 overflow-hidden group cursor-pointer bg-transparent"
        >
          <div>
            <h3 className="text-4xl font-black tracking-tighter uppercase mb-8">Development</h3>
            <ul className="space-y-4">
              {['Frontend', 'Backend', 'Database', 'APIs', 'AI', 'Deployment'].map((item) => (
                <li key={item} className="text-lg font-bold tracking-widest uppercase text-zinc-500 group-hover:text-zinc-900 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-20">
            <div className="h-[2px] w-full bg-zinc-300 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-zinc-900"
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const capabilities = [
  { id: 1, title: "FULL-STACK WEB APPLICATIONS", desc: "End-to-end architecture" },
  { id: 2, title: "AI-POWERED PRODUCTS", desc: "LLM integrations" },
  { id: 3, title: "DASHBOARDS", desc: "Data visualization" },
  { id: 4, title: "UI/UX EXPERIENCES", desc: "Interactive interfaces" },
  { id: 5, title: "GRAPHIC DESIGN", desc: "Visual storytelling" },
  { id: 6, title: "BRANDING", desc: "Identity systems" },
  { id: 7, title: "AUTOMATION", desc: "Workflow optimization" },
  { id: 8, title: "DIGITAL PRODUCTS", desc: "Concept to launch" },
];

export default function CapabilitiesList() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-40">
      <div className="mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85]"
        >
          WHAT I <br/>
          <span className="text-zinc-400">BUILD</span>
        </motion.h2>
      </div>

      <div className="flex flex-col border-t-2 border-zinc-900">
        {capabilities.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between py-10 sm:py-16 border-b border-zinc-200 cursor-pointer overflow-hidden"
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-zinc-100 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            
            <div className="relative z-10 flex items-baseline gap-6 sm:gap-12 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4">
              <span className="text-xl sm:text-3xl font-black text-zinc-300">
                0{item.id}
              </span>
              <h3 className="text-[clamp(1.5rem,4vw,3.5rem)] font-black tracking-tighter uppercase text-zinc-900 leading-none">
                {item.title}
              </h3>
            </div>

            <div className="relative z-10 mt-6 sm:mt-0 flex items-center gap-8 pl-12 sm:pl-0 opacity-100 sm:opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 sm:-translate-x-4 group-hover:translate-x-0">
              <span className="text-sm font-bold tracking-widest uppercase text-zinc-500 hidden md:block">
                {item.desc}
              </span>
              <div className="h-12 w-12 rounded-full bg-zinc-900 text-white flex items-center justify-center">
                <ArrowRight size={20} className="transition-transform group-hover:rotate-[-45deg]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, MapPin } from "lucide-react";
import personal from "../../details/personal";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-20 lg:pt-40 bg-zinc-950 text-white relative border-t border-zinc-900">
      
      {/* Background abstract */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10 pb-40">
        
        <div className="mb-24 text-center flex flex-col items-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6">
            09 — Start a Conversation
          </p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,8vw,10rem)] font-black tracking-tighter uppercase leading-[0.85] mb-12 max-w-[1200px]"
          >
            HAVE A PROJECT <br/>
            <span className="text-zinc-700">IN MIND?</span>
          </motion.h2>
          <p className="text-xl text-zinc-400 font-medium max-w-2xl">
            Let's build something worth remembering. Whether it's a scalable web application or a striking visual identity, I'm ready to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <a
            href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Saurabh, I found your portfolio and would like to discuss a project with you.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-12 bg-zinc-900 hover:bg-emerald-500 hover:text-zinc-950 transition-colors duration-500"
          >
            <MessageCircle size={32} className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-black uppercase tracking-widest mb-2">WhatsApp</h3>
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 group-hover:text-emerald-950 transition-colors">Direct Message</p>
            <ArrowRight size={20} className="mt-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="group flex flex-col items-center justify-center p-12 bg-zinc-900 hover:bg-white hover:text-zinc-950 transition-colors duration-500"
          >
            <Mail size={32} className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-black uppercase tracking-widest mb-2">Email</h3>
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 group-hover:text-zinc-500 transition-colors">{personal.email}</p>
            <ArrowRight size={20} className="mt-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
          </a>

          <a
            href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
            className="group flex flex-col items-center justify-center p-12 border border-zinc-800 hover:bg-zinc-800 transition-colors duration-500"
          >
            <MapPin size={32} className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-black uppercase tracking-widest mb-2">Location</h3>
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500">{personal.location}</p>
            <ArrowRight size={20} className="mt-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
          </a>

        </div>
      </div>
    </section>
  );
}

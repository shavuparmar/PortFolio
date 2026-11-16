import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Sparkles, Languages, CheckCircle2, ArrowUpRight } from "lucide-react";
import about from "../details/about";
import personal from "../details/personal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9A9AA4] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
            <User size={13} className="text-[#D4FF00]" />
            <span>01 // Profile & Background</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            About Me<span className="text-[#D4FF00]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9A9AA4] max-w-xl font-sans">
            {about.subheading}
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Architectural Profile Snapshot Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-7 rounded-2xl glass-panel border border-white/10 sticky top-28">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                <span className="font-mono text-xs text-[#D4FF00] uppercase tracking-wider">
                  Identity File
                </span>
                <span className="font-mono text-[10px] text-[#5E606B]">
                  SP // SURAT
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-[#5E606B] block uppercase tracking-wider text-[10px] mb-1">
                    Full Name
                  </span>
                  <span className="font-sans font-bold text-base text-white">
                    {personal.name}
                  </span>
                </div>

                <div>
                  <span className="text-[#5E606B] block uppercase tracking-wider text-[10px] mb-1">
                    Location & Hub
                  </span>
                  <span className="font-sans text-sm text-[#EDEDF2] flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#D4FF00]" />
                    {personal.location}
                  </span>
                </div>

                <div>
                  <span className="text-[#5E606B] block uppercase tracking-wider text-[10px] mb-1">
                    Degree In Progress
                  </span>
                  <span className="font-sans text-sm text-[#EDEDF2] flex items-center gap-1.5">
                    <GraduationCap size={14} className="text-[#D4FF00]" />
                    B.Tech, P P Savani University
                  </span>
                </div>

                <div>
                  <span className="text-[#5E606B] block uppercase tracking-wider text-[10px] mb-1">
                    Prior Academic Credential
                  </span>
                  <span className="font-sans text-sm text-[#9A9AA4]">
                    Diploma, Shree Dhanvantary
                  </span>
                </div>

                <div>
                  <span className="text-[#5E606B] block uppercase tracking-wider text-[10px] mb-1">
                    Spoken Languages
                  </span>
                  <span className="font-sans text-sm text-[#9A9AA4] flex items-center gap-1.5">
                    <Languages size={13} className="text-[#5E606B]" />
                    English, Hindi, Gujarati
                  </span>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4FF00] mt-1 shrink-0 animate-pulse"></span>
                  <p className="text-xs text-[#9A9AA4] leading-relaxed font-sans">
                    Actively open to junior web developer roles, frontend engineering opportunities, and creative design contracts.
                  </p>
                </div>
              </div>

              {/* Resume Quick Link */}
              <div className="mt-6">
                <a
                  href={personal.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-white/10 hover:border-[#D4FF00]/40 text-xs font-mono uppercase tracking-wider text-white hover:text-[#D4FF00] hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <span>View Verified Resume</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Personal Story Modules */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Pull Quote */}
            <div className="p-6 rounded-2xl glass-dock border border-[#D4FF00]/20 bg-[#D4FF00]/[0.02] relative">
              <span className="font-mono text-[10px] text-[#D4FF00] uppercase tracking-widest block mb-2">
                Core Philosophy
              </span>
              <p className="font-display text-xl sm:text-2xl text-white font-semibold tracking-tight leading-snug">
                "Code builds the architecture. Design gives it a soul."
              </p>
              <p className="text-xs text-[#9A9AA4] mt-2 font-sans">
                A digital product must be functionally bulletproof and visually compelling to truly resonate with real users.
              </p>
            </div>

            {/* Narrative Story Blocks */}
            <div className="space-y-6">
              {(about?.story || []).map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-[#D4FF00] font-semibold">
                      0{index + 1} //
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#9A9AA4] leading-relaxed font-sans">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {(about?.quickFacts || []).map((fact) => (
                <div
                  key={fact.label}
                  className="p-3.5 rounded-xl glass-dock border border-white/5 flex flex-col gap-1"
                >
                  <span className="font-mono text-[10px] text-[#5E606B] uppercase">
                    {fact.label}
                  </span>
                  <span className="font-sans font-medium text-xs text-white">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

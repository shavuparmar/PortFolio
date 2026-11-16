import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { educationData, experienceData } from "../details/journy";

export default function Journey() {
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'experience' | 'education'

  return (
    <section id="journey" className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9A9AA4] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
              <GraduationCap size={13} className="text-[#D4FF00]" />
              <span>08 // Background & Trajectory</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              Education & Experience<span className="text-[#D4FF00]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9A9AA4] max-w-xl font-sans">
              Authentic academic qualifications in computer engineering and real professional work experience.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-xl glass-dock border border-white/10">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.3)]"
                  : "text-[#9A9AA4] hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "experience"
                  ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.3)]"
                  : "text-[#9A9AA4] hover:text-white"
              }`}
            >
              <Briefcase size={12} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "education"
                  ? "bg-[#D4FF00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.3)]"
                  : "text-[#9A9AA4] hover:text-white"
              }`}
            >
              <GraduationCap size={13} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Dual Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Experience Column */}
          {(activeTab === "all" || activeTab === "experience") && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg glass-dock border border-white/10 text-[#D4FF00] flex items-center justify-center">
                  <Briefcase size={15} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white tracking-tight">Work Experience</h3>
                  <span className="text-xs font-mono text-[#5E606B]">Practical & Industry Roles</span>
                </div>
              </div>

              <div className="space-y-6">
                {experienceData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-dock border border-[#D4FF00]/30 text-[#D4FF00] font-mono text-xs font-medium">
                        <Calendar size={11} />
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-[#5E606B] flex items-center gap-1">
                        <MapPin size={11} />
                        {item.location}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl text-white group-hover:text-[#D4FF00] transition-colors mb-1">
                      {item.role}
                    </h4>

                    <span className="font-mono text-xs text-[#9A9AA4] block mb-4">
                      {item.company}
                    </span>

                    <p className="text-xs sm:text-sm text-[#9A9AA4] leading-relaxed mb-5 font-sans">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#EDEDF2] font-sans">
                          <CheckCircle2 size={13} className="text-[#D4FF00] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Education Column */}
          {(activeTab === "all" || activeTab === "education") && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg glass-dock border border-white/10 text-[#D4FF00] flex items-center justify-center">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white tracking-tight">Academic History</h3>
                  <span className="text-xs font-mono text-[#5E606B]">Formal Qualifications</span>
                </div>
              </div>

              <div className="space-y-6">
                {educationData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-dock border border-white/10 text-white font-mono text-xs">
                        <Calendar size={11} />
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-[#5E606B] flex items-center gap-1">
                        <MapPin size={11} />
                        {item.location}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#D4FF00] transition-colors mb-1">
                      {item.degree}
                    </h4>

                    <span className="font-mono text-xs text-[#9A9AA4] block mb-4">
                      {item.institution}
                    </span>

                    <p className="text-xs sm:text-sm text-[#9A9AA4] leading-relaxed mb-5 font-sans">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md glass-dock border border-white/5 text-[10px] font-mono text-[#EDEDF2]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

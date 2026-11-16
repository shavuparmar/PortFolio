import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Terminal } from "lucide-react";
import personal from "../details/personal";
import cardFront from "../Businescards/dey1.png";
import orderAppImg from "../assets/orderapp.png";

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const element = document.getElementById("work") || document.getElementById("projects");
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center pt-28 pb-16 sm:py-32 overflow-hidden grid-backdrop"
    >
      {/* Subtle radial ambient glow in the top right */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4FF00]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Asymmetrical Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Live Status Pill & Geo Beacon */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full glass-dock w-fit mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF00]"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#9A9AA4] flex items-center gap-1.5">
                <MapPin size={11} className="text-[#D4FF00]" />
                {personal.location} <span className="text-[#5E606B]">[ {personal.coordinates} ]</span>
              </span>
            </motion.div>

            {/* Massive Display Monogram / Title */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <div className="font-mono text-xs text-[#D4FF00] tracking-widest uppercase mb-2 flex items-center gap-2">
                <Terminal size={13} />
                <span>Web Developer & Graphic Designer</span>
              </div>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
                SAURABH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4E4E7] to-[#71717A]">
                  PARMAR
                </span>
                <span className="text-[#D4FF00]">.</span>
              </h1>
            </motion.div>

            {/* Thoughtful, Human Narrative Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9A9AA4] leading-relaxed max-w-xl mb-8 font-sans"
            >
              "I turn ideas into digital experiences through code and design." Bridging robust frontend engineering with editorial graphic design to create digital products that feel intuitive, purposeful, and memorable.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D4FF00] text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(212,255,0,0.2)]"
              >
                <span>Explore Selected Work</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-dock text-white font-medium text-xs uppercase tracking-wider hover:border-white/30 transition-all"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={14} className="text-[#D4FF00]" />
              </a>

              <a
                href={personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full glass-dock text-[#9A9AA4] hover:text-white text-xs font-mono transition-colors"
                title="Download Resume (PDF)"
              >
                <Download size={13} />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </motion.div>

            {/* Micro Social Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 pt-4 border-t border-white/5"
            >
              <span className="font-mono text-[11px] text-[#5E606B] uppercase tracking-wider">
                Direct Channels:
              </span>
              <div className="flex items-center gap-4 text-xs font-mono">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9A9AA4] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9A9AA4] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin size={13} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-[#9A9AA4] hover:text-[#D4FF00] flex items-center gap-1.5 transition-colors"
                >
                  <Mail size={13} />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Layered Art-Directed Studio Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              
              {/* Back Card: Korder Production System Mockup */}
              <div className="relative rounded-2xl p-4 glass-panel border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[11px] font-mono text-[#9A9AA4]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-white font-medium">Keshav Krupa // Korder OMS</span>
                  </div>
                  <span className="text-[#D4FF00]">Full Stack System</span>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black/60 border border-white/5">
                  <img
                    src={orderAppImg}
                    alt="Keshav Krupa Order Management System"
                    className="w-full h-full object-cover object-top opacity-85 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#9A9AA4]">Live Production Client App</span>
                    <span className="text-[#D4FF00]">Next.js • Node • Mongo</span>
                  </div>
                </div>
              </div>

              {/* Floating Overlapping Card: Deyzora Infotech Physical Card Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -left-6 sm:-left-10 w-[80%] rounded-2xl p-3 glass-panel-elevated border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[10px] font-mono">
                  <span className="text-white font-medium">Deyzora Infotech</span>
                  <span className="text-[#D4FF00]">Print & Branding</span>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[16/9] bg-stone-900">
                  <img
                    src={cardFront}
                    alt="Deyzora Infotech Business Card"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2 flex items-center justify-between text-[9px] font-mono text-[#9A9AA4]">
                  <span>300 DPI // CMYK Print</span>
                  <a href="#business-card" className="text-[#D4FF00] hover:underline flex items-center gap-0.5">
                    <span>Inspect</span>
                    <ArrowUpRight size={10} />
                  </a>
                </div>
              </motion.div>

              {/* Verified Badge */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full glass-dock border border-[#D4FF00]/30 shadow-lg flex items-center gap-1.5 text-[10px] font-mono text-[#D4FF00]">
                <Sparkles size={11} />
                <span>14 Verified Coursera Credentials</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

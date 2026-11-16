import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail, Phone, ExternalLink, MapPin } from "lucide-react";
import personal from "../details/personal";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Business Card", href: "#business-card" },
  { name: "Graphics", href: "#graphics" },
  { name: "Certificates", href: "#certificates" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
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
    <footer className="bg-[#060709] border-t border-white/5 pt-20 pb-12 relative grid-backdrop">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl glass-dock border border-white/10 text-white font-display font-extrabold flex items-center justify-center text-sm shadow-md">
                SP
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  {personal.name}
                </span>
                <span className="text-xs font-mono text-[#D4FF00] uppercase tracking-wider">
                  {personal.role}
                </span>
              </div>
            </div>

            <p className="text-[#9A9AA4] text-xs sm:text-sm leading-relaxed max-w-sm mt-1 font-sans">
              Based in Surat, Gujarat, India. Crafting clean frontend code, robust full-stack software, and distinct graphic design collateral for real-world impact.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-dock border border-white/10 hover:border-white text-[#9A9AA4] hover:text-white flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-dock border border-white/10 hover:border-[#0A66C2] text-[#9A9AA4] hover:text-[#0A66C2] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-9 h-9 rounded-xl glass-dock border border-white/10 hover:border-[#D4FF00] text-[#9A9AA4] hover:text-[#D4FF00] flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]"></span>
              <span>Site Directory</span>
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[#9A9AA4] hover:text-[#D4FF00] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Status Card */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]"></span>
              <span>Coordinates</span>
            </h4>
            
            <div className="p-4 rounded-xl glass-dock border border-white/5 space-y-2.5 text-xs font-mono text-[#9A9AA4]">
              <div className="flex items-center gap-2 text-white">
                <MapPin size={12} className="text-[#D4FF00]" />
                <span>{personal.location}</span>
              </div>
              <div className="text-[11px] text-[#5E606B]">
                [ {personal.coordinates} ]
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span>Status</span>
                <span className="text-[#D4FF00] font-semibold">Available</span>
              </div>
            </div>

            {showBackToTop && (
              <button
                onClick={scrollToTop}
                className="mt-2 w-full py-2.5 px-3 rounded-xl glass-dock border border-white/10 hover:border-white/30 text-white text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ArrowUp size={13} />
                <span>Back To Top</span>
              </button>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5E606B]">
          <div>
            © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 19 & Tailwind CSS</span>
            <span>•</span>
            <span className="text-[#9A9AA4]">Surat, Gujarat</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

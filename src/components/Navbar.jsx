import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import personal from "../details/personal";

const navLinks = [
  { name: "Home", href: "#home", index: "01" },
  { name: "About", href: "#about", index: "02" },
  { name: "Work", href: "#work", index: "03" },
  { name: "Graphics", href: "#graphics", index: "04" },
  { name: "Certificates", href: "#certificates", index: "05" },
  { name: "Contact", href: "#contact", index: "06" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleMobileMenuClick = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? "hidden" : "auto";
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
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none ${isScrolled ? "py-3 sm:py-3.5" : "py-4 sm:py-5"} px-4 sm:px-8`}>
        <div className="container mx-auto max-w-6xl flex items-center justify-between pointer-events-auto">
          
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="group flex items-center gap-3 px-4 py-2 rounded-full glass-dock hover:border-white/20 transition-all select-none"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse shadow-[0_0_10px_#D4FF00]" />
            <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#D4FF00] transition-colors">
              SP // 26
            </span>
            <span className="hidden sm:inline font-mono text-[10px] text-[#5E606B] uppercase tracking-wider pl-1 border-l border-white/10">
              Surat, IN
            </span>
          </a>

          {/* Floating Desktop Dock Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full glass-dock shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-black bg-[#D4FF00] font-semibold shadow-sm"
                      : "text-[#9A9AA4] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full glass-dock text-xs font-mono text-[#9A9AA4] hover:text-white hover:border-white/20 transition-colors"
            >
              <Download size={12} />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-[#D4FF00] hover:text-black transition-all shadow-md"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={handleMobileMenuClick}
              className="md:hidden p-2.5 rounded-full glass-dock text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#090A0D]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-[#5E606B] uppercase tracking-widest mb-4">
                Directory // Navigation
              </span>

              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`py-3.5 flex items-baseline justify-between border-b border-white/5 transition-colors ${
                      isActive ? "text-[#D4FF00]" : "text-[#9A9AA4] hover:text-white"
                    }`}
                  >
                    <span className="font-display font-bold text-3xl tracking-tight">
                      {link.name}
                    </span>
                    <span className="font-mono text-xs opacity-40">
                      {link.index}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-3">
              <a
                href={personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl border border-white/10 text-center font-mono text-xs uppercase tracking-wider text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={13} />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#5E606B] pt-2">
                <span>{personal.location}</span>
                <span className="text-[#D4FF00] font-semibold">{personal.timezone}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

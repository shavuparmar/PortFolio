import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "GRAPHICS", href: "#graphics" },
  { name: "CERTIFICATES", href: "#certificates" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-4 bg-[#050505]/90 backdrop-blur-md border-b border-[#222222]" 
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, "#home")} 
            className="text-white font-bold tracking-tighter uppercase text-xl hover:opacity-80 transition-opacity"
          >
            Saurabh Parmar
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative group text-xs font-mono tracking-widest uppercase transition-colors ${
                  activeSection === link.href.substring(1) ? "text-white" : "text-[#888888] hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2" />
                )}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-5 py-2.5 border border-[#333333] hover:border-white text-xs font-mono tracking-widest uppercase text-white transition-all bg-[#0a0a0a]"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
            onClick={handleMobileMenuClick}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8 w-full px-6">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="text-xl font-light text-[#888888] hover:text-white transition-colors uppercase tracking-widest border-b border-[#222222] pb-2 w-full text-center"
              >
                00 — HOME
              </a>
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tighter w-full text-center hover:opacity-70 transition-opacity"
                >
                  0{index + 1} — {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import personal from "../../details/personal";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Graphics", href: "#graphics" },
    { name: "Certificates", href: "#certificates" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-[#222] py-4" 
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between">
          
          <a href="#" className="flex items-center z-[60]">
            <span className="text-sm font-black tracking-widest uppercase text-[#F4F4F5]">
              {personal.name.split(' ')[0]}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group relative text-[10px] font-bold tracking-widest uppercase text-[#888] hover:text-[#F4F4F5] transition-colors py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#F4F4F5] scale-x-0 origin-right transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:origin-left" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contact"
              className="text-[10px] font-black tracking-[0.2em] uppercase text-[#050505] bg-[#F4F4F5] px-6 py-3 hover:bg-[#CCC] transition-colors"
            >
              Let's Talk
            </a>
          </div>

          <button 
            className="md:hidden z-[60] text-[#F4F4F5] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-[#F4F4F5]"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (navLinks.length * 0.1) }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-black uppercase tracking-widest text-[#888] mt-8"
              >
                Contact
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

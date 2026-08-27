import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import personal from "../details/personal";

const links = [
  { name: "Work", href: "#projects" },
  { name: "Design", href: "#design" },
  { name: "Development", href: "#development" },
  { name: "About", href: "#about" },
  { name: "Certificates", href: "#certificates" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-[#F4F1EA]/80 backdrop-blur-xl border-b border-zinc-200 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6">
        <a href="#home" className="text-xl font-bold tracking-tight text-zinc-900 flex flex-col leading-none group">
          <span className="transition-colors group-hover:text-zinc-600">{personal.brand.split(' ')[0]}</span>
          <span className="text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-900">{personal.brand.split(' ')[1]}</span>
        </a>

        <nav className="hidden gap-8 lg:flex items-center">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-bold tracking-wider uppercase text-zinc-600 transition-all hover:text-zinc-900 hover:-translate-y-0.5">
              {link.name}
            </a>
          ))}
          
          <a href="#contact" className="ml-4 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold tracking-wider uppercase text-[#F4F1EA] transition-all hover:bg-zinc-700 hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/20">
            Contact
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-zinc-900 outline-none z-50 relative p-2 -mr-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full border-b border-zinc-200 bg-[#F4F1EA]/95 backdrop-blur-xl px-6 py-8 lg:hidden shadow-2xl flex flex-col"
          >
            <div className="flex flex-col gap-6 max-h-[70vh] overflow-y-auto no-scrollbar pb-6">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-3xl font-black tracking-tighter uppercase text-zinc-900 transition hover:text-zinc-500"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="mt-6 w-full rounded-full bg-zinc-900 px-6 py-5 text-center text-sm font-bold tracking-widest uppercase text-[#F4F1EA] transition hover:bg-zinc-800 active:scale-95"
              >
                Let's Work Together
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
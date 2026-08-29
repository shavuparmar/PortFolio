import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import personal from "../details/personal";
import social from "../details/social";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "GRAPHICS", href: "#graphics" },
  { name: "CERTIFICATES", href: "#certificates" },
  { name: "CONTACT", href: "#contact" },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const whatsappMessage = encodeURIComponent("Hello Saurabh, I found your portfolio and would like to discuss a project with you.");
  const whatsappUrl = `https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#050505] pt-32 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-[clamp(3rem,10vw,4.5rem)] font-bold tracking-tighter uppercase leading-[0.9] text-white mb-6 break-words">
              Saurabh<br />Parmar
            </h2>
            <div className="flex flex-col gap-1">
              <span className="text-[#888888] font-mono text-xs tracking-widest uppercase">
                Full-Stack Developer
              </span>
              <span className="text-[#888888] font-mono text-xs tracking-widest uppercase">
                Graphics Designer
              </span>
            </div>
          </div>
          
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#888888] hover:text-white transition-colors text-sm font-medium tracking-wide">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2">Social & Direct</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="text-[#888888] hover:text-white transition-colors text-sm font-medium tracking-wide">
                  {personal.phone}
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors text-sm font-medium tracking-wide">
                  WhatsApp
                </a>
              </li>
              {social.map((item) => (
                <li key={item.name}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors text-sm font-medium tracking-wide">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#222222] gap-4">
          <p className="text-[#555555] font-mono text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Saurabh Parmar. All Rights Reserved.
          </p>
          
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-[#888888] hover:text-white transition-colors font-mono text-xs uppercase tracking-widest bg-[#111111] px-4 py-2 border border-[#333333] rounded-full"
              >
                <span>Back To Top</span>
                <span className="group-hover:-translate-y-1 transition-transform">↑</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}

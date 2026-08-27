import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import personal from "../../details/personal";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4 }}
          href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Saurabh, I found your portfolio and would like to discuss a project with you.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F4F5] text-[#050505] shadow-[0_0_40px_rgba(244,244,245,0.15)] hover:bg-[#25D366] hover:text-white transition-colors duration-300 group"
          aria-label="Contact on WhatsApp"
        >
          <span className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 bg-[#222] text-[#F4F4F5] text-[10px] font-bold tracking-widest uppercase px-4 py-2 pointer-events-none whitespace-nowrap rounded-sm">
            Let's Talk
          </span>
          <MessageCircle size={24} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

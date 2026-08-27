import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import personal from "../../details/personal";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit
      setIsVisible(window.scrollY > 300);
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
          transition={{ duration: 0.3 }}
          href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Saurabh, I found your portfolio and would like to discuss a project with you.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
          aria-label="Contact on WhatsApp"
        >
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 bg-[#111] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 pointer-events-none whitespace-nowrap">
            Let's Talk
          </span>
          <MessageCircle size={28} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

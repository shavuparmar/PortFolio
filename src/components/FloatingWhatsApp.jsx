import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const phoneNumber = "916352244221"; // International format for India
  const message = "Hello Saurabh, I found your portfolio and would like to discuss a project with you.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Show button after slightly scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[100] flex flex-col items-end"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mb-4 w-[300px] rounded-[1rem] bg-zinc-900 p-4 shadow-2xl border border-zinc-800"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white leading-none">Saurabh Parmar</h4>
                      <span className="text-xs text-green-500 font-bold">Typically replies instantly</span>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                    <X size={16} />
                  </button>
                </div>
                <div className="bg-[#F4F1EA] rounded-lg p-3 text-sm text-zinc-700 mb-4">
                  Hi there! 👋 How can I help you with your project?
                </div>
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-widest text-xs"
                >
                  <MessageCircle size={16} />
                  Start Chat
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition-transform hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            
            {/* Tooltip */}
            {!isOpen && (
              <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 rounded bg-zinc-900 px-3 py-1.5 text-xs font-bold whitespace-nowrap tracking-wider uppercase text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                Chat on WhatsApp
              </span>
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

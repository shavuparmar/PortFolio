import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Ultra fast sequence as requested (1-2s total)
    const t1 = setTimeout(() => setStage(1), 400);  // "SHAVU PARMAR" -> "FULL-STACK DEVELOPER"
    const t2 = setTimeout(() => setStage(2), 800);  // -> "GRAPHICS DESIGNER"
    const t3 = setTimeout(() => setStage(3), 1200); // -> "ENTER"
    const t4 = setTimeout(() => {
      onComplete();
    }, 1600); // Complete

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F4F1EA] px-6 overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="h-20 sm:h-28 overflow-hidden flex items-center justify-center relative w-full min-w-[300px]">
            <AnimatePresence mode="wait">
              {stage === 0 && (
                <motion.h1
                  key="name"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="absolute text-3xl sm:text-5xl font-black tracking-tighter text-zinc-900 uppercase"
                >
                  SHAVU PARMAR
                </motion.h1>
              )}
              {stage === 1 && (
                <motion.h1
                  key="dev"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="absolute text-3xl sm:text-5xl font-black tracking-tighter text-zinc-900 uppercase"
                >
                  FULL-STACK DEVELOPER
                </motion.h1>
              )}
              {stage === 2 && (
                <motion.h1
                  key="design"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="absolute text-3xl sm:text-5xl font-black tracking-tighter text-zinc-900 uppercase"
                >
                  GRAPHICS DESIGNER
                </motion.h1>
              )}
              {stage >= 3 && (
                <motion.h1
                  key="enter"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="absolute text-4xl sm:text-6xl font-black tracking-widest text-zinc-900 uppercase"
                >
                  ENTER.
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: "linear" }}
            className="mt-8 h-[2px] w-64 origin-left bg-zinc-900"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

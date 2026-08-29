import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import about from "../details/about";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background text parallax
  const bgTextY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const bgTextY2 = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  const chapters = [
    {
      title: "WHO I AM",
      content: "I'm Saurabh Parmar, a creative developer blending frontend engineering with graphics design. I specialize in building digital experiences that are both robust and visually compelling."
    },
    {
      title: "WHAT I BUILD",
      content: about.highlights[1] || "Scalable full-stack MERN applications and intuitive frontend interfaces. I focus on clean architecture, performance, and responsive layouts."
    },
    {
      title: "WHAT I DESIGN",
      content: about.highlights[3] || "Clean UI, smooth UX, and premium modern graphics tailored for the web. I believe design is not just how it looks, but how it works."
    },
    {
      title: "HOW I WORK",
      content: "I bridge the gap between aesthetics and functionality. By understanding both the design system and the underlying code, I ensure the final product matches the original vision flawlessly."
    },
    {
      title: "WHAT I'M LEARNING",
      content: "Continuously exploring advanced web animations, 3D browser experiences, and modern architectural patterns to push the boundaries of what's possible on the web."
    },
    {
      title: "WHAT I WANT TO BUILD",
      content: "Interactive digital products that leave a lasting impression and solve real-world problems creatively, pushing beyond standard templates into unique custom experiences."
    }
  ];

  return (
    <section id="about" ref={containerRef} className="relative bg-[#050505] text-white py-32">
      
      {/* Background massive typography */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex flex-col justify-between opacity-5 select-none">
        <motion.div style={{ y: bgTextY1 }} className="text-[20vw] font-black leading-none whitespace-nowrap">
          CODE DESIGN
        </motion.div>
        <motion.div style={{ y: bgTextY2 }} className="text-[20vw] font-black leading-none whitespace-nowrap text-right">
          BUILD LEARN REPEAT
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="mb-24 flex items-center gap-4 text-[#888888] font-mono text-xs tracking-widest uppercase">
          <span>02 / About</span>
          <span className="w-12 h-[1px] bg-[#333333]"></span>
        </div>

        <div className="flex flex-col gap-32">
          {chapters.map((chapter, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end text-left md:text-right'}`}
              >
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[#E5E5E5] mb-6">
                  {chapter.title}
                </h2>
                <p className="text-xl md:text-3xl font-light text-[#888888] leading-relaxed max-w-2xl">
                  {chapter.content}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

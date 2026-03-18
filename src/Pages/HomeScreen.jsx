import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  Sparkles,
  Laptop,
  Code2,
  Database,
  Globe,
  Cpu,
  Braces,
  TerminalSquare,
  Monitor,
  Server,
  Layers3,
} from "lucide-react";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import personal from "../details/personal";
import about from "../details/about";
import skills from "../details/skills";
import projects from "../details/projects";
import services from "../details/services";
import experience from "../details/experience";
import social from "../details/social";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const clickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea");

      setIsPointer(!!clickable);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden h-3 w-3 rounded-full bg-violet-400 lg:block"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isPointer ? 1.6 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      <motion.div
        className="pointer-events-none fixed z-[9998] hidden rounded-full border border-cyan-300 lg:block"
        animate={{
          x: position.x - (isPointer ? 32 : 20),
          y: position.y - (isPointer ? 32 : 20),
          width: isPointer ? 64 : 40,
          height: isPointer ? 64 : 40,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
      />
    </>
  );
}

function FloatingBackground({ scrollYProgress }) {
  const orbTopY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const orbLeftY = useTransform(scrollYProgress, [0, 1], [0, -170]);
  const orbRightY = useTransform(scrollYProgress, [0, 1], [0, -320]);

  const laptopY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const monitorY = useTransform(scrollYProgress, [0, 1], [0, -230]);
  const cpuY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const codeWindowY = useTransform(scrollYProgress, [0, 1], [0, -190]);
  const terminalY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const serverY = useTransform(scrollYProgress, [0, 1], [0, -210]);
  const chipY = useTransform(scrollYProgress, [0, 1], [0, -110]);

  const floatCards = [
    {
      id: 1,
      icon: <Laptop size={20} />,
      label: "Laptop",
      className: "left-[6%] top-24",
      delay: 0,
      duration: 6.5,
    },
    {
      id: 2,
      icon: <Github size={20} />,
      label: "GitHub",
      className: "right-[8%] top-28",
      delay: 0.4,
      duration: 7.5,
    },
    {
      id: 3,
      icon: <Code2 size={20} />,
      label: "Code",
      className: "left-[10%] top-[52%]",
      delay: 0.8,
      duration: 6.8,
    },
    {
      id: 4,
      icon: <Database size={20} />,
      label: "Database",
      className: "right-[10%] top-[58%]",
      delay: 1.2,
      duration: 8,
    },
    {
      id: 5,
      icon: <Cpu size={20} />,
      label: "CPU",
      className: "left-[22%] top-[18%]",
      delay: 0.6,
      duration: 7.2,
    },
    {
      id: 6,
      icon: <Braces size={20} />,
      label: "LeetCode",
      className: "right-[22%] bottom-24",
      delay: 1,
      duration: 6.6,
    },
    {
      id: 7,
      icon: <TerminalSquare size={20} />,
      label: "Terminal",
      className: "left-[32%] top-[12%]",
      delay: 0.9,
      duration: 7.1,
    },
    {
      id: 8,
      icon: <Server size={20} />,
      label: "Backend",
      className: "right-[30%] top-[16%]",
      delay: 1.1,
      duration: 7.8,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_38%)]" />

      <motion.div
        style={{ y: orbTopY }}
        className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: orbLeftY }}
        className="absolute bottom-20 left-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <motion.div
        style={{ y: orbRightY }}
        className="absolute right-10 top-[42%] h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl"
      />

      {floatCards.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ y: [0, -18, 0], opacity: 1 }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
          className={`absolute hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:flex lg:items-center lg:gap-3 ${item.className}`}
        >
          <span className="text-violet-300">{item.icon}</span>
          <span className="text-sm font-medium">{item.label}</span>
        </motion.div>
      ))}

      <motion.div
        style={{ y: laptopY }}
        animate={{ rotate: [-8, -5, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[14%] top-[34%] hidden lg:block"
      >
        <div
          className="relative h-36 w-56 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
          style={{
            transform: "perspective(1200px) rotateY(-18deg) rotateX(10deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-3 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-violet-500/10 to-transparent">
            <div className="flex h-full flex-col gap-2 p-3">
              <div className="h-3 w-20 rounded-full bg-white/10" />
              <div className="h-3 w-28 rounded-full bg-white/10" />
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="h-10 rounded-lg bg-violet-500/15" />
                <div className="h-10 rounded-lg bg-cyan-400/15" />
                <div className="h-10 rounded-lg bg-fuchsia-400/15" />
              </div>
              <div className="mt-auto h-16 rounded-xl bg-black/20" />
            </div>
          </div>

          <div
            className="absolute left-1/2 top-full h-4 w-64 -translate-x-1/2 rounded-b-2xl bg-slate-700/90 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
            style={{ transform: "rotateX(68deg)" }}
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y: monitorY }}
        animate={{ rotate: [6, 3, 6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[12%] top-[36%] hidden lg:block"
      >
        <div
          className="relative h-40 w-64 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-950/90 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
          style={{
            transform: "perspective(1200px) rotateY(16deg) rotateX(8deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-3 rounded-xl bg-gradient-to-br from-violet-500/15 via-cyan-400/15 to-transparent">
            <div className="p-3">
              <div className="mb-3 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-24 rounded-full bg-white/10" />
                <div className="h-3 w-36 rounded-full bg-white/10" />
                <div className="h-3 w-20 rounded-full bg-white/10" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-16 rounded-xl bg-cyan-400/10" />
                <div className="h-16 rounded-xl bg-violet-500/10" />
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-full h-10 w-4 -translate-x-1/2 bg-slate-700/90" />
          <div className="absolute left-1/2 top-[calc(100%+2.2rem)] h-3 w-20 -translate-x-1/2 rounded-full bg-slate-700/90 shadow-[0_12px_30px_rgba(0,0,0,0.3)]" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: cpuY }}
        animate={{ rotate: [12, 18, 12] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[44%] top-[16%] hidden lg:block"
      >
        <div
          className="relative h-24 w-24 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-violet-500/15 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          style={{
            transform: "perspective(1000px) rotateX(18deg) rotateY(-18deg)",
          }}
        >
          <div className="absolute inset-3 rounded-xl border border-white/10 bg-black/20" />
          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/10" />

          {[4, 8, 12, 16].map((top) => (
            <div
              key={`left-${top}`}
              className="absolute -left-2 h-1 w-3 bg-cyan-300/30"
              style={{ top: `${top}px` }}
            />
          ))}
          {[4, 8, 12, 16].map((top) => (
            <div
              key={`right-${top}`}
              className="absolute -right-2 h-1 w-3 bg-cyan-300/30"
              style={{ top: `${top}px` }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{ y: codeWindowY }}
        animate={{ rotate: [-6, -3, -6] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[18%] bottom-20 hidden w-60 rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block"
      >
        <div className="mb-3 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-16 rounded-full bg-violet-400/20" />
          <div className="h-2.5 w-28 rounded-full bg-cyan-400/20" />
          <div className="h-2.5 w-20 rounded-full bg-fuchsia-400/20" />
          <div className="h-2.5 w-32 rounded-full bg-white/10" />
          <div className="h-2.5 w-24 rounded-full bg-white/10" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: terminalY }}
        animate={{ rotate: [5, 2, 5] }}
        transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] bottom-[14%] hidden w-64 rounded-3xl border border-emerald-400/10 bg-black/50 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block"
      >
        <div className="mb-3 flex items-center gap-2 text-xs text-emerald-300/80">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          terminal
        </div>
        <div className="space-y-2 font-mono text-xs text-emerald-300/70">
          <div>{">"} npm run dev</div>
          <div>{">"} vite ready</div>
          <div>{">"} mongo connected</div>
          <div>{">"} portfolio live</div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: mobileY }}
        animate={{ rotate: [-10, -6, -10] }}
        transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[33%] bottom-[12%] hidden lg:block"
      >
        <div
          className="relative h-44 w-24 rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-800/90 to-slate-950/90 shadow-[0_20px_70px_rgba(0,0,0,0.4)]"
          style={{
            transform: "perspective(1000px) rotateY(-14deg) rotateX(8deg)",
          }}
        >
          <div className="absolute left-1/2 top-3 h-1 w-10 -translate-x-1/2 rounded-full bg-white/10" />
          <div className="absolute inset-3 top-6 rounded-[1.4rem] bg-gradient-to-b from-violet-500/15 via-cyan-400/10 to-transparent p-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 rounded-xl bg-violet-400/15" />
              <div className="h-8 rounded-xl bg-cyan-400/15" />
              <div className="col-span-2 h-12 rounded-xl bg-white/10" />
              <div className="col-span-2 h-8 rounded-xl bg-fuchsia-400/15" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: serverY }}
        animate={{ rotate: [8, 12, 8] }}
        transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[34%] bottom-[22%] hidden lg:block"
      >
        <div
          className="relative h-36 w-24 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/90 to-slate-950/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          style={{
            transform: "perspective(1000px) rotateY(15deg) rotateX(8deg)",
          }}
        >
          <div className="absolute inset-3 space-y-3 rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="h-5 rounded-md bg-violet-400/15" />
            <div className="h-5 rounded-md bg-cyan-400/15" />
            <div className="h-5 rounded-md bg-fuchsia-400/15" />
            <div className="mt-4 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/40" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: chipY }}
        animate={{ rotate: [18, 24, 18] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[32%] top-[18%] hidden lg:block"
      >
        <div
          className="h-16 w-16 rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/15 to-cyan-400/15 shadow-[0_14px_40px_rgba(0,0,0,0.3)]"
          style={{
            transform: "perspective(1000px) rotateX(18deg) rotateY(18deg)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        animate={{ rotate: [-10, -6, -10] }}
        transition={{ duration: 7.7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[56%] top-[22%] hidden lg:block"
      >
        <div
          className="relative h-28 w-44 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-950/90 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
          style={{
            transform: "perspective(1000px) rotateY(-12deg) rotateX(10deg)",
          }}
        >
          <div className="absolute inset-3 rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="mb-3 flex items-center gap-2 text-xs text-cyan-300/80">
              <Layers3 size={14} />
              UI Panel
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 h-10 rounded-lg bg-violet-400/15" />
              <div className="h-10 rounded-lg bg-cyan-400/15" />
              <div className="col-span-3 h-8 rounded-lg bg-white/10" />
              <div className="h-6 rounded-md bg-fuchsia-400/15" />
              <div className="h-6 rounded-md bg-cyan-400/15" />
              <div className="h-6 rounded-md bg-violet-400/15" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -175]) }}
        animate={{ rotate: [7, 10, 7] }}
        transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] bottom-[8%] hidden lg:block"
      >
        <div
          className="relative h-24 w-40 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
          style={{
            transform: "perspective(1000px) rotateY(15deg) rotateX(8deg)",
          }}
        >
          <div className="absolute inset-3 rounded-xl bg-black/20 p-3">
            <div className="mb-2 flex items-center gap-2 text-xs text-violet-300/80">
              <Monitor size={14} />
              Dev Setup
            </div>
            <div className="space-y-2">
              <div className="h-3 w-20 rounded-full bg-white/10" />
              <div className="h-3 w-28 rounded-full bg-cyan-400/15" />
              <div className="h-6 rounded-lg bg-violet-400/15" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SectionTitle({ badge, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      {badge ? (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-violet-300 backdrop-blur-md">
          <Sparkles size={14} />
          {badge}
        </div>
      ) : null}

      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function HomeScreen() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white cursor-none">
      <CustomCursor />

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500"
      />

      <Header />
      <FloatingBackground scrollYProgress={scrollYProgress} />

      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute -left-28 top-28 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute right-0 top-[34rem] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <main className="relative z-10">
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-violet-300 backdrop-blur-md">
                <Sparkles size={14} />
                Modern Portfolio
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                {personal.name}
              </h1>

              <h2 className="mt-4 text-lg font-medium text-zinc-300 sm:text-2xl">
                {personal.role}
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
                {personal.shortIntro}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-violet-500"
                >
                  View Projects
                  <ArrowRight size={18} />
                </a>

                <a
                  href={personal.resumeLink}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/10"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {personal.heroStats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <h3 className="text-2xl font-bold text-white">{item.value}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-violet-500/20 via-cyan-400/20 to-fuchsia-500/20 blur-2xl" />
                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
                  <div className="grid gap-5">
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                      <p className="text-sm text-violet-300">Developer Profile</p>
                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {personal.brand}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-400">
                        Building clean user interfaces, private software,
                        full-stack systems, and AI-powered experiences.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="text-sm text-zinc-400">Focus</p>
                        <h4 className="mt-2 text-lg font-semibold text-white">
                          Frontend UI
                        </h4>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="text-sm text-zinc-400">Stack</p>
                        <h4 className="mt-2 text-lg font-semibold text-white">
                          MERN + AI
                        </h4>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/10 to-cyan-400/10 p-5">
                      <p className="text-sm text-zinc-300">
                        Smooth animation, premium visuals, clean structure, and
                        scalable code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle
            badge="About"
            title={about.title}
            subtitle="Who I am, what I build, and how I approach modern development."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-sm leading-8 text-zinc-300 sm:text-base">
                {about.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="grid gap-4">
                {about.highlights.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <span className="text-sm font-medium text-zinc-200">
                      0{index + 1}. {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle
            badge="Skills"
            title="Tech Stack & Tools"
            subtitle="Technologies I use to design, build, and ship complete products."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h3 className="mb-5 text-xl font-semibold text-white">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle
            badge="Projects"
            title="Featured Work"
            subtitle="A selection of projects that reflect my design sense and development skills."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-400/30"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-violet-300">{project.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-zinc-300">
                    0{index + 1}
                  </div>
                </div>

                <p className="text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle
            badge="Services"
            title="What I Can Build"
            subtitle="From frontend websites to complete full-stack and AI-based systems."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle
            badge="Experience"
            title="My Journey"
            subtitle="A quick look at my practical work and growth in development."
          />

          <div className="relative space-y-6 border-l border-white/10 pl-6">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <span className="mb-2 block text-sm font-medium text-violet-300">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle
            badge="Contact"
            title="Let’s Work Together"
            subtitle="Have a project idea, website need, or software requirement? Let’s connect."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white">Get in touch</h3>
              <p className="mt-4 text-sm leading-8 text-zinc-400 sm:text-base">
                I am available for portfolio websites, private software, MERN
                stack work, admin panels, AI integrations, and clean responsive
                frontend projects.
              </p>

              <div className="mt-8 space-y-4 text-zinc-300">
                <p className="flex items-center gap-3">
                  <Mail size={18} className="text-violet-300" />
                  {personal.email}
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="text-violet-300" />
                  {personal.phone}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin size={18} className="text-violet-300" />
                  {personal.location}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
              />

              <input
                type="email"
                placeholder="Your email"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
              />

              <textarea
                rows="6"
                placeholder="Your message"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:scale-[1.02] hover:bg-violet-500"
              >
                Send Message
                <ArrowRight size={18} />
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
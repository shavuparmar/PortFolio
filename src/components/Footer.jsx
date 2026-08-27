import personal from "../details/personal";
import social from "../details/social";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 bg-[#F4F1EA] px-6 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-12 mb-20">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h3 className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tighter uppercase leading-none mb-6">
              {personal.brand}
            </h3>
            <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase leading-relaxed mb-8 max-w-sm">
              Designing digital experiences and building them into real products.
            </p>
            <a 
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-4 text-xl sm:text-2xl font-black tracking-tighter text-zinc-900 hover:text-zinc-500 transition-colors"
            >
              {personal.email}
              <ArrowUp size={24} className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-lg font-bold tracking-widest text-zinc-500 hover:text-green-600 transition-colors uppercase"
            >
              {personal.phone}
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Work', 'Design', 'Development', 'About', 'Certificates'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm font-bold tracking-widest uppercase text-zinc-900 transition-colors hover:text-zinc-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-8">Socials</h4>
            <ul className="space-y-4">
              {social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold tracking-widest uppercase text-zinc-900 transition-colors hover:text-zinc-500 flex items-center gap-2 group"
                  >
                    {item.name}
                    <ArrowUp size={14} className="rotate-45 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-start">
            <button
              onClick={scrollToTop}
              className="group flex h-24 w-24 items-center justify-center rounded-full bg-zinc-900 text-[#F4F1EA] transition-transform hover:scale-110 active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp size={32} className="transition-transform group-hover:-translate-y-2" />
            </button>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 mt-6 lg:text-right w-full">
              Back to Top
            </span>
          </div>
        </div>

        {/* Copyright & Info */}
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 text-center md:text-left">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-400">
              Built with React & Tailwind
            </p>
            <a href={personal.resumeLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest uppercase text-zinc-900 hover:text-zinc-500 transition-colors">
              [ Download Resume ]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
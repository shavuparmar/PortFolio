import { ArrowUp } from "lucide-react";
import personal from "../../details/personal";
import social from "../../details/social";

export default function EditorialFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 px-6 md:px-12 border-t border-zinc-900">
      <div className="mx-auto max-w-[1600px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6 mb-20">
          
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-2xl font-black tracking-[0.2em] uppercase text-white mb-2">
              {personal.name}
            </h3>
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-8">
              Full-Stack Developer <br/>
              Graphics Designer
            </p>
            <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="text-xl font-black tracking-widest text-zinc-300 hover:text-white transition-colors">
              {personal.phone}
            </a>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['Work', 'About', 'Services', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-6">Social</h4>
            <div className="flex flex-col gap-4">
              {social.map(item => (
                <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">
                  {item.name}
                  <ArrowUp size={12} className="rotate-45 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-start lg:justify-end">
            <button
              onClick={scrollToTop}
              className="w-16 h-16 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black transition-colors"
            >
              <ArrowUp size={24} />
            </button>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-900 pt-8 gap-4">
          <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-600">
            © {new Date().getFullYear()} {personal.name}
          </p>
          <a href={personal.resumeLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 hover:text-white transition-colors">
            [ Download Resume ]
          </a>
        </div>

      </div>
    </footer>
  );
}

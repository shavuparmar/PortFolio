import { ArrowUp } from "lucide-react";
import personal from "../../details/personal";
import social from "../../details/social";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#F4F4F5] py-20 px-6 md:px-12 border-t border-[#222]">
      <div className="mx-auto max-w-[1600px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6 mb-24">
          
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-3xl font-black tracking-widest uppercase mb-4">
              {personal.name}
            </h3>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666] leading-relaxed">
              Full-Stack Developer <br/>
              Graphics Designer
            </p>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#444] mb-8">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['Intro', 'About', 'Work', 'Graphics', 'Contact'].map(link => (
                <a key={link} href={link === 'Intro' ? '#' : `#${link.toLowerCase()}`} className="text-xs font-bold tracking-widest uppercase text-[#888] hover:text-[#F4F4F5] transition-colors w-fit">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#444] mb-8">Social</h4>
            <div className="flex flex-col gap-4">
              {social.map(item => (
                <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#888] hover:text-[#F4F4F5] transition-colors w-fit">
                  {item.name}
                  <ArrowUp size={12} className="rotate-45 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 flex justify-start lg:justify-end">
            <button
              onClick={scrollToTop}
              className="w-16 h-16 border border-[#222] rounded-full flex items-center justify-center text-[#666] hover:bg-[#F4F4F5] hover:text-[#050505] transition-all hover:-translate-y-2"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#111] pt-8 gap-4">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#555]">
            © {new Date().getFullYear()} {personal.name}
          </p>
          <div className="flex gap-8">
            <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#555] hover:text-[#F4F4F5] transition-colors">
              Phone
            </a>
            <a href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#555] hover:text-[#F4F4F5] transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

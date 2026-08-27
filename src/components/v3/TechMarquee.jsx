const devStack = "REACT • JAVASCRIPT • TYPESCRIPT • NODE.JS • EXPRESS • POSTGRESQL • MONGODB • PRISMA • TAILWIND • VITE • GIT • GITHUB • VERCEL • ";
const designStack = "FIGMA • PHOTOSHOP • ILLUSTRATOR • CANVA • AFTER EFFECTS • PREMIERE PRO • UI/UX • BRANDING • TYPOGRAPHY • LAYOUTS • ";

export default function TechMarquee() {
  return (
    <section className="py-32 overflow-hidden bg-zinc-900 border-y border-zinc-800">
      
      {/* DEVELOPMENT ROW (Moves Left) */}
      <div className="flex whitespace-nowrap mb-8">
        <div className="animate-marquee inline-flex flex-nowrap items-center">
          <span className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase text-zinc-700 mx-4">
            {devStack}
          </span>
          <span className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase text-zinc-700 mx-4">
            {devStack}
          </span>
        </div>
      </div>

      {/* DESIGN ROW (Moves Right) */}
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee-reverse inline-flex flex-nowrap items-center">
          <span className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase text-[#F4F1EA] mx-4">
            {designStack}
          </span>
          <span className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase text-[#F4F1EA] mx-4">
            {designStack}
          </span>
        </div>
      </div>

    </section>
  );
}

import { motion } from "framer-motion";
import personal from "../details/personal";

export default function Contact() {
  const whatsappMessage = encodeURIComponent("Hello Saurabh, I found your portfolio and would like to discuss a project with you.");
  const whatsappUrl = `https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
  const phoneUrl = `tel:${personal.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <section id="contact" className="py-32 bg-[#111111] border-t border-[#222222]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-24 flex items-center gap-4 text-[#888888] font-mono text-xs tracking-widest uppercase">
          <span>09 / Contact</span>
          <span className="w-12 h-[1px] bg-[#333333]"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          {/* Main CTA */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(2.5rem,10vw,6rem)] font-bold leading-[0.85] tracking-tighter uppercase text-white mb-12 break-words"
            >
              LET'S BUILD<br />
              <span className="text-[#888888]">SOMETHING<br />TOGETHER.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col gap-3"
            >
              <h4 className="text-[#E5E5E5] font-mono text-sm tracking-widest uppercase mb-2">Available for</h4>
              <ul className="flex flex-col gap-2">
                <li className="text-[#A0A0A0] text-xl font-light uppercase tracking-wide">FULL-STACK DEVELOPMENT</li>
                <li className="text-[#A0A0A0] text-xl font-light uppercase tracking-wide">GRAPHICS DESIGN</li>
                <li className="text-[#A0A0A0] text-xl font-light uppercase tracking-wide">CREATIVE PROJECTS</li>
              </ul>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="flex flex-col justify-end gap-12 lg:border-l lg:border-[#222222] lg:pl-16">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div>
                <h4 className="text-[#888888] font-mono text-xs uppercase tracking-widest mb-4">Direct Communication</h4>
                <p className="text-3xl text-white font-bold tracking-tighter mb-6">{personal.phone}</p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={phoneUrl} 
                    className="px-6 py-3 bg-white text-black hover:bg-[#E5E5E5] transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2 group border border-white"
                  >
                    <span>Call Me</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-3 border border-[#333333] hover:border-[#25D366] text-white hover:text-[#25D366] transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2 group"
                  >
                    <span>WhatsApp</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 pt-12 border-t border-[#222222]"
            >
              <div>
                <h4 className="text-[#888888] font-mono text-xs uppercase tracking-widest mb-4">Email Address</h4>
                <a 
                  href={`mailto:${personal.email}`} 
                  className="text-2xl sm:text-3xl text-white font-light hover:text-[#A0A0A0] transition-colors break-words"
                >
                  {personal.email}
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

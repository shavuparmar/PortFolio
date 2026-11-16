import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Clock,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import personal from "../details/personal";

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleComposeEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Saurabh,\n\nMy name is ${formData.name || 'a visitor'}${formData.email ? ` (${formData.email})` : ''}.\n\nMessage:\n${formData.message}\n\nLooking forward to speaking with you.`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Saurabh, I visited your portfolio and would like to discuss a project with you.`
  );
  const whatsappUrl = `https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-white/5 relative grid-backdrop">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9A9AA4] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00]"></span>
            <Send size={13} className="text-[#D4FF00]" />
            <span>09 // Direct Channels</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Let's Make Something Meaningful<span className="text-[#D4FF00]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9A9AA4] max-w-xl font-sans">
            Have a project in mind, an engineering role, or a design inquiry? I'm readily available across email, WhatsApp, and phone.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Touchpoints & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl glass-dock border border-white/10 text-[#D4FF00] flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#5E606B] uppercase tracking-wider block">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-white font-semibold text-sm hover:text-[#D4FF00] transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personal.email, "primaryEmail")}
                  className="p-2 rounded-lg glass-dock border border-white/10 text-[#9A9AA4] hover:text-white transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedField === "primaryEmail" ? (
                    <Check size={14} className="text-[#D4FF00]" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-[#5E606B]">
                <span>Response Time</span>
                <span className="text-[#EDEDF2]">Within 24 Hours</span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl glass-dock border border-white/10 text-[#D4FF00] flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#5E606B] uppercase tracking-wider block">
                      Direct Mobile / WhatsApp
                    </span>
                    <a
                      href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-white font-semibold text-sm hover:text-[#D4FF00] transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personal.phone, "phone")}
                  className="p-2 rounded-lg glass-dock border border-white/10 text-[#9A9AA4] hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedField === "phone" ? (
                    <Check size={14} className="text-[#D4FF00]" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} />
                <span>Chat Instantly On WhatsApp</span>
              </a>
            </div>

            {/* Geographic Hub & Timezone Snapshot */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[#5E606B] flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#D4FF00]" />
                  Base Coordinates
                </span>
                <span className="text-white">{personal.location}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[#5E606B]">Local Timezone</span>
                <span className="text-[#D4FF00] font-bold">{personal.timezone}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[#5E606B]">Work Availability</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open For Work
                </span>
              </div>
            </div>

            {/* Social Networks */}
            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl glass-dock border border-white/10 hover:border-white/30 text-xs font-mono text-white flex items-center justify-center gap-2 transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl glass-dock border border-white/10 hover:border-[#0A66C2]/50 text-xs font-mono text-white flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin size={14} className="text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl glass-panel border border-white/10 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
                <h3 className="font-display font-bold text-xl text-white">
                  Send a Direct Message
                </h3>
                <span className="font-mono text-xs text-[#5E606B]">
                  via Mail Client
                </span>
              </div>

              <form onSubmit={handleComposeEmail} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#9A9AA4] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl glass-dock border border-white/10 text-white placeholder-[#5E606B] text-xs font-mono focus:border-[#D4FF00] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#9A9AA4] mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-xl glass-dock border border-white/10 text-white placeholder-[#5E606B] text-xs font-mono focus:border-[#D4FF00] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#9A9AA4] mb-2">
                    Subject / Project Scope
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Web Development Project"
                    className="w-full px-4 py-3 rounded-xl glass-dock border border-white/10 text-white placeholder-[#5E606B] text-xs font-mono focus:border-[#D4FF00] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#9A9AA4] mb-2">
                    Project Details or Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timelines, or role details..."
                    className="w-full px-4 py-3 rounded-xl glass-dock border border-white/10 text-white placeholder-[#5E606B] text-xs font-sans focus:border-[#D4FF00] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 px-6 rounded-xl bg-[#D4FF00] text-black font-bold text-xs uppercase tracking-wider font-mono hover:bg-white transition-all shadow-[0_0_20px_rgba(212,255,0,0.2)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Launch Email Draft to Saurabh</span>
                  <Send size={13} />
                </button>

                <p className="text-[11px] text-[#5E606B] text-center font-mono mt-1">
                  Draft opens directly in your mail application with prefilled message.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

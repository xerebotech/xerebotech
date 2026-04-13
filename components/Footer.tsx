'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const Linkedin = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-dark-deepest text-white px-6 pb-12 pt-16 relative overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Brand Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <p className="text-orange font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-4 inline-block font-heading">
                  Growth, Engineered.
                </p>
                <div className="relative w-40 h-10">
                  <Image
                    src="/Xerebo Wordmark.png"
                    alt="XEREBO"
                    fill
                    className="object-contain brightness-0 invert"
                    sizes="160px"
                  />
                </div>
              </div>

              <p className="text-gray-400 max-w-sm mb-8 text-base leading-relaxed font-heading font-medium">
                UAE&apos;s first Marketing Growth Partner. We build the intelligence that fuels your business growth through data-driven performance marketing.
              </p>

              {/* Social Ecosystem */}
              <div className="flex items-center gap-4">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/company/teamxerebo", label: "LinkedIn" },
                  { icon: Instagram, href: "https://instagram.com/teamxerebo", label: "Instagram" },
                  { icon: Facebook, href: "https://facebook.com/share/1BcH1VkvrW/", label: "Facebook" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange/10 hover:text-orange hover:border-orange/30 transition-all shadow-lg backdrop-blur-sm group"
                  >
                    <social.icon size={22} className="group-hover:drop-shadow-[0_0_8px_rgba(254,119,0,0.5)]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact & Interaction (7 cols) */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 hover:border-orange/20 transition-colors group"
            >
              <h3 className="text-gray-400 text-xs font-black uppercase tracking-[0.3em] mb-8 font-heading">Connect With Our Growth Squad</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="mailto:hello@xerebo.com" className="flex flex-col gap-3 group/item">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange group-hover/item:scale-110 transition-transform shadow-[0_0_15px_rgba(254,119,0,0.2)]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Email Us</span>
                    <span className="text-white font-medium text-sm group-hover/item:text-orange transition-colors">hello@xerebo.com</span>
                  </div>
                </a>

                <a href="tel:+971501722314" className="flex flex-col gap-3 group/item">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange group-hover/item:scale-110 transition-transform shadow-[0_0_15px_rgba(254,119,0,0.2)]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Call Us</span>
                    <span className="text-white font-medium text-sm group-hover/item:text-orange transition-colors">+971 50 172 2314</span>
                  </div>
                </a>

                {/* ✅ UPDATED: Dot separator + 3-line address */}
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJl4AX4yBpXz4RWTipITDQ2c8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-3 group/item"
                >
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange group-hover/item:scale-110 transition-transform shadow-[0_0_15px_rgba(254,119,0,0.2)]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                      Visit Us
                    </span>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-orange font-medium text-[11px]">Xerebo Technologies L.L.C - FZ</span>
                      <span className="text-orange text-[10px]">•</span>
                    </div>
                    <span className="block text-white font-medium text-sm leading-relaxed group-hover/item:text-orange transition-colors">
                      Office 905,<br />
                      Capital Golden Tower,<br />
                      Business Bay, Dubai
                    </span>
                  </div>
                </a>

              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Signature */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:grid md:grid-cols-3 items-center gap-6">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              © 2026 Xerebo. All rights reserved.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center gap-10">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-orange transition-colors text-[10px] font-bold uppercase tracking-widest relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange transition-all group-hover:w-full" />
            </Link>
            <Link href="/terms-service" className="text-gray-500 hover:text-orange transition-colors text-[10px] font-bold uppercase tracking-widest relative group">
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange transition-all group-hover:w-full" />
            </Link>
          </div>

          <div className="order-3 text-center md:text-right">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center md:justify-end gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
              Engineered for UAE Growth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

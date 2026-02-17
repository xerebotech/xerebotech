'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-deepest text-white px-6 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Brand */}
        <div className="relative w-48 h-12 mb-8">
          <Image
            src="/Xerebo Wordmark.png"
            alt="XEREBO"
            fill
            className="object-contain brightness-0 invert"
            sizes="192px"
          />
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-center max-w-md mb-12 text-lg leading-relaxed font-heading">
          UAE&apos;s first Marketing Growth Partner. We build the intelligence that fuels your business growth.
        </p>

        {/* Simple Links / Contact */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a href="mailto:hello@xerebo.com" className="flex items-center gap-2 text-gray-400 hover:text-orange transition-colors">
            <Mail className="w-5 h-5 text-orange" />
            <span>hello@xerebo.com</span>
          </a>
          <a href="tel:+971501722314" className="flex items-center gap-2 text-gray-400 hover:text-orange transition-colors">
            <Phone className="w-5 h-5 text-orange" />
            <span>+971 50 172 2314</span>
          </a>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-5 h-5 text-orange" />
            <span>Dubai, UAE</span>
          </div>
        </div>

        {/* Social / Legal */}
        <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Xerebo. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-orange transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-service" className="text-gray-500 hover:text-orange transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

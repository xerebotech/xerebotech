'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import ContactFormFields from '@/components/ContactFormFields';

export default function ContactForm() {
  return (
    <section id="contact" className="px-6 pt-12 md:pt-20 pb-0 bg-dark-deepest text-white relative overflow-hidden">
      {/* Background Accents */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Row 1: Audit Benefits & Form */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 text-orange text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm font-heading"
            >
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse shadow-[0_0_10px_rgba(254,119,0,0.5)]" />
              Let&apos;s Grow
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter font-heading leading-[0.9]">
              Get Your Free <span className="bg-gradient-to-r from-orange to-white bg-clip-text text-transparent">Growth Audit</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed max-w-xl mb-12">
              30-minute consultation. We review your marketing, identify gaps, and show you exactly where the growth opportunities are.
            </p>

            <div className="space-y-5">
              {[
                'Honest assessment of your current marketing',
                'Identify your top 3 growth opportunities',
                'Custom recommendations for your industry',
                'No pressure, no hard sell — just clarity',
                'Talk directly to our founder'
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-orange" />
                  </div>
                  <span className="text-white/70 text-lg font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-full bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl relative">
              <ContactFormFields />
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

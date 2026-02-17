'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ContactFormFields from '@/components/ContactFormFields';

export default function ContactForm() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28 bg-gradient-to-br from-dark-deepest to-dark text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Get Your Free <span className="text-orange">Growth Audit</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              30-minute consultation. We review your marketing, identify gaps, and show you exactly where the growth opportunities are.
            </p>

            <div className="space-y-4">
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
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
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
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <ContactFormFields />
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
}

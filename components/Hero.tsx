'use client';

import { motion } from 'framer-motion';
import CreativeButton from '@/components/ui/CreativeButton';
import { useContactModal } from '@/context/ContactModalContext';

export default function Hero() {
  const { openModal } = useContactModal();
  return (
    <section className="text-center px-6 pt-52 pb-24 md:pt-56 md:pb-32 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="font-medium text-base text-dark tracking-wide mb-8">
          Marketing Intelligence for Modern UAE Businesses
        </p>

        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-dark-deepest mb-3 tracking-tight">
          We Don&apos;t Just Run Ads.
        </h1>

        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-orange italic mb-12 tracking-tight">
          We Build Growth Machines.
        </h2>

        <p className="text-lg leading-relaxed text-dark max-w-[520px] mx-auto mb-11">
          From strategy to execution, we handle the full marketing lifecycle — with systems, data, and technology that scale your business.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 w-full max-w-md md:max-w-none mx-auto">
          <CreativeButton
            onClick={openModal}
            variant="shimmer"
            size="lg"
            className="w-full md:w-auto px-8 md:px-10 py-4 text-base md:text-lg shadow-lg shadow-orange-500/20"
          >
            <span className="hidden md:inline">Get Your Free Audit</span>
            <span className="md:hidden">Free Audit</span>
          </CreativeButton>
          <CreativeButton
            href="#services"
            variant="outline"
            size="lg"
            className="w-full md:w-auto px-8 md:px-10 py-4 text-base md:text-lg"
          >
            <span className="hidden md:inline">See What We Do</span>
            <span className="md:hidden">Our Services</span>
          </CreativeButton>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-orange mb-2">1,050%</div>
          <div className="text-sm text-dark">Revenue Growth (Flagship Client)</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-orange mb-2">$8.2M</div>
          <div className="text-sm text-dark">Ad Spend Managed Annually</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-orange mb-2">94%</div>
          <div className="text-sm text-dark">Client Retention Rate</div>
        </div>
      </motion.div>
    </section>
  );
}
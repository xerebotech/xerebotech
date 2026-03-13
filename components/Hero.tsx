'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Zap, Target, MousePointer2 } from 'lucide-react';
import CreativeButton from '@/components/ui/CreativeButton';
import { useContactModal } from '@/context/ContactModalContext';

const Hero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex flex-col pt-44 pb-16 md:pt-52 md:pb-24 bg-light overflow-hidden text-dark font-sans">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,black,transparent)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex-grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center flex-grow">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] md:leading-[0.9] mb-8 font-heading tracking-tighter text-balance">
              One System.<br />
              <span className="relative inline-block">
                <span className="text-orange relative z-10">Every Channel.</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-2 md:bottom-4 left-0 h-3 md:h-5 bg-orange/20 -z-0"
                />
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-dark-deepest font-black leading-tight mb-10 max-w-xl uppercase tracking-tighter">
              Qualified Leads — <span className="text-orange underline decoration-orange/30 underline-offset-8 italic">or You Walk.</span>
            </p>

            <p className="text-base md:text-lg text-dark/70 leading-relaxed mb-8 max-w-lg font-medium">
              We replace fragmented agencies with one integrated lead engine delivering sales-ready prospects directly to your CRM. No excuses. Just growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CreativeButton
                onClick={() => openModal('Hero CTA')}
                variant="shimmer"
                size="lg"
                className="w-full sm:w-auto px-10 py-5 text-lg"
              >
                Build Your Lead Engine
              </CreativeButton>
              <CreativeButton
                href="#pricing"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg border-orange/50 text-dark-deepest hover:bg-dark-deepest"
              >
                See pricing
              </CreativeButton>
            </div>
          </motion.div>

          {/* RIGHT: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:block"
          >
            <div className="relative bg-white border border-dark-deepest/5 rounded-[3rem] p-6 md:p-8 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
              {/* Fake Dashboard Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-dark-deepest/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange flex items-center justify-center shadow-lg shadow-orange/20">
                    <BarChart3 size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-orange">Real-time Pipeline</h3>
                    <p className="text-lg font-bold text-dark-deepest">Xerebo Engine v1.4</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Live Sync</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
                <div className="bg-orange/[0.03] rounded-[1.5rem] p-3 md:p-4 border border-orange/10 hover:border-orange/30 transition-colors text-center">
                  <div className="flex flex-col items-center gap-1 text-orange/40 mb-1">
                    <Target size={12} />
                    <span className="text-[8px] font-bold uppercase tracking-widest whitespace-nowrap">Qualified Leads</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-dark-deepest leading-none">247</p>
                </div>
                <div className="bg-orange/[0.03] rounded-[1.5rem] p-3 md:p-4 border border-orange/10 hover:border-orange/30 transition-colors text-center">
                  <div className="flex flex-col items-center gap-1 text-orange/40 mb-1">
                    <Users size={12} />
                    <span className="text-[8px] font-bold uppercase tracking-widest whitespace-nowrap">Conversion</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-dark-deepest leading-none">12%</p>
                </div>
                <div className="bg-orange/[0.03] rounded-[1.5rem] p-3 md:p-4 border border-orange/10 hover:border-orange/30 transition-colors text-center">
                  <div className="flex flex-col items-center gap-1 text-orange/40 mb-1">
                    <Zap size={12} />
                    <span className="text-[8px] font-bold uppercase tracking-widest whitespace-nowrap">ROI</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-dark-deepest leading-none">4x</p>
                </div>
              </div>

              {/* Fake Graph Placeholder */}
              <div className="bg-dark/5 rounded-[2.5rem] p-6 border border-dark/5 relative group-hover:border-orange/20 transition-colors">
                <div className="h-32 flex items-end gap-2 md:gap-3 px-2">
                  {[45, 60, 40, 80, 55, 95, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-orange to-orange-400 rounded-t-lg shadow-sm"
                    />
                  ))}
                </div>
                {/* Graph Cursor */}
                <div className="absolute top-10 right-10 bg-dark-deepest p-3 rounded-xl shadow-xl shadow-dark-deepest/20 -rotate-6 group-hover:rotate-0 transition-transform">
                  <p className="text-[10px] font-bold uppercase text-white/50 mb-0.5 whitespace-nowrap">Lead Growth — 12 Months</p>
                  <p className="text-sm font-bold text-white">+42% Lead Growth</p>
                </div>
              </div>

              {/* Live Activity Feed */}
              <div className="mt-8 pt-6 border-t border-dark-deepest/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center relative">
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                      <Users size={16} className="text-orange" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-deepest">New Lead</p>
                      <p className="text-[10px] text-black/40 font-bold uppercase tracking-widest">Qualified · Just now</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-100 text-[10px] font-black text-green-700 uppercase tracking-widest">
                    Live
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Assets */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange/20 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Industry Trust Bar */}
        <div className="mt-20 pt-10 border-t border-dark-deepest/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Leads in 90 Days (Real Estate)", value: "127" },
              { label: "Monthly Patient Inquiries (Healthcare)", value: "89/mo" },
              { label: "Average Client ROAS", value: "4.2x" },
              { label: "Consultations/Month (Prof. Services)", value: "52" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center md:text-left group"
              >
                <p className="text-4xl md:text-5xl font-bold text-orange mb-1.5 group-hover:text-dark-deepest transition-colors">
                  {stat.value}
                </p>
                <p className="text-[9px] text-black/30 uppercase tracking-[0.18em] font-bold leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

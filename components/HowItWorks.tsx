'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, BarChart, TrendingUp } from 'lucide-react';

import CreativeButton from '@/components/ui/CreativeButton';
import { useContactModal } from '@/context/ContactModalContext';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: "We learn your business inside out — what's working, what's not, and where the real opportunity lives.",
    color: "from-orange to-orange-muted"
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Blueprint',
    description: "Custom strategy built around your goals, budget, and market — with clear KPIs and timelines.",
    color: "from-orange to-orange-muted"
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Build & Launch',
    description: "Set up systems, campaigns, and assets — then go live. You see results, not busywork.",
    color: "from-orange to-orange-muted"
  },
  {
    icon: BarChart,
    number: '04',
    title: 'Track & Optimize',
    description: "Real-time data, weekly reviews. Double down on what works, cut what doesn't.",
    color: "from-orange to-orange-muted"
  },
  {
    icon: TrendingUp,
    number: '05',
    title: 'Scale',
    description: "Expand into new channels, audiences, and markets — with the engine already running.",
    color: "from-orange to-orange-muted"
  }
];

export default function HowItWorks() {
  const { openModal } = useContactModal();

  return (
    <section className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-32 bg-light overflow-hidden font-heading">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange/10 rounded-full blur-[80px] sm:blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-dark/5 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 text-orange text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 sm:mb-8 backdrop-blur-sm font-heading"
          >
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse shadow-[0_0_10px_rgba(254,119,0,0.5)]" />
            Our Process
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 sm:mb-6 tracking-tight font-heading px-2">
            From First Meeting to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dark-deepest">
              Full Growth
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark/60 max-w-2xl mx-auto leading-relaxed px-2">
            One partner, every step of the way. We handle the complexity so you can focus on leading.
          </p>
        </motion.div>

        {/* ── MOBILE: vertical timeline (< md) ── */}
        <div className="flex flex-col gap-4 md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "backOut" }}
              className="group relative flex gap-4"
            >
              {/* Left: icon column + connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                >
                  <step.icon size={20} />
                </div>
                {/* Vertical connector line */}
                {index < steps.length - 1 && (
                  <div className="w-[2px] flex-1 mt-2 bg-gradient-to-b from-orange/30 to-dark/10 min-h-[24px]" />
                )}
              </div>

              {/* Right: card content */}
              <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-dark/5 mb-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base font-bold text-dark font-heading">{step.title}</h3>
                  <span className="text-2xl font-black text-dark/10 font-heading leading-none">{step.number}</span>
                </div>
                <p className="text-dark/60 text-sm leading-relaxed">{step.description}</p>
                <div className={`mt-3 w-full h-[3px] rounded-full bg-gradient-to-r ${step.color} opacity-30`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP: 5-column horizontal grid (md+) ── */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
              className="group relative h-full"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[3rem] left-[calc(100%+0px)] w-5 h-[2px] bg-gradient-to-r from-orange/30 to-dark/10 z-0" />
              )}

              <div className="relative h-full bg-white rounded-3xl p-5 xl:p-6 shadow-sm border border-dark/5 hover:shadow-xl hover:border-transparent transition-all duration-500 group-hover:-translate-y-2">
                {/* Hover Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${step.color} p-[1px] -z-10`} />
                <div className="absolute inset-[1px] bg-white rounded-[23px] -z-10" />

                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-5">
                    <div className={`w-12 h-12 xl:w-14 xl:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <step.icon size={22} />
                    </div>
                    <span className="text-3xl xl:text-4xl font-black text-dark/10 group-hover:text-dark/20 transition-colors duration-300 font-heading leading-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg xl:text-xl font-bold text-dark mb-3 group-hover:text-orange transition-colors duration-300 font-heading">
                    {step.title}
                  </h3>

                  <p className="text-dark/60 text-sm leading-relaxed mb-5 flex-grow">
                    {step.description}
                  </p>

                  <div className={`w-full h-1 rounded-full bg-gradient-to-r ${step.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center w-full flex justify-center px-4"
        >
          <CreativeButton
            onClick={openModal}
            size="lg"
            variant="shimmer"
            className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto max-w-sm sm:max-w-none shadow-lg shadow-orange-500/20"
          >
            <span className="hidden sm:inline">Start Your Journey</span>
            <span className="sm:hidden">Get Started</span>
          </CreativeButton>
        </motion.div>
      </div>
    </section>
  );
}
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
    <section className="relative px-6 py-24 md:py-32 bg-light overflow-hidden font-heading">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-orange/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-dark/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 text-orange text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm font-heading"
          >
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse shadow-[0_0_10px_rgba(254,119,0,0.5)]" />
            Our Process
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6 tracking-tight font-heading">
            From First Meeting to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dark-deepest">Full Growth</span>
          </h2>
          <p className="text-xl text-dark/60 max-w-2xl mx-auto leading-relaxed">
            One partner, every step of the way. We handle the complexity so you can focus on leading.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
              className="group relative h-full"
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[100%] w-full h-[2px] bg-dark/10 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-dark/20 to-dark/10 w-full" />
                </div>
              )}

              <div className="relative h-full bg-white rounded-3xl p-6 shadow-sm border border-dark/5 hover:shadow-xl hover:border-transparent transition-all duration-500 group-hover:-translate-y-2">
                {/* Hover Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${step.color} p-[1px] -z-10`} />
                <div className="absolute inset-[1px] bg-white rounded-[23px] -z-10" />

                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <step.icon size={24} />
                    </div>
                    <span className="text-4xl font-black text-dark/10 group-hover:text-dark/20 transition-colors duration-300 font-heading">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-orange transition-colors duration-300 font-heading">
                    {step.title}
                  </h3>

                  <p className="text-dark/60 text-sm leading-relaxed mb-6 flex-grow">
                    {step.description}
                  </p>

                  <div className={`w-full h-1 rounded-full bg-gradient-to-r ${step.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <CreativeButton
            onClick={openModal}
            size="lg"
            variant="shimmer"
            className="text-lg px-10 py-5"
          >
            Start Your Journey
          </CreativeButton>
        </motion.div>
      </div>
    </section>
  );
}
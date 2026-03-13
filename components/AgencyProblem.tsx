'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Clock, ShieldAlert, ArrowRight } from 'lucide-react';
import CreativeButton from '@/components/ui/CreativeButton';
import { useContactModal } from '@/context/ContactModalContext';

const problems = [
    {
        id: "01",
        icon: TrendingDown,
        title: "Vanity Metrics Instead of Revenue",
        description: "Impressions up 40%. Reach up 25%. But your phone isn't ringing and your pipeline is empty. You're paying for PDFs, not prospects.",
        wasted: "Wasted: AED 8–15K/month",
        color: "from-orange to-orange/80"
    },
    {
        id: "02",
        icon: Clock,
        title: "Post Counts Instead of Pipeline",
        description: "20 posts. 4 blogs. 8 emails. Every number hit. Lead count? Zero. They optimized for tasks, not your growth.",
        wasted: "Wasted: 12 months of budget",
        color: "from-sky-500 to-sky-400"
    },
    {
        id: "03",
        icon: ShieldAlert,
        title: "Locked In With No Escape",
        description: "You knew by month three. But the contract says 12. AED 10K, 15K, 20K draining every month into a system that produces nothing.",
        wasted: "Wasted: AED 96K–180K/year",
        color: "from-red-500 to-red-400"
    },
    {
        id: "04",
        icon: AlertCircle,
        title: "Nobody Owns the Outcome",
        description: "PPC team doesn't talk to content. Social agency has never seen your CRM. Three vendors, zero accountability, no one responsible for revenue.",
        wasted: "Result: Zero trackable ROI",
        color: "from-dark-deepest to-dark"
    }
];

const AgencyProblem = () => {
    const { openModal } = useContactModal();

    return (
        <section className="py-24 md:py-32 bg-dark-deepest relative overflow-hidden text-white font-sans">
            {/* Background Ambience */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 text-orange text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm font-heading"
                    >
                        <span className="w-2 h-2 rounded-full bg-orange animate-pulse shadow-[0_0_10px_rgba(254,119,0,0.5)]" />
                        The Problem
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter font-heading leading-[1.1] md:leading-[0.9] text-balance">
                        Why Your Current Agency <br />
                        <span className="bg-gradient-to-r from-orange to-white bg-clip-text text-transparent">
                            Isn&apos;t Delivering Leads
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/60"
                    >
                        Most agencies sell you &quot;activities&quot; because they can&apos;t guarantee outcomes.
                        We focus on the metrics that actually hit your bank account.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all hover:bg-white/10 hover:border-orange/30 overflow-hidden"
                        >
                            {/* Card Number */}
                            <div className="absolute top-6 right-8 text-5xl font-black text-white/5 group-hover:text-orange/10 transition-colors pointer-events-none">
                                {problem.id}
                            </div>

                            <div className="flex flex-col h-full relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-orange flex items-center justify-center mb-6 shadow-lg shadow-orange/20 group-hover:scale-110 transition-transform duration-500">
                                    <problem.icon size={28} className="text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-orange transition-colors">
                                    {problem.title}
                                </h3>

                                <p className="text-white/70 text-lg leading-relaxed mb-6">
                                    {problem.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <span className="text-orange font-bold text-lg flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                                        {problem.wasted}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6">
                    <CreativeButton
                        onClick={() => openModal('Agency Problem Audit')}
                        variant="shimmer"
                        size="lg"
                        className="group px-10 py-6 text-xl shadow-[0_20px_50px_rgba(254,119,0,0.3)]"
                    >
                        Stop Wasting Your Budget — Book a Free Audit
                    </CreativeButton>

                    <p className="text-white/40 text-sm flex items-center gap-2">
                        <AlertCircle size={16} />
                        No obligation. Zero sales pressure. Real data only.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AgencyProblem;

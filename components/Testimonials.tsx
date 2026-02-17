'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
    {
        name: "Omar Al-Mansouri",
        role: "Operational Director",
        company: "Capital Heights Real Estate",
        content: "Xerebo didn't just give us a website; they gave us a business engine. Our lead-to-booking conversion jumped by 42% in the first quarter alone. They understand the UAE market better than any agency we've worked with.",
        icon: "OA",
        result: "+42% Conversion Rate"
    },
    {
        name: "Elena Rodriguez",
        role: "Head of Growth",
        company: "Quantum Talent GCC",
        content: "The CRM automation they built saved our consultants 15 hours a week. We scaled our ad spend by 300% profitably because we finally had real-time data to back up our decisions.",
        icon: "ER",
        result: "15hrs/week Saved"
    },
    {
        name: "Dr. Ahmed Hassan",
        role: "Founder",
        company: "Elite Medical Center",
        content: "Most agencies focus on clicks. Xerebo focuses on revenue. They handled everything from our strategy to the actual tech stack implementation. Highly professional and results-driven.",
        icon: "AH",
        result: "240% ROI in 6 Months"
    }
];

export default function Testimonials() {
    return (
        <section className="px-6 py-24 md:py-32 bg-white relative overflow-hidden font-heading">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 text-orange text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm font-heading"
                    >
                        <span className="w-2 h-2 rounded-full bg-orange animate-pulse shadow-[0_0_10px_rgba(254,119,0,0.5)]" />
                        Social Proof
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
                        Trusted by Leaders <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-orange to-dark-deepest bg-clip-text text-transparent">
                            Building the UAE&apos;s Future.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-[#F6F4F4]/50 backdrop-blur-md rounded-3xl p-8 border border-dark/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-orange/20 group-hover:text-orange/40 transition-colors" />
                            </div>

                            <p className="text-dark/80 text-lg leading-relaxed mb-10 flex-grow font-heading italic">
                                &quot;{t.content}&quot;
                            </p>

                            <div className="pt-8 border-t border-dark/5">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-dark text-white flex items-center justify-center font-bold text-lg">
                                        {t.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark">{t.name}</h4>
                                        <p className="text-xs text-dark/60">{t.role} @ {t.company}</p>
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange/10 text-orange text-xs font-bold">
                                    <TrendingUp className="w-4 h-4" />
                                    {t.result}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

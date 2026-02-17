'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import CreativeButton from '@/components/ui/CreativeButton';
import { useContactModal } from '@/context/ContactModalContext';
import { ArrowRight, Award, TrendingUp, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const achievements = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: TrendingUp, value: '1,050%', label: 'Client Growth' },
    { icon: Globe, value: 'GCC', label: 'Expanding' },
];

const employees = [
    {
        initials: 'BB',
        name: 'Bibin Basil',
        role: 'Founder & CEO',
        image: '/1771313050610.png',
        bio: '10+ years in marketing & technology. Built Xerebo to solve the fragmentation problem across hundreds of UAE businesses. Certified by Google, HubSpot, and Meta.',
        stats: [
            { icon: Award, value: '10+', label: 'Years Experience' },
            { icon: TrendingUp, value: '500+', label: 'Projects Led' },
            { icon: Globe, value: 'GCC', label: 'Market Expert' },
        ]
    },
    {
        initials: 'SK',
        name: 'Sarah Khan',
        role: 'Head of Strategy',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop',
        bio: '8 years driving growth strategies for Fortune 500 companies and startups. Expert in data-driven marketing and brand positioning across MENA markets.',
        stats: [
            { icon: Award, value: '8+', label: 'Years Strategy' },
            { icon: TrendingUp, value: '300%', label: 'Avg ROI' },
            { icon: Globe, value: '50+', label: 'Brands Grown' },
        ]
    },
    {
        initials: 'MR',
        name: 'Mohammed Rahman',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop',
        bio: 'Award-winning designer with 12 years creating compelling brand experiences. Specialized in visual storytelling and digital transformation.',
        stats: [
            { icon: Award, value: '12+', label: 'Years Design' },
            { icon: TrendingUp, value: '200+', label: 'Campaigns' },
            { icon: Globe, value: '15+', label: 'Awards Won' },
        ]
    },
    {
        initials: 'LT',
        name: 'Lisa Thompson',
        role: 'Performance Marketing Lead',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2570&auto=format&fit=crop',
        bio: '6 years optimizing campaigns across Google, Meta, and TikTok. Delivered over $50M in client revenue through data-driven paid strategies.',
        stats: [
            { icon: Award, value: '6+', label: 'Years Paid' },
            { icon: TrendingUp, value: '$50M+', label: 'Revenue' },
            { icon: Globe, value: '1000+', label: 'Campaigns' },
        ]
    },
    {
        initials: 'AR',
        name: 'Ahmed Rashid',
        role: 'Tech & Analytics Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop',
        bio: '9 years building marketing technology solutions. Expert in marketing automation, CRM systems, and predictive analytics for growth.',
        stats: [
            { icon: Award, value: '9+', label: 'Years Tech' },
            { icon: TrendingUp, value: '80%', label: 'Efficiency' },
            { icon: Globe, value: '100+', label: 'Integrations' },
        ]
    }
];

export default function About() {
    const { openModal } = useContactModal();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % employees.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isPaused]);

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % employees.length);
    };

    const goToPrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + employees.length) % employees.length);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    const currentEmployee = employees[currentIndex];

    return (
        <section className="py-24 md:py-32 bg-light relative overflow-hidden font-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content side */}
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
                            About Xerebo
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 font-heading">
                            Not Another Agency.
                            <br />
                            <span className="bg-gradient-to-r from-orange to-dark-deepest bg-clip-text text-transparent">
                                A Growth Partner.
                            </span>
                        </h2>

                        <p className="text-lg text-dark/70 leading-relaxed mb-8">
                            Xerebo is the UAE's first Marketing Growth Intelligence Partner. We replace fragmented agencies, freelancers, and guesswork with one integrated system — strategy, execution, and technology under one roof.
                        </p>

                        <p className="text-dark/60 leading-relaxed mb-8">
                            Built by a founder who saw hundreds of UAE businesses get sold pieces instead of the full picture. We exist so you stop managing marketing and start watching it grow.
                        </p>

                        <CreativeButton
                            onClick={openModal}
                            variant="shimmer"
                            size="lg"
                            className="bg-gradient-to-r from-orange to-orange-muted hover:from-orange-muted hover:to-orange shadow-lg shadow-orange/25"
                        >
                            Let&apos;s Talk
                        </CreativeButton>
                    </motion.div>

                    {/* Employee carousel card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-orange/10 to-dark/5 rounded-3xl transform rotate-2" />

                            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-dark/5 overflow-hidden">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.3 }
                                        }}
                                    >
                                        {/* Avatar and name */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-dark to-dark-deepest flex items-center justify-center text-white text-2xl font-bold shadow-lg font-heading overflow-hidden relative group">
                                                {currentEmployee.image ? (
                                                    <img
                                                        src={currentEmployee.image}
                                                        alt={currentEmployee.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    currentEmployee.initials
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-dark font-heading">
                                                    {currentEmployee.name}
                                                </h3>
                                                <p className="text-orange font-medium">
                                                    {currentEmployee.role}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-dark/70 leading-relaxed mb-6 min-h-[96px]">
                                            {currentEmployee.bio}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-dark/5">
                                            {currentEmployee.stats.map((item) => (
                                                <div key={item.label} className="text-center">
                                                    <item.icon className="w-5 h-5 text-orange mx-auto mb-2" />
                                                    <div className="text-lg font-bold text-dark font-heading">
                                                        {item.value}
                                                    </div>
                                                    <div className="text-xs text-dark/50">
                                                        {item.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation controls */}
                                <div className="flex items-center justify-between mt-6 pt-6 border-t border-dark/5">
                                    {/* Dots indicator */}
                                    <div className="flex gap-2">
                                        {employees.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setDirection(index > currentIndex ? 1 : -1);
                                                    setCurrentIndex(index);
                                                }}
                                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                    ? 'w-8 bg-orange'
                                                    : 'w-2 bg-dark/20 hover:bg-dark/40'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Arrow buttons */}
                                    <div className="flex gap-2">
                                        <button
                                            onClick={goToPrevious}
                                            className="w-9 h-9 rounded-full bg-dark/5 hover:bg-dark/10 flex items-center justify-center transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-dark/60" />
                                        </button>
                                        <button
                                            onClick={goToNext}
                                            className="w-9 h-9 rounded-full bg-orange hover:bg-orange/90 flex items-center justify-center transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5 text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
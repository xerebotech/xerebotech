'use client';

import React from 'react';

export default function ContactFormFields({ className }: { className?: string }) {
    const handleSubmit = () => {
        // Since we don't have a backend linked here yet, we'll just mark as converted
        localStorage.setItem('xerebo_converted', 'true');
    };

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors"
            />

            <input
                type="email"
                placeholder="Business Email *"
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors"
            />

            <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors"
            />

            <input
                type="text"
                placeholder="Company Name *"
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors"
            />

            <select
                defaultValue=""
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors appearance-none"
            >
                <option value="" disabled className="text-gray-400">What best describes you?</option>
                <option value="entrepreneur" className="text-dark-deepest bg-dark">Entrepreneur / Founder</option>
                <option value="business-owner" className="text-dark-deepest bg-dark">Business Owner / MD</option>
                <option value="growth-leader" className="text-dark-deepest bg-dark">CMO / Head of Marketing</option>
                <option value="other" className="text-dark-deepest bg-dark">Other</option>
            </select>

            <select
                defaultValue=""
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors appearance-none"
            >
                <option value="" disabled className="text-gray-400">What do you need most?</option>
                <option value="full-marketing" className="text-dark-deepest bg-dark">Full Marketing Intelligence</option>
                <option value="performance" className="text-dark-deepest bg-dark">Performance Marketing</option>
                <option value="seo" className="text-dark-deepest bg-dark">SEO & Organic Growth</option>
                <option value="crm" className="text-dark-deepest bg-dark">CRM & Automation</option>
                <option value="website" className="text-dark-deepest bg-dark">Website Development</option>
                <option value="not-sure" className="text-dark-deepest bg-dark">Not Sure Yet</option>
            </select>

            <button
                type="submit"
                className="w-full px-8 py-4 bg-orange text-white font-semibold rounded-xl transition-all hover:bg-[#e56b00] hover:scale-[1.02] flex items-center justify-center gap-2"
            >
                Book My Free Consultation →
            </button>

            <p className="text-gray-400 text-sm text-center">
                We respond within 24 hours. No spam, ever.
            </p>
        </form>
    );
}

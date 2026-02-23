'use client';

import React, { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import PhoneInput from './PhoneInput';

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    role: string;
    service: string;
}

export default function ContactFormFields({ className }: { className?: string }) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        service: '',
    });
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ formType: 'Contact Form', ...formData, phone }),
            });

            if (!res.ok) throw new Error('Submission failed');

            localStorage.setItem('xerebo_converted', 'true');
            setStatus('success');
        } catch (err) {
            console.error(err);
            setErrorMsg('Something went wrong. Please try again or email us directly.');
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">You&apos;re booked in!</h3>
                <p className="text-gray-400 max-w-xs">
                    We&apos;ve received your details and will be in touch within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors"
            />

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Business Email *"
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors"
            />

            <PhoneInput
                value={phone}
                onChange={setPhone}
                placeholder="Phone Number *"
                required
            />

            <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name *"
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors"
            />

            <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors appearance-none"
            >
                <option value="" disabled className="text-gray-400 bg-[#1A1817]">What best describes you?</option>
                <option value="Entrepreneur / Founder" className="text-white bg-[#1A1817]">Entrepreneur / Founder</option>
                <option value="Business Owner / MD" className="text-white bg-[#1A1817]">Business Owner / MD</option>
                <option value="CMO / Head of Marketing" className="text-white bg-[#1A1817]">CMO / Head of Marketing</option>
                <option value="Other" className="text-white bg-[#1A1817]">Other</option>
            </select>

            <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange transition-colors appearance-none"
            >
                <option value="" disabled className="text-gray-400 bg-[#1A1817]">What do you need most?</option>
                <option value="Full Marketing Intelligence" className="text-white bg-[#1A1817]">Full Marketing Intelligence</option>
                <option value="Performance Marketing" className="text-white bg-[#1A1817]">Performance Marketing</option>
                <option value="SEO & Organic Growth" className="text-white bg-[#1A1817]">SEO & Organic Growth</option>
                <option value="CRM & Automation" className="text-white bg-[#1A1817]">CRM & Automation</option>
                <option value="Website Development" className="text-white bg-[#1A1817]">Website Development</option>
                <option value="Not Sure Yet" className="text-white bg-[#1A1817]">Not Sure Yet</option>
            </select>

            {status === 'error' && (
                <div className="flex items-start gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-orange text-white font-semibold rounded-xl transition-all hover:bg-[#e56b00] hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    'Book My Free Consultation →'
                )}
            </button>

            <p className="text-gray-400 text-sm text-center">
                We respond within 24 hours. No spam, ever.
            </p>
        </form>
    );
}

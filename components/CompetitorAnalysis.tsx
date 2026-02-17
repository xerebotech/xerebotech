'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Lock, AlertTriangle, CheckCircle2, BarChart3, Globe, Zap, ArrowRight, Loader2 } from 'lucide-react';
import CreativeButton from '@/components/ui/CreativeButton';

export default function CompetitorAnalysis() {
    const [url, setUrl] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [scanStep, setScanStep] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [email, setEmail] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);

    // Simulation steps
    const steps = [
        "Resolving DNS...",
        "Analyzing Traffic Sources...",
        "Decrypting Ad Spend Data...",
        "Identifying Top Keywords...",
        "Calculating Market Share...",
        "Finalizing Report..."
    ];

    const handleScan = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setIsScanning(true);
        setScanProgress(0);
        setShowResults(false);

        // Simulate scanning process
        let stepIndex = 0;
        const interval = setInterval(() => {
            setScanProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsScanning(false);
                    setShowResults(true);
                    return 100;
                }
                return prev + 1;
            });

            // Update scan text based on progress
            if (stepIndex < steps.length && Math.random() > 0.7) {
                setScanStep(steps[stepIndex]);
                stepIndex++;
            }
        }, 50);
    };

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, send email to backend here
        setIsUnlocked(true);
    };

    return (
        <section className="py-24 bg-dark-deepest relative overflow-hidden text-white font-sans">

            {/* Background Matrix/Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(254,119,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(254,119,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 border border-orange/30 text-orange text-xs font-mono mb-6">
                            <Zap size={12} />
                            <span>MARKET_INTELLIGENCE_MODULE_V1.4</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                            Reveal Your Untapped <br />
                            <span className="text-orange">Growth Potential.</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Stop guessing. Our AI engine analyzes your current strategy against market leaders to uncover hidden revenue opportunities in seconds.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Identify Wasted Ad Spend",
                                "Uncover High-Converting Keywords",
                                "Benchmark Against Industry Leaders",
                                "Get a Step-by-Step Roadmap to Scale"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-orange" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: The Tool */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Terminal Window Frame */}
                        <div className="bg-[#1A1817] border border-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-orange/10">

                            {/* Terminal Header */}
                            <div className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="ml-4 text-xs text-gray-500 font-mono">xerebo-intel-cli — -bash</div>
                            </div>

                            {/* Tool Content */}
                            <div className="p-8">

                                {!showResults && !isScanning && (
                                    <form onSubmit={handleScan} className="space-y-6">
                                        <div className="text-center mb-8">
                                            <Globe className="w-12 h-12 text-orange mx-auto mb-4 opacity-80" />
                                            <h3 className="text-xl font-bold font-heading">Enter Competitor URL</h3>
                                            <p className="text-gray-500 text-sm mt-2">We&apos;ll scan for public marketing data.</p>
                                        </div>

                                        <div className="relative">
                                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                            <input
                                                type="url"
                                                placeholder="https://competitor.com"
                                                value={url}
                                                onChange={(e) => setUrl(e.target.value)}
                                                className="w-full bg-dark bg-opacity-50 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange transition-colors font-mono"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
                                        >
                                            <span>Initiate Scan</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>
                                )}

                                {isScanning && (
                                    <div className="text-center py-8">
                                        <div className="relative w-24 h-24 mx-auto mb-8">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 border-4 border-gray-800 border-t-orange rounded-full"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-orange text-xl">
                                                {scanProgress}%
                                            </div>
                                        </div>
                                        <div className="font-mono text-green-500 text-sm h-6">
                                            {'>'} {scanStep}
                                        </div>
                                    </div>
                                )}

                                {showResults && !isUnlocked && (
                                    <div className="relative">
                                        {/* Blurred Content */}
                                        <div className="filter blur-md opacity-50 pointer-events-none select-none space-y-6">
                                            <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <span className="text-gray-400 font-mono">EST_AD_SPEND</span>
                                                <span className="text-green-400 font-mono font-bold">AED 45,200</span>
                                            </div>
                                            <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <span className="text-gray-400 font-mono">TOP_SOURCE</span>
                                                <span className="text-blue-400 font-mono font-bold">LinkedIn Ads</span>
                                            </div>
                                            <div className="h-32 bg-gray-800/50 rounded-lg border border-gray-700 flex items-end p-4 gap-2">
                                                {[40, 70, 45, 90, 60].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-gray-600" style={{ height: `${h}%` }} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Unlock Overlay */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                            <div className="bg-[#1A1817] p-8 rounded-2xl border border-orange/30 shadow-2xl text-center max-w-sm w-full">
                                                <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Lock className="w-6 h-6 text-orange" />
                                                </div>
                                                <h4 className="text-xl font-bold mb-2">Unlock Full Report</h4>
                                                <p className="text-gray-400 text-sm mb-6">
                                                    Enter your email to view the decrypted data for <span className="text-white font-semibold">{url.replace('https://', '').replace('http://', '').split('/')[0]}</span>.
                                                </p>

                                                <form onSubmit={handleUnlock} className="space-y-4">
                                                    <input
                                                        type="email"
                                                        placeholder="work@email.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-orange"
                                                        required
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="w-full bg-white text-dark font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                                                    >
                                                        Unlock Data
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {isUnlocked && (
                                    <div className="text-center py-10">
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Audit Requested!</h3>
                                        <p className="text-gray-400 max-w-md mx-auto">
                                            Our intelligence team is now verifying the data for <span className="text-white font-semibold">{url.replace('https://', '').replace('http://', '').split('/')[0]}</span>.
                                        </p>
                                        <div className="bg-dark/50 border border-gray-800 rounded-lg p-4 mt-6 text-left max-w-sm mx-auto">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-orange mt-2 animate-pulse" />
                                                <div>
                                                    <p className="text-xs text-gray-500 font-mono mb-1">STATUS: PROCESSING</p>
                                                    <p className="text-sm text-gray-300">
                                                        You will receive the full <span className="text-white font-bold">PDF Competitor Report</span> at <span className="text-orange">{email}</span> within 4 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setIsUnlocked(false);
                                                setShowResults(false);
                                                setUrl('');
                                                setEmail('');
                                            }}
                                            className="mt-8 text-orange text-sm hover:underline"
                                        >
                                            Scan another competitor
                                        </button>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* Decorative glow behind terminal */}
                        <div className="absolute -inset-4 bg-orange/20 blur-3xl -z-10 rounded-full opacity-50" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, MousePointer2, Globe,
  Database, PenTool, Sparkles
} from 'lucide-react';
import Image from 'next/image';
import CreativeButton from '@/components/ui/CreativeButton';
import { useContactModal } from '@/context/ContactModalContext';


const services = [
  { title: "Strategy & Planning", desc: "Custom growth roadmap with KPIs, timelines, and channel strategy", icon: LineChart, pos: "top-[10%] left-[15%]", delay: 5.0 },
  { title: "Performance Marketing", desc: "Lead generation across Google, Meta, LinkedIn & TikTok", icon: MousePointer2, pos: "top-[10%] right-[15%]", delay: 7.0 },
  { title: "CRM & Automation", desc: "Custom CRM/ERP built for your exact sales workflow", icon: Database, pos: "top-[45%] left-[5%]", delay: 4.0 },
  { title: "Website & SEO", desc: "Lead-capturing website + organic search that compounds over time", icon: Globe, pos: "top-[45%] right-[5%]", delay: 0 },
  { title: "Content & Creative", desc: "Email marketing, social media, and creative — all handled", icon: PenTool, pos: "bottom-[10%] left-[15%]", delay: 3.0 },
  { title: "Analytics & Intelligence", desc: "Real-time dashboards. See exactly what's working and what's not", icon: Sparkles, pos: "bottom-[10%] right-[15%]", delay: 1.0 },
];

export default function Services() {
  const { openModal } = useContactModal();
  return (
    <section className="relative min-h-[900px] bg-[#1A1817] text-white py-20 px-6 overflow-hidden flex flex-col items-center">

      {/* Animated Background Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-[120px]"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-20 mb-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 text-orange text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm font-heading"
        >
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse shadow-[0_0_10px_rgba(254,119,0,0.5)]" />
          Flagship Offering
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-2"
        >
          Xerebo Marketing
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl font-serif italic text-orange-500"
        >
          Intelligence
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 mt-6 max-w-xl mx-auto"
        >
          The complete solution for digital marketing. One partner, full ownership, every channel.
        </motion.p>
      </motion.div>

      {/* The Radar Container */}
      <div className="relative w-full max-w-[1000px] aspect-square flex items-center justify-center">

        {/* Xerebo Logo Background - Continuously Rotating */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center opacity-10"
        >
          <Image
            src="/logo.png"
            alt="Xerebo"
            width={600}
            height={600}
            className="object-contain"
          />
        </motion.div>

        {/* Animated Radar Circles */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          {[150, 300, 450].map((r, i) => (
            <motion.circle
              key={r}
              cx="500"
              cy="500"
              r={r}
              stroke="white"
              strokeDasharray="4 4"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: i * 0.3, ease: "easeOut" }}
            />
          ))}

          {/* Animated Radial Spokes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.line
              key={angle}
              x1="500" y1="500"
              x2={500 + 450 * Math.cos((angle * Math.PI) / 180)}
              y2={500 + 450 * Math.sin((angle * Math.PI) / 180)}
              stroke="white"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
            />
          ))}
        </svg>

        {/* Scanning Radar Beam */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 w-full h-full"
          style={{ transformOrigin: 'center' }}
        >
          <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left bg-gradient-to-r from-orange-500/60 via-orange-500/20 to-transparent" />
        </motion.div>

        {/* Pulsing Rings Around Center */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 2.5, 2.5],
              opacity: [0.5, 0.2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut"
            }}
            className="absolute w-32 h-32 border-2 border-orange-500 rounded-3xl rotate-45"
          />
        ))}

        {/* Central Hub with Enhanced Animation */}
        <motion.div
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 45 }}
          animate={{
            boxShadow: [
              "0 0 20px #f97316",
              "0 0 60px #f97316",
              "0 0 40px #f97316",
              "0 0 60px #f97316",
              "0 0 20px #f97316"
            ]
          }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
            boxShadow: { repeat: Infinity, duration: 3 }
          }}
          whileHover={{ scale: 1.1, rotate: 45 }}
          className="relative z-30 w-32 h-32 bg-orange-500 rounded-3xl flex items-center justify-center shadow-lg rotate-45 cursor-pointer"
        >
          <motion.div
            animate={{
              rotate: [-45, -40, -45, -50, -45],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="-rotate-45"
          >
            <Image
              src="/gemini.svg"
              alt="Gemini Icon"
              width={50}
              height={50}
              className="w-12 h-12"
            />
          </motion.div>
        </motion.div>

        {/* Service Cards with Enhanced Animations */}
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1 + i * 0.15,
              duration: 0.6,
              type: "spring",
              bounce: 0.4
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            className={`absolute ${s.pos} z-40 w-64 group cursor-pointer`}
          >
            {/* Connection Line to Center */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.8 }}
              className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-orange-500/40 to-transparent origin-left"
              style={{
                transform: `rotate(${Math.atan2(
                  s.pos.includes('left-1/2') ? 1 : parseFloat(s.pos.split(' ')[0].includes('top') ? '-1' : '1'),
                  s.pos.includes('left-1/2') ? 0 : parseFloat(s.pos.split(' ')[1].includes('left') ? '-1' : '1')
                ) * 180 / Math.PI}deg)`
              }}
            />

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px rgba(249,115,22,0)",
                  "0 0 20px rgba(249,115,22,0.6)",
                  "0 0 0px rgba(249,115,22,0)"
                ],
                borderColor: [
                  "rgba(55, 65, 81, 1)",
                  "rgba(249,115,22,0.8)",
                  "rgba(55, 65, 81, 1)"
                ],
                backgroundColor: [
                  "rgba(45, 42, 40, 0.8)",
                  "rgba(249,115,22,0.1)",
                  "rgba(45, 42, 40, 0.8)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: s.delay,
                ease: "linear",
                times: [0, 0.05, 0.1]
              }}
              whileHover={{
                boxShadow: "0 0 40px rgba(249,115,22,0.3)",
                borderColor: "rgba(249,115,22,1)",
              }}
              className="bg-[#2D2A28]/80 backdrop-blur-md border border-gray-700 p-5 rounded-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors"
              >
                <s.icon size={20} />
              </motion.div>
              <h4 className="font-bold text-orange-500 mb-1">{s.title}</h4>
              <motion.p
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                className="text-xs text-gray-400 leading-relaxed"
              >
                {s.desc}
              </motion.p>
            </motion.div>

            {/* Floating Particles Around Cards */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute -top-2 -right-2 w-2 h-2 bg-orange-500 rounded-full blur-sm"
            />
          </motion.div>
        ))}

      </div>

      {/* CTA Button with Enhanced Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="mt-12"
      >
        <CreativeButton onClick={openModal} variant="shimmer" size="lg" className="text-lg px-10 py-5">
          Get Started With Marketing Intelligence
        </CreativeButton>
      </motion.div>
    </section>
  );
}

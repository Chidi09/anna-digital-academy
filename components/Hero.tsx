"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Variants } from "framer-motion";

// Animation variants for text staggering
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        }
    }
};

const staggerContainer: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
};

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Parallax effect for text

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-ada-black selection:bg-ada-gold selection:text-black">

            {/* 1. ARCHITECTURAL GRID BACKGROUND */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
            </div>

            {/* 2. CINEMATIC SPOTLIGHT (Moving Aurora) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 45, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-ada-teal/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [-20, 20, -20],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-ada-gold/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
            />

            {/* 3. NOISE OVERLAY (Texture) */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <motion.div style={{ y }} className="container mx-auto px-6 text-center z-10 relative">

                {/* PREMIUM BADGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-ada-gold/20 bg-ada-gold/5 backdrop-blur-md mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ada-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-ada-gold"></span>
                    </span>
                    <span className="text-ada-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        Cohort 1 • May 2026
                    </span>
                </motion.div>

                {/* HEADLINE WITH WORD REVEAL */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white mb-8 tracking-tight"
                >
                    <motion.div className="block overflow-hidden">
                        <motion.span variants={fadeInUp} className="inline-block">Transform Your</motion.span> <motion.span variants={fadeInUp} className="inline-block text-ada-teal-light italic font-light">Vision</motion.span>
                    </motion.div>
                    <motion.div className="block overflow-hidden">
                        <motion.span variants={fadeInUp} className="inline-block">Into a </motion.span>
                        <span className="relative inline-block ml-3">
                            <motion.span variants={fadeInUp} className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-ada-gold to-[#B8860B]">
                                Business Empire
                            </motion.span>
                            {/* Glow behind the gold text */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="absolute inset-0 bg-ada-gold/20 blur-xl z-0"
                            />
                        </span>
                    </motion.div>
                </motion.div>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed"
                >
                    Stop waiting for a job. Start building one. <br className="hidden md:block" />
                    A 6-week practical execution academy for the next generation of African founders.
                </motion.p>

                {/* BUTTONS WITH HOVER SHINE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <Link href="/register" className="group relative px-8 py-4 bg-ada-gold rounded-full overflow-hidden shadow-[0_0_40px_rgba(225,162,26,0.2)] hover:shadow-[0_0_60px_rgba(225,162,26,0.4)] transition-all duration-500">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                        <span className="relative text-ada-black font-bold font-sans tracking-widest uppercase text-sm">Join The Cohort</span>
                    </Link>

                    <Link href="/program" className="group flex items-center gap-2 text-white hover:text-ada-gold transition-colors font-sans text-sm tracking-widest uppercase border-b border-transparent hover:border-ada-gold pb-1">
                        <span>View Curriculum</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </motion.div>

            </motion.div>
        </section>
    );
}

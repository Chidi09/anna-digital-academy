"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-ada-teal to-ada-black">

            {/* Background Animated Elements (Gold Orbs) */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-64 h-64 bg-ada-gold/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-ada-teal/20 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 text-center z-10">

                {/* Cohort Badge - Creates Urgency */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-6 py-2 border border-ada-gold/30 bg-ada-gold/5 rounded-full mb-6 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 bg-ada-gold rounded-full animate-pulse"></span>
                    <span className="text-ada-gold font-semibold tracking-wider text-sm uppercase">
                        Cohort 1 • Starting May 2026
                    </span>
                </motion.div>

                {/* Main Headline - More Impactful */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6"
                >
                    Transform Your Business Idea <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ada-gold to-yellow-200">
                        Into Reality
                    </span>
                    <br />
                    <span className="text-4xl md:text-5xl lg:text-6xl">In Just 6 Weeks</span>
                </motion.h1>

                {/* Subtext - Streamlined */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light font-sans"
                >
                    Learn to validate, build, and launch your business with real execution strategies.
                    No theory—just practical, actionable business education.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <Link href="/register">
                        <button className="px-8 py-4 bg-ada-gold text-ada-black font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(225,162,26,0.5)] cursor-pointer">
                            Join the Next Cohort
                        </button>
                    </Link>
                    <Link href="/program">
                        <button className="px-8 py-4 border border-ada-gold/50 text-ada-gold font-semibold rounded-full hover:bg-ada-gold/10 transition-all duration-300 cursor-pointer">
                            View Curriculum
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

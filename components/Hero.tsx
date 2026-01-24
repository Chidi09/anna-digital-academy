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

                {/* Animated Logo / Brand Name */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-ada-gold font-bold tracking-[0.2em] uppercase mb-4"
                >
                    Anna Digital Academy
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6"
                >
                    Practical Business Education <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ada-gold to-yellow-200">
                        For Entrepreneurs
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light font-sans"
                >
                    A structured 6-week online academy focused on real business execution, not theory.
                    Creating Opportunities, Not Waiting for Them.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <Link href="#register">
                        <button className="px-8 py-4 bg-ada-gold text-ada-black font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(225,162,26,0.5)] cursor-pointer">
                            Join the Next Cohort
                        </button>
                    </Link>
                    <button className="px-8 py-4 border border-ada-gold/50 text-ada-gold font-semibold rounded-full hover:bg-ada-gold/10 transition-all duration-300 cursor-pointer">
                        View Curriculum
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

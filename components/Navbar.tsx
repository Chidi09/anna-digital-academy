"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Curriculum", href: "/program" },
  { name: "Register", href: "/register" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-8"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-center">
          <div
            className={`
              relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500
              ${isScrolled
                ? "w-full md:w-[80%] bg-ada-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
                : "w-full bg-transparent border border-transparent"
              }
            `}
          >
            {/* LOGO */}
            <Link href="/" className="flex items-center group">
              <img
                src="/android-chrome-192x192.png"
                alt="Anna Digital Academy"
                className="h-12 md:h-14 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-5 py-2 text-sm font-sans text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Hover Pill Effect */}
                  <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
                </Link>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="flex items-center gap-4">
              <Link href="/register" className="hidden md:block">
                <button className="px-6 py-2.5 bg-ada-gold text-ada-black font-bold text-xs rounded-full uppercase tracking-widest hover:bg-white transition-all duration-300 hover:scale-105">
                  Register
                </button>
              </Link>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2 hover:text-ada-gold transition-colors"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU (THE CURTAIN REVEAL) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ada-black/95 backdrop-blur-3xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl md:text-5xl text-gray-400 hover:text-ada-gold transition-colors flex items-center gap-4 group"
                  >
                    {link.name}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <button className="px-10 py-4 bg-ada-gold text-ada-black font-bold font-sans rounded-full uppercase tracking-widest">
                    Join Cohort 1
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

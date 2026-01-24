"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? "bg-ada-black/80 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                : "bg-transparent border-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="z-50">
              <span className="font-serif text-2xl font-bold text-ada-gold tracking-widest">
                A<span className="text-white">DA</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-ada-gold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ada-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link href="/register">
                <button className="hidden md:block px-6 py-2 bg-ada-gold text-ada-black font-bold text-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-ada-gold/20">
                  Register / Apply
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2 z-50"
              >
                {mobileMenuOpen ? <X className="text-ada-gold" /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-ada-black/95 z-40 flex flex-col items-center justify-center space-y-8 backdrop-blur-2xl"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif text-white hover:text-ada-gold transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <button className="px-10 py-4 mt-8 bg-ada-gold text-ada-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(225,162,26,0.4)]">
                  Register Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

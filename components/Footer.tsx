"use client";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#010b0e] pt-20 pb-10 border-t border-white/10" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-ada-gold mb-6 tracking-widest">
              A<span className="text-white">DA</span>
            </h3>
            <p className="text-gray-400 max-w-sm mb-6">
              Practical Business Education for Entrepreneurs & Founders.
              Creating Opportunities, Not Waiting for Them.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-ada-gold hover:text-ada-black transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="mailto:hello@annadigitalacademy.com" className="p-2 bg-white/5 rounded-full hover:bg-ada-gold hover:text-ada-black transition-all">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="https://wa.me/2341234567890" className="p-2 bg-white/5 rounded-full hover:bg-ada-gold hover:text-ada-black transition-all">
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-serif mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/#about" className="hover:text-ada-gold transition-colors">About ADA</Link></li>
              <li><Link href="/#program" className="hover:text-ada-gold transition-colors">The Curriculum</Link></li>
              <li><Link href="/#tools" className="hover:text-ada-gold transition-colors">Tools & Portfolio</Link></li>
              <li><Link href="/#register" className="hover:text-ada-gold transition-colors">Register Now</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-serif mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Lagos, Nigeria</li>
              <li>hello@annadigitalacademy.com</li>
              <li>+234 123 456 7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Anna Digital Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

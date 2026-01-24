"use client";
import { motion } from "framer-motion";
import { FileText, Award, FolderOpen } from "lucide-react";

export default function ToolsAndCertificate() {
  return (
    <section className="py-20 bg-gradient-to-b from-ada-teal to-ada-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Text Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              More Than Just <span className="text-ada-gold">Videos.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We don't just teach you; we equip you. You will graduate with a complete business system, not just a certificate.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-ada-gold/20 p-2 rounded-lg h-fit text-ada-gold">
                  <FolderOpen />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Business Portfolio</h3>
                  <p className="text-gray-400 text-sm">
                    You won't just take notes. You will compile a professional portfolio documenting your research, planning, and execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-ada-gold/20 p-2 rounded-lg h-fit text-ada-gold">
                  <FileText />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Tools & Templates</h3>
                  <p className="text-gray-400 text-sm">
                    Get access to our proprietary Financial Models, Strategy Decks, and Operations Manuals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual Representation of Certificate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-ada-gold/30 p-8 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="border border-ada-gold/20 p-6 rounded-lg text-center">
                <Award className="w-16 h-16 text-ada-gold mx-auto mb-4" />
                <h4 className="text-2xl font-serif text-white uppercase tracking-widest mb-2">Certificate of Completion</h4>
                <p className="text-ada-gold font-serif text-lg italic">
                  "Certificate of Business Foundation & Practical Entrepreneurship"
                </p>
                <div className="my-6 border-b border-white/10 w-1/2 mx-auto"></div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  Issued by Anna Digital Academy
                </p>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-ada-gold/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

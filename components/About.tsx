"use client";
import { motion } from "framer-motion";
import { Target, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-ada-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-ada-teal/20 via-ada-black to-ada-black opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: The Hook */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-ada-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              Our Vision
            </h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
              Creating <span className="italic text-ada-teal-light">Opportunities</span>, <br />
              Not Waiting for Them.
            </h2>
            <div className="w-24 h-1 bg-ada-gold mb-8"></div>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              We are on a mission to reduce unemployment through practical business creation.
              We don't teach you how to be an employee; we teach you how to build the engine that employs others.
            </p>
          </motion.div>

          {/* Right Column: The "Glass" Cards */}
          <div className="space-y-6">
            {[
              {
                icon: <Target className="w-6 h-6 text-ada-black" />,
                title: "Practical Execution",
                desc: "No theory. We focus on real business execution from Day 1."
              },
              {
                icon: <Zap className="w-6 h-6 text-ada-black" />,
                title: "Founder-Led",
                desc: "Learn directly from those who have built and scaled actual businesses."
              },
              {
                icon: <Users className="w-6 h-6 text-ada-black" />,
                title: "Community Driven",
                desc: "Join a network of serious founders. Your network is your net worth."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group p-6 bg-white/5 border border-white/10 hover:border-ada-gold/50 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-3 bg-ada-gold rounded-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

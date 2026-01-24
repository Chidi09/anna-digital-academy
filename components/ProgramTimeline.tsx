"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, TrendingUp, DollarSign, Settings, Users, Rocket } from "lucide-react";

const weeks = [
  {
    id: 1,
    title: "Week 1: Idea & Validation",
    icon: <Lightbulb className="w-6 h-6" />,
    desc: "Stop guessing. Learn to validate your business idea with real market data before spending a kobo.",
    details: ["Business Idea Generation", "Validation Frameworks", "Competitor Analysis"]
  },
  {
    id: 2,
    title: "Week 2: Market Research",
    icon: <Users className="w-6 h-6" />,
    desc: "Understand your customer better than they understand themselves. Define your target audience clearly.",
    details: ["Customer Avatars", "Market Segmentation", "Survey Strategies"]
  },
  {
    id: 3,
    title: "Week 3: Finance & Pricing",
    icon: <DollarSign className="w-6 h-6" />,
    desc: "The numbers that matter. Learn how to price for profit and manage cash flow effectively.",
    details: ["Pricing Psychology", "Unit Economics", "Profit & Loss Basics"]
  },
  {
    id: 4,
    title: "Week 4: Operations & Logistics",
    icon: <Settings className="w-6 h-6" />,
    desc: "Building the engine. How to deliver your product/service consistently without burning out.",
    details: ["Supply Chain", "Standard Operating Procedures (SOPs)", "Delivery Systems"]
  },
  {
    id: 5,
    title: "Week 5: Sales & Growth",
    icon: <TrendingUp className="w-6 h-6" />,
    desc: "Sales is not noise; it's service. Learn the art of closing deals and acquiring customers.",
    details: ["Sales Scripts", "Funnel Building", "Objection Handling"]
  },
  {
    id: 6,
    title: "Week 6: Launch Strategy",
    icon: <Rocket className="w-6 h-6" />,
    desc: "Go to market. A structured plan to launch your refined business to the world.",
    details: ["Launch Calendar", "Marketing Assets", "Go-Live Event"]
  },
];

export default function ProgramTimeline() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  return (
    <section className="py-20 bg-ada-black text-white" id="program">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-ada-gold mb-4">The 6-Week Curriculum</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured journey from chaos to clarity. Real execution, no fluff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weeks.map((week, index) => (
            <motion.div
              key={week.id}
              layout
              onClick={() => setActiveWeek(activeWeek === week.id ? null : week.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                activeWeek === week.id
                  ? "bg-ada-teal/30 border-ada-gold shadow-[0_0_30px_rgba(225,162,26,0.2)]"
                  : "bg-white/5 border-white/10 hover:border-ada-gold/50"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-ada-gold/20 text-ada-gold rounded-full">
                  {week.icon}
                </div>
                <h3 className="text-xl font-bold font-serif">{week.title}</h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {week.desc}
              </p>

              <AnimatePresence>
                {activeWeek === week.id && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 border-t border-white/10 pt-4"
                  >
                    {week.details.map((detail, i) => (
                      <li key={i} className="text-sm text-ada-gold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-ada-gold rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <div className="mt-4 text-xs text-center text-gray-500 uppercase tracking-widest">
                {activeWeek === week.id ? "Click to Close" : "Click to Expand"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

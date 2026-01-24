"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is this a job offer?",
    answer: "No. This is an educational academy that teaches you how to start and run your own business. We create founders, not employees."
  },
  {
    question: "Is income guaranteed?",
    answer: "No. In business, income is a result of execution. We provide the tools, knowledge, and system, but your success depends on your work ethic."
  },
  {
    question: "Do I need prior business experience?",
    answer: "Not at all. The curriculum is designed to take you from 'Zero to Launch'. We cover the fundamentals in Week 1."
  },
  {
    question: "What happens if I miss a Live Zoom session?",
    answer: "All live sessions are recorded and uploaded to the student portal within 24 hours, so you can watch them at your own pace."
  },
  {
    question: "How do I get access after payment?",
    answer: "Access is manual. Once your payment is confirmed, you will receive an email and WhatsApp message with your Student Handbook and Portal Login within 24 hours."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-ada-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know before joining.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg transition-all duration-300 ${activeIndex === index ? 'border-ada-gold bg-ada-gold/5' : 'border-white/10 bg-white/5'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-serif text-lg ${activeIndex === index ? 'text-ada-gold' : 'text-white'}`}>
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="text-ada-gold w-5 h-5" />
                ) : (
                  <Plus className="text-gray-400 w-5 h-5" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

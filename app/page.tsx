import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-ada-black selection:bg-ada-gold selection:text-black">
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The "Teaser" About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="order-2 md:order-1">
            <span className="text-ada-gold tracking-[0.2em] text-sm font-sans font-bold uppercase">
              Our Philosophy
            </span>
            <h2 className="text-5xl md:text-6xl font-serif mt-4 mb-6 leading-[1.1]">
              We Build <span className="italic text-gray-400">Founders</span>,{" "}
              <br />
              Not Employees.
            </h2>
            <p className="text-gray-300 font-sans font-light leading-relaxed mb-8 text-lg">
              The world doesn't need more CVs; it needs more businesses. Anna
              Digital Academy is a 6-week intensive incubation for serious minds
              ready to execute.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-ada-gold border-b border-ada-gold pb-1 hover:text-white hover:border-white transition-all font-sans text-sm tracking-widest uppercase"
            >
              Read Our Vision{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Aesthetic Abstract Visual - Cleaned Up */}
          <div className="order-1 md:order-2 relative h-[500px] border border-white/10 rounded-full overflow-hidden bg-ada-black">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-ada-teal/20 via-transparent to-ada-gold/5 opacity-60"></div>

            {/* Noise Texture for Depth */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* The Quote - No Frame, Just Typography */}
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
              <p className="font-serif italic text-3xl md:text-4xl text-white/90 leading-relaxed">
                "Opportunities are created, <br />
                <span className="text-ada-gold">not waited for.</span>"
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The "Curriculum Preview" */}
      <section className="py-24 bg-ada-teal/10 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-12">A 6-Week Transformation</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                week: "01",
                title: "Validation",
                desc: "Is your idea profitable?",
              },
              { week: "03", title: "Finance", desc: "Pricing for profit." },
              { week: "06", title: "Launch", desc: "Go to market strategy." },
            ].map((item) => (
              <div
                key={item.week}
                className="p-8 border border-white/10 hover:border-ada-gold/50 transition-colors bg-ada-black group"
              >
                <span className="text-4xl font-serif text-ada-gold/20 block mb-4 group-hover:text-ada-gold/40 transition-colors">
                  {item.week}
                </span>
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-gray-400 font-sans font-light text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <Link href="/program">
            <button className="px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all font-sans tracking-widest text-sm uppercase">
              View Full Curriculum
            </button>
          </Link>
        </div>
      </section>

      {/* 4. Value / Tools Teaser */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif max-w-xl">
            More than a course. <br />
            <span className="text-ada-gold">A Business Toolkit.</span>
          </h2>
          <div className="flex gap-2 text-ada-gold mt-6 md:mt-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="fill-current w-5 h-5" />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <p className="font-sans font-light text-gray-300 leading-relaxed text-lg">
            Graduates leave with a functional{" "}
            <strong className="text-white font-normal">Business Portfolio</strong>, financial models, and a
            Certificate of Practical Entrepreneurship. We equip you for the war
            of business.
          </p>
          <div className="md:text-right">
            <Link
              href="/register"
              className="inline-block px-12 py-5 bg-ada-gold text-ada-black font-bold font-sans rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(225,162,26,0.3)]"
            >
              Secure Your Spot
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-24 bg-ada-black relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif text-white mb-8">Get in Touch</h2>
          <p className="text-gray-400 mb-12 font-sans font-light">
            Have questions about the academy? We are here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 hover:border-ada-gold transition-colors rounded-xl bg-white/5 group">
              <h3 className="text-ada-gold font-serif text-xl mb-4">Email</h3>
              <a
                href="mailto:Annadigitalacademy@gmail.com"
                className="text-gray-300 hover:text-white font-sans text-sm break-all"
              >
                Annadigitalacademy<br />@gmail.com
              </a>
            </div>

            <div className="p-8 border border-white/10 hover:border-ada-gold transition-colors rounded-xl bg-white/5">
              <h3 className="text-ada-gold font-serif text-xl mb-4">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/2347044173871"
                className="text-gray-300 hover:text-white font-sans text-sm"
              >
                +234 704 417 3871
              </a>
            </div>

            <div className="p-8 border border-white/10 hover:border-ada-gold transition-colors rounded-xl bg-white/5">
              <h3 className="text-ada-gold font-serif text-xl mb-4">
                Office
              </h3>
              <p className="text-gray-300 font-sans text-sm">
                Registered Business | Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

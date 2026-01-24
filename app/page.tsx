import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgramTimeline from "@/components/ProgramTimeline";
import ToolsAndCertificate from "@/components/ToolsAndCertificate";
import FAQ from "@/components/FAQ";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ada-black">
      <Navbar />

      <Hero />

      <About />

      <ProgramTimeline />

      <ToolsAndCertificate />

      {/* Ready to Join Banner */}
      <section className="py-20 bg-ada-teal text-center px-6" id="tools">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
          Ready to Build Your Business?
        </h2>
        <Link href="/#register">
          <button className="px-10 py-5 bg-ada-gold text-ada-black font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all shadow-2xl">
            Secure Your Spot (N85,000)
          </button>
        </Link>
      </section>

      <FAQ />

      <div className="container mx-auto py-20 px-6" id="register">
        <div className="text-center mb-16">
          <h2 className="text-ada-gold font-bold tracking-widest uppercase mb-4 font-sans">Enrollment</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Join the Next Cohort</h3>
        </div>
        <RegistrationForm />
      </div>

      <Footer />
    </main>
  );
}

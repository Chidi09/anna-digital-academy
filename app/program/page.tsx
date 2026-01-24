import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramTimeline from "@/components/ProgramTimeline";
import ToolsAndCertificate from "@/components/ToolsAndCertificate";

export default function ProgramPage() {
  return (
    <main className="bg-ada-black min-h-screen">
      <Navbar />

      <div className="pt-32 pb-12 px-6 text-center bg-ada-teal/5">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">The Curriculum</h1>
        <p className="text-gray-400 font-sans max-w-2xl mx-auto">
          Six weeks of intense, practical execution designed to take you from "Idea" to "Revenue."
        </p>
      </div>

      <ProgramTimeline />

      <ToolsAndCertificate />

      <section className="py-20 text-center">
        <a href="/register" className="px-10 py-4 bg-white text-ada-black font-bold rounded-full font-sans uppercase tracking-widest hover:bg-ada-gold transition-colors">
          Enroll in Cohort 1
        </a>
      </section>

      <Footer />
    </main>
  );
}

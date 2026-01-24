import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FAQ from "@/components/FAQ";

export default function AboutPage() {
  return (
    <main className="bg-ada-black min-h-screen">
      <Navbar />

      <div className="pt-32 px-6 container mx-auto text-center mb-12">
         <span className="text-ada-gold font-sans font-bold tracking-widest uppercase text-sm">Since 2026</span>
         <h1 className="text-6xl md:text-8xl font-serif mt-4 text-white opacity-90">Our Story</h1>
      </div>

      <About />

      <FAQ />

      <Footer />
    </main>
  );
}

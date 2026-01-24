import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

export default function RegisterPage() {
  return (
    <main className="bg-ada-black min-h-screen">
      <Navbar />

      <div className="container mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-ada-gold font-bold tracking-widest uppercase mb-4 font-sans">Enrollment</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-white">Join the Next Cohort</h1>
          <p className="text-gray-400 font-sans mt-4 max-w-2xl mx-auto">
            Secure your spot in Cohort 1. Limited seats available.
          </p>
        </div>
        <RegistrationForm />
      </div>

      <Footer />
    </main>
  );
}

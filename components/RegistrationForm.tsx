"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

export default function RegistrationForm() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"online" | "transfer">(
    "transfer",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    gender: "",
    reason: "",
    referralCode: "",
  });

  const PRICE = "N85,000";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Create FormData object
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("whatsapp", formData.whatsapp);
    data.append("gender", formData.gender);
    data.append("reason", formData.reason);
    data.append("referralCode", formData.referralCode);
    data.append("paymentMethod", paymentMethod);

    // 2. Handle File Upload for Transfer
    if (paymentMethod === "transfer") {
      const fileInput = document.getElementById(
        "proofUpload",
      ) as HTMLInputElement;
      if (fileInput?.files?.[0]) {
        data.append("paymentProof", fileInput.files[0]);
      } else {
        alert("Please upload proof of payment.");
        setIsSubmitting(false);
        return;
      }
    }

    try {
      // 3. Send to Backend
      const response = await fetch("/api/register", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        // 4. Redirect on Success
        router.push(`/success?method=${paymentMethod}`);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 px-6 bg-ada-black">
      <div className="w-full max-w-3xl mx-auto bg-ada-teal/20 backdrop-blur-md border border-ada-teal/30 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h2 className="text-3xl font-serif text-ada-gold mb-2">
          Secure Your Spot
        </h2>

        {/* Cohort Date Display */}
        <div className="mb-8 p-4 bg-ada-teal/30 border border-ada-gold/30 rounded-lg text-center">
          <p className="text-white font-sans text-sm uppercase tracking-widest mb-1">
            Next Cohort Starts
          </p>
          <p className="text-ada-gold font-serif text-xl">
            May 2026 (Limited Seats)
          </p>
        </div>

        <p className="text-gray-300 mb-8 font-sans">
          Cohort 1 Founding Price:{" "}
          <span className="text-white font-bold text-lg">{PRICE}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-ada-gold/80 font-sans">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Anna Doe"
                className="w-full bg-black/40 border border-ada-teal/50 rounded-lg p-4 text-white focus:border-ada-gold focus:outline-none focus:ring-1 focus:ring-ada-gold transition-all font-sans"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-ada-gold/80 font-sans">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="anna@example.com"
                className="w-full bg-black/40 border border-ada-teal/50 rounded-lg p-4 text-white focus:border-ada-gold focus:outline-none focus:ring-1 focus:ring-ada-gold transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-ada-gold/80 font-sans">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="+234..."
                className="w-full bg-black/40 border border-ada-teal/50 rounded-lg p-4 text-white focus:border-ada-gold focus:outline-none focus:ring-1 focus:ring-ada-gold transition-all font-sans"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-ada-gold/80 font-sans">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-ada-teal/50 rounded-lg p-4 text-white focus:border-ada-gold focus:outline-none focus:ring-1 focus:ring-ada-gold transition-all font-sans"
              >
                <option value="" className="bg-ada-black">
                  Select Gender
                </option>
                <option value="Male" className="bg-ada-black">
                  Male
                </option>
                <option value="Female" className="bg-ada-black">
                  Female
                </option>
              </select>
            </div>
          </div>

          {/* Reason for Joining Field */}
          <div className="space-y-2">
            <label className="text-sm text-ada-gold/80 font-sans">
              Reason for Joining (Short Response)
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              rows={3}
              placeholder="Why do you want to join ADA?"
              className="w-full bg-black/40 border border-ada-teal/50 rounded-lg p-4 text-white focus:border-ada-gold focus:outline-none focus:ring-1 focus:ring-ada-gold transition-all font-sans text-sm resize-none"
            />
          </div>

          {/* Admission Officer Tracking */}
          <div className="space-y-2">
            <label className="text-sm text-ada-gold/80 font-sans">
              Admission Officer Code (Optional)
            </label>
            <input
              type="text"
              name="referralCode"
              onChange={handleInputChange}
              placeholder="If you were referred by an admission officer, enter their name or code here."
              className="w-full bg-black/40 border border-ada-teal/50 rounded-lg p-4 text-white placeholder:text-gray-600 focus:border-ada-gold focus:outline-none transition-all font-sans text-sm"
            />
          </div>

          <div className="border-t border-white/10 my-8"></div>

          {/* Payment Method Toggle */}
          <h3 className="text-xl text-white font-serif mb-4">
            Select Payment Method
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div
              onClick={() => setPaymentMethod("online")}
              className={`cursor-pointer p-4 rounded-xl border flex items-center gap-3 transition-all ${paymentMethod === "online" ? "bg-ada-gold/20 border-ada-gold" : "bg-black/20 border-white/10 hover:border-ada-gold/50"}`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "online" ? "border-ada-gold" : "border-gray-500"}`}
              >
                {paymentMethod === "online" && (
                  <div className="w-2.5 h-2.5 bg-ada-gold rounded-full" />
                )}
              </div>
              <div>
                <p className="text-white font-medium font-sans">
                  Pay with Card / Online
                </p>
                <p className="text-xs text-gray-400 font-sans">
                  Paystack integration pending
                </p>
              </div>
            </div>

            <div
              onClick={() => setPaymentMethod("transfer")}
              className={`cursor-pointer p-4 rounded-xl border flex items-center gap-3 transition-all ${paymentMethod === "transfer" ? "bg-ada-gold/20 border-ada-gold" : "bg-black/20 border-white/10 hover:border-ada-gold/50"}`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "transfer" ? "border-ada-gold" : "border-gray-500"}`}
              >
                {paymentMethod === "transfer" && (
                  <div className="w-2.5 h-2.5 bg-ada-gold rounded-full" />
                )}
              </div>
              <div>
                <p className="text-white font-medium font-sans">
                  Bank Transfer
                </p>
                <p className="text-xs text-gray-400 font-sans">
                  Main payment method (24-48hrs review)
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Payment Content based on selection */}
          <AnimatePresence mode="wait">
            {paymentMethod === "online" ? (
              <motion.div
                key="online"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 overflow-hidden"
              >
                <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg flex items-start gap-3">
                  <AlertCircle className="text-yellow-500 w-5 h-5 mt-0.5" />
                  <p className="text-sm text-yellow-200 font-sans">
                    <strong>Note:</strong> Paystack integration is currently pending completion. 
                    Please use <strong>Bank Transfer</strong> as the main payment method for now.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={true}
                  className="w-full bg-gray-600 text-gray-300 font-bold py-4 rounded-lg cursor-not-allowed opacity-50 font-sans"
                >
                  Paystack Integration Pending
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="transfer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 overflow-hidden"
              >
                <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2 font-sans">
                    Transfer exactly {PRICE} to:
                  </p>
                  <p className="text-xl text-ada-gold font-mono font-bold">
                    3195490100
                  </p>
                  <p className="text-white font-sans">First Bank</p>
                  <p className="text-white font-sans">Aminu Anna Ifeoluwapo</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-ada-gold/80 font-sans">
                    Upload Proof of Payment (Screenshot/PDF)
                  </label>
                  <input
                    type="file"
                    id="proofUpload"
                    accept="image/*,application/pdf"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setUploadedFile(e.target.files[0]);
                      }
                    }}
                  />
                  <label
                    htmlFor="proofUpload"
                    className="border-2 border-dashed border-ada-teal/50 rounded-lg p-8 text-center cursor-pointer hover:border-ada-gold transition-colors block"
                  >
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm font-sans">
                      {uploadedFile
                        ? uploadedFile.name
                        : "Click to upload proof"}
                    </p>
                  </label>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg flex items-start gap-3">
                  <AlertCircle className="text-yellow-500 w-5 h-5 mt-0.5" />
                  <p className="text-sm text-yellow-200 font-sans">
                    Note: Access will be granted only after payment is verified
                    within 24-48 hours.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-ada-gold text-ada-black font-bold py-4 rounded-lg hover:bg-white transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                >
                  {isSubmitting ? "Submitting..." : "Submit Transfer Proof"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}

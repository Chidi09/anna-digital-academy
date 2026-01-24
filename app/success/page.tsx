"use client";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const method = searchParams.get("method"); // 'online' or 'transfer'
  const status = searchParams.get("status"); // Check for 'failed'

  const isFailed = status === "failed";
  const isTransfer = method === "transfer";

  // --- FAILED STATE ---
  if (isFailed) {
    return (
      <div className="min-h-screen bg-ada-black flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-red-900/10 border border-red-500/30 backdrop-blur-md p-10 rounded-3xl text-center"
        >
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-serif text-white mb-2">Payment Failed</h1>
          <p className="text-gray-400 mb-8">We could not process your transaction. No charges were made.</p>
          <Link href="/register">
            <button className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-500 transition-all">
              Try Again
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // --- SUCCESS STATES ---
  return (
    <div className="min-h-screen bg-ada-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-ada-teal/10 border border-ada-teal/30 backdrop-blur-md p-10 rounded-3xl text-center shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          {isTransfer ? (
            <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <Clock className="w-10 h-10 text-yellow-500" />
            </div>
          ) : (
             <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          )}
        </div>

        <h1 className="text-3xl font-serif text-white mb-4">
          {isTransfer ? "Registration Received" : "Payment Successful"}
        </h1>

        <div className="bg-black/30 p-6 rounded-xl border border-white/5 mb-8">
          {isTransfer ? (
            <>
              <p className="text-gray-300 mb-4">
                Your payment proof is currently under review.
              </p>
              <p className="text-ada-gold font-medium">
                Access will be granted within 24-48 hours via email.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-300 mb-4">
                You have successfully secured your spot in Cohort 1.
              </p>
              <p className="text-ada-gold font-medium">
                Check your email for your Student Handbook and Login Details.
              </p>
            </>
          )}
        </div>

        <Link href="/">
          <button className="px-8 py-3 bg-white/10 text-white hover:bg-white hover:text-black transition-all rounded-full font-semibold">
            Return Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-white text-center pt-20">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}

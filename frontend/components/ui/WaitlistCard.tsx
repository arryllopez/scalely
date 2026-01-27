"use client";

import React, { useState } from "react";

interface WaitlistCardProps {
  onSubmit?: (email: string, city: string) => void;
}

export function WaitlistCard({ onSubmit }: WaitlistCardProps) {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      onSubmit?.(email, city);
      console.log("Email submitted:", email, "City:", city);
    }
  };

  return (
    <div className="relative">
      <div className="relative backdrop-blur-xl bg-[#ccdbfd]/20 border border-[#ccdbfd]/40 rounded-2xl p-8 w-full max-w-[560px] shadow-2xl">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ccdbfd]/10 to-transparent pointer-events-none" />

        <div className="relative z-10">
          {!isSubmitted ? (
            <>
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-(family-name:--font-caudex)">
                  Be first in line
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  We&apos;re launching soon. Join the waitlist and be the first
                  to know when Trivvi arrives in your area.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/80 border border-[#ccdbfd]/50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 h-12 px-4 rounded-xl backdrop-blur-sm focus:outline-none focus:ring-2"
                />
                <input
                  type="text"
                  placeholder="What city are you in?"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white/80 border border-[#ccdbfd]/50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 h-12 px-4 rounded-xl backdrop-blur-sm focus:outline-none focus:ring-2"
                />
                <button
                  type="submit"
                  className="w-full h-12 px-6 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  Join waitlist
                </button>
              </form>

              <div className="flex items-center justify-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                    J
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                    A
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                    M
                  </div>
                </div>
                <span className="text-gray-600 text-sm">
                  Join others on the waitlist
                </span>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400/30 to-emerald-500/30 flex items-center justify-center border border-green-400/40">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-gray-600 text-sm">
                We&apos;ll notify you when we launch. Thanks for joining!
              </p>
            </div>
          )}
        </div>

        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ccdbfd]/20 to-[#abc4ff]/20 blur-xl scale-110 -z-10" />
    </div>
  );
}

export default WaitlistCard;

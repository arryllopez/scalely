"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import LottieAnimation from "@/components/LottieAnimation";
import ParrotAnimation from "@/public/animationsLottie/Parrot.json";

export default function ForDiners() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your backend/email service
    console.log("Diner signup:", email);
    setSubmitted(true);
  };

  const features = [
    {
      name: "Real savings, no catch",
      description: "Exclusive discounts during off-peak hours. Same great food, smaller bill.",
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      name: "Get notified, not spammed",
      description: "Only hear about deals from restaurants actually near you, right when they drop.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      name: "Discover your neighborhood",
      description: "Find hidden gems and local favorites you never knew existed.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      name: "Support local spots",
      description: "Help neighborhood restaurants thrive while treating yourself.",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      name: "Explore nearby",
      description: "Get notified when someone shares a file or mentions you in a comment.",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        {/* Header */}
        <header className="p-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </header>

       
        

        {/* Hero */}
        <section className="px-6 py-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
              Great food.<br />Better prices.<br />Right nearby.
            </h1>
            <p className="text-lg md:text-xl text-black-600 max-w-lg mx-auto">
              Vulpes sends you deals from local restaurants during their quiet hours.
              You save money, they fill seats, your neighborhood wins.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-(family-name:--font-caudex)">
              Trivvi is Designed for Diners
            </h2>
            <BentoGrid className="lg:grid-rows-3">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              How it works
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-4">
              {[
                { step: "1", emoji: "📱", text: "Sign up & enable notifications" },
                { step: "2", emoji: "🔔", text: "Get pinged when deals drop nearby" },
                { step: "3", emoji: "🍜", text: "Show up, eat up, save up" },
              ].map((item) => (
                <div key={item.step} className="flex-1 flex flex-col items-center">
                  <span className="text-4xl mb-3">{item.emoji}</span>
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-3">
                    {item.step}
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="shrink-0 flex justify-start">
              <LottieAnimation
                animationData={ParrotAnimation}
                className="w-64 h-64 md:w-80 md:h-80"
              />
            </div>

            <div className="flex-1 text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold text-[#03045E] mb-6 font-(family-name:--font-caudex)">
                Meet Chirp
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-(family-name:--font-inter) max-w-lg mx-auto">
                Your friendly guide to the best local deals. Chirp helps you discover amazing food at amazing prices, right in your neighborhood.
              </p>
            </div>

            <div className="shrink-0 flex justify-end">
              <video
                src="/phoneMockup/iNotifications-Stack.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-64 h-[28rem] md:w-80 md:h-[36rem] rounded-3xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Waitlist signup */}
        <section className="px-6 py-16 bg-primary/5">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Be first in line
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;re launching soon. Join the waitlist and be the first to know when Vulpes arrives in your area.
            </p>

            {submitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <span className="text-5xl mb-4 block">🎉</span>
                <h3 className="text-xl font-bold mb-2">You&apos;re on the list!</h3>
                <p className="text-gray-600">We&apos;ll let you know as soon as we launch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Join waitlist
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center text-gray-400 text-sm">
          <p>Made with 🦊 by Vulpes</p>
        </footer>
      </main>
    </SmoothScroll>
  );
}

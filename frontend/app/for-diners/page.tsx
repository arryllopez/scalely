"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import { FeatureSection } from "@/components/ui/bento-grid";
import LottieAnimation from "@/components/LottieAnimation";
import ParrotAnimation from "@/public/animationsLottie/Parrot.json";
import { FadeText } from "@/components/ui/fade-text";
import { TextEffect } from "@/components/ui/text-effect";
import IphoneStep1 from "@/components/ui/IphoneStep1";
import IphoneStep2 from "@/components/ui/IphoneStep2";
import IphoneStep3 from "@/components/ui/IphoneStep3";
import { GradientBackground } from "@/components/ui/gradient-backgrounds";
import WaitlistCard from "@/components/ui/WaitlistCard";

export default function ForDiners() {
  const features = [
    {
      name: "Real savings, no catch",
      description: "Exclusive discounts. Same great food, smaller bill.",
    },
    {
      name: "Get notified, not spammed",
      description: "We only notify you when something good is happening nearby.",
    },
    {
      name: "On-demand navigation",
      description: "Follow the in-app map for directions and get to the deal with ease.",
    },
    {
      name: "Support great food",
      description: "Find restaurants around your city and help them thrive.",
    },
    {
      name: "Your deals, your way",
      description: "See the deals you want, right when they're available. Skip the hassle of searching.",
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Gradient Background */}
        <GradientBackground toColor="#abc4ff" />

        {/* City Skyline Background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-70 pointer-events-none z-0 opacity-20 blur-[1px]"
          style={{
            backgroundImage: "url('/imageAssets/citySkyline.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            maskImage: "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
          }}
        />

        {/* Header */}
        <header className="p-6 relative z-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </header>

        {/* Hero */}
        <section className="px-6 py-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <FadeText
                className="text-4xl md:text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="right"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
                text="Great Food."
              />
              <FadeText
                className="text-4xl md:text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="left"
                framerProps={{
                  show: { transition: { delay: 0.8 } },
                }}
                text="Better prices."
              />
              <FadeText
                className="text-4xl md:text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="right"
                framerProps={{
                  show: { transition: { delay: 1.2 } },
                }}
                text="Just next door."
              />
            </div>

            <div className="py-10 px-4">
              <TextEffect
                per="line"
                as="p"
                preset="blur"
                delay={1.6}
                className="text-lg md:text-2xl text-black text-center mx-auto"
              >
                {`Trivvi uses real-time alerts to help restaurants fill empty tables.
Diners find great deals nearby.`}
              </TextEffect>

            </div>

          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <section className="text-center py-10">
              <TextEffect
                per="line"
                as="p"
                preset="blur"
                delay={2}
                className="text-2xl md:text-3xl text-black font-(family-name:--font-caudex)"
              >
                {`Trivvi is Designed for Diners`}
              </TextEffect>
            </section>
            <FeatureSection features={features} />
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 md:px-6 py-12 md:py-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center font-(family-name:--font-caudex)"
            >
              Trivvi in 3 easy steps
            </motion.h2>
            <div className="flex flex-col gap-16 md:gap-24">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="shrink-0"
                >
                  <IphoneStep1 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center items-center text-center px-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4 font-(family-name:--font-caudex)">
                    1
                  </div>
                  <p className="text-2xl md:text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                    Create your Trivvi account
                  </p>
                  <p className="text-base md:text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Create your account in seconds. It&apos;s fast, secure, and sets you up to start discovering your favorite food deals right away.
                  </p>
                </motion.div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="shrink-0"
                >
                  <IphoneStep2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center items-center text-center px-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4 font-(family-name:--font-caudex)">
                    2
                  </div>
                  <p className="text-2xl md:text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                    Pick your favourites
                  </p>
                  <p className="text-base md:text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Choose the foods you love and how far you want to go.
                    Trivvi only notifies you about the foods you love within the distance you choose.
                  </p>
                </motion.div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="shrink-0"
                >
                  <IphoneStep3 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center items-center text-center px-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4 font-(family-name:--font-caudex)">
                    3
                  </div>
                  <p className="text-2xl md:text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                    Stay in the loop
                  </p>
                  <p className="text-base md:text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Personalized real-time alerts, right when they matter.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-[70vh] md:min-h-screen flex items-center justify-center px-6 py-16 md:py-24 bg-white relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="shrink-0 flex justify-center"
            >
              <LottieAnimation
                animationData={ParrotAnimation}
                className="w-48 h-48 md:w-80 md:h-80"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex-1 text-center px-4"
            >
              <h2 className="text-3xl md:text-6xl font-bold text-[#03045E] mb-4 md:mb-6 font-(family-name:--font-caudex)">
                Meet Chirp
              </h2>
              <p className="text-lg md:text-2xl text-gray-600 font-(family-name:--font-inter) max-w-lg mx-auto">
                Your friendly guide to the best local deals. Chirp helps you discover amazing food at amazing prices, right in your neighborhood.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="shrink-0 flex items-center justify-center"
            >
              <IphoneStep3 />
            </motion.div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Title - Centered Above */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-8 md:mb-12"
            >
              <h3 className="text-2xl md:text-4xl font-bold text-[#03045E] mb-3 md:mb-4 font-(family-name:--font-caudex)">
                Your foods. Your map.
              </h3>
              <p className="text-sm md:text-xl text-gray-600 font-(family-name:--font-caudex) leading-relaxed max-w-2xl mx-auto text-center px-4">
                Our real-time interactive map shows all your favourite foods nearby.
                Set your location or let Trivvi follow you.
                Deals update as you move, so you never miss a bite.
              </p>
            </motion.div>

            {/* Map and Card - Side by Side, Same Size */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Map Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.015, y: -4 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full max-w-[550px] cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="/imageAssets/mapMockup.png"
                    alt="Interactive map showing nearby deals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Deal Mockup Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.015, y: -4 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full max-w-[550px] cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden aspect-[4/3] flex flex-col">
                  {/* Restaurant Image */}
                  <div className="flex-1 relative overflow-hidden">
                    <img
                      src="/imageAssets/pizzaYum.jpg"
                      alt="Pepperoni Pizza"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Deal Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        20% OFF
                      </span>
                      <span className="bg-red-100 text-black text-xs font-semibold px-2 py-1 rounded-full">
                        Reg. Price : C$14.99
                      </span>
                      <span className="text-gray-400 text-xs">• 350m away</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1 font-(family-name:--font-caudex)">
                      Mario&apos;s Pizzeria
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 font-(family-name:--font-caudex)">
                      20% off Large Handcrafted Pepperoni Pizza.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium">4.8</span>
                        <span className="text-gray-400 text-xs">(120)</span>
                      </div>
                      <span className="text-xs text-gray-400">Ends in 2h</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Waitlist signup */}
        <section className="px-4 md:px-6 py-12 md:py-16 relative z-10">
          <div className="flex justify-center">
            <WaitlistCard />
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center text-gray-400 text-sm relative z-10">
          <p></p>
        </footer>
      </main>
    </SmoothScroll>
  );
}

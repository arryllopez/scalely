"use client";

import dynamic from "next/dynamic"
import foxAnimation from "@/public/animationsLottie/Fox Runing.json"
import cityAnimation from "@/public/animationsLottie/Driving Car.json"

const LottieAnimation = dynamic(
  () => import("@/components/LottieAnimation"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative w-full">
        <LottieAnimation
          animationData={cityAnimation}
          className="opacity-90 w-full"
        />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64">
          <LottieAnimation
            animationData={foxAnimation}
            className="opacity-90"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-7xl text-black font-bold">
          Welcome to Vulpes
        </h1>
        <h2 className="text-2xl text-black font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
          Smart local deals, right when they matter.
        </h2>
        <h3 className="text-2xl text-black" style={{ fontFamily: 'var(--font-inter)' }}>
          Vulpes connects nearby restaurants and diners through limited-time offers during low-traffic hours.
        </h3>
      </div>
    </section>
  );
}

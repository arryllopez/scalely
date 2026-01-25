"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Cloud {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

export function AnimatedClouds({ cloudCount = 20 }: { cloudCount?: number }) {
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    const generatedClouds: Cloud[] = [];
    for (let i = 0; i < cloudCount; i++) {
      generatedClouds.push({
        id: i,
        size: Math.random() * 300 + 200,
        left: Math.random() * 120 - 10,
        top: Math.random() * 15 - 5,
        delay: Math.random() * -30,
        duration: Math.random() * 40 + 50,
      });
    }
    setClouds(generatedClouds);
  }, [cloudCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud absolute opacity-60"
          style={{
            width: cloud.size,
            left: `${cloud.left}%`,
            top: `${cloud.top}%`,
            animationDelay: `${cloud.delay}s`,
            animationDuration: `${cloud.duration}s`,
          }}
        >
          <Image
            src="/background/cloud.png"
            alt=""
            width={cloud.size}
            height={cloud.size * 0.6}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef, ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (containerRef.current) {
        const scroll = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.1, // Lower = smoother, higher = more responsive
        });

        return () => {
          scroll.destroy();
        };
      }
    })();
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
}

"use client";

import Lottie from "lottie-react";

type Props = {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
};

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className,
}: Props) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}

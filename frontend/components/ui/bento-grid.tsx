"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  description: string;
}

const FeatureSection = ({
  features,
  className,
}: {
  features: Feature[];
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-8 md:gap-12", className)}>
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index === 0 ? 2.5 : 0 }}
            className="w-full bg-white rounded-2xl p-12 md:p-16 min-h-[200px] md:min-h-[280px] flex items-center transition-transform duration-300 hover:scale-[1.02]"
            style={{ boxShadow: "0 4px 20px 0 #e2eafc" }}
          >
            <div
              className={cn(
                "flex flex-col gap-3 w-full",
                isEven ? "items-start text-left" : "items-end text-right"
              )}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 font-(family-name:--font-caudex)">
                {feature.name}
              </h3>
              <p className="max-w-md text-base md:text-lg text-neutral-600">
                {feature.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export { FeatureSection };

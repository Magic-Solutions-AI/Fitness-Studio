"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  description?: string;
  theme?: "paper" | "ink" | "charcoal";
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  theme = "ink",
  centered = false,
  className = "",
}) => {
  const kickerColor =
    theme === "paper" ? "text-[#15803d]" : "text-[#86efac]";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`${centered ? "text-center flex flex-col items-center" : ""} ${className}`}
    >
      {kicker && (
        <motion.div
          variants={itemVariants}
          className={`flex items-center gap-3.5 text-[14px] tracking-[0.14em] uppercase font-semibold mb-5 ${kickerColor}`}
        >
          <span>{kicker}</span>
        </motion.div>
      )}
      <h2 className={`text-[clamp(38px,5vw,64px)] leading-[0.98] uppercase font-bold tracking-tight mb-2 ${centered ? "text-center" : "text-left"}`}>
        {typeof title === "string" ? (
          <span className={`inline-flex flex-wrap gap-x-[0.25em] ${centered ? "justify-center" : "justify-start"}`}>
            {title.split(" ").map((word, i) => (
              <motion.span key={i} variants={itemVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </span>
        ) : (
          <motion.span variants={itemVariants} className="inline-block">{title}</motion.span>
        )}
      </h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className={`mt-4 max-w-xl text-[16px] ${
            theme === "paper" ? "text-[#0a0a09]/70" : "text-[#eeece4]/65"
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

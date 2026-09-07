"use client";

import React from "react";
import { motion, MotionStyle } from "framer-motion";

interface DecorativeAythamProps {
  className?: string;
  style?: MotionStyle;
}

export const DecorativeAytham: React.FC<DecorativeAythamProps> = ({
  className,
  style,
}) => {
  return (
    <motion.div
      style={style}
      className={`w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-10 pointer-events-none z-[-1] ${className || ""}`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-[#15803d]" />
      <div className="absolute bottom-0 left-0 w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-[#15803d]" />
      <div className="absolute bottom-0 right-0 w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-[#15803d]" />
    </motion.div>
  );
};

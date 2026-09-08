"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const FinalCTA: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-[70vh] flex items-center overflow-hidden py-24 lg:py-32">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 h-[130%] -top-[15%] z-0">
        <Image
          src="/images/final-cta.jpg"
          alt="Member finishing a heavy lift at AK Fitness Studio"
          title="Heavy Lifting Training at AK Fitness Studio"
          fill
          sizes="100vw"
          className="object-cover filter grayscale-[50%] brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a09]/94 via-[#0a0a09]/80 to-[#0a0a09]/55 pointer-events-none" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[640px]"
        >
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-[clamp(42px,6.4vw,86px)] font-extrabold text-[#eeece4] uppercase leading-[0.98] tracking-tight mb-6"
          >
            <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">Your</motion.span>
            <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">stronger</motion.span>
            <motion.span variants={wordVariants} className="inline-block">self</motion.span>
            <br />
            <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">starts</motion.span>
            <motion.span variants={wordVariants} className="inline-block">today.</motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#eeece4]/68 text-[17px] max-w-[460px] mb-10 leading-relaxed"
          >
            Come see the studio, meet the coaches, and start with a plan built around you — not a template.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#contact" variant="solid">
              Join Now
            </Button>
            <Button href="#contact" variant="outline">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

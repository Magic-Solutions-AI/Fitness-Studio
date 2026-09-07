"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useIntro } from "@/context/IntroContext";

export const Hero: React.FC = () => {
  const { introFinished } = useIntro();
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const bgY = useTransform(scrollY, [0, 1000], ["0%", "40%"]);
  const overlayY = useTransform(scrollY, [0, 1000], ["0%", "15%"]);
  const contentY = useTransform(scrollY, [0, 1000], ["0%", "-10%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
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

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background Media with Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Background (Moves slower) */}
        <motion.div 
          className="absolute -inset-[5%] z-0"
          style={{ y: bgY }}
        >
          <Image
            src="/home/hero-bg.avif"
            alt="AK Fitness Studio training floor"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_top] md:object-top animate-hero-zoom filter contrast-[1.05] brightness-[0.4] md:brightness-[0.9]"
          />
        </motion.div>

        {/* Foreground Overlay (Moves faster than bg to create depth) */}
        <motion.div 
          className="absolute inset-0 z-10"
          style={{ y: overlayY }}
        >
          <motion.div
            initial={{ y: "30%", opacity: 0 }}
            animate={introFinished ? { y: "0%", opacity: 1 } : { y: "30%", opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/home/hero-overlay.avif"
              alt="Man and woman training together at AK Fitness Studio"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[80%_top] md:object-top animate-hero-zoom"
            />
          </motion.div>
        </motion.div>

        {/* Shadow/Gradient overlays */}
        <div className="absolute inset-0 z-20 bg-linear-to-b from-ink/15 via-ink/35 to-ink/100" />
      </div>

      {/* Hero Content */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-30 w-full max-w-325 mx-auto px-6 lg:px-10 pb-20 md:pb-24 pt-26 md:pt-32"
      >
        {/* H1 Heading */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate={introFinished ? "visible" : "hidden"}
          className="text-[clamp(52px,9vw,120px)] font-extrabold text-paper max-w-300 uppercase tracking-tight"
        >
          <motion.span variants={wordVariants} className="inline-block">Transform</motion.span>
          <br />
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">your</motion.span>
          <motion.span variants={wordVariants} className="inline-block">body.</motion.span>
          
          <span className="block text-paper/40 mt-2">
            <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">Transform</motion.span>
            <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">your</motion.span>
            <motion.span variants={wordVariants} className="inline-block">life.</motion.span>
          </span>
        </motion.h1>

        {/* Hero Copy & Actions */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={introFinished ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-14 mt-4 md:mt-9 pt-3 md:pt-8 border-t border-paper/14"
        >
          <p className="max-w-105 text-[16px] text-paper/72 leading-relaxed">
            Build strength, improve your fitness, and become the best version of
            yourself — with expert guidance and a training environment that pushes
            you forward.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 shrink-0">
            <Button href="#contact" variant="solid">
              Join the Studio
            </Button>
            <Button href="#programs" variant="outline">
              Explore Programs
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Cue Indicator */}
      <motion.div 
        variants={fadeUpVariants}
        initial="hidden"
        animate={introFinished ? "visible" : "hidden"}
        className="absolute right-6 lg:right-10 bottom-8 z-10 hidden sm:flex flex-col items-center gap-2.5 text-[11px] tracking-[0.15em] text-paper/55 font-medium"
      >
        <span>SCROLL</span>
        <div className="w-px h-8.5 bg-paper/40 overflow-hidden relative">
          <div className="absolute -top-full left-0 w-full h-full bg-brand-green animate-cue-move" />
        </div>
      </motion.div>
    </section>
  );
};

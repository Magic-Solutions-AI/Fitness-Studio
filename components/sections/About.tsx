"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { DecorativeAytham } from "@/components/ui/DecorativeAytham";

export const About: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  
  // Moves the image from top to bottom as user scrolls past
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  // Rotate Aytham based on scroll
  const aythamRotate = useTransform(scrollYProgress, [0, 1], [0, 260]);

  return (
    <section id="about" className="bg-paper text-ink py-24 lg:py-32">
      <div className="w-full max-w-330 mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Content & Stats */}
          <div className="flex flex-col relative isolate">
            {/* Decorative Aytham (ஃ) Background - Sticky container */}
            <div className="absolute -top-20 inset-0 pointer-events-none -z-10">
              <div className="sticky top-40 -left-8 md:-left-30 w-fit">
                <DecorativeAytham style={{ rotate: aythamRotate }} />
              </div>
            </div>

            <SectionHeading
              kicker="Who We Are"
              title={
                <>
                  More than
                  <br />
                  just a gym.
                </>
              }
              theme="paper"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[19px] max-w-120 text-ink/72 mt-6 mb-6 leading-relaxed font-medium"
            >
              AK Fitness Studio — <span className="font-tamil font-semibold text-brand-green">ஃ உடற்பயிற்சி கூடம்</span> — was built around one idea: real progress comes from discipline, honest coaching and a community that keeps you accountable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-5 text-ink/68 text-[16px] max-w-120 leading-relaxed"
            >
              <p>
                We work with beginners taking their first step and professionals chasing a specific goal — under one roof, with programming that adapts to where you actually are, not where a generic plan assumes you should be.
              </p>
              <p>
                Every session is built on form first, load second. Our floor is clean, our equipment is maintained, and our coaches are on the floor with you — not behind a desk.
              </p>
            </motion.div>

            {/* Stat Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6  border-t border-ink/12 mt-10 pt-2"
            >
              <AnimatedCounter target={600} label="Community Members" />
              <AnimatedCounter target={12} label="Programs Running" />
              <AnimatedCounter target={5} label="Years On The Floor" />
            </motion.div>
          </div>

          {/* Right Column: Image with Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative mt-6 lg:mt-0"
          >
            <div ref={targetRef} className="relative w-full h-80 sm:h-150 overflow-hidden rounded-xl shadow-2xl bg-ink/5">
              <motion.div className="absolute inset-[-20%] z-0" style={{ y: parallaxY }}>
                <Image
                src="/home/aboutus.webp"
                alt="Trainer guiding a member through a lift at AK Fitness Studio"
                  title="Personalized Coaching Session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top drop-shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Overlay Tag with Glass and Rotating Border */}
            <div className="absolute left-4 sm:-left-6 -bottom-6 max-w-60 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden rounded-xl group">
              {/* Rotating Gradient for Border */}
              <div className="absolute -inset-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#22c55e_50%,transparent_100%)] opacity-80" />
              
              {/* Glass Background (Inset by 1px to create the border) */}
              <div className="absolute inset-px bg-ink/50 backdrop-blur-xl rounded-xl" />
              
              {/* Card Content */}
              <div className="relative z-10 p-6 sm:p-7">
                <div className="font-['Big_Shoulders_Display'] text-[38px] font-extrabold text-brand-green leading-none drop-shadow-[0_0_12px_rgba(34,197,94,0.3)]">
                  01
                </div>
                <div className="text-[12.5px] text-paper/80 mt-1.5 leading-snug">
                  Personalized coaching from day one, not a generic plan.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

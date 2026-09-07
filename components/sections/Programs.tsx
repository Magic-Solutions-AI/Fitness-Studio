"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, MotionValue, useTransform } from "framer-motion";
import { programs } from "@/data/programs";
import { DecorativeAytham } from "@/components/ui/DecorativeAytham";

export const Programs: React.FC = () => {
  const targetRef = useRef<HTMLElement>(null);

  // Track scroll progress within this tall section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile(); // Check immediately
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update active index based on scroll position to switch text/icons
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map latest (0 to 1) to continuous index (0 to N-1), and round to nearest integer
    let index = Math.round(latest * (programs.length - 1));
    if (index >= programs.length) index = programs.length - 1;
    if (index < 0) index = 0;

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <section
      ref={targetRef}
      id="programs"
      className="bg-paper text-ink relative overflow-x-clip"
    >
      {/* Scroll track wrapper */}
      <div style={{ height: `${programs.length * 100}vh` }}>
        {/* Sticky Container */}
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-6 md:pb-10 overflow-x-clip">

          <div className="w-full max-w-330 mx-auto px-5 lg:px-10 flex flex-col h-full justify-center">

            {/* Header Section */}
            <div className="mb-10 sm:mb-12 md:mb-20 shrink-0 pt-2 sm:pt-6 lg:pt-0 flex flex-col items-end text-right">
              <div className="text-[12px] md:text-[14px] font-semibold tracking-wider uppercase text-ink/50 mb-2 md:mb-4">
                What is your preferred workout style?
              </div>
              <div className="relative inline-block text-left z-20">
                <h2 className="text-[44px] sm:text-[52px] md:text-[80px] lg:text-[100px] font-bold leading-[0.95] tracking-tight">
                  Choose <br /> your style
                </h2>
                {/* Floating Pills */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                  className="absolute -right-2 md:-right-24 top-0 md:top-10 bg-brand-green-pale text-black px-3 md:px-6 py-1 md:py-2 rounded-[10px] md:rounded-2xl font-bold text-[13px] md:text-xl shadow-lg"
                >
                  Strength
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  className="absolute right-4 md:-right-10 -bottom-6 md:bottom-0 bg-[#4ade80] text-black px-3 md:px-6 py-1 md:py-2 rounded-[10px] md:rounded-2xl font-bold text-[13px] md:text-xl shadow-lg"
                >
                  Conditioning
                </motion.div>
              </div>
            </div>

            {/* Main Content Area (Two Columns) */}
            <div className="flex-1 min-h-0 flex flex-col-reverse lg:flex-row-reverse gap-8 sm:gap-12 lg:gap-24 items-center py-2 lg:py-10">

              {/* Left Column (Content) */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center relative z-10">


                {/* Emoji Icons Bar */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-5 mb-4 sm:mb-10 flex-wrap justify-center lg:justify-start">
                  {programs.map((prog, idx) => (
                    <div
                      key={prog.id}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-[18px] sm:text-2xl md:text-3xl transition-all duration-500 relative"
                      style={{
                        backgroundColor: idx === activeIndex ? prog.color : "rgba(10, 10, 9, 0.05)",
                        transform: idx === activeIndex ? "scale(1.15)" : "scale(1)",
                        filter: idx === activeIndex ? "none" : "grayscale(100%)",
                        opacity: idx === activeIndex ? 1 : 0.6
                      }}
                    >
                      {idx === activeIndex && (
                        <motion.div
                          layoutId="active-ring"
                          className="absolute -inset-2 border-2 border-dashed rounded-full pointer-events-none"
                          style={{ borderColor: prog.color }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {prog.emoji}
                    </div>
                  ))}
                </div>

                {/* Animated Text Block */}
                <div className="h-32 sm:h-40 md:h-50 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                      <h3 className="text-[24px] sm:text-[32px] md:text-[44px] font-bold mb-2 md:mb-6 leading-tight">
                        {programs[activeIndex].name}
                      </h3>
                      <p className="text-[14px] sm:text-[16px] md:text-[18px] text-ink/70 max-w-120 leading-relaxed">
                        {programs[activeIndex].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

              {/* Right Column (Images) - Now on left due to flex-row-reverse */}
              <div className="w-full lg:w-[55%] h-[300px] sm:h-[320px] md:h-125 relative perspective-[1000px] z-10">
                {programs.map((prog, idx) => (
                  <ScrollImage
                    key={prog.id}
                    prog={prog}
                    idx={idx}
                    continuousIndex={useTransform(scrollYProgress, [0, 1], [0, programs.length - 1])}
                    totalItems={programs.length}
                    isMobile={isMobile}
                  />
                ))}
                {/* Decorative Background Symbol */}
                <div className="absolute top-1/2 right-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10">
                  <DecorativeAytham style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 180]) }} className="opacity-[0.15] scale-150" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Seamless bottom padding */}
      <div className="h-24 lg:h-32 w-full bg-paper" />
    </section>
  );
};

// Sub-component to handle continuous scroll animations without state-based jumping
const ScrollImage = ({
  prog,
  idx,
  continuousIndex,
  totalItems,
  isMobile
}: {
  prog: typeof programs[0];
  idx: number;
  continuousIndex: MotionValue<number>;
  totalItems: number;
  isMobile: boolean;
}) => {
  // Desktop: Images scroll vertically (-125% to 125%). Mobile: Images scroll horizontally.
  const yPercent = useTransform(continuousIndex, (v) => (idx - v) * (isMobile ? 0 : 125));
  const y = useTransform(yPercent, (v) => `${v}%`);
  
  const xPercent = useTransform(continuousIndex, (v) => (idx - v) * (isMobile ? 120 : 0));
  const curveOffset = useTransform(continuousIndex, (v) => {
    const dist = Math.abs(idx - v);
    return isMobile ? (dist * dist * 20) : -(dist * dist * 60);
  });
  
  // Combine x translation and curved arc
  const x = useTransform(() => {
    if (isMobile) {
      return `${xPercent.get()}%`;
    }
    return `${curveOffset.get()}px`;
  });

  const finalY = useTransform(() => {
    if (isMobile) {
      return `${curveOffset.get()}px`;
    }
    return y.get();
  });
  const rotate = useTransform(continuousIndex, (v) => (idx - v) * 12);
  const scale = useTransform(continuousIndex, (v) => {
    const dist = Math.abs(idx - v);
    return dist <= 0.5 ? 1 : Math.max(0.85, 1 - (dist - 0.5) * 0.1);
  });
  const opacity = useTransform(continuousIndex, (v) => {
    const dist = Math.abs(idx - v);
    return dist <= 1.8 ? 1 : Math.max(0, 1 - (dist - 1.8) * 2);
  });
  const zIndex = useTransform(continuousIndex, (v) => {
    return Math.round(totalItems - Math.abs(idx - v));
  });

  return (
    <motion.div
      style={{ x, y: finalY, rotate, scale, opacity, zIndex }}
      className="absolute inset-0 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl origin-center"
    >
      <Image
        src={prog.image}
        alt={prog.alt}
        fill
        priority={idx === 0}
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
    </motion.div>
  );
};

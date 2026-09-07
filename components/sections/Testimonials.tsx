"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <section id="testimonials" className="bg-[#0a0a09] text-[#eeece4] py-24 lg:py-32 relative overflow-hidden isolate border-t border-[#eeece4]/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#22c55e]/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#22c55e]/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3" />

      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          kicker="Member Stories"
          title={
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="inline-flex flex-wrap justify-center"
            >
              {["Don't", "just", "take", "our", "word", "for", "it."].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          }
          theme="ink"
          centered
          className="mb-14"
        />

        <div className="relative max-w-[960px] mx-auto">
          {/* Glassmorphic Testimonial Card */}
          <div className="relative overflow-hidden bg-[#eeece4]/[0.02] border border-[#eeece4]/[0.05] rounded-[2rem] p-8 sm:p-12 md:p-16 backdrop-blur-xl shadow-2xl">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 text-[#22c55e]/10 rotate-180 pointer-events-none">
              <Quote size={120} strokeWidth={1} fill="currentColor" />
            </div>

            <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-semibold text-[22px] sm:text-[28px] md:text-[36px] leading-[1.4] text-[#eeece4] tracking-tight text-center md:text-left">
                    "{current.quote}"
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-10 md:mt-12">
                    <div className="w-12 h-12 rounded-full bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e] font-bold text-lg border border-[#22c55e]/30">
                      {current.name.charAt(0)}
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-[16px] font-bold text-[#eeece4] tracking-wide">
                        {current.name}
                      </div>
                      <div className="text-[14px] text-[#eeece4]/50 mt-1">
                        {current.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls & Progress */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-8 md:mt-12 px-2 md:px-8">
            {/* Animated Progress Bar */}
            <div className="flex gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                    idx === currentIndex
                      ? "w-10 bg-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                      : "w-3 bg-[#eeece4]/20 hover:bg-[#eeece4]/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-[#eeece4]/10 bg-[#eeece4]/[0.02] flex items-center justify-center text-[#eeece4]/70 hover:text-[#22c55e] hover:border-[#22c55e]/40 hover:bg-[#22c55e]/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 rounded-full border border-[#eeece4]/10 bg-[#eeece4]/[0.02] flex items-center justify-center text-[#eeece4]/70 hover:text-[#22c55e] hover:border-[#22c55e]/40 hover:bg-[#22c55e]/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-md"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

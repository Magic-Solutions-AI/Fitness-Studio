"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Dumbbell, Users, Activity } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const whyItems = [
  {
    icon: Award,
    title: "Professional Coaching",
    desc: "Coaches who correct your form in real time, not from across the room.",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    desc: "A well-maintained floor with the equipment your program actually needs.",
  },
  {
    icon: Users,
    title: "A Supportive Community",
    desc: "600+ members training beside you, not competing against you.",
  },
  {
    icon: Activity,
    title: "For Every Level",
    desc: "First-timers and competitive lifters train on the same floor, on their own plan.",
  },
];

export const WhyChooseUs: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="why" ref={containerRef} className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-stretch">
        {/* Left Media Column */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-95 lg:min-h-155 overflow-hidden"
        >
          <motion.div style={{ y }} className="absolute inset-0 h-[130%] -top-[15%] w-full">
            <Image
              src="/images/why-us.jpg"
              alt="Inside AK Fitness Studio training floor with strength equipment"
              title="AK Fitness Studio Training Floor"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover filter grayscale-30 brightness-[0.7]"
            />
          </motion.div>
        </motion.div>

        {/* Right Panel Column */}
        <div className="bg-[#0a0a09] text-paper px-8 sm:px-14 lg:px-20 py-20 lg:py-24 flex flex-col justify-center relative overflow-hidden isolate">
          {/* Glowing Ambient Orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/15 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#22c55e]/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />
          
          <div className="relative z-10">
            <SectionHeading
              kicker="Why AK Fitness Studio"
              title={
                <>
                  Built for people <br className="hidden lg:block" /> who <span className="text-[#22c55e]">show up.</span>
                </>
              }
              theme="ink"
            />
            <div className="mt-4 text-paper/70 text-[16px] max-w-[440px] leading-relaxed">
              We don't sell memberships, we sell results. Here is what sets us apart from generic commercial gyms.
            </div>

            <div className="flex flex-col gap-5 mt-12">
              {whyItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden group flex gap-5 md:gap-6 p-6 rounded-2xl bg-[#eeece4]/[0.03] hover:bg-[#eeece4]/[0.06] border border-[#eeece4]/[0.05] hover:border-[#22c55e]/30 backdrop-blur-xl transition-all duration-500 items-start shadow-sm hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]"
                  >
                    {/* Animated hover shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#22c55e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-[100%] group-hover:translate-x-[100%] z-0 pointer-events-none" />
                    
                    <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-[#22c55e]/20 to-[#22c55e]/5 border border-[#22c55e]/20 flex items-center justify-center text-[#22c55e] shrink-0 group-hover:scale-110 group-hover:bg-[#22c55e] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-500">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-bold text-[18px] sm:text-[19px] text-[#eeece4] tracking-wide mb-2 group-hover:text-[#22c55e] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-[#eeece4]/60 leading-relaxed group-hover:text-[#eeece4]/90 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

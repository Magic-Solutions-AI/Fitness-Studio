"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const galleryImages = Array.from({ length: 20 }, (_, i) => ({
  src: `/gallery/ak-fitness-studio-gym-workout-gallery-${String(i + 1).padStart(2, "0")}.webp`,
  alt: `AK Fitness Studio gym workout facility and equipment view ${i + 1}`,
}));

export const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create different parallax depths for a highly dynamic gallery feel
  const ySlow = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const yMedium = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="gallery" ref={containerRef} className="bg-[#0a0a09] py-24 lg:py-32 border-t border-[#eeece4]/5">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10">
        <SectionHeading
          kicker="Inside The Studio"
          title="Where the work gets done."
          theme="ink"
        />
        
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] md:auto-rows-[220px] gap-2 md:gap-4 grid-flow-dense">
          {galleryImages.map((image, index) => {
            // Assign varying parallax speeds to create depth
            const parallaxY = index % 3 === 0 ? yFast : index % 2 === 0 ? ySlow : yMedium;
            
            return (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.05 }}
                className={`relative overflow-hidden rounded-xl bg-[#151513] group ${
                  index === 0 || index === 7 || index === 14 
                    ? "col-span-2 row-span-2" 
                    : index === 3 || index === 11 || index === 18
                    ? "col-span-1 row-span-2" 
                    : "col-span-1 row-span-1"
                }`}
              >
                {/* Parallax image container */}
                <motion.div style={{ y: parallaxY }} className="absolute inset-0 h-[130%] -top-[15%] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    title="Premium Gym Facility at AK Fitness Studio"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover filter grayscale-[20%] brightness-[0.75] group-hover:grayscale-0 group-hover:brightness-[1] group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

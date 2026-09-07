"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { communityImages } from "@/data/community";

export const Community: React.FC = () => {
  return (
    <section id="community" className="bg-[#eeece4] text-[#0a0a09] py-24 lg:py-32">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10">
        <SectionHeading
          kicker="The Community"
          title="Every journey starts with one step."
          theme="paper"
          className="mb-14"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-12 auto-rows-[100px] sm:auto-rows-[120px] gap-2.5"
        >
          {communityImages.map((img) => (
            <div
              key={img.id}
              className={`relative overflow-hidden group ${img.gridClass}`}
            >
              <Image
                src={img.image}
                alt={img.alt}
                title={img.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-[#0a0a09]/10 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

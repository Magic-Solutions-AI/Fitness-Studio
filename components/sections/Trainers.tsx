"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trainers } from "@/data/trainers";

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="bg-[#0a0a09] text-[#eeece4] py-24 lg:py-32">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10">
        <SectionHeading
          kicker="Our Trainers"
          title="Coaches who train on the floor with you."
          theme="ink"
          className="mb-14"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-[#eeece4]/14"
        >
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="grid grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[90px_1fr_280px] gap-6 lg:gap-9 items-center py-7 border-b border-[#eeece4]/14 hover:bg-[#22c55e]/[0.06] transition-colors duration-350 px-3 -mx-3 rounded-xs group cursor-default"
            >
              {/* Thumbnail */}
              <div className="relative w-[78px] h-[78px] overflow-hidden rounded-xs shrink-0">
                <Image
                  src={trainer.image}
                  alt={trainer.alt}
                  title={trainer.title}
                  fill
                  sizes="78px"
                  className="object-cover filter grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-350"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 flex-wrap">
                <h3 className="font-['Big_Shoulders_Display'] text-[28px] font-extrabold uppercase text-[#eeece4] tracking-wide">
                  {trainer.name}
                </h3>
                <span className="text-[13px] text-[#86efac] tracking-[0.03em] font-medium">
                  {trainer.role}
                </span>
              </div>

              {/* Bio */}
              <div className="text-[14px] text-[#eeece4]/60 max-w-[280px] lg:opacity-75 lg:group-hover:opacity-100 transition-all duration-400">
                {trainer.bio}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

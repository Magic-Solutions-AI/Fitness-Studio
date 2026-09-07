"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facilities } from "@/data/facilities";

export const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="bg-[#eeece4] text-[#0a0a09] py-24 lg:py-32">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <SectionHeading
            kicker="The Studio"
            title="A floor built to train seriously."
            theme="paper"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-[340px] text-[#0a0a09]/60 text-[15px] pb-1"
          >
            Clean, spacious, and equipped for strength, cardio and functional work — every corner earns its place.
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        aria-label="Studio Facilities Gallery"
        id="gallery"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] sm:auto-rows-[280px] gap-1"
      >
        {facilities.map((item, index) => {
          let layoutClass = "col-span-1 row-span-1";
          if (index === 0) {
            layoutClass = "sm:col-span-2 sm:row-span-2";
          } else if (index === 3) {
            layoutClass = "sm:row-span-2";
          }

          return (
            <figure
              key={item.id}
              className={`relative overflow-hidden group ${layoutClass}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                title={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09]/80 via-transparent to-transparent z-10" />
              <figcaption className="absolute left-5 bottom-5 z-20 text-[#eeece4] text-[13px] tracking-[0.04em] uppercase font-semibold opacity-90 sm:opacity-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out">
                <span className="inline-block px-2.5 py-1 bg-[#0a0a09]/80 border-l-2 border-[#22c55e]">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </motion.div>
    </section>
  );
};

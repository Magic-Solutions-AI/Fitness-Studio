"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const Contact: React.FC = () => {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="contact" className="bg-[#eeece4] text-[#0a0a09] py-24 lg:py-32">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">
          {/* Left Column: Location & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              kicker="Visit The Studio"
              title="Let's start your training."
              theme="paper"
              className="mb-8"
            />

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div variants={itemVariant} className="py-4 border-t border-[#0a0a09]/12">
                <div className="text-[12px] tracking-[0.1em] text-[#0a0a09]/50 uppercase font-semibold mb-1">
                  ADDRESS
                </div>
                <div className="text-[16.5px] text-[#0a0a09] font-medium leading-relaxed">
                  {siteConfig.name}, {siteConfig.address}
                </div>
              </motion.div>

              <motion.div variants={itemVariant} className="py-4 border-t border-[#0a0a09]/12">
                <div className="text-[12px] tracking-[0.1em] text-[#0a0a09]/50 uppercase font-semibold mb-1">
                  PHONE
                </div>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-[16.5px] text-[#0a0a09] font-medium hover:text-[#15803d] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </motion.div>

              <motion.div variants={itemVariant} className="py-4 border-t border-[#0a0a09]/12">
                <div className="text-[12px] tracking-[0.1em] text-[#0a0a09]/50 uppercase font-semibold mb-1">
                  EMAIL
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[16.5px] text-[#0a0a09] font-medium hover:text-[#15803d] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </motion.div>

              <motion.div variants={itemVariant} className="py-4 border-t border-[#0a0a09]/12">
                <div className="text-[12px] tracking-[0.1em] text-[#0a0a09]/50 uppercase font-semibold mb-1">
                  OPENING HOURS
                </div>
                <div className="text-[16.5px] text-[#0a0a09] font-medium">
                  {siteConfig.openingHours}
                </div>
              </motion.div>

              <motion.div variants={itemVariant} className="py-4 border-t border-[#0a0a09]/12">
                <div className="text-[12px] tracking-[0.1em] text-[#0a0a09]/50 uppercase font-semibold mb-1">
                  INSTAGRAM
                </div>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16.5px] text-[#0a0a09] font-medium hover:text-[#15803d] transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
              </motion.div>
            </motion.div>


          </motion.div>

          {/* Right Column: Dark Form Shell */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="h-[400px] lg:h-full w-full min-h-[500px] bg-[#e4e1d6] border border-[#0a0a09]/12 relative overflow-hidden rounded-2xl shadow-2xl group">
              <iframe
                src="https://maps.google.com/maps?q=AK+Fitness+Studio+Mohanur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[30%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700 ease-in-out pointer-events-none lg:pointer-events-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

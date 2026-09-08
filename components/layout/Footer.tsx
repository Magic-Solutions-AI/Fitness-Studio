"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { DecorativeAytham } from "@/components/ui/DecorativeAytham";

export const Footer: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <footer className="bg-[#0a0a09] border-t border-[#eeece4]/14 pt-16 pb-8 text-[#eeece4] overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-[50px] pb-14 border-b border-[#eeece4]/14 relative z-10"
        >
          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <Link href="#home" className="flex items-center">
              <Image
                src="/logo.png"
                alt="AK Fitness Studio"
                width={220}
                height={70}
                className="w-15 md:w-25 h-auto object-contain"
              />
            </Link>
            <p className="font-tamil text-[14px] text-[#eeece4]/50 mt-4 max-w-[260px] leading-relaxed">
              {siteConfig.subtitleTamil} — strength, discipline, and community, on one floor.
            </p>
          </motion.div>

          {/* Column 2: Studio Nav */}
          <motion.div variants={itemVariants}>
            <h4 className="font-['Inter'] font-semibold text-[13px] tracking-[0.08em] uppercase text-[#eeece4]/85 mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#programs", label: "Programs" },
                { href: "#why-us", label: "Why Choose Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-[#eeece4]/55 hover:text-[#86efac] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Studio Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-['Inter'] font-semibold text-[13px] tracking-[0.08em] uppercase text-[#eeece4]/85 mb-4">
              Studio Info
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#gallery", label: "Gallery" },
                { href: "#testimonials", label: "Members" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-[#eeece4]/55 hover:text-[#86efac] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Direct Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-['Inter'] font-semibold text-[13px] tracking-[0.08em] uppercase text-[#eeece4]/85 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#eeece4]/55">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-[#86efac] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#86efac] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.streetAddress}, {siteConfig.addressLocality}</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Decorative Aytham Watermark */}
        <div className="hidden lg:block absolute top-0 -right-35  pointer-events-none scale-75 xl:scale-100 origin-right z-0">
          <DecorativeAytham />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-7 text-[12.5px] text-[#eeece4]/35 gap-4">
          <span>© {new Date().getFullYear()} AK Fitness Studio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#facilities", label: "Facilities" },
  { href: "#trainers", label: "Trainers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact", highlight: true },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed inset-0 z-[2000] bg-[#0a0a09] flex flex-col justify-center gap-7 px-8 md:px-12"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 p-2 text-[#eeece4] hover:text-[#22c55e] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`font-['Big_Shoulders_Display'] text-[34px] font-extrabold uppercase tracking-wider transition-colors ${
                  link.highlight
                    ? "text-[#22c55e] hover:text-[#eeece4]"
                    : "text-[#eeece4] hover:text-[#22c55e]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-[#eeece4]/14 text-[13px] text-[#eeece4]/60">
            <p className="font-tamil font-medium text-[#eeece4]/80">
              {siteConfig.name} — {siteConfig.subtitleTamil}
            </p>
            <p className="mt-1">{siteConfig.phone}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useIntro } from "@/context/IntroContext";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { introFinished } = useIntro();

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="siteHeader"
        className={`fixed top-0 left-0 right-0 z-1000 border-b border-paper/14 transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
          isCompact
            ? "py-3.5 bg-ink/92 backdrop-blur-md  shadow-lg shadow-black/40"
            : "py-6 border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-330 mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#home" className="flex items-center group">
            {introFinished ? (
              <motion.div layoutId="brand-logo">
                <Image
                  src="/logo.png"
                  alt="AK Fitness Studio"
                  width={200}
                  height={60}
                  priority
                  className="w-12 md:w-18 h-auto object-contain drop-shadow-md"
                />
              </motion.div>
            ) : (
              <div className="w-12 md:w-18 h-11.5 md:h-15" />
            )}
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-9.5"
          >
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Us" },
              { href: "#programs", label: "Programs" },
              { href: "#gallery", label: "Gallery" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-semibold tracking-wider uppercase text-paper/82 hover:text-paper transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-brand-green transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center border border-paper px-6 py-2.5 text-[12px] font-bold tracking-[0.06em] uppercase text-paper hover:bg-brand-green hover:border-brand-green hover:text-ink transition-all duration-300"
            >
              Join Now
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 -mr-2 text-paper hover:text-brand-green transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

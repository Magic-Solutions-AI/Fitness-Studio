"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useIntro } from "@/context/IntroContext";

export const SplashScreen: React.FC = () => {
  const { introFinished, setIntroFinished } = useIntro();
  const [isRotating, setIsRotating] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setIntroFinished(true);
      return;
    }

    // Sequence timing
    const rotationTimer = setTimeout(() => {
      setIsRotating(true);
    }, 800); 

    const unmountTimer = setTimeout(() => {
      setShouldUnmount(true);
      setIntroFinished(true); 
    }, 1800); 

    return () => {
      clearTimeout(rotationTimer);
      clearTimeout(unmountTimer);
    };
  }, [setIntroFinished]);

  return (
    <AnimatePresence>
      {!introFinished && !shouldUnmount && (
        <motion.div
          key="splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-1000 flex items-center justify-center bg-ink overflow-hidden pointer-events-none"
        >
          <motion.div
            layoutId="brand-logo"
            initial={{ scale: 1.5, opacity: 0, y: 20 }}
            animate={{ 
              scale: isRotating ? 1 : 1.5, 
              opacity: 1, 
              y: 0,
              rotateY: isRotating ? 360 : 0,
              rotateX: isRotating ? 5 : 0 
            }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1], 
              rotateY: { duration: 1, ease: "easeInOut" },
              scale: { duration: 1, ease: "easeInOut" }
            }}
            className="relative flex items-center justify-center w-full max-w-50 sm:max-w-75 h-auto drop-shadow-2xl"
            style={{ transformPerspective: 1000 }}
          >
            <Image
              src="/logo.png"
              alt="AK Fitness Studio"
              width={300}
              height={90}
              priority
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

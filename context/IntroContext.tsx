"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface IntroContextType {
  introFinished: boolean;
  setIntroFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
  const [introFinished, setIntroFinished] = useState<boolean>(false); 

  useEffect(() => {
    // Run after hydration to avoid mismatch
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro === "true") {
      setIntroFinished(true);
    }
  }, []);

  useEffect(() => {
    if (introFinished) {
      sessionStorage.setItem("hasSeenIntro", "true");
    }
  }, [introFinished]);

  return (
    <IntroContext.Provider value={{ introFinished, setIntroFinished }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = () => {
  const context = useContext(IntroContext);
  if (context === undefined) {
    throw new Error("useIntro must be used within an IntroProvider");
  }
  return context;
};

"use client";

import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true); // Start fade-out animation
      setTimeout(() => {
        setIsVisible(false); // Fully hide after fade-out
      }, 500); // Match the animation duration
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // Completely remove from DOM

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img src="/intro.gif" alt="Loading animation" className="w-64 h-64 md:w-96 md:h-96" />
    </div>
  );
}

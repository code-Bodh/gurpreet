"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "./hooks";

interface ScrollContextValue {
  scrollTo: (target: string | HTMLElement, options?: { offset?: number }) => void;
}

const ScrollContext = createContext<ScrollContextValue>({
  scrollTo: () => {},
});

export const useScroll = () => useContext(ScrollContext);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined" || prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReduced]);

  const scrollTo = (
    target: string | HTMLElement,
    options: { offset?: number } = {}
  ) => {
    if (typeof window === "undefined") return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: options.offset ?? -30,
        duration: prefersReduced ? 0 : 1.2,
      });
    } else {
      const el =
        typeof target === "string" ? document.querySelector(target) : target;
      if (el) {
        el.scrollIntoView({
          behavior: prefersReduced ? "auto" : "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function scrollToTarget(target: string, offset = -30) {
  if (typeof window === "undefined") return;
  const el = document.querySelector(target);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

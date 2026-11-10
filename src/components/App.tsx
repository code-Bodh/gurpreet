"use client";

import React, { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export function App() {
  // Global RevealObserver for .rv and .rv-mask elements (animates once only)
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined")
      return;

    const targets = document.querySelectorAll(".rv, .rv-mask");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f2ee] text-[#0d0d0d] relative selection:bg-[#0d0d0d] selection:text-[#f4f2ee]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

"use client";

import React, { useRef, useState, useEffect } from "react";
import { ACHIEVEMENTS, Achievement } from "@/lib/data";

export function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

  // Measure scroll through the sticky container to translate horizontal track
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const totalScrollable = container.offsetHeight - window.innerHeight;

        if (totalScrollable > 0) {
          const current = -rect.top;
          const ratio = Math.max(0, Math.min(1, current / totalScrollable));
          setScrollProgress(ratio);

          if (ratio > 0.05 && !hasCounted) {
            setHasCounted(true);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [hasCounted]);

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="relative w-full border-t border-[#0d0d0d]/10"
      style={{
        // Viewport height + horizontal travel distance
        height: "350vh",
      }}
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-[100svh] w-full flex flex-col justify-between overflow-hidden pt-20 pb-10">
        {/* Header with Title and Track Progress Bar */}
        <div className="page-container w-full">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="section-tag mb-1">
                <span>05</span>
                <span>—</span>
                <span>Milestones</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d]">
                Numbers &amp; <em>scale.</em>
              </h2>
            </div>

            {/* Horizontal Track Progress Bar */}
            <div className="w-28 sm:w-44 h-1.5 bg-[#0d0d0d]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0d0d0d] rounded-full transition-transform duration-75 origin-left"
                style={{ transform: `scaleX(${scrollProgress})` }}
              />
            </div>
          </div>
        </div>

        {/* Sliding Card Track (translates left as scroll advances) */}
        <div className="w-full overflow-hidden py-6">
          <div
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-8 px-6 sm:px-12 md:px-20 will-change-transform"
            style={{
              transform: `translateX(-${scrollProgress * 75}%)`,
              transition: "transform 0.1s linear",
            }}
          >
            {ACHIEVEMENTS.map((card, idx) => {
              // Calculate proximity to center for 12px lift effect
              // Cards are 6 total, spread across progress 0 to 1
              const cardCenterProgress = idx / (ACHIEVEMENTS.length - 1);
              const distance = Math.abs(scrollProgress - cardCenterProgress);
              const isCenter = distance < 0.15;

              return (
                <AchievementCard
                  key={card.index}
                  card={card}
                  isCenter={isCenter}
                  hasCounted={hasCounted}
                />
              );
            })}

            {/* Track End Card: "and counting →" */}
            <div className="w-[clamp(280px,30vw,360px)] h-[clamp(260px,36vh,310px)] rounded-[28px] border-2 border-dashed border-[#0d0d0d]/20 flex flex-col items-center justify-center p-8 shrink-0 select-none">
              <span className="font-mono text-xs uppercase text-[#77756f] mb-2">
                CONTINUOUS EVOLUTION
              </span>
              <span className="font-serif italic text-3xl sm:text-4xl text-[#0d0d0d]">
                and counting →
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Helper Hint */}
        <div className="page-container w-full flex items-center justify-between text-xs font-mono text-[#a9a6a0]">
          <span>SCROLL DOWN TO ADVANCE CARDS</span>
          <span>{Math.round(scrollProgress * 100)}%</span>
        </div>
      </div>
    </section>
  );
}

function AchievementCard({
  card,
  isCenter,
  hasCounted,
}: {
  card: Achievement;
  isCenter: boolean;
  hasCounted: boolean;
}) {
  const [currentVal, setCurrentVal] = useState(0);

  // easeOutQuart counter over 1.4s
  useEffect(() => {
    if (!hasCounted) return;

    const duration = 1400;
    const start = performance.now();
    let animId: number;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      // easeOutQuart: 1 - (1 - t)^4
      const ease = 1 - Math.pow(1 - progress, 4);
      setCurrentVal(Math.round(ease * card.targetNumber));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [hasCounted, card.targetNumber]);

  return (
    <div
      style={{
        transform: isCenter ? "translateY(-12px)" : "translateY(0px)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
      }}
      className={`w-[clamp(340px,40vw,540px)] h-[clamp(260px,36vh,310px)] rounded-[28px] bg-white p-7 sm:p-9 flex flex-col justify-between shrink-0 select-none relative ${
        isCenter
          ? "shadow-[0_24px_54px_rgba(13,13,13,0.12)] ring-1 ring-[#0d0d0d]/10"
          : "shadow-[0_8px_24px_rgba(13,13,13,0.04)] border border-[#0d0d0d]/10"
      }`}
    >
      {/* Top: 72px Logo Tile with soft glow & Index */}
      <div className="flex items-center justify-between">
        <div className="relative">
          {/* Soft platform glow */}
          <div
            className={`absolute inset-0 rounded-2xl blur-md opacity-25 ${
              card.platformKey === "oohaudit"
                ? "bg-blue-500"
                : card.platformKey === "eikaebana"
                ? "bg-pink-500"
                : card.platformKey === "instagram" || card.platformKey === "smarttoonkids"
                ? "bg-purple-500"
                : "bg-emerald-500"
            }`}
          />
          <div className="relative w-14 h-14 rounded-2xl bg-[#f4f2ee] flex items-center justify-center font-mono font-bold text-xs text-[#0d0d0d] border border-[#0d0d0d]/10 shadow-sm">
            {card.platformKey.substring(0, 3).toUpperCase()}
          </div>
        </div>

        <span className="font-mono text-xs font-semibold text-[#77756f]">
          {card.index}
        </span>
      </div>

      {/* Bottom Content & Huge Counter Number */}
      <div className="flex items-end justify-between gap-4">
        {/* Left: Label, Caption, Detail */}
        <div className="max-w-[260px]">
          <span className="font-mono text-[10px] uppercase text-[#77756f] tracking-wider block mb-1">
            {card.caption}
          </span>
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d] mb-1">
            {card.label}
          </h4>
          <p className="text-xs text-[#52504b] leading-relaxed line-clamp-2">
            {card.detail}
          </p>
        </div>

        {/* Right: Huge Animated Number */}
        <div className="text-right">
          <div className="text-4xl sm:text-5xl md:text-6xl font-black font-sans tracking-tight text-[#0d0d0d]">
            {card.prefix || ""}
            {hasCounted ? currentVal : 0}
            {card.suffix || ""}
          </div>
          <span className="font-mono text-[10px] uppercase text-[#a9a6a0] block text-right">
            VERIFIED
          </span>
        </div>
      </div>
    </div>
  );
}

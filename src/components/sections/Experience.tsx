"use client";

import React, { useRef, useState, useEffect } from "react";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spineHeight, setSpineHeight] = useState(0);

  // Measure scroll progress through the experience section to scale the vertical spine line
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;

        // When section enters bottom of viewport to when it leaves top
        const totalTravel = rect.height + windowH * 0.5;
        const currentProgress = windowH - rect.top;
        const ratio = Math.max(0, Math.min(1, currentProgress / totalTravel));
        setSpineHeight(ratio);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-pad relative w-full border-t border-[#0d0d0d]/10"
    >
      <div className="page-container">
        {/* Section Tag & Heading */}
        <div className="section-tag">
          <span>04</span>
          <span>—</span>
          <span>Trajectory</span>
        </div>

        <h2 className="section-heading">
          Experience &amp; <em>education.</em>
        </h2>

        {/* Vertical Timeline with Scaled Spine */}
        <div className="relative pl-6 sm:pl-10 md:pl-16 max-w-3xl">
          {/* Background Pale Track */}
          <div className="absolute left-[7px] sm:left-[11px] md:left-[15px] top-4 bottom-12 w-[2px] bg-[#0d0d0d]/10" />

          {/* Active Ink Spine (scaled by scroll) */}
          <div
            className="absolute left-[7px] sm:left-[11px] md:left-[15px] top-4 w-[2px] bg-[#0d0d0d] origin-top transition-transform duration-100 ease-out"
            style={{
              height: "calc(100% - 64px)",
              transform: `scaleY(${spineHeight})`,
            }}
          />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {EXPERIENCE.map((item, idx) => {
              // Calculate threshold for lighting up node
              const threshold = (idx + 0.5) / (EXPERIENCE.length + 1);
              const isLit = spineHeight >= threshold;

              return (
                <div key={idx} className="relative group">
                  {/* Timeline Dot Node */}
                  <div
                    className={`absolute -left-[30px] sm:-left-[36px] md:-left-[42px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isLit
                        ? "bg-[#0d0d0d] border-[#0d0d0d] shadow-sm scale-110"
                        : "bg-white border-[#0d0d0d]/30"
                    }`}
                  />

                  {/* Card Content */}
                  <div
                    className={`card-surface p-6 sm:p-8 transition-all duration-500 border ${
                      isLit
                        ? "border-[#0d0d0d]/15 shadow-md bg-white"
                        : "border-transparent bg-white/70 opacity-80"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#77756f]">
                          {item.period}
                        </span>
                        {item.isPresent && (
                          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                            Present
                          </span>
                        )}
                      </div>
                      <span
                        className={`font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full ${
                          item.type === "experience"
                            ? "bg-[#0d0d0d] text-[#f4f2ee]"
                            : "bg-[#e9e6e0] text-[#0d0d0d]"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d] mb-1">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-[#77756f] mb-4">
                      {item.company} · {item.location}
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-[#3a3a3a] leading-relaxed mb-4">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {item.skills && item.skills.length > 0 && (
                      <div className="pt-3 border-t border-[#0d0d0d]/10 flex flex-wrap items-center gap-1.5 text-xs text-[#52504b]">
                        <span className="mr-1 text-xs">💎</span>
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-[#f4f2ee] font-mono text-[10px] text-[#3a3a3a] border border-[#0d0d0d]/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* End Stop: Dashed "Next — Your team?" Card */}
            <div className="relative">
              <div
                className={`absolute -left-[30px] sm:-left-[36px] md:-left-[42px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  spineHeight > 0.85
                    ? "bg-[#0d0d0d] border-[#0d0d0d]"
                    : "bg-white border-[#0d0d0d]/30"
                }`}
              />

              <div className="p-8 rounded-[26px] border-2 border-dashed border-[#0d0d0d]/20 bg-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase text-[#77756f] block mb-1">
                    Future
                  </span>
                  <h4 className="text-2xl font-bold tracking-tight text-[#0d0d0d]">
                    Next — Your team?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#77756f] mt-1">
                    Available for Remote, Hybrid, or Full-Time senior design leadership roles.
                  </p>
                </div>

                <a href="#contact" className="btn-primary text-xs shrink-0">
                  Let&apos;s Connect ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/lib/data";
import { TechLogo } from "@/components/ui/TechLogo";

export function Work() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  return (
    <section id="work" className="section-pad relative w-full border-t border-[#0d0d0d]/10">
      <div className="page-container">
        {/* Section Tag & Heading */}
        <div className="section-tag">
          <span>03</span>
          <span>—</span>
          <span>Selected Work</span>
        </div>

        <h2 className="section-heading">
          Things I&apos;ve <em>built.</em>
        </h2>

        {/* --- DESKTOP HORIZONTAL ACCORDION --- */}
        <div className="hidden lg:flex gap-3 h-[min(78svh,620px)] w-full items-stretch">
          {PROJECTS.map((project) => {
            const isOpen = activeId === project.id;

            return (
              <div
                key={project.id}
                tabIndex={0}
                role="region"
                aria-label={`Project: ${project.title}`}
                onClick={() => setActiveId(project.id)}
                onFocus={() => setActiveId(project.id)}
                style={{
                  flex: isOpen ? 8 : 1,
                  transition: "flex 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`card-surface relative overflow-hidden cursor-pointer select-none border border-[#0d0d0d]/10 ${
                  isOpen ? "bg-white shadow-xl" : "bg-[#f4f2ee] hover:bg-[#eae7e0]"
                }`}
              >
                {/* --- FOLDED SLIM SPINE (when not open) --- */}
                {!isOpen && (
                  <div className="absolute inset-0 flex flex-col justify-between items-center py-8 px-2">
                    <span className="font-mono text-xs font-bold text-[#77756f]">
                      {project.index}
                    </span>

                    {/* Vertical rotated title */}
                    <div className="rotate-[-90deg] whitespace-nowrap text-xs font-bold uppercase tracking-widest text-[#0d0d0d]">
                      {project.title}
                    </div>

                    <div className="w-8 h-8 rounded-full border border-[#0d0d0d]/20 flex items-center justify-center text-xs transition-transform duration-300 hover:rotate-90">
                      +
                    </div>
                  </div>
                )}

                {/* --- EXPANDED PANEL CONTENT --- */}
                {isOpen && (
                  <div className="w-full h-full p-8 sm:p-10 flex flex-col lg:flex-row gap-8 justify-between items-stretch animate-in fade-in duration-500">
                    {/* Left Details Column */}
                    <div className="flex-1 flex flex-col justify-between max-w-lg">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono text-xs text-[#a9a6a0]">
                            {project.index} / {PROJECTS.length.toString().padStart(2, "0")}
                          </span>
                          <span className="text-xs uppercase font-mono tracking-wider text-[#77756f]">
                            {project.kicker}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold tracking-tight text-[#0d0d0d] mb-4">
                          {project.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-[#3a3a3a] mb-6">
                          {project.description}
                        </p>

                        {/* 2-Column Feature List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                          {project.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-[#52504b]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-1 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Tech Chips & Action Buttons */}
                      <div>
                        {/* Tech Chips */}
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                          {project.tech.map((t) => (
                            <div
                              key={t}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#f4f2ee] text-[#0d0d0d] border border-[#0d0d0d]/10"
                            >
                              <TechLogo name={t} size={14} />
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex flex-wrap items-center gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary text-xs"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Live Site ↗
                            </a>
                          )}
                          {project.caseStudyUrl && (
                            <a
                              href={project.caseStudyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary text-xs"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Behance Case Study ↗
                            </a>
                          )}
                          {project.appStoreUrl && (
                            <a
                              href={project.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary text-xs"
                              onClick={(e) => e.stopPropagation()}
                            >
                              App Store ↗
                            </a>
                          )}
                          {project.playStoreUrl && (
                            <a
                              href={project.playStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary text-xs"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Play Store ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Illustrative Mini-UI in Pure CSS/JSX */}
                    <div className="flex-1 min-w-[280px] max-w-[420px] rounded-2xl bg-[#f4f2ee] p-5 flex flex-col justify-between border border-[#0d0d0d]/10 relative overflow-hidden">
                      {/* Label tag */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#0d0d0d]/10 font-mono text-[10px] text-[#77756f]">
                        <span className="uppercase">System Architecture</span>
                        <span className="px-2 py-0.5 rounded-full bg-white text-[#0d0d0d] border border-[#0d0d0d]/10">
                          Illustrative UI
                        </span>
                      </div>

                      {/* Dynamic Grayscale UI Mockup Representation */}
                      <div className="my-auto py-4">
                        <ProjectIllustrativeUI type={project.uiType} />
                      </div>

                      {/* Footer caption */}
                      <div className="pt-3 border-t border-[#0d0d0d]/10 font-mono text-[9px] text-[#a9a6a0] flex justify-between">
                        <span>CONFIDENTIAL / SHIPPED</span>
                        <span>DESIGN SYSTEM V2</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --- MOBILE VERTICAL ACCORDION --- */}
        <div className="lg:hidden flex flex-col gap-4">
          {PROJECTS.map((project) => {
            const isOpen = activeId === project.id;

            return (
              <div
                key={project.id}
                onClick={() => setActiveId(isOpen ? "" : project.id)}
                className="card-surface p-6 border border-[#0d0d0d]/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#77756f]">
                      {project.index}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-[#0d0d0d]">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-base font-mono">{isOpen ? "−" : "+"}</span>
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-[#0d0d0d]/10 animate-in fade-in duration-300">
                    <span className="font-mono text-[10px] uppercase text-[#77756f] block mb-2">
                      {project.kicker}
                    </span>
                    <p className="text-sm text-[#3a3a3a] mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {project.features.map((feat, i) => (
                        <div key={i} className="text-xs text-[#52504b] flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#0d0d0d]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#f4f2ee] text-[#0d0d0d]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-xs"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Site ↗
                        </a>
                      )}
                      {project.caseStudyUrl && (
                        <a
                          href={project.caseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Behance ↗
                        </a>
                      )}
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs"
                          onClick={(e) => e.stopPropagation()}
                        >
                          App Store ↗
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Illustrative Pure CSS UI Component
function ProjectIllustrativeUI({ type }: { type: Project["uiType"] }) {
  switch (type) {
    case "dashboard":
      return (
        <div className="space-y-3 font-mono text-[9px]">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 bg-white rounded-lg border border-[#0d0d0d]/10">
              <span className="text-[#a9a6a0] block">AUDITS</span>
              <span className="text-xs font-bold text-[#0d0d0d]">1,420</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-[#0d0d0d]/10">
              <span className="text-[#a9a6a0] block">PROOFS</span>
              <span className="text-xs font-bold text-[#0d0d0d]">99.8%</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-[#0d0d0d]/10">
              <span className="text-[#a9a6a0] block">TIME</span>
              <span className="text-xs font-bold text-[#0d0d0d]">-30%</span>
            </div>
          </div>
          {/* Simulated chart bars */}
          <div className="p-3 bg-white rounded-lg border border-[#0d0d0d]/10 space-y-2">
            <div className="flex justify-between text-[#77756f]">
              <span>CAMPAIGN VERIFICATION</span>
              <span>LIVE</span>
            </div>
            <div className="flex items-end gap-1.5 h-16 pt-2">
              {[40, 65, 55, 80, 70, 95, 85, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#0d0d0d]/80 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      );

    case "mobile":
      return (
        <div className="space-y-2 font-mono text-[9px]">
          <div className="w-48 mx-auto p-3 bg-white rounded-2xl border-2 border-[#0d0d0d]/20 shadow-sm space-y-2">
            <div className="w-12 h-1.5 bg-[#0d0d0d]/20 rounded-full mx-auto" />
            <div className="h-20 bg-[#f4f2ee] rounded-xl flex items-center justify-center text-[#77756f]">
              [PRODUCT GALLERY]
            </div>
            <div className="space-y-1">
              <div className="h-2 bg-[#0d0d0d]/70 rounded w-3/4" />
              <div className="h-2 bg-[#0d0d0d]/30 rounded w-1/2" />
            </div>
            <div className="pt-2 flex justify-between items-center border-t border-[#0d0d0d]/10">
              <span className="font-bold text-[#0d0d0d]">₹2,499</span>
              <span className="px-2 py-0.5 rounded-full bg-[#0d0d0d] text-white text-[8px]">
                BUY
              </span>
            </div>
          </div>
        </div>
      );

    case "marketplace":
      return (
        <div className="space-y-2 font-mono text-[9px]">
          <div className="p-3 bg-white rounded-xl border border-[#0d0d0d]/10 space-y-2">
            <div className="flex items-center justify-between text-[#77756f]">
              <span>MACHINERY CATALOGUE</span>
              <span>DEALS ACTIVE</span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: "HEIDELBERG SPEEDMASTER", spec: "4-COLOR OFFSET" },
                { name: "KOMORI LITHRONE G40", spec: "HIGH-SPEED SHEETFED" },
                { name: "BOBST DIE-CUTTER", spec: "AUTOMATIC PACKAGING" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-2 bg-[#f4f2ee] rounded-md flex justify-between items-center text-[8px]"
                >
                  <span className="font-bold text-[#0d0d0d]">{item.name}</span>
                  <span className="text-[#77756f]">{item.spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "atlas":
      return (
        <div className="space-y-2 font-mono text-[9px]">
          <div className="p-3 bg-white rounded-xl border border-[#0d0d0d]/10 space-y-2">
            <div className="flex justify-between text-[#77756f]">
              <span>NATIONAL SEAT SHARE</span>
              <span>543 CONSTITUENCIES</span>
            </div>
            <div className="grid grid-cols-4 gap-1 py-2">
              {[80, 50, 40, 90, 60, 75, 45, 95].map((val, i) => (
                <div
                  key={i}
                  className="h-8 rounded bg-[#0d0d0d]/10 flex items-center justify-center font-bold text-[#0d0d0d]"
                  style={{ opacity: val / 100 }}
                >
                  {val}%
                </div>
              ))}
            </div>
            <div className="text-[8px] text-[#a9a6a0] text-center">
              DEMOGRAPHIC & ELECTORAL CARTOGRAPHY
            </div>
          </div>
        </div>
      );

    case "video":
      return (
        <div className="space-y-2 font-mono text-[9px]">
          <div className="p-3 bg-white rounded-xl border border-[#0d0d0d]/10 space-y-2">
            <div className="flex justify-between text-[#77756f]">
              <span>SMARTTOONKIDS MEDIA</span>
              <span>45K+ VIEWS</span>
            </div>
            <div className="h-20 bg-[#0d0d0d] text-white rounded-lg flex flex-col items-center justify-center gap-1">
              <span className="text-lg">▶</span>
              <span className="text-[8px] text-[#a9a6a0]">AI STORY ARC GENERATOR</span>
            </div>
            <div className="flex justify-between text-[8px] text-[#3a3a3a] pt-1">
              <span>LIKES: 100K+</span>
              <span>RETENTION: HIGH</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="p-3 bg-white rounded-xl border border-[#0d0d0d]/10 space-y-2 font-mono text-[9px]">
          <div className="flex justify-between text-[#77756f]">
            <span>ENTERPRISE SUITE</span>
            <span>ML FORECAST</span>
          </div>
          <div className="h-16 bg-[#f4f2ee] rounded flex items-center justify-center text-[#77756f]">
            PURCHASING.AI DEMAND ENGINE
          </div>
        </div>
      );
  }
}

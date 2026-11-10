"use client";

import React, { useState } from "react";
import { SKILL_GROUPS, Skill, SkillCategory } from "@/lib/data";
import { TechLogo, isBrand } from "@/components/ui/TechLogo";

const CATEGORIES: ("All" | SkillCategory)[] = [
  "All",
  "Design",
  "Tools",
  "AI Tools",
  "Process",
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<"All" | SkillCategory>("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILL_GROUPS[0]);

  return (
    <section id="skills" className="section-pad relative w-full border-t border-[#0d0d0d]/10">
      <div className="page-container">
        {/* Section Tag & Heading */}
        <div className="section-tag">
          <span>02</span>
          <span>—</span>
          <span>Stack</span>
        </div>

        <h2 className="section-heading">
          The periodic table of my <em>stack.</em>
        </h2>

        {/* Filter Category Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#0d0d0d] text-[#f4f2ee]"
                  : "bg-white text-[#77756f] border border-[#0d0d0d]/10 hover:border-[#0d0d0d]/40 hover:text-[#0d0d0d]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Grid + Inspector Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Periodic Table Grid (8 cols on desktop, 4 on mobile) */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {SKILL_GROUPS.map((skill, index) => {
              const row = Math.floor(index / 8);
              const col = index % 8;
              const delay = (row + col) * 40;
              const matchesFilter =
                activeCategory === "All" || skill.category === activeCategory;
              const isSelected = selectedSkill.name === skill.name;

              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  onMouseEnter={() => setSelectedSkill(skill)}
                  onFocus={() => setSelectedSkill(skill)}
                  style={{
                    animationDelay: `${delay}ms`,
                  }}
                  className={`relative p-3 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 aspect-square border ${
                    isSelected
                      ? "bg-[#0d0d0d] text-[#f4f2ee] border-[#0d0d0d] shadow-lg scale-105 z-10"
                      : matchesFilter
                      ? "bg-white text-[#0d0d0d] border-[#0d0d0d]/10 hover:border-[#0d0d0d]/40 hover:shadow-md"
                      : "bg-[#e9e6e0]/50 text-[#a9a6a0] border-transparent opacity-35"
                  }`}
                >
                  {/* Top Bar: Atomic Number & Category Code */}
                  <div className="flex items-center justify-between w-full font-mono text-[9px] opacity-70">
                    <span>{skill.atomicNumber.toString().padStart(2, "0")}</span>
                    <span>{skill.category.substring(0, 2).toUpperCase()}</span>
                  </div>

                  {/* 2-Letter Symbol */}
                  <div className="my-auto text-center w-full">
                    <span
                      className={`text-xl sm:text-2xl font-bold tracking-tight font-mono ${
                        isSelected ? "text-[#f4f2ee]" : "text-[#0d0d0d]"
                      }`}
                    >
                      {skill.symbol}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <div className="truncate w-full text-[10px] font-medium tracking-tight text-center">
                    {skill.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sticky Inspector Panel (320px wide) */}
          <div className="lg:sticky lg:top-28 card-surface p-7 flex flex-col justify-between border border-[#0d0d0d]/10">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#0d0d0d]/10 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#77756f]">
                  Element Inspector
                </span>
                <span className="font-mono text-[10px] text-[#0d0d0d] font-semibold">
                  #{selectedSkill.atomicNumber.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Logo Presentation (150px visual box with pop animation) */}
              <div className="w-full h-44 rounded-2xl bg-[#f4f2ee] flex items-center justify-center p-6 mb-6 relative overflow-hidden group">
                <div className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                  <TechLogo
                    name={selectedSkill.brandKey || selectedSkill.name}
                    size={72}
                    className="drop-shadow-sm"
                  />
                </div>
                {/* Soft brand ambient glow */}
                <div className="absolute inset-0 bg-radial from-black/5 to-transparent pointer-events-none" />
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold tracking-tight text-[#0d0d0d]">
                    {selectedSkill.name}
                  </h3>
                  <span className="font-mono text-sm font-bold text-[#77756f]">
                    [{selectedSkill.symbol}]
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-[#77756f]">
                    Family:
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#0d0d0d] text-[#f4f2ee]">
                    {selectedSkill.category}
                  </span>
                  {selectedSkill.isBrand && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#e9e6e0] text-[#0d0d0d]">
                      Industry Tool
                    </span>
                  )}
                </div>

                {/* Shipped Projects Using This Skill */}
                <div className="pt-4 mt-4 border-t border-[#0d0d0d]/10">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#77756f] block mb-2">
                    Applied In Projects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.projects.map((proj) => (
                      <span
                        key={proj}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#f4f2ee] text-[#3a3a3a] border border-[#0d0d0d]/5"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0d0d0d]/10 font-mono text-[9px] text-[#a9a6a0]">
              Verified skill from official curriculum vitae.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

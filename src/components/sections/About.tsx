"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";

export function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Pendulum swing with spring damping reacting to pointer movement + subtle idle sway
  useEffect(() => {
    let animId: number;
    let currentAngle = 0;
    let targetAngle = 0;
    let velocity = 0;
    let lastX = 0;
    let time = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      // Convert pointer velocity to angular impulse
      targetAngle = Math.max(-14, Math.min(14, dx * 0.4));
    };

    const container = cardContainerRef.current;
    if (container) {
      container.addEventListener("pointermove", handlePointerMove);
    }

    const loop = () => {
      time += 0.03;
      // Spring physics toward targetAngle + subtle idle sway
      const idleSway = Math.sin(time) * 1.5;
      const effectiveTarget = targetAngle + idleSway;

      const force = (effectiveTarget - currentAngle) * 0.08;
      velocity = (velocity + force) * 0.88;
      currentAngle += velocity;

      // Decay pointer target angle
      targetAngle *= 0.94;

      setRotationAngle(currentAngle);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      if (container) {
        container.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <section id="about" className="section-pad relative w-full border-t border-[#0d0d0d]/10">
      <div className="page-container">
        {/* Section Tag & Heading */}
        <div className="section-tag">
          <span>01</span>
          <span>—</span>
          <span>About</span>
        </div>

        <h2 className="section-heading">
          Designing products that <em>work.</em>
        </h2>

        {/* Three-Column Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px_minmax(0,1fr)] gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Summary & Links */}
          <div className="card-surface p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#77756f] block mb-3">
                Overview
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0d0d0d] mb-5">
                Hi, I&apos;m {PROFILE.name.split(" ")[0]}.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#3a3a3a] mb-6">
                {PROFILE.resumeSummary}
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#77756f] leading-normal pt-4 border-t border-[#0d0d0d]/10">
                Lead designer on 10+ live products across eCommerce, B2B marketplaces, SaaS, and outdoor advertising.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-8 mt-auto">
              <a href={PROFILE.resumePath} download className="btn-primary text-xs">
                Résumé ↓
              </a>
              {PROFILE.behance && (
                <a
                  href={PROFILE.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs"
                >
                  Behance ↗
                </a>
              )}
              {PROFILE.pinterest && (
                <a
                  href={PROFILE.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs"
                >
                  Pinterest ↗
                </a>
              )}
            </div>
          </div>

          {/* Centre Column: Hanging Lanyard ID Card */}
          <div
            ref={cardContainerRef}
            className="flex flex-col items-center justify-start relative select-none py-2"
          >
            {/* Lanyard Strap (30x56 px with scrolling name/role) */}
            <div className="relative w-[30px] h-[56px] bg-[#1a1a1a] rounded-t-sm shadow-inner flex items-center justify-center overflow-hidden border-x border-[#0d0d0d]/40 z-10">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:4px_4px]" />
              {/* Scrolling vertical typography */}
              <div className="text-[7px] font-mono uppercase tracking-widest text-[#a9a6a0] whitespace-nowrap rotate-90 opacity-80">
                GURPREET KAUR · UI/UX
              </div>
            </div>

            {/* Metal Lanyard Clip */}
            <div className="w-[18px] h-[10px] bg-gradient-to-b from-[#e9e6e0] to-[#a9a6a0] rounded-sm shadow-sm border border-[#0d0d0d]/30 z-10 mb-[-2px]" />
            <div className="w-[8px] h-[8px] rounded-full border border-[#77756f] bg-transparent z-10 mb-[-3px]" />

            {/* Pendulum Swinging & 3D Flipping Card Container */}
            <div
              tabIndex={0}
              role="button"
              aria-label="Interactive Designer ID badge. Press Enter or click to flip."
              onKeyDown={handleKeyDown}
              onClick={() => setIsFlipped(!isFlipped)}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
              style={{
                transform: `rotate(${rotationAngle}deg)`,
                transformOrigin: "top center",
                perspective: "1000px",
              }}
              className="w-[300px] h-[410px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#0d0d0d] focus-visible:ring-offset-4 rounded-[22px] transition-transform duration-100 ease-out"
            >
              <div
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="relative w-full h-full rounded-[22px]"
              >
                {/* --- FRONT OF ID CARD --- */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="absolute inset-0 bg-white rounded-[22px] border border-[#0d0d0d]/15 shadow-[0_12px_36px_rgba(13,13,13,0.08)] p-5 flex flex-col justify-between"
                >
                  {/* Top Black Band */}
                  <div className="w-full bg-[#0d0d0d] text-[#f4f2ee] py-2 px-3 rounded-xl flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest font-semibold">
                      DESIGNER PROFILE
                    </span>
                    <span className="font-mono text-[9px] text-[#a9a6a0] font-semibold tracking-wider uppercase">
                      OPEN TO WORK
                    </span>
                  </div>

                  {/* Centered Photo Frame */}
                  <div className="flex flex-col items-center mt-3">
                    <div className="relative w-[128px] h-[156px] rounded-2xl overflow-hidden border-2 border-[#e9e6e0] shadow-sm p-1 group">
                      <div className="w-full h-full relative rounded-xl overflow-hidden bg-[#f4f2ee]">
                        <Image
                          src="/portrait-bust.webp"
                          alt="Gurpreet Kaur Portrait"
                          fill
                          sizes="128px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-[#0d0d0d] mt-3 tracking-tight">
                      {PROFILE.name}
                    </h4>
                    <span className="font-mono text-[10px] uppercase text-[#77756f] tracking-wider">
                      {PROFILE.role}
                    </span>
                  </div>

                  {/* Info Rows */}
                  <div className="grid grid-cols-3 gap-1 py-2 border-y border-[#0d0d0d]/10 text-center font-mono text-[9px]">
                    <div className="px-1">
                      <span className="text-[#a9a6a0] block uppercase text-[8px] tracking-wider">EXPERIENCE</span>
                      <span className="font-semibold text-[#0d0d0d] text-[10px] block mt-0.5">9+ Years</span>
                    </div>
                    <div className="px-1 border-x border-[#0d0d0d]/10">
                      <span className="text-[#a9a6a0] block uppercase text-[8px] tracking-wider">FOCUS</span>
                      <span className="font-semibold text-[#0d0d0d] text-[8px] leading-tight block mt-0.5">
                        SaaS · Mobile · eCommerce
                      </span>
                    </div>
                    <div className="px-1">
                      <span className="text-[#a9a6a0] block uppercase text-[8px] tracking-wider">WORK MODE</span>
                      <span className="font-semibold text-[#0d0d0d] text-[8px] leading-tight block mt-0.5">
                        Remote / Hybrid / Full-Time
                      </span>
                    </div>
                  </div>

                  {/* Barcode & Hologram Bottom Footer */}
                  <div className="flex items-center justify-between pt-1">
                    {/* Simulated barcode */}
                    <div className="h-6 flex items-center gap-[2px] opacity-70">
                      {[2, 1, 3, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 3, 1, 4].map((w, i) => (
                        <span key={i} className="h-full bg-[#0d0d0d]" style={{ width: `${w}px` }} />
                      ))}
                    </div>
                    {/* Custom Logo Badge */}
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#0d0d0d]/20 shadow-sm flex items-center justify-center bg-white">
                      <Image
                        src="/gk-logo.png"
                        alt="GK Logo"
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* --- BACK OF ID CARD --- */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  className="absolute inset-0 bg-[#0d0d0d] text-[#f4f2ee] rounded-[22px] p-6 flex flex-col justify-between shadow-2xl"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#a9a6a0]">
                        VERIFIED CREDENTIALS
                      </span>
                      <span className="font-mono text-[9px] text-[#77756f]">GK-HQ</span>
                    </div>

                    <h5 className="font-mono text-xs text-[#a9a6a0] uppercase tracking-wider mb-3">
                      WHAT I AM:
                    </h5>

                    <ul className="space-y-2.5 text-xs text-[#e9e6e0] leading-snug font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-[#a9a6a0] font-mono">01</span>
                        <span>Senior UI/UX &amp; Graphic Designer with 9+ years of craft</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#a9a6a0] font-mono">02</span>
                        <span>The lead designer behind 10+ live products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#a9a6a0] font-mono">03</span>
                        <span>The reason tasks got ~30% faster and carts converted 15-20% more</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#a9a6a0] font-mono">04</span>
                        <span>The hand behind logos, brands, pitch decks &amp; social creatives</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="font-serif italic text-sm text-[#a9a6a0] mb-2">
                      Gurpreet Kaur
                    </div>
                    <p className="font-mono text-[9px] text-[#77756f]">
                      If found, say hello · {PROFILE.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts & Quote */}
          <div className="card-surface p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#77756f] block mb-4">
                Quick Facts
              </span>

              <div className="space-y-4">
                <div className="pb-3 border-b border-[#0d0d0d]/10">
                  <span className="font-mono text-[11px] text-[#77756f] block uppercase">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-[#0d0d0d]">
                    {PROFILE.location}
                  </span>
                </div>

                <div className="pb-3 border-b border-[#0d0d0d]/10">
                  <span className="font-mono text-[11px] text-[#77756f] block uppercase">
                    Current Role
                  </span>
                  <span className="text-sm font-semibold text-[#0d0d0d]">
                    Senior UI/UX & Graphic Designer
                  </span>
                  <span className="block text-xs text-[#77756f]">
                    Hashbrown Systems (2017 – Present)
                  </span>
                </div>

                <div className="pb-3 border-b border-[#0d0d0d]/10">
                  <span className="font-mono text-[11px] text-[#77756f] block uppercase">
                    Education
                  </span>
                  <span className="text-sm font-semibold text-[#0d0d0d]">
                    B.Tech, Computer Science
                  </span>
                  <span className="block text-xs text-[#77756f]">
                    Diploma, Computer Science
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] text-[#77756f] block uppercase">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm font-semibold text-[#0d0d0d] hover:underline"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#0d0d0d]/10">
              <blockquote className="font-serif italic text-base sm:text-lg text-[#3a3a3a] leading-snug">
                &ldquo;{PROFILE.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

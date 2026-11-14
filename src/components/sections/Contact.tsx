"use client";

import React, { useState } from "react";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";

export function Contact() {
  const { scrollTo } = useScroll();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const line1 = "Let's build";
  const line2 = "something together.";

  return (
    <section id="contact" className="section-pad relative w-full border-t border-[#0d0d0d]/10">
      <div className="page-container">
        {/* Section Tag */}
        <div className="section-tag">
          <span>06</span>
          <span>—</span>
          <span>Contact</span>
        </div>

        {/* Animated Letter Hop Heading */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#0d0d0d] leading-none select-none">
            <div className="flex flex-wrap">
              {line1.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform duration-200 hover:-translate-y-3 cursor-default"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap mt-2">
              {line2.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform duration-200 hover:-translate-y-3 cursor-default"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </span>
              ))}
            </div>
          </h2>
        </div>

        {/* Contact Links & Spinning Badge Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end mb-20">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#77756f] block mb-3">
              Direct Inquiries
            </span>

            {/* Large Underlined Email + Copy Chip */}
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d] underline decoration-2 underline-offset-8 hover:text-[#77756f] transition-colors"
              >
                {PROFILE.email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-1.5 rounded-full text-xs font-mono border border-[#0d0d0d]/20 hover:border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-[#f4f2ee] transition-all"
                aria-label="Copy email address"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
              {/* Screen reader live announcement */}
              <div aria-live="polite" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </div>
            </div>

            {/* Phone & Authentic Design Channels */}
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-[#0d0d0d] pt-2">
              <a
                href={PROFILE.phoneHref}
                className="hover:underline flex items-center gap-1.5"
              >
                <span>Call:</span>
                <span>{PROFILE.phone}</span>
              </a>
              <span className="text-[#a9a6a0]">/</span>
              {PROFILE.linkedin && (
                <>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#0077b5]"
                  >
                    LinkedIn ↗
                  </a>
                  <span className="text-[#a9a6a0]">/</span>
                </>
              )}
              {PROFILE.behance && (
                <>
                  <a
                    href={PROFILE.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Behance ↗
                  </a>
                  <span className="text-[#a9a6a0]">/</span>
                </>
              )}
              {PROFILE.pinterest && (
                <>
                  <a
                    href={PROFILE.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Pinterest ↗
                  </a>
                  <span className="text-[#a9a6a0]">/</span>
                </>
              )}
              {PROFILE.instagram && (
                <a
                  href={PROFILE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram ↗
                </a>
              )}
            </div>
          </div>

          {/* Spinning Circular "SAY HELLO" Badge */}
          <div className="relative w-32 h-32 flex items-center justify-center select-none">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-[spin_12s_linear_infinite]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[10.5px] font-mono tracking-[0.22em] uppercase fill-[#0d0d0d]">
                <textPath xlinkHref="#circlePath">
                  · SAY HELLO · GET IN TOUCH · DESIGN
                </textPath>
              </text>
            </svg>
            <div className="w-10 h-10 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center text-sm">
              ↗
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#0d0d0d]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#77756f]">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js &amp; Tailwind</span>
            <button
              onClick={() => scrollTo("#hero")}
              className="hover:text-[#0d0d0d] underline decoration-dotted"
            >
              Back to top ↑
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

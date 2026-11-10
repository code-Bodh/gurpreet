"use client";

import React, { useState, useEffect, useRef } from "react";
import { NAV, PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";

export function Navigation() {
  const { scrollTo } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(NAV[0]?.href.replace("#", "") || "about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll listener for 40px threshold and top progress bar
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);

        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // IntersectionObserver for tracking active section
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = NAV.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock scroll and handle Esc key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollTo(href, { offset: -40 });
  };

  return (
    <>
      {/* 2px Ink Scroll Progress Bar along the very top */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#0d0d0d] z-50 origin-left transition-transform duration-75 pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 pt-4 pb-2 transition-all duration-300 pointer-events-none">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between">
          {/* Left: Initials Mark & Name */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <button
              onClick={() => handleNavClick("#hero")}
              aria-label="Back to top"
              className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-semibold tracking-wider transition-all duration-500 hover:rotate-[360deg] ${
                scrolled
                  ? "bg-[#0d0d0d] text-[#f4f2ee] shadow-md border border-transparent"
                  : "bg-transparent text-[#0d0d0d] border border-[#0d0d0d]/30"
              }`}
            >
              {PROFILE.initials}
            </button>
            <span
              className={`text-sm font-semibold tracking-tight transition-all duration-500 hidden sm:inline-block ${
                scrolled ? "opacity-0 -translate-x-2 pointer-events-none" : "opacity-100 translate-x-0"
              }`}
            >
              {PROFILE.name}
            </span>
          </div>

          {/* Center / Right: Desktop Frosted Glass Nav Pill */}
          <nav
            aria-label="Primary navigation"
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 pointer-events-auto ${
              scrolled
                ? "bg-[#ffffff]/80 backdrop-blur-md border border-[#0d0d0d]/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                : "bg-transparent border border-transparent"
            }`}
          >
            {NAV.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-xs font-medium rounded-full transition-colors duration-300 z-10 ${
                    isActive ? "text-[#f4f2ee]" : "text-[#0d0d0d] hover:text-[#0d0d0d]/70"
                  }`}
                >
                  {/* Sliding solid ink indicator pill */}
                  {isActive && (
                    <span className="absolute inset-0 bg-[#0d0d0d] rounded-full -z-10 shadow-sm animate-in fade-in duration-300" />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Pill Button */}
          <div className="md:hidden pointer-events-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#ffffff]/90 backdrop-blur-md border border-[#0d0d0d]/15 shadow-sm text-[#0d0d0d] transition-all hover:bg-[#0d0d0d] hover:text-[#f4f2ee]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Paper Overlay with clip-path */}
      <div
        className={`fixed inset-0 bg-[#f4f2ee] z-50 flex flex-col justify-between p-8 md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "clip-path-open opacity-100 pointer-events-auto"
            : "clip-path-closed opacity-0 pointer-events-none"
        }`}
        style={{
          clipPath: mobileMenuOpen
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(100% 0, 100% 0, 100% 0, 100% 0)",
        }}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-[#77756f] tracking-wider uppercase">
            Navigation
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full border border-[#0d0d0d]/20 flex items-center justify-center text-sm font-semibold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-5 my-auto">
          {NAV.map((item, i) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{ transitionDelay: `${i * 40}ms` }}
              className="flex items-baseline gap-4 text-left group"
            >
              <span className="font-mono text-xs text-[#a9a6a0] group-hover:text-[#0d0d0d]">
                {item.num}
              </span>
              <span className="text-4xl font-bold tracking-tight text-[#0d0d0d] group-hover:translate-x-2 transition-transform duration-300">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-2 pt-6 border-t border-[#0d0d0d]/10">
          <span className="font-mono text-xs text-[#77756f]">{PROFILE.email}</span>
          <span className="font-mono text-xs text-[#a9a6a0]">{PROFILE.location}</span>
        </div>
      </div>
    </>
  );
}

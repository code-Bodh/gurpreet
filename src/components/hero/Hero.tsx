"use client";

import React, { useRef, useState, useEffect } from "react";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";

export function Hero() {
  const { scrollTo } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(true);

  // Video Autoplay & Sound Unlock Logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try playing with sound initially
    video.muted = false;
    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsMuted(false);
        setAutoplayBlocked(false);
      })
      .catch(() => {
        // Autoplay with sound blocked; fallback to muted autoplay
        video.muted = true;
        setIsMuted(true);
        setAutoplayBlocked(true);
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      });

    // Unlock sound on first user gesture
    const unlockSound = () => {
      if (video) {
        video.muted = false;
        setIsMuted(false);
        setAutoplayBlocked(false);
        if (video.paused) video.play();
      }
      window.removeEventListener("pointerdown", unlockSound);
      window.removeEventListener("keydown", unlockSound);
      window.removeEventListener("touchend", unlockSound);
    };

    window.addEventListener("pointerdown", unlockSound, { once: true });
    window.addEventListener("keydown", unlockSound, { once: true });
    window.addEventListener("touchend", unlockSound, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockSound);
      window.removeEventListener("keydown", unlockSound);
      window.removeEventListener("touchend", unlockSound);
    };
  }, []);

  // IntersectionObserver: Pause video when less than 35% visible; resume when visible
  useEffect(() => {
    const heroEl = heroRef.current;
    const video = videoRef.current;
    if (!heroEl || !video || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          video.play().catch(() => {});
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: [0, 0.35, 0.7],
      }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Toggle Sound Button
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
      setAutoplayBlocked(false);
      if (video.paused) video.play();
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 pb-8 overflow-hidden"
    >
      {/* Background Ghost Outlined Word */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden"
      >
        <span
          className="text-[clamp(90px,18vw,280px)] font-black tracking-tighter uppercase text-transparent whitespace-nowrap opacity-[0.05]"
          style={{
            WebkitTextStroke: "2px #0d0d0d",
          }}
        >
          {PROFILE.firstName}
        </span>
      </div>

      {/* Main Centered Visual & Role */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 md:px-8 flex-1 flex flex-col items-center justify-center">
        {/* Looping Hero Video with multiply blend mode */}
        <div className="relative w-full max-w-[440px] sm:max-w-[520px] md:max-w-[620px] flex items-center justify-center">
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: "768 / 960",
              maxHeight: "min(84svh, 880px)",
            }}
          >
            <video
              ref={videoRef}
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              poster="/portrait-bust.webp"
              className="w-full h-full object-contain mix-blend-multiply"
              style={{
                filter: "contrast(1.02) brightness(1.01)",
              }}
            >
              <source src="/hero/hero.webm" type="video/webm" />
              <source src="/hero/hero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Floating Sound Control Button */}
          <div className="absolute bottom-6 right-6 z-20">
            <div className="relative">
              {autoplayBlocked && (
                <span className="absolute inset-0 rounded-full bg-[#0d0d0d]/20 animate-ping pointer-events-none" />
              )}
              <button
                onClick={toggleSound}
                aria-label={isMuted ? "Unmute intro video audio" : "Mute intro video audio"}
                className="w-[46px] h-[46px] rounded-full bg-[#0d0d0d] text-[#ffffff] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                {isMuted ? (
                  // ▶ Play / Unmute icon
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  // ❚❚ Pause / Mute icon
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Role Heading & Description */}
        <div className="text-center mt-4 max-w-2xl">
          <div className="section-tag inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0d0d0d]" />
            <span>{PROFILE.location}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0d0d0d] leading-none mb-4">
            {PROFILE.role}.
          </h1>
          <p className="text-sm sm:text-base text-[#77756f] max-w-lg mx-auto mb-8 font-normal">
            {PROFILE.headline}. 9+ years designing high-impact web and mobile products across eCommerce, B2B, and SaaS.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollTo("#work")}
              className="btn-primary"
            >
              View My Work
            </button>
            <a
              href={PROFILE.resumePath}
              download
              className="btn-secondary"
              aria-label="Download Resume PDF"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-secondary"
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

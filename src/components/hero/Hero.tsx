"use client";

import React, { useRef, useState, useEffect } from "react";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";

export function Hero() {
  const { scrollTo } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Play youthful, energetic audio greeting with full introduction & AI tools
  const playGreeting = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio
        .play()
        .then(() => {
          setIsVoicePlaying(true);
          setIsMuted(false);
        })
        .catch(() => {
          // Web Speech fallback if audio file playback is blocked
          if (typeof window !== "undefined" && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(
              "Hi, I am Gurpreet! Lead UI/UX and product designer. With over nine years of craft, I design mobile apps, web applications, SaaS dashboards, and scalable design systems. I also leverage modern AI tools like ChatGPT, Claude, Gemini, and Antigravity to create intuitive user experiences faster and smarter. Welcome to my portfolio!"
            );
            utter.rate = 1.05;
            utter.pitch = 1.25;
            utter.onend = () => {
              setIsVoicePlaying(false);
              setIsMuted(true);
            };
            window.speechSynthesis.speak(utter);
            setIsVoicePlaying(true);
            setIsMuted(false);
          }
        });
    }
  };

  // Video Autoplay (Silent video loop)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {});
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
          const audio = audioRef.current;
          if (audio) audio.pause();
          setIsVoicePlaying(false);
          setIsMuted(true);
        }
      },
      {
        threshold: [0, 0.35, 0.7],
      }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Toggle Sound Button: Plays "Hey, I am Gurpreet, senior UI/UX designer."
  const toggleSound = () => {
    const audio = audioRef.current;
    if (isVoicePlaying) {
      if (audio) audio.pause();
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsVoicePlaying(false);
      setIsMuted(true);
    } else {
      playGreeting();
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
              muted
              loop
              playsInline
              preload="auto"
              poster="/portrait-bust.png"
              className="w-full h-full object-contain mix-blend-multiply"
              style={{
                filter: "contrast(1.02) brightness(1.01)",
              }}
            >
              <source src="/hero/hero.webm" type="video/webm" />
              <source src="/hero/hero.mp4" type="video/mp4" />
            </video>

            {/* Voice Audio Track */}
            <audio
              ref={audioRef}
              preload="auto"
              onEnded={() => {
                setIsVoicePlaying(false);
                setIsMuted(true);
              }}
            >
              <source src="/hero/intro-voice.m4a" type="audio/mp4" />
              <source src="/hero/intro-voice.wav" type="audio/wav" />
            </audio>
          </div>

          {/* Floating Sound Control Button */}
          <div className="absolute bottom-6 right-6 z-20">
            <div className="relative group/sound">
              {autoplayBlocked && (
                <span className="absolute inset-0 rounded-full bg-[#0d0d0d]/20 animate-ping pointer-events-none" />
              )}
              <button
                onClick={toggleSound}
                aria-label={
                  isVoicePlaying
                    ? "Pause voice intro"
                    : "Listen to Gurpreet: Lead UI/UX designer and AI tools overview"
                }
                className="w-[46px] h-[46px] rounded-full bg-[#0d0d0d] text-[#ffffff] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                {isVoicePlaying ? (
                  // Sound waves / Pause icon
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  // Speaker / Play voice icon
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
              {/* Tooltip */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#0d0d0d] text-[#f4f2ee] text-[11px] font-mono tracking-tight whitespace-nowrap opacity-0 group-hover/sound:opacity-100 transition-opacity pointer-events-none shadow-md">
                {isVoicePlaying
                  ? "Playing intro (Lead UI/UX & AI Tools)..."
                  : 'Voice: "Hi, I am Gurpreet! Lead UI/UX..."'}
              </div>
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

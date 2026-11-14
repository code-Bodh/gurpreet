"use client";

import React from "react";
import Image from "next/image";

export function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/919814275335?text=Hi%20Gurpreet,%20I%20saw%20your%20portfolio";

  return (
    <aside
      aria-label="Contact Gurpreet on WhatsApp"
      className="fixed bottom-6 left-6 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Gurpreet on WhatsApp (+91 98142 75335)"
        className="group relative flex items-center gap-3 p-2 pr-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#0d0d0d]/10 text-[#0d0d0d] shadow-[0_12px_32px_rgba(13,13,13,0.12)] hover:shadow-[0_16px_40px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Soft pulse glow around squircle icon */}
        <div className="relative w-11 h-11 shrink-0 rounded-[14px] overflow-hidden shadow-sm">
          <Image
            src="/whatsapp-icon.png"
            alt="WhatsApp Chat"
            width={44}
            height={44}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Label */}
        <div className="flex flex-col text-left">
          <span className="text-[12px] font-bold tracking-tight leading-none text-[#0d0d0d] font-sans flex items-center gap-1.5">
            <span>WhatsApp</span>
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          </span>
          <span className="text-[10px] font-mono text-[#77756f] leading-tight mt-1">
            +91 98142 75335
          </span>
        </div>
      </a>
    </aside>
  );
}

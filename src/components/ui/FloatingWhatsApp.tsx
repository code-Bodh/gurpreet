"use client";

import React from "react";

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
        className="group relative flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Soft pulse ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* Circular icon container */}
        <div className="w-10 h-10 rounded-full bg-white text-[#25D366] flex items-center justify-center shrink-0 shadow-inner">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.34 7.34 9.03 7.41 8.78 7.68C8.53 7.95 7.82 8.62 7.82 9.97C7.82 11.32 8.81 12.63 8.94 12.81C9.08 12.99 10.87 15.75 13.62 16.94C14.27 17.22 14.78 17.39 15.18 17.51C15.84 17.72 16.43 17.69 16.91 17.62C17.44 17.54 18.55 16.95 18.78 16.3C19.01 15.65 19.01 15.09 18.94 14.97C18.87 14.86 18.68 14.79 18.39 14.65C18.11 14.51 16.73 13.83 16.48 13.74C16.22 13.65 16.03 13.6 15.84 13.88C15.66 14.16 15.13 14.79 14.97 14.97C14.81 15.16 14.65 15.18 14.37 15.04C14.09 14.9 12.91 14.51 11.51 13.27C10.42 12.3 9.69 11.11 9.47 10.74C9.25 10.37 9.45 10.17 9.59 10.03C9.72 9.9 9.88 9.69 10.02 9.53C10.16 9.37 10.21 9.25 10.3 9.07C10.4 8.88 10.35 8.72 10.28 8.58C10.21 8.44 9.65 7.07 9.53 7.34Z" />
          </svg>
        </div>

        {/* Text Label */}
        <div className="flex flex-col">
          <span className="text-[12px] font-bold tracking-tight leading-none text-white font-sans">
            Chat on WhatsApp
          </span>
          <span className="text-[9px] font-mono opacity-90 leading-tight text-white/90">
            Quick response · Direct
          </span>
        </div>
      </a>
    </aside>
  );
}

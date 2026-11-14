import React from "react";

export function isBrand(key: string): boolean {
  const brandKeys = [
    "figma",
    "xd",
    "photoshop",
    "illustrator",
    "express",
    "firefly",
    "canva",
    "keynote",
    "chatgpt",
    "claude",
    "gemini",
    "stitch",
    "meta",
  ];
  return brandKeys.includes(key.toLowerCase());
}

export function TechLogo({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Brand SVGs with authentic colors
  switch (key) {
    case "figma":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 38 57"
          fill="none"
          className={className}
        >
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      );

    case "xd":
    case "adobexd":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect width="48" height="48" rx="10" fill="#470137" />
          <path d="M12 34L19.5 14H23.5L31 34H26.8L25.2 29.5H17.8L16.2 34H12ZM19 25.8H24L21.5 18.5H21.3L19 25.8Z" fill="#FF61F6" />
          <path d="M33 14H36.8V34H33V14Z" fill="#FF61F6" />
        </svg>
      );

    case "photoshop":
    case "ps":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect width="48" height="48" rx="10" fill="#001E36" />
          <path d="M14 15H21.5C24.5 15 26.5 16.8 26.5 19.8C26.5 22.8 24.5 24.6 21.5 24.6H17.8V33H14V15ZM17.8 21.4H21C22.4 21.4 23.1 20.8 23.1 19.8C23.1 18.8 22.4 18.2 21 18.2H17.8V21.4Z" fill="#31A8FF" />
          <path d="M28 30C28.8 30.6 30.4 31.2 32 31.2C33.8 31.2 34.6 30.4 34.6 29.4C34.6 27.2 30.8 27.2 30.8 24C30.8 22 32.5 20.5 35 20.5C36.4 20.5 37.6 21 38.3 21.4L37.4 23.8C36.8 23.4 35.8 23 35 23C33.6 23 33 23.7 33 24.5C33 26.6 36.8 26.6 36.8 29.8C36.8 32 35 33.5 32 33.5C30.2 33.5 28.8 32.8 28 32.2L28 30Z" fill="#31A8FF" />
        </svg>
      );

    case "illustrator":
    case "ai":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect width="48" height="48" rx="10" fill="#330000" />
          <path d="M12 34L19.2 14H23.8L31 34H26.8L25.3 29.5H17.7L16.2 34H12ZM18.8 25.8H24.2L21.6 18.2H21.4L18.8 25.8Z" fill="#FF9A00" />
          <path d="M33.5 18H36.8V34H33.5V18ZM33.5 13.5H36.8V16H33.5V13.5Z" fill="#FF9A00" />
        </svg>
      );

    case "express":
    case "adobeexpress":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect width="48" height="48" rx="10" fill="#1C1844" />
          <path d="M14 15H34V18.5H18.2V22.2H32V25.7H18.2V29.5H34V33H14V15Z" fill="#5C52E5" />
        </svg>
      );

    case "firefly":
    case "adobefirefly":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect width="48" height="48" rx="10" fill="#2B0505" />
          <path d="M24 10C24 10 27 18 34 20C27 22 24 30 24 30C24 30 21 22 14 20C21 18 24 10 24 10Z" fill="#FA8C16" />
          <circle cx="34" cy="14" r="3" fill="#E22525" />
          <circle cx="14" cy="28" r="2.5" fill="#FA8C16" />
        </svg>
      );

    case "canva":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="20" fill="#00C4CC" />
          <path d="M24 12C17.4 12 12 17.4 12 24C12 30.6 17.4 36 24 36C30.6 36 36 30.6 36 24" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="27" cy="21" r="5" fill="#7D2AE8" />
        </svg>
      );

    case "keynote":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect width="48" height="48" rx="10" fill="#007AFF" />
          <path d="M14 34L24 14L34 34H29.5L24 22L18.5 34H14Z" fill="#ffffff" />
          <rect x="22" y="27" width="4" height="7" rx="1" fill="#FFD60A" />
        </svg>
      );

    case "chatgpt":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#10A37F" />
          <path d="M24 14C20.7 14 18 16.7 18 20V23L15 24.7C13.6 25.5 13.1 27.3 13.9 28.7C14.7 30.1 16.5 30.6 17.9 29.8L20 28.6V31C20 32.7 21.3 34 23 34H25C26.7 34 28 32.7 28 31V28.6L30.1 29.8C31.5 30.6 33.3 30.1 34.1 28.7C34.9 27.3 34.4 25.5 33 24.7L30 23V20C30 16.7 27.3 14 24 14Z" fill="#ffffff" />
        </svg>
      );

    case "claude":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#CC785C" />
          <path d="M16 32L24 16L32 32H27.5L24 24.5L20.5 32H16Z" fill="#ffffff" />
        </svg>
      );

    case "gemini":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#1A73E8" />
          <path d="M24 10C24 17.7 17.7 24 10 24C17.7 24 24 30.3 24 38C24 30.3 30.3 24 38 24C30.3 24 24 17.7 24 10Z" fill="#ffffff" />
        </svg>
      );

    case "stitch":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#8E24AA" />
          <path d="M16 16L32 32M32 16L16 32" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case "meta":
    case "metaai":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#0081FB" />
          <path d="M14 24C14 21 16 19 18.5 19C21 19 23 21 24 23.5C25 21 27 19 29.5 19C32 19 34 21 34 24C34 27 32 29 29.5 29C27 29 25 27 24 24.5C23 27 21 29 18.5 29C16 29 14 27 14 24Z" stroke="#ffffff" strokeWidth="3" fill="none" />
        </svg>
      );

    case "ios":
    case "apple":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.95-1 .04-2.12.65-2.77 1.43-.58.68-1.08 1.77-.95 2.84 1.12.09 2.18-.58 2.76-1.32z"/>
        </svg>
      );

    case "android":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0003s.4482-1.0003.9993-1.0003c.5516 0 .9997.4486.9997 1.0003s-.4481 1.0003-.9997 1.0003m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0003s.4482-1.0003.9993-1.0003c.5516 0 .9997.4486.9997 1.0003s-.4481 1.0003-.9997 1.0003m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.411 13.8559 8 12 8s-3.5902.411-5.1368.9497L4.841 5.4467a.416.416 0 00-.5677-.1521.4157.4157 0 00-.152.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
        </svg>
      );

    default:
      // Concept Line Icons (thin stroke in #0d0d0d / #3a3a3a)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {key.includes("wireframe") ? (
            <>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </>
          ) : key.includes("prototype") ? (
            <>
              <polygon points="5 3 19 12 5 21 5 3" />
            </>
          ) : key.includes("dashboard") ? (
            <>
              <rect x="3" y="3" width="7" height="9" />
              <rect x="14" y="3" width="7" height="5" />
              <rect x="14" y="12" width="7" height="9" />
              <rect x="3" y="16" width="7" height="5" />
            </>
          ) : key.includes("system") ? (
            <>
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <circle cx="12" cy="18" r="3" />
              <line x1="8.5" y1="7.5" x2="10" y2="15.5" />
              <line x1="15.5" y1="7.5" x2="14" y2="15.5" />
            </>
          ) : key.includes("flow") ? (
            <>
              <rect x="2" y="5" width="6" height="6" rx="1" />
              <rect x="16" y="5" width="6" height="6" rx="1" />
              <rect x="9" y="15" width="6" height="6" rx="1" />
              <path d="M8 8h8M12 8v7" />
            </>
          ) : key.includes("research") ? (
            <>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </>
          ) : key.includes("mobile") ? (
            <>
              <rect x="5" y="2" width="14" height="20" rx="3" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </>
          ) : key.includes("data") || key.includes("visualization") ? (
            <>
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </>
          ) : key.includes("handoff") ? (
            <>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </>
          ) : (
            <>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </>
          )}
        </svg>
      );
  }
}

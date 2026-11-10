import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollProvider } from "@/lib/scroll";

const interTight = localFont({
  src: "../fonts/InterTight-Variable.woff2",
  variable: "--font-inter-tight",
  display: "swap",
  weight: "100 900",
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../fonts/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://designsbykaur.com"),
  title: "Gurpreet Kaur — Senior UI/UX Designer",
  description:
    "Senior UI/UX Designer with 9+ years of experience leading design for websites, mobile apps, SaaS & eCommerce platforms. Chandigarh, India.",
  authors: [{ name: "Gurpreet Kaur" }],
  openGraph: {
    title: "Gurpreet Kaur — Senior UI/UX Designer",
    description:
      "Senior UI/UX Designer with 9+ years of experience leading design for websites, mobile apps, SaaS & eCommerce platforms.",
    url: "https://designsbykaur.com",
    siteName: "Gurpreet Kaur Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Gurpreet Kaur — Senior UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/portrait-bust.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased bg-[#f4f2ee] text-[#0d0d0d]">
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}

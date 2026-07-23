import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Pokémon Fracture & Revolt | A Region Divided",
  description:
    "A hopeful, dramatic two-version Pokémon fan game concept about friendship, faith, political upheaval, and uniting a beautiful region at a historic turning point.",
  applicationName: "Pokémon Fracture & Revolt",
  keywords: [
    "Pokémon fan game",
    "Pokémon Fracture",
    "Pokémon Revolt",
    "creature collector RPG",
    "fan game concept",
  ],
  authors: [{ name: "Anthony Cavuoti" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Pokémon Fracture & Revolt",
    description: "One region. Two versions. A future worth fighting for.",
    type: "website",
    images: [
      {
        url: "/art/fracture-revolt-duo-banner.png",
        width: 1672,
        height: 941,
        alt: "Pokémon Fracture and Revolt dual-version key art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokémon Fracture & Revolt",
    description: "One region. Two versions. A future worth fighting for.",
    images: ["/art/fracture-revolt-duo-banner.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#080a10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}

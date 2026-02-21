import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Luxury Interior Designers | Skanda Interiors",
  description:
    "Skanda Interiors creates timeless luxury interior designs with premium craftsmanship and refined aesthetics. Book a consultation today.",
  keywords: "luxury interior design, interior designers bangalore, modular kitchen, custom wardrobes, turnkey interiors",
  openGraph: {
    title: "Luxury Interior Designers | Skanda Interiors",
    description:
      "Skanda Interiors creates timeless luxury interior designs with premium craftsmanship and refined aesthetics.",
    type: "website",
    locale: "en_IN",
    siteName: "Skanda Interiors",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Skanda Interiors – Luxury Living Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Designers | Skanda Interiors",
    description: "Timeless luxury interior designs with premium craftsmanship.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

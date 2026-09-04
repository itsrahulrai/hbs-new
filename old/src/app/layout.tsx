import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PreHeader } from "@/components/layout/PreHeader";
import "@/styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Hover Business Services LLP | AI-Powered Digital Marketing Agency",
    template: "%s | Hover Business Services LLP",
  },
  description:
    "AI-powered digital marketing, web & app development, and creative design that delivers real business growth. Rank higher, generate more leads, automate smarter.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <PreHeader />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

import { cn } from "@/lib/utils";
import Navbar from "@/components/custom/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/custom/Footer";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Simon Alvas",
  description: "personal portfolio site of the great Simon Alvas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      {/* <canvas id="myCanvas" className="absolute inset-0 -z-10 h-full w-full" style={{ width: "100%", height: "100%", position: "fixed", zIndex: 0, top: "0px", left: "0px", backgroundColor: "rgb(11, 15, 23)", pointerEvents: "none" }} data-generated="false" aria-hidden="true" width="984" height="953"></canvas> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          manrope.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

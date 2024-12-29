import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meetify",
  description: "Meetify isn’t just another video conferencing tool—it's the next evolution in online meetings. Say goodbye to laggy calls and clunky interfaces. Meetify delivers crystal-clear video, blazing-fast screen sharing, and all the features you need to dominate your virtual meetings. Whether you're leading a team, giving a lecture, or just catching up with colleagues, Meetify makes the competition look obsolete. Time to level up your meetings."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}
      >
        {children}
      </body>
    </html>
  );
}

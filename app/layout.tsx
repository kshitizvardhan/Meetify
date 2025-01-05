import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Meetify",
  description:
    "Meetify isn’t just another video conferencing tool—it's the next evolution in online meetings. Say goodbye to laggy calls and clunky interfaces. Meetify delivers crystal-clear video, blazing-fast screen sharing, and all the features you need to dominate your virtual meetings. Whether you're leading a team, giving a lecture, or just catching up with colleagues, Meetify makes the competition look obsolete. Time to level up your meetings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      layout: {
        socialButtonsVariant: "iconButton"
      },
      variables: {
        colorText: "#fff",
        colorPrimary: "#7C3AED",
        colorBackground: "#1C1F2E",
        colorInputBackground: "#252a41",
        colorInputText: "#fff"
      }
    }}>
      <html lang="en">
        <body
          className={`${poppins.variable} ${poppins.variable} antialiased bg-dark-2 font-poppins`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

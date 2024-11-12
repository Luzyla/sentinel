import type { Metadata } from "next";
import SessionWrapper from "@/components/SessionWrapper";
import UserProvider from "@/providers/UserProvider";
import { Inconsolata } from "next/font/google";
import "./globals.css";
const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sentinel",
  description: "Sentinel is a platform created by Luzyla.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      {/* <UserProvider> */}
      <html lang="en" className="scroll-thin">
        <body
          className={`${inconsolata.className} bg-second-color text-accent-color flex flex-row flex-wrap`}
        >
          {children}
        </body>
      </html>
      {/* </UserProvider> */}
    </SessionWrapper>
  );
}

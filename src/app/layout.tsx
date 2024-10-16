import type { Metadata } from "next";
import SessionWrapper from "../../components/SessionWrapper";
import {Inconsolata} from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sentinel",
  description: "Sentinel is a social platform created by Luzyla.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={`${inconsolata.className} flex h-screen justify-center bg-second-color text-accent-color`}>{children}</body>
    </html>
    </SessionWrapper>
  );
}

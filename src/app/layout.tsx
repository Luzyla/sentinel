import type { Metadata } from "next";
import SessionWrapper from "../../components/SessionWrapper";
import Navbar from "../../components/Navbar";
import { Inconsolata } from "next/font/google";
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inconsolata.className} bg-second-color text-accent-color`}>
      {/* <header className='bg-pure-black p-4'>
        <Navbar />
      </header> */}
      {children}
      </body>
    </html>
    </SessionWrapper>
  );
}

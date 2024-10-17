import type { Metadata } from "next";
import SessionWrapper from "../../components/SessionWrapper";
import Navbar from "../../components/Navbar";
/* import { Inconsolata } from "next/font/google"; */
import "./globals.css";

/* const inconsolata = Inconsolata({ subsets: ["latin"] });
console.log('fonts', inconsolata, inconsolata.className) */

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
      <body className='bg-second-color text-accent-color'>
      <header className='bg-pure-black p-4'>
        <Navbar />
      </header>
      {children}
      </body>
    </html>
    </SessionWrapper>
  );
}

import './globals.css';
import CustomCursor from './CustomCursor';
import Navbar from './navbar'; // Skontroluj, či máš súbor 'navbar.tsx' malými alebo veľkými
import { Syne } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`${syne.variable}`}>
      <body className="font-sans text-black antialiased shadow-none">
        {/* 1. VRSTVA: ŠÍPKA */}
        <CustomCursor />
        
        {/* 2. VRSTVA: MENU (Vložené raz a správne) */}
        <Navbar />

        {/* 3. VRSTVA: OBSAH STRÁNOK */}
        <main>{children}</main>

        {/* ANALYTIKA */}
        <Analytics />
      </body>
    </html>
  );
}
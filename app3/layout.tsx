import { Syne } from "next/font/google"; // Importujeme priamo z Google fontov
import "./globals.css";

// Definujeme font
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"], // Vyberieme váhy, ktoré chceš (800 je extra bold)
  variable: "--font-syne",       // Toto je dôležité! Vytvorí to CSS premennú
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      {/* Tu povieme body, aby použilo tú premennú a font-sans */}
      <body className={`${syne.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
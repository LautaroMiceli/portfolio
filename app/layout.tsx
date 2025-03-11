import type { Metadata } from "next";
import { inter } from "./lib/fonts";
import './globals.css'




export const metadata: Metadata = {
  title: "Lautaro Miceli",
  description: "Portfolio personal de Lautaro Miceli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="es">
      <body
        className="flex gap-2 px-14 h-full"
      >
        {children}
      </body>
    </html>
  );
}

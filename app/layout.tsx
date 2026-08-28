import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAS - Thermodynamic Analysis Studio",
  description: "Interactive thermodynamics platform for exploring and analyzing power cycles through dynamic diagrams, live simulation, performance calculations, cycle comparison, graphs, optimization, and parametric studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

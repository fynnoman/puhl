import type { Metadata } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puhl GmbH — Straße trifft Schiene | Spedition, Bahnumschlag, Container",
  description:
    "Puhl GmbH aus Beckingen: Spedition, Logistik, Lagerung, Gleisanschluss, Bahn- und Containerverladung, Kombinierter Verkehr, Entsorgungsfachbetrieb. Drei eigene Bahn- und Containerterminals im Saarland.",
  keywords: [
    "Puhl GmbH",
    "Spedition Saarland",
    "Bahnverladung",
    "Kombinierter Verkehr",
    "Containerterminal Beckingen",
    "Gleisanschluss",
    "Entsorgungsfachbetrieb",
    "Straße trifft Schiene",
  ],
  metadataBase: new URL("https://www.puhl.eu"),
  openGraph: {
    title: "Puhl GmbH — Straße trifft Schiene",
    description:
      "Spedition, Bahnumschlag und Containerhandling im Saarland. Drei eigene Terminals in Beckingen, Dillingen und Saarbrücken.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

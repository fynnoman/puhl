import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import BigImageBlock from "@/components/BigImageBlock";
import { TrainTrack, ArrowRight } from "lucide-react";
import Link from "next/link";
import { img } from "@/lib/data";

export const metadata = {
  title: "Bahnlinien & Einzelwagenverkehre — Puhl GmbH",
  description:
    "Einzelwagenverkehre über unsere Terminals in Beckingen, Dillingen und Saarbrücken.",
};

const linien = [
  { from: "Beckingen", to: "Deutschland", type: "Einzelwagen" },
  { from: "Dillingen", to: "Saarland", type: "Waggonbeladung" },
  { from: "Saarbrücken", to: "Europa", type: "Container / KV" },
  { from: "Beckingen", to: "Frankreich", type: "KV / Grenzverkehr" },
];

export default function BahnlinienPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bahnlinien"
        title={
          <>
            Einzelwagen­
            <br />
            <span className="italic text-ink-950/55">verkehre.</span>
          </>
        }
        subtitle="Individuelle Waggon-Lösungen für Kunden, die nicht in ganzen Zügen denken."
        image={img.railsSunset}
        alt="Bahnhof mit einzelnen Güterwaggons"
      />

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="glass-strong rounded-[36px] p-6 md:p-10 divide-y divide-ink-950/6">
            {linien.map((l, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-5">
                  <div className="num text-ink-950/30 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex items-center gap-3 md:gap-5">
                    <div className="font-display text-3xl md:text-4xl text-ink-950">
                      {l.from}
                    </div>
                    <ArrowRight className="size-5 text-signal-500" />
                    <div className="font-display text-3xl md:text-4xl text-ink-950/70">
                      {l.to}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-950/50">
                  <TrainTrack className="size-3.5" />
                  {l.type}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl">
            <p className="text-ink-950/70 text-lg">
              Für individuelle Einzelwagenverkehre über unsere Terminals prüfen
              wir die passende Route und stimmen den Ablauf mit Ihnen ab.
            </p>
            <Link href="/kontakt" className="mt-6 inline-flex btn btn-primary">
              Route anfragen
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <BigImageBlock
        image={img.freightTrain}
        alt="Einzelne Güterwaggons am Terminal"
        eyebrow="Kombinierter Verkehr"
        title={
          <>
            Vom Waggon
            <br />
            <span className="italic text-white/70">bis zur Zustellung.</span>
          </>
        }
        body="Einzelwagen- und Ganzzugverkehre kombinieren wir mit unserem eigenen Fuhrpark zu vollständigen Transportketten."
        align="right"
      />

      <CTA />
    </>
  );
}

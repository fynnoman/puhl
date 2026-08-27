import PageHeader from "@/components/PageHeader";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import BigImageBlock from "@/components/BigImageBlock";
import CTA from "@/components/CTA";
import { img } from "@/lib/data";

export const metadata = {
  title: "Unternehmen — Puhl GmbH",
  description:
    "Puhl GmbH: Tätigkeitsgebiete, Wald- und Forstprodukteumschlag, 93.000 m² Firmengelände mit eigenen Gleisanschlüssen.",
};

export default function UnternehmenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Unternehmen"
        title={
          <>
            Speditions- und
            <br />
            <span className="italic text-ink-950/55">Logistikdienstleister.</span>
          </>
        }
        subtitle="Spedition · Lagerung · Gleisanschluss · Bahnumschlag · Entsorgungsfachbetrieb. Alles unter einem Dach."
        image={img.containerPort}
        alt="Containerterminal in der Abenddämmerung"
      />

      <StatsBar />

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-xs uppercase tracking-[0.22em] text-signal-500">
            Tätigkeitsgebiete
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1] text-ink-950">
            Spedition, Lagerung, Gleisanschluss,
            <span className="italic text-ink-950/55"> Bahnumschlag</span> und
            Entsorgungsfachbetrieb.
          </h2>
          <p className="mt-8 text-lg text-ink-950/70 leading-relaxed">
            Die Firmengelände umfassen an allen Standorten insgesamt 93.000 m²
            Fläche. Zudem befinden sich auf den Firmengeländen Gleisanschlüsse,
            welche an das öffentliche Schienennetz angeschlossen sind. Damit
            verbinden wir Straße und Schiene direkt vor Ort — ohne Umwege, ohne
            Zwischenschritte.
          </p>
        </div>
      </section>

      <BigImageBlock
        image={img.forest}
        alt="Wald mit Sonnenlicht zwischen Baumstämmen"
        eyebrow="Spezialisierung"
        title={
          <>
            Wald- und Forst-
            <br />
            <span className="italic text-white/70">produkteumschlag.</span>
          </>
        }
        body="Von Rundholz bis zu Forstsortimenten übernehmen wir den Umschlag zwischen Straße und Schiene direkt auf unseren Terminals."
      />

      <Services />

      <CTA />
    </>
  );
}

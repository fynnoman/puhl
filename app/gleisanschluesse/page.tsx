import PageHeader from "@/components/PageHeader";
import Standorte from "@/components/Standorte";
import BigImageBlock from "@/components/BigImageBlock";
import CTA from "@/components/CTA";
import { img } from "@/lib/data";

export const metadata = {
  title: "Gleisanschlüsse — Puhl GmbH",
  description:
    "Drei Standorte, drei eigene Gleisanschlüsse. 5.080 Meter Gleislänge auf 93.000 m² Firmengelände.",
};

export default function GleisanschluessePage() {
  return (
    <>
      <PageHeader
        eyebrow="Gleisanschlüsse"
        title={
          <>
            5.080 Meter Gleis.
            <br />
            <span className="italic text-ink-950/55">Direkt auf unseren Höfen.</span>
          </>
        }
        subtitle="Beckingen, Dillingen und Saarbrücken — drei Standorte mit eigenen Gleisanschlüssen an das öffentliche Schienennetz."
        image={img.railsSunset}
        alt="Schienenstränge in der Dämmerung"
      />

      <BigImageBlock
        image={img.freightTrain}
        alt="Güterzug an Verladerampe"
        eyebrow="Anschluss ans Netz"
        title={
          <>
            Vom Firmengelände
            <br />
            <span className="italic text-white/70">ins Schienennetz.</span>
          </>
        }
        body="Alle drei Standorte sind unmittelbar an das öffentliche Schienennetz angeschlossen — die Grundlage für effizienten kombinierten Verkehr."
      />

      <Standorte />

      <CTA />
    </>
  );
}

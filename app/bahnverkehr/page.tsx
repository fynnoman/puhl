import PageHeader from "@/components/PageHeader";
import BahnBlock from "@/components/BahnBlock";
import BigImageBlock from "@/components/BigImageBlock";
import CTA from "@/components/CTA";
import { img } from "@/lib/data";

export const metadata = {
  title: "Bahnverkehr & Bahnumschlag — Puhl GmbH",
  description:
    "Bahnumschlag auf drei Terminals. Schüttgüter, Stückgüter, Container, Wald- und Forstprodukte.",
};

export default function BahnverkehrPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bahnverkehr"
        title={
          <>
            Bahnumschlag auf
            <br />
            <span className="italic text-ink-950/55">drei Terminals.</span>
          </>
        }
        subtitle="Schüttgüter, Stückgüter, Container sowie Wald- und Forstprodukte — flexibel und materialübergreifend."
        image={img.freightTrain}
        alt="Güterzug in der Abenddämmerung"
      />

      <BahnBlock />

      <BigImageBlock
        image={img.containersStacked}
        alt="Gestapelte Container am Terminal"
        eyebrow="Kombinierter Verkehr"
        title={
          <>
            Ein Auftrag.
            <br />
            <span className="italic text-white/70">Zwei Verkehrsträger.</span>
          </>
        }
        body="Wir verknüpfen Straße und Schiene in einem nahtlosen Prozess — vom Voranlauf über den Hauptlauf auf der Schiene bis zur Zustellung."
        align="right"
      />

      <CTA />
    </>
  );
}

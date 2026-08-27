import PageHeader from "@/components/PageHeader";
import Fuhrpark from "@/components/Fuhrpark";
import BigImageBlock from "@/components/BigImageBlock";
import CTA from "@/components/CTA";
import { img } from "@/lib/data";

export const metadata = {
  title: "Spedition & Fuhrpark — Puhl GmbH",
  description:
    "30 Sattelfahrzeuge in acht Kategorien: Plan-, Tautliner-, Kipp-, Container-, Tankcontainer-, Kippcontainer-, Silo- und Abfalltransporte.",
};

export default function SpeditionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Spedition"
        title={
          <>
            30 Sattelfahrzeuge.
            <br />
            <span className="italic text-ink-950/55">Acht Kategorien.</span>
          </>
        }
        subtitle="Ein Fuhrpark, der jede Anforderung im modernen Güterverkehr abdeckt."
        image={img.highwayTrucks}
        alt="Sattelzug auf der Autobahn"
      />

      <Fuhrpark />

      <BigImageBlock
        image={img.containerPort}
        alt="Container am Terminal"
        eyebrow="Internationale Spedition"
        title={
          <>
            Zuverlässig terminiert.
            <br />
            <span className="italic text-white/70">Über Grenzen hinweg.</span>
          </>
        }
        body="Wir arbeiten ausschließlich auf Grundlage der Allgemeinen Deutschen Spediteurbedingungen (ADSp) in ihrer jeweils neuesten Fassung."
        align="right"
      />

      <CTA />
    </>
  );
}

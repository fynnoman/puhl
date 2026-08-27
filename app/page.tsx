import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import BigImageBlock from "@/components/BigImageBlock";
import Services from "@/components/Services";
import Standorte from "@/components/Standorte";
import Fuhrpark from "@/components/Fuhrpark";
import BahnBlock from "@/components/BahnBlock";
import CTA from "@/components/CTA";
import Marquee from "@/components/Marquee";
import { img } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      <BigImageBlock
        image={img.containerPort}
        alt="Containerterminal mit gestapelten Containern"
        eyebrow="Unternehmen"
        title={
          <>
            Schütt- und Stückgüter,
            <br />
            <span className="italic text-white/70">Container inklusive.</span>
          </>
        }
        body={
          "Puhl hat sich mit einem umfangreichen Dienstleistungsangebot insbesondere im Bereich Straße trifft Schiene auf Schütt- und Stückgüter sowie Containerhandling spezialisiert. Drei eigene Bahn- und Containerterminals in Beckingen, Dillingen und Saarbrücken ermöglichen viele Aktivitäten direkt auf den Firmengeländen."
        }
        cta={{ href: "/unternehmen", label: "Zum Unternehmen" }}
      />

      <Services />

      <Marquee />

      <Standorte />

      <BigImageBlock
        image={img.freightTrain}
        alt="Güterzug an einer Verladerampe"
        eyebrow="Bahnumschlag"
        title={
          <>
            Modernes Umschlag­equipment.
            <br />
            <span className="italic text-white/70">Kurze Wege.</span>
          </>
        }
        body="Auf unseren Bahnterminals verladen wir Schüttgüter, Stückgüter, Container sowie Wald- und Forstprodukte — flexibel und materialübergreifend."
        cta={{ href: "/bahnverkehr", label: "Bahnverkehr entdecken" }}
        align="right"
      />

      <Fuhrpark />

      <BahnBlock />

      <CTA />
    </>
  );
}

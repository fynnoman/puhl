import { contact } from "@/lib/data";

export const metadata = {
  title: "Impressum — Puhl GmbH",
};

export default function ImpressumPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-xs uppercase tracking-[0.22em] text-signal-500">
          Impressum
        </div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] text-ink-950">
          Impressum und
          <br />
          <span className="italic text-ink-950/55">rechtliche Hinweise.</span>
        </h1>

        <div className="mt-12 space-y-6 text-ink-950/80">
          <Block title="Angaben gemäß § 5 TMG">
            <p className="font-medium text-ink-950">{contact.name}</p>
            <p>
              {contact.street}
              <br />
              {contact.zip} {contact.city}
            </p>
            <p className="num pt-2">
              Tel.: {contact.phone}
              <br />
              Fax: {contact.fax}
              <br />
              E-Mail:{" "}
              <a className="text-signal-500 hover:text-signal-600" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
          </Block>

          <Block title="Tätigkeitsgebiete">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
              <li>Internationale Spedition</li>
              <li>Lagerung</li>
              <li>Bahnumschlag</li>
              <li>Gleisanschluss</li>
              <li>Containerterminal</li>
              <li>Containertransporte</li>
              <li>Entsorgungsfachbetrieb</li>
            </ul>
          </Block>

          <Block title="Handelsregister">
            <p>Puhl GmbH, Sitz Beckingen</p>
            <p>Handelsregister B des Amtsgerichts Saarbrücken HRB 63518</p>
            <p>Gerichtsstand: Merzig</p>
            <p className="num">Ust.-Id-Nr.: DE137970178</p>
            <p>Geschäftsführer: Manfred Puhl, Stefan Puhl</p>
          </Block>

          <Block title="Geschäftsbedingungen">
            <p>
              Wir arbeiten ausschließlich aufgrund der „Allgemeinen Deutschen
              Spediteurbedingungen (ADSp)", jeweils neueste Fassung.
            </p>
            <p>
              Es wird darauf hingewiesen, dass nach deren Ziffer 23 die Haftung
              des Spediteurs bei Verlust oder Beschädigung des Gutes im
              Regelfall auf 5 Euro je Kilogramm des Rohgewichtes der Sendung
              beschränkt ist und dass bei einem Verkehrsvertrag über die
              Beförderung mit verschiedenen Beförderungsmitteln sowie bei
              Großschäden darüber hinaus eine Begrenzung auf zwei
              Sonderziehungsrechte je Kilogramm greift.
            </p>
          </Block>

          <Block title="Zuständige Aufsichtsbehörde">
            <p>
              Landesbetrieb für Straßenbau
              <br />
              Lindenallee 2a
              <br />
              66538 Neunkirchen
            </p>
            <p className="num pt-2">
              Tel.: +49 (0) 6821 / 100-0
              <br />
              Fax: +49 (0) 6821 / 100-203
              <br />
              E-Mail: s1@lfs.saarland.de
            </p>
          </Block>

          <Block title="Urheberschutz und Nutzung">
            <p>
              Der Urheber räumt Ihnen konkret das Nutzungsrecht ein, sich eine
              private Kopie für persönliche Zwecke anzufertigen. Nicht
              berechtigt sind Sie dagegen, die Materialien zu verändern und/oder
              weiterzugeben oder gar selbst zu veröffentlichen.
            </p>
          </Block>

          <Block title="Keine Haftung">
            <p>
              Die Inhalte dieses Webprojekts wurden sorgfältig geprüft und nach
              bestem Wissen erstellt. Für die hier dargebotenen Informationen
              wird jedoch kein Anspruch auf Vollständigkeit, Aktualität,
              Qualität und Richtigkeit erhoben. Es kann keine Verantwortung für
              Schäden übernommen werden, die durch das Vertrauen auf die Inhalte
              dieser Webseite oder deren Gebrauch entstehen.
            </p>
          </Block>

          <Block title="Externe Links">
            <p>
              Der Betreiber dieser Webseite übernimmt keinerlei Verantwortung
              für den Inhalt externer Links.
            </p>
          </Block>
        </div>
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="glass rounded-3xl p-8">
      <h2 className="font-display text-2xl text-ink-950">{title}</h2>
      <div className="mt-4 text-ink-950/70 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

import { contact } from "@/lib/data";

export const metadata = {
  title: "Datenschutz — Puhl GmbH",
};

export default function DatenschutzPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-xs uppercase tracking-[0.22em] text-signal-500">
          Datenschutz
        </div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] text-ink-950">
          Hinweise zum
          <br />
          <span className="italic text-ink-950/55">Datenschutz.</span>
        </h1>

        <div className="mt-12 space-y-6 text-ink-950/80">
          <Block title="Erhebung personenbezogener Daten">
            <p>
              Personenbezogene Daten werden nur mit Ihrem Wissen und Ihrer
              Einwilligung erhoben. Auf Antrag erhalten Sie unentgeltlich
              Auskunft zu den über Sie gespeicherten personenbezogenen Daten.
            </p>
          </Block>

          <Block title="Verantwortlicher">
            <p className="font-medium text-ink-950">{contact.name}</p>
            <p>
              {contact.street}
              <br />
              {contact.zip} {contact.city}
            </p>
            <p className="num pt-2">
              Tel.: {contact.phone}
              <br />
              E-Mail:{" "}
              <a className="text-signal-500 hover:text-signal-600" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
          </Block>

          <Block title="Kontaktaufnahme">
            <p>
              Wenn Sie per E-Mail oder über das Kontaktformular Anfragen an uns
              richten, werden Ihre Angaben zwecks Bearbeitung der Anfrage und
              für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </Block>

          <Block title="Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten. Zudem steht Ihnen ein Recht auf
              Berichtigung, Sperrung oder Löschung dieser Daten zu.
            </p>
          </Block>

          <Block title="Cookies">
            <p>
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies für den Betrieb der Seite. Es findet kein Tracking und
              keine Analyse für Marketingzwecke statt.
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

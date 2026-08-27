import Link from "next/link";
import { contact, nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mt-24 md:mt-32 border-t border-ink-950/6">
      <div className="hairline" />
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-4xl md:text-5xl leading-[0.95] text-ink-950">
            Puhl <span className="text-signal-500">GmbH.</span>
            <br />
            <span className="italic text-ink-950/55">Aus Beckingen im Saarland.</span>
          </div>
          <p className="mt-6 max-w-md text-ink-950/60">
            Speditions- und Logistikdienstleister mit drei eigenen Bahn- und
            Containerterminals. Spedition, Bahnumschlag, kombinierter Verkehr,
            Entsorgungsfachbetrieb.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-ink-950/40">
            Navigation
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-ink-950/75 hover:text-ink-950 transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/impressum"
                className="text-ink-950/60 hover:text-ink-950 transition-colors"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="text-ink-950/60 hover:text-ink-950 transition-colors"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-ink-950/40">
            Kontakt
          </div>
          <div className="mt-4 text-sm text-ink-950/80 space-y-1">
            <div className="font-medium text-ink-950">{contact.name}</div>
            <div>{contact.street}</div>
            <div>
              {contact.zip} {contact.city}
            </div>
            <div className="pt-3">
              Tel.:{" "}
              <a
                className="text-ink-950 hover:text-signal-500 transition-colors num"
                href={`tel:${contact.phoneRaw}`}
              >
                {contact.phone}
              </a>
            </div>
            <div className="num text-ink-950/55">Fax: {contact.fax}</div>
            <div>
              <a
                className="text-ink-950 hover:text-signal-500 transition-colors"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-950/6">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ink-950/45">
          <div>
            © {new Date().getFullYear()} Puhl GmbH · Beckingen · Alle Rechte
            vorbehalten.
          </div>
          <div className="num">HRB 63518 · USt-Id DE137970178</div>
        </div>
      </div>
    </footer>
  );
}

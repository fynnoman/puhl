import PageHeader from "@/components/PageHeader";
import { contact, img } from "@/lib/data";
import { Phone, Mail, MapPin, Building2, Printer } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Kontakt — Puhl GmbH",
  description:
    "Puhl GmbH · Südstraße 6 · D-66701 Beckingen · Tel. +49 (0) 6835 / 9220-0 · info@puhl.eu",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title={
          <>
            Direkter Draht
            <br />
            <span className="italic text-ink-950/55">nach Beckingen.</span>
          </>
        }
        subtitle="Persönlich, telefonisch oder per Formular — wir bearbeiten Ihre Anfrage direkt aus dem Hauptsitz."
        image={img.containerPort}
        alt="Containerterminal in der Abenddämmerung"
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-8">
          {/* Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-strong rounded-[28px] p-8">
              <div className="flex items-center gap-2 text-ink-950/50 text-xs uppercase tracking-[0.2em]">
                <Building2 className="size-3.5" />
                Adresse
              </div>
              <div className="mt-4 font-display text-3xl text-ink-950 leading-tight">
                {contact.name}
              </div>
              <div className="mt-3 text-ink-950/80 leading-relaxed">
                {contact.street}
                <br />
                {contact.zip} {contact.city}
              </div>
              <a
                href="https://maps.google.com/?q=Puhl+GmbH+Beckingen"
                target="_blank"
                rel="noreferrer"
                className="mt-6 btn btn-ghost inline-flex"
              >
                <MapPin className="size-4" />
                Route öffnen
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="glass rounded-2xl p-5 group hover:bg-white/95 transition-colors"
              >
                <div className="flex items-center gap-2 text-ink-950/50 text-[10px] uppercase tracking-[0.2em]">
                  <Phone className="size-3" />
                  Telefon
                </div>
                <div className="mt-3 font-display num text-xl text-ink-950 leading-tight">
                  {contact.phone}
                </div>
              </a>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 text-ink-950/50 text-[10px] uppercase tracking-[0.2em]">
                  <Printer className="size-3" />
                  Fax
                </div>
                <div className="mt-3 font-display num text-xl text-ink-950 leading-tight">
                  {contact.fax}
                </div>
              </div>
            </div>

            <a
              href={`mailto:${contact.email}`}
              className="glass rounded-2xl p-6 flex items-center justify-between group hover:bg-white/95 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 text-ink-950/50 text-[10px] uppercase tracking-[0.2em]">
                  <Mail className="size-3" />
                  E-Mail
                </div>
                <div className="mt-3 font-display text-2xl text-ink-950">
                  {contact.email}
                </div>
              </div>
              <div className="size-10 rounded-full bg-signal-500 grid place-items-center transition-transform group-hover:scale-110">
                <Mail className="size-4 text-white" />
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative aspect-[21/9] rounded-[28px] overflow-hidden glass image-fallback">
            <iframe
              title="Karte Puhl GmbH Beckingen"
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.68%2C49.39%2C6.72%2C49.41&layer=mapnik&marker=49.40%2C6.70"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 glass-strong rounded-2xl px-5 py-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink-950/50">
                Hauptsitz
              </div>
              <div className="mt-1 font-display text-2xl text-ink-950">
                {contact.city}
              </div>
              <div className="text-ink-950/60 text-sm">{contact.street}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

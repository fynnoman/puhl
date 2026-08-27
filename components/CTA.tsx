"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { contact, img } from "@/lib/data";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[36px] image-fallback-dark min-h-[560px]">
          <Image
            src={img.railsSunset}
            alt="Gleise in der Abenddämmerung"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-transparent" />

          <div className="relative p-8 md:p-16 lg:p-20">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.22em] text-signal-400">
                Kontakt
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] text-white tracking-tight">
                Anfrage senden.
                <br />
                <span className="italic text-white/70">Persönlich beraten.</span>
              </h2>
              <p className="mt-6 text-white/80 text-lg max-w-xl">
                Für Anfragen zu Spedition, Bahnumschlag, kombiniertem Verkehr
                oder Containerhandling stehen wir Ihnen persönlich zur Verfügung
                — direkt aus Beckingen.
              </p>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-2 max-w-3xl">
              <Link href="/kontakt" className="btn btn-primary !py-3.5 justify-between">
                Anfrage senden
                <ArrowRight className="size-4" />
              </Link>
              <a href={`tel:${contact.phoneRaw}`} className="btn btn-ghost !py-3.5 justify-between">
                <span className="flex items-center gap-2">
                  <Phone className="size-4" />
                  <span className="num">{contact.phone}</span>
                </span>
                <ArrowRight className="size-4 opacity-60" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-white/60">
              <Mail className="size-4" />
              <a
                href={`mailto:${contact.email}`}
                className="text-white/90 hover:text-signal-300 transition-colors"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

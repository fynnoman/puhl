"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Ruler, TrainTrack } from "lucide-react";
import { standorte } from "@/lib/data";

export default function Standorte() {
  return (
    <section id="standorte" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-rail-600">
              Standorte
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-ink-950 tracking-tight">
              Drei Terminals.
              <br />
              <span className="italic text-ink-950/55">Ein Netzwerk im Saarland.</span>
            </h2>
          </div>
          <div className="glass rounded-2xl px-5 py-4 self-start md:self-end">
            <div className="text-xs uppercase tracking-[0.18em] text-ink-950/50">
              Gesamtfläche
            </div>
            <div className="font-display num text-3xl text-ink-950 leading-none mt-1">
              93.000 m²
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-6">
          {standorte.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={`grid md:grid-cols-12 gap-6 items-stretch ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-[28px] image-fallback">
                <Image
                  src={s.image}
                  alt={`Terminal ${s.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/40 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 glass-dark rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/85 flex items-center gap-2">
                  <span className="size-1 rounded-full bg-signal-400" />
                  Standort 0{i + 1}
                </div>
              </div>

              <div className="md:col-span-5 glass-strong rounded-[28px] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-ink-950/50 text-xs uppercase tracking-[0.2em]">
                    <MapPin className="size-3.5" />
                    Saarland
                  </div>
                  <div className="mt-3 font-display text-5xl md:text-6xl text-ink-950 leading-[0.95]">
                    {s.name}
                  </div>
                  <div className="mt-3 text-ink-950/60">{s.role}</div>
                </div>

                <div className="mt-8 divider" />

                <dl className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-950/45 flex items-center gap-1.5">
                      <Ruler className="size-3" />
                      Fläche
                    </dt>
                    <dd className="mt-2 font-display num text-3xl text-ink-950">
                      {s.area}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-950/45 flex items-center gap-1.5">
                      <TrainTrack className="size-3" />
                      Gleis
                    </dt>
                    <dd className="mt-2 font-display num text-3xl text-ink-950">
                      {s.rail}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-950/45">
                      Ausstattung
                    </dt>
                    <dd className="mt-2 text-ink-950/80">{s.equip}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

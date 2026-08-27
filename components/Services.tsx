"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import {
  Truck,
  Warehouse,
  Package,
  Train,
  Container,
  Recycle,
  Route,
  TrainTrack,
} from "lucide-react";

const icons = [Truck, Route, Warehouse, TrainTrack, Train, Container, Package, Recycle];

export default function Services() {
  return (
    <section id="leistungen" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.22em] text-signal-500">
            Leistungen
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-ink-950 tracking-tight">
            Alles aus einer Hand.
            <br />
            <span className="italic text-ink-950/55">
              Von der Straße bis auf die Schiene.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-950/65">
            Spedition, Umschlag, Lagerung, Entsorgung — acht Kernleistungen, die
            wir seit Jahrzehnten unter einem Dach verbinden.
          </p>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 4) * 0.06,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="group relative glass rounded-3xl p-6 overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 size-40 rounded-full bg-rail-500/12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-16 -left-16 size-40 rounded-full bg-signal-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex items-center justify-between">
                  <div className="size-11 rounded-2xl bg-ink-950/[0.04] border border-ink-950/8 grid place-items-center">
                    <Icon className="size-5 text-ink-950/80" />
                  </div>
                  <div className="text-xs num text-ink-950/30">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="relative mt-8">
                  <div className="font-display text-2xl text-ink-950 leading-tight">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm text-ink-950/60 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

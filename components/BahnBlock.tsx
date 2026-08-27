"use client";

import { motion } from "framer-motion";
import { bahnKategorien } from "@/lib/data";

export default function BahnBlock() {
  return (
    <section id="bahnumschlag" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong rounded-[36px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-16 size-80 rounded-full bg-rail-500/20 blur-[100px]" />
          <div className="absolute -bottom-24 -left-16 size-80 rounded-full bg-signal-500/18 blur-[100px]" />

          <div className="relative grid md:grid-cols-2 gap-12 md:gap-16 items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-rail-600">
                Bahnumschlag
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-ink-950 tracking-tight">
                Alles, was rollt.
                <br />
                <span className="italic text-ink-950/55">
                  Auf drei Bahnterminals.
                </span>
              </h2>
            </div>
            <p className="text-ink-950/70 text-lg leading-relaxed">
              Auf unseren Bahnterminals führen wir unterschiedlichste Verladungen
              durch — vom Schüttgut über Container bis zu Wald- und
              Forstprodukten. Modernes Umschlagequipment und eigene Gleisanschlüsse
              sorgen für kurze Wege und schnelle Umschlagzeiten.
            </p>
          </div>

          <div className="relative mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {bahnKategorien.map((k, i) => (
              <motion.div
                key={k.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.06,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="rounded-2xl bg-white/70 border border-ink-950/6 p-6 flex flex-col"
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-signal-500 num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 font-display text-2xl text-ink-950">
                  {k.title}
                </div>
                <div className="mt-2 text-sm text-ink-950/60">{k.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

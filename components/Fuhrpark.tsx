"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import { fuhrpark, img } from "@/lib/data";

export default function Fuhrpark() {
  return (
    <section id="fuhrpark" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* sticky left rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="text-xs uppercase tracking-[0.22em] text-signal-500">
                Fuhrpark
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-ink-950 tracking-tight">
                30 Sattel­fahrzeuge.
                <br />
                <span className="italic text-ink-950/55">Acht Kategorien.</span>
              </h2>
              <p className="mt-6 text-ink-950/65 max-w-lg">
                Ob Plane, Kipper, Silo oder Container — unser Fuhrpark deckt jede
                Anforderung im modernen Güterverkehr ab. Alles aus einer Hand,
                alles aus Beckingen.
              </p>

              <div className="mt-10 relative aspect-[4/3] rounded-[28px] overflow-hidden image-fallback-dark">
                <Image
                  src={img.highwayTrucks}
                  alt="Sattelzug auf der Autobahn"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                      Eigener Fuhrpark
                    </div>
                    <div className="mt-1 font-display num text-5xl text-white leading-none">
                      30
                    </div>
                  </div>
                  <Truck className="size-8 text-white/70" />
                </div>
              </div>
            </div>
          </div>

          {/* right categories */}
          <div className="lg:col-span-7">
            <ul className="space-y-2">
              {fuhrpark.map((cat, i) => (
                <motion.li
                  key={cat}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="group relative glass rounded-2xl px-6 py-6 md:py-8 flex items-center justify-between overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-signal-500 to-rail-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-baseline gap-6">
                    <div className="num text-ink-950/30 text-sm w-8">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-display text-3xl md:text-4xl text-ink-950 leading-none">
                      {cat}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-ink-950/45 text-xs uppercase tracking-[0.2em]">
                    verfügbar
                    <span className="size-1.5 rounded-full bg-signal-500 shadow-[0_0_10px_2px_rgba(225,29,44,0.4)]" />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

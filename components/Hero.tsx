"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { contact, img } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Headline */}
        <div className="relative pt-8 md:pt-16 pb-10 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-[0.22em] text-ink-950/80"
          >
            <span className="size-1.5 rounded-full bg-signal-500 shadow-[0_0_12px_2px_rgba(225,29,44,0.45)]" />
            Beckingen · Dillingen · Saarbrücken
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="mt-6 font-display text-[clamp(2.6rem,8vw,8rem)] leading-[0.95] tracking-tight text-ink-950"
          >
            Spedition, Bahnumschlag
            <br />
            und <span className="italic text-signal-500">Containerhandling.</span>
          </motion.h1>

          <div className="mt-10 grid gap-10 md:grid-cols-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="md:col-span-6 text-lg md:text-xl text-ink-950/70 max-w-xl"
            >
              Puhl GmbH — Speditions- und Logistikdienstleister aus dem
              Saarland. Drei eigene Bahn- und Containerterminals in Beckingen,
              Dillingen und Saarbrücken.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="md:col-span-6 flex flex-wrap items-center gap-3 md:justify-end"
            >
              <Link href="/kontakt" className="btn btn-primary !py-3 !px-6">
                Anfrage senden
                <ArrowRight className="size-4" />
              </Link>
              <a href={`tel:${contact.phoneRaw}`} className="btn btn-ghost !py-3 !px-6">
                <Phone className="size-4" />
                <span className="num">{contact.phone}</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="relative overflow-hidden rounded-[36px] image-fallback-dark aspect-[16/10] md:aspect-[21/9] shadow-[0_50px_100px_-40px_rgba(21,48,135,0.35)]"
        >
          <Image
            src={img.freightTrain}
            alt="Güterzug bei Nacht auf freier Strecke"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/40 via-transparent to-transparent" />

          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-wrap items-end justify-between gap-4">
            <div className="glass-dark rounded-2xl px-5 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                Tätigkeitsgebiete
              </div>
              <div className="mt-1 font-display text-white text-lg md:text-xl leading-tight">
                Spedition · Bahnumschlag · Container
              </div>
            </div>

            <div className="glass-dark rounded-2xl px-5 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                Firmengelände
              </div>
              <div className="mt-1 font-display text-white text-lg md:text-xl leading-tight num">
                93.000 m² · 3 Terminals
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

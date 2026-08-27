"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="glass-strong rounded-[28px] p-8 md:p-10"
    >
      <div className="text-xs uppercase tracking-[0.22em] text-signal-500">
        Anfrage
      </div>
      <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[0.95] text-ink-950">
        Ihre Anfrage
        <br />
        <span className="italic text-ink-950/55">an Puhl GmbH.</span>
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Field label="Ihr Name" name="name" required />
        <Field label="Firma" name="firma" />
        <Field label="E-Mail" name="email" type="email" required />
        <Field label="Telefon" name="tel" />
        <div className="md:col-span-2">
          <Select
            label="Leistung"
            name="leistung"
            options={[
              "Spedition",
              "Bahnumschlag",
              "Containerhandling",
              "Kombinierter Verkehr",
              "Lagerung",
              "Entsorgung",
              "Sonstiges",
            ]}
          />
        </div>
        <div className="md:col-span-2">
          <Textarea label="Ihre Nachricht" name="nachricht" required />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="text-xs text-ink-950/50 max-w-sm">
          Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten
          zur Anfrage-Bearbeitung einverstanden.
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={sent}
          className="btn btn-primary !py-3 !px-6 disabled:opacity-70"
        >
          {sent ? (
            <>
              <Check className="size-4" />
              Gesendet
            </>
          ) : (
            <>
              Anfrage senden
              <Send className="size-4" />
            </>
          )}
        </motion.button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-[11px] uppercase tracking-[0.2em] text-ink-950/55">
        {label}
        {required && <span className="text-signal-500"> ·</span>}
      </div>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-white/70 border border-ink-950/10 rounded-2xl px-4 py-3 text-ink-950 placeholder-ink-950/30 outline-none focus:border-signal-500/60 focus:bg-white transition-colors"
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-[11px] uppercase tracking-[0.2em] text-ink-950/55">
        {label}
        {required && <span className="text-signal-500"> ·</span>}
      </div>
      <textarea
        name={name}
        rows={5}
        required={required}
        className="mt-2 w-full bg-white/70 border border-ink-950/10 rounded-2xl px-4 py-3 text-ink-950 placeholder-ink-950/30 outline-none focus:border-signal-500/60 focus:bg-white transition-colors resize-none"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <div className="text-[11px] uppercase tracking-[0.2em] text-ink-950/55">
        {label}
      </div>
      <div className="relative mt-2">
        <select
          name={name}
          className="w-full appearance-none bg-white/70 border border-ink-950/10 rounded-2xl px-4 py-3 text-ink-950 outline-none focus:border-signal-500/60 focus:bg-white transition-colors"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-950/40">
          ▾
        </div>
      </div>
    </label>
  );
}

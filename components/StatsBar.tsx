"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="relative mt-16 md:mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong rounded-[28px] p-2 md:p-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative rounded-2xl bg-white/60 border border-ink-950/6 p-5 md:p-6 overflow-hidden group"
              >
                <div className="absolute -right-6 -top-6 size-24 rounded-full bg-signal-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-baseline gap-2">
                  <div className="font-display num text-4xl md:text-5xl text-ink-950 leading-none">
                    {s.value}
                  </div>
                  <div className="text-ink-950/60 text-xs md:text-sm">
                    {s.unit}
                  </div>
                </div>
                <div className="mt-2 text-xs md:text-sm text-ink-950/60">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

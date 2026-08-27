"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  alt: string;
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  alt,
}: Props) {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="pt-8 md:pt-12 pb-10 md:pb-14">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-[0.22em] text-ink-950/80"
            >
              <span className="size-1.5 rounded-full bg-signal-500 shadow-[0_0_12px_2px_rgba(225,29,44,0.45)]" />
              {eyebrow}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="mt-6 font-display text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-ink-950"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg text-ink-950/65"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative overflow-hidden rounded-[36px] image-fallback-dark aspect-[16/10] md:aspect-[21/9] shadow-[0_50px_100px_-40px_rgba(21,48,135,0.35)]"
        >
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

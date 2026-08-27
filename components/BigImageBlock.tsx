"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  image: string;
  alt: string;
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  cta?: { href: string; label: string };
  height?: "sm" | "md" | "lg";
  align?: "left" | "right" | "center";
  tone?: "dark" | "warm";
};

const heights: Record<NonNullable<Props["height"]>, string> = {
  sm: "min-h-[440px] md:min-h-[520px]",
  md: "min-h-[560px] md:min-h-[640px]",
  lg: "min-h-[680px] md:min-h-[780px]",
};

export default function BigImageBlock({
  image,
  alt,
  eyebrow,
  title,
  body,
  cta,
  height = "md",
  align = "left",
  tone = "dark",
}: Props) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`relative overflow-hidden rounded-[36px] ${heights[height]} ${
            tone === "warm" ? "image-fallback-warm" : "image-fallback-dark"
          }`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/50 to-ink-950/20" />
          <div
            className={`absolute inset-0 ${
              align === "right"
                ? "bg-gradient-to-l from-ink-950/60 via-transparent to-transparent"
                : "bg-gradient-to-r from-ink-950/60 via-transparent to-transparent"
            }`}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className={`absolute inset-0 flex flex-col justify-end p-6 md:p-14 lg:p-16 ${
              align === "right" ? "items-end text-right" : ""
            } ${align === "center" ? "items-center text-center" : ""}`}
          >
            <div className={`max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
              {eyebrow && (
                <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/90">
                  <span className="size-1 rounded-full bg-signal-400" />
                  {eyebrow}
                </div>
              )}
              <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] text-white tracking-tight">
                {title}
              </h2>
              {body && (
                <div className="mt-5 text-base md:text-lg text-white/85 max-w-xl">
                  {body}
                </div>
              )}
              {cta && (
                <div className="mt-8">
                  <Link href={cta.href} className="btn btn-primary !py-3 !px-6">
                    {cta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

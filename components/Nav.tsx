"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { nav, contact } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          paddingTop: scrolled ? 8 : 16,
          paddingBottom: scrolled ? 8 : 16,
        }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={false}
            animate={{
              backgroundColor: scrolled
                ? "rgba(255,255,255,0.85)"
                : "rgba(255,255,255,0.65)",
              borderColor: scrolled
                ? "rgba(10,15,30,0.10)"
                : "rgba(10,15,30,0.05)",
            }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="glass flex items-center justify-between rounded-full px-5 md:px-6 py-2.5"
            style={{
              backdropFilter: "blur(28px) saturate(1.6)",
              WebkitBackdropFilter: "blur(28px) saturate(1.6)",
            }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="leading-tight">
                <div className="font-display text-xl md:text-2xl text-ink-950 leading-none">
                  Puhl <span className="text-signal-500">GmbH</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-950/50 mt-1">
                  Straße trifft Schiene
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-3 py-1.5 text-sm text-ink-950/75 hover:text-ink-950 transition-colors"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-ink-950/6 border border-ink-950/10"
                        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="hidden md:inline-flex btn btn-ghost !py-2"
              >
                <Phone className="size-3.5" />
                <span className="num">{contact.phone}</span>
              </a>
              <Link href="/kontakt" className="hidden md:inline-flex btn btn-primary">
                Anfrage
              </Link>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menü"
                className="lg:hidden inline-flex size-10 items-center justify-center rounded-full bg-ink-950/5 border border-ink-950/10 text-ink-950"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/60 backdrop-blur-lg" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="relative mx-4 mt-24 glass-strong rounded-3xl p-4"
            >
              <div className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-ink-950 hover:bg-ink-950/5 transition-colors"
                    >
                      <span className="font-display text-2xl">{item.label}</span>
                      <span className="text-ink-950/40 text-sm num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-3 flex gap-2 px-2">
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="btn btn-ghost flex-1 justify-center"
                  >
                    <Phone className="size-4" />
                    Anrufen
                  </a>
                  <Link
                    href="/kontakt"
                    className="btn btn-primary flex-1 justify-center"
                  >
                    Anfrage senden
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

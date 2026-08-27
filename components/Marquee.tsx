export default function Marquee() {
  const items = [
    "Straße trifft Schiene",
    "Spedition",
    "Bahnumschlag",
    "Kombinierter Verkehr",
    "Containerhandling",
    "Entsorgungsfachbetrieb",
    "Gleisanschluss",
    "Lagerung",
  ];

  return (
    <div className="relative overflow-hidden py-10 border-y border-ink-950/6">
      <div className="marquee flex w-max whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <div
            key={i}
            className="mx-8 flex items-center gap-8 font-display text-4xl md:text-6xl text-ink-950/55"
          >
            <span>{t}</span>
            <span className="text-signal-500">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

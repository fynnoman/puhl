export const nav = [
  { href: "/", label: "Home" },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/spedition", label: "Spedition" },
  { href: "/gleisanschluesse", label: "Gleisanschlüsse" },
  { href: "/bahnverkehr", label: "Bahnverkehr" },
  { href: "/bahnlinien", label: "Bahnlinien" },
  { href: "/kontakt", label: "Kontakt" },
];

export const contact = {
  name: "Puhl GmbH",
  street: "Südstraße 6",
  zip: "D-66701",
  city: "Beckingen",
  phone: "+49 (0) 6835 / 9220-0",
  phoneRaw: "+4968359220",
  fax: "+49 (0) 6835 / 9220-20",
  email: "info@puhl.eu",
  web: "www.puhl.eu",
};

/** Verified Unsplash images (all confirmed to exist) */
export const img = {
  freightTrain:
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=2400&q=85&auto=format&fit=crop",
  railsSunset:
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=2400&q=85&auto=format&fit=crop",
  containerPort:
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=2400&q=85&auto=format&fit=crop",
  highwayTrucks:
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=2400&q=85&auto=format&fit=crop",
  forest:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2400&q=85&auto=format&fit=crop",
  containersStacked:
    "https://images.unsplash.com/photo-1577640739459-e0263e7d1c11?w=2400&q=85&auto=format&fit=crop",
  warehouse:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2400&q=85&auto=format&fit=crop",
  cargoShip:
    "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=2400&q=85&auto=format&fit=crop",
};

export const services = [
  {
    title: "Spedition",
    desc: "Internationale Spedition für Schütt- und Stückgüter — organisiert, terminiert, zuverlässig.",
  },
  {
    title: "Logistik",
    desc: "Ganzheitliche Logistikketten von der Beschaffung bis zur Auslieferung.",
  },
  {
    title: "Lagerung",
    desc: "Lagerflächen auf 93.000 m² eigenem Gelände an drei Standorten im Saarland.",
  },
  {
    title: "Gleisanschluss",
    desc: "Eigene Gleisanschlüsse an das öffentliche Schienennetz — direkt auf dem Firmengelände.",
  },
  {
    title: "Bahnverladung",
    desc: "Verladung auf drei Bahnterminals: flexibel, materialübergreifend, mit modernem Umschlag.",
  },
  {
    title: "Containerverladung",
    desc: "Containerhandling für Straße und Schiene — von der Übernahme bis zur Weitergabe.",
  },
  {
    title: "Kombinierter Verkehr",
    desc: "Straße trifft Schiene: nahtlose Verknüpfung zweier Verkehrsträger in einem Auftrag.",
  },
  {
    title: "Entsorgungsfachbetrieb",
    desc: "Zertifizierter Entsorgungsfachbetrieb für den professionellen Umgang mit Abfällen.",
  },
];

export const standorte = [
  {
    name: "Beckingen",
    role: "Hauptsitz & zentrales Terminal",
    area: "70.000 m²",
    rail: "3.000 Meter Gleislänge",
    equip: "Bahn- und Containerterminal",
    image: img.railsSunset,
  },
  {
    name: "Dillingen",
    role: "Waggonbeladungsterminal",
    area: "2.000 m²",
    rail: "80 Meter Gleislänge",
    equip: "Seitenkopframpe für Waggonbeladung",
    image: img.freightTrain,
  },
  {
    name: "Saarbrücken",
    role: "Bahn- und Containerterminal",
    area: "23.000 m²",
    rail: "2.000 Meter Gleislänge",
    equip: "Bahn- und Containerhandling",
    image: img.containerPort,
  },
];

export const fuhrpark = [
  "Plantransporte",
  "Tautlinertransporte",
  "Kipptransporte",
  "Containertransporte",
  "Tankcontainertransporte",
  "Kippcontainertransporte",
  "Silotransporte",
  "Abfalltransporte",
];

export const stats = [
  { value: "93.000", unit: "m²", label: "Firmengelände gesamt" },
  { value: "5.080", unit: "m", label: "eigene Gleisanschlüsse" },
  { value: "30", unit: "Sattel­fahrzeuge", label: "eigener Fuhrpark" },
  { value: "3", unit: "Terminals", label: "Beckingen · Dillingen · Saarbrücken" },
];

export const bahnKategorien = [
  {
    title: "Schüttgüter",
    desc: "Umschlag von Schüttgütern zwischen Waggon, LKW und Lager.",
  },
  {
    title: "Stückgüter",
    desc: "Handling einzelner Ladeeinheiten mit passendem Equipment.",
  },
  {
    title: "Container",
    desc: "20-, 40- und 45-Fuß-Container inkl. Tank- und Kippcontainer.",
  },
  {
    title: "Wald- und Forstprodukte",
    desc: "Spezialisierter Umschlag von Rundholz und Forstsortimenten.",
  },
];

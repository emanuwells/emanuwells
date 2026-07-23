"use client";

import { useLang } from "@/lib/i18n";

const NODES = [
  { id: "portal", label: { pt: "Portal do Cidadão", en: "Citizen Portal" } },
  { id: "api", label: { pt: "API Serviços Municipais", en: "Municipal Services API" } },
  { id: "iot", label: { pt: "Sensores IoT", en: "IoT Sensors" } },
  { id: "lake", label: { pt: "Data Lake", en: "Data Lake" } },
  { id: "cloud", label: { pt: "Infraestrutura Cloud", en: "Cloud Infrastructure" } },
  { id: "bi", label: { pt: "BI & Dashboards", en: "BI & Dashboards" } },
];

export default function ArchitectureDiagram() {
  const { lang } = useLang();

  return (
    <div className="architecture-grid" role="img" aria-label={lang === "pt" ? "Diagrama de arquitectura" : "Architecture diagram"}>
      {NODES.map((node) => (
        <div key={node.id} className="architecture-node">
          <span className="block text-[var(--cyber-cyan)] mb-1">◆</span>
          {node.label[lang]}
        </div>
      ))}
    </div>
  );
}

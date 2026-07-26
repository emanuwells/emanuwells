import type { Bi } from "./types";

export const maiaNavItems: { id: string; label: Bi }[] = [
  { id: "intro", label: { pt: "Entrada", en: "Opening" } },
  { id: "pulse", label: { pt: "Pulso", en: "Pulse" } },
  { id: "visible", label: { pt: "Visível", en: "Visible" } },
  { id: "invisible", label: { pt: "Invisível", en: "Invisible" } },
  { id: "observe", label: { pt: "Observar", en: "Observe" } },
  { id: "governance", label: { pt: "SGM", en: "MS" } },
  { id: "people", label: { pt: "Equipa", en: "Team" } },
];

export const maiaDisclaimer = {
  pt: "Case study técnico pessoal — não é um site oficial da Câmara Municipal da Maia.",
  en: "Personal technical case study — not an official Maia City Council website.",
} as Bi;

export const maiaIntro = {
  eyebrow: { pt: "Câmara Municipal da Maia", en: "Maia City Council" } as Bi,
  title: {
    pt: "Dados de muitas fontes, um contrato comum",
    en: "Data from many sources, one shared contract",
  } as Bi,
  subtitle: {
    pt: "Os dados municipais chegam de câmaras de trânsito, formulários, estatística oficial e sistemas internos. O trabalho da equipa de dados e programação liga essas origens a catálogo, APIs, Power BI e portais — com apoio concreto ao Sistema de Gestão (ISO 9001, ISO 14001, ISO 37120).",
    en: "Municipal data arrives from traffic cameras, forms, official statistics and internal systems. The data and programming team's work connects those sources to catalogue, APIs, Power BI and portals — with concrete support for the Management System (ISO 9001, ISO 14001, ISO 37120).",
  } as Bi,
  tagline: {
    pt: "Foco: interoperabilidade. Narrativa com dados reais quando a fonte o permite.",
    en: "Focus: interoperability. Narrative with real data when the source allows.",
  } as Bi,
};

export const maiaPulse = {
  eyebrow: { pt: "Pulso da cidade", en: "City pulse" } as Bi,
  title: { pt: "Tempo e trânsito — sinais públicos", en: "Weather and traffic — public signals" } as Bi,
  weatherLabel: { pt: "Meteorologia", en: "Weather" } as Bi,
  trafficLabel: { pt: "Trânsito", en: "Traffic" } as Bi,
  sourceIpma: { pt: "Fonte: IPMA", en: "Source: IPMA" } as Bi,
  sourceTraffic: { pt: "Fonte: Traffic Flow", en: "Source: Traffic Flow" } as Bi,
  live: { pt: "Em tempo real", en: "Live" } as Bi,
  stale: { pt: "Desactualizado", en: "Stale" } as Bi,
  unavailable: { pt: "Indisponível", en: "Unavailable" } as Bi,
  illustrative: { pt: "Exemplo ilustrativo", en: "Illustrative example" } as Bi,
  retry: { pt: "Tentar novamente", en: "Try again" } as Bi,
  loading: { pt: "A carregar…", en: "Loading…" } as Bi,
};

export const maiaVisible = {
  eyebrow: { pt: "Experiências visíveis", en: "Visible experiences" } as Bi,
  title: { pt: "O que a cidade mostra", en: "What the city shows" } as Bi,
  editorialNote: {
    pt: "Conteúdo editorial — sem fonte pública estável em tempo real, excepto o pulso IPMA/Traffic Flow.",
    en: "Editorial content — no stable real-time public source, except the IPMA/Traffic Flow pulse.",
  } as Bi,
  items: [
    {
      id: "weather",
      title: { pt: "Meteorologia", en: "Weather" } as Bi,
      description: {
        pt: "Previsão e condições no portal municipal — o painel Pulso usa IPMA em tempo real.",
        en: "Forecast and conditions in the municipal portal — the Pulse panel uses live IPMA data.",
      } as Bi,
      asset: "/maia/illustrations/tend.svg",
    },
    {
      id: "services",
      title: { pt: "Serviços", en: "Services" } as Bi,
      description: {
        pt: "Catálogo de serviços municipais com localização e contexto.",
        en: "Municipal services catalogue with location and context.",
      } as Bi,
      asset: "/maia/category/viver.svg",
    },
    {
      id: "tourism",
      title: { pt: "Turismo", en: "Tourism" } as Bi,
      description: {
        pt: "Percursos, pontos de interesse e narrativa territorial.",
        en: "Routes, points of interest and territorial narrative.",
      } as Bi,
      asset: "/maia/category/visit.svg",
    },
    {
      id: "mobility",
      title: { pt: "Mobilidade", en: "Mobility" } as Bi,
      description: {
        pt: "Fluxos de tráfego via Traffic Flow — das câmaras para mapas e BI, expostos pelo WELLS_API.",
        en: "Traffic flows via Traffic Flow — from cameras to maps and BI, exposed through WELLS_API.",
      } as Bi,
      asset: "/maia/illustrations/persons_inbench.svg",
    },
    {
      id: "events",
      title: { pt: "Eventos", en: "Events" } as Bi,
      description: {
        pt: "Agenda cultural e institucional com contexto local.",
        en: "Cultural and institutional agenda with local context.",
      } as Bi,
      asset: "/maia/illustrations/girl_relaxing.svg",
    },
  ],
};

export const maiaInvisible = {
  eyebrow: { pt: "Sistemas invisíveis", en: "Invisible systems" } as Bi,
  title: { pt: "Pipelines, catálogo e APIs", en: "Pipelines, catalogue and APIs" } as Bi,
  intro: {
    pt: "Por baixo das apps corre a malha de interoperabilidade: pipelines que recolhem e limpam; um catálogo e o DataTron que dão linguagem comum e metas; o WELLS_API que expõe datasets, tráfego e telemetria; Power BI e portais Huwise que consomem.",
    en: "Beneath the apps runs the interoperability mesh: pipelines that collect and clean; a catalogue and DataTron that provide a shared language and targets; WELLS_API that exposes datasets, traffic and telemetry; Power BI and Huwise portals that consume.",
  } as Bi,
};

export const maiaObserve = {
  eyebrow: { pt: "Observabilidade", en: "Observability" } as Bi,
  title: { pt: "Overseer, Warden e infraestrutura", en: "Overseer, Warden and infrastructure" } as Bi,
};

export const maiaPeople = {
  eyebrow: { pt: "Equipa e resultados", en: "Team and results" } as Bi,
  title: { pt: "Documentação, operação e formação", en: "Documentation, operations and mentoring" } as Bi,
  nextSteps: {
    pt: [
      "Consolidar interoperabilidade NGSI-LD e catálogo em mais domínios.",
      "Acompanhar o portal de dados aberto (Huwise) até aprovação completa.",
      "Fechar a documentação dos workflows de amostragem em Power BI.",
    ],
    en: [
      "Consolidate NGSI-LD interoperability and the catalogue across more domains.",
      "Support the open data portal (Huwise) through to full approval.",
      "Complete documentation for Power BI sampling workflows.",
    ],
  },
};

export const maiaBackLabel = { pt: "Voltar ao portefólio", en: "Back to portfolio" } as Bi;

export const maiaGovernance = {
  eyebrow: { pt: "Sistema de Gestão", en: "Management System" } as Bi,
  title: {
    pt: "ISO 9001 · ISO 14001 · ISO 37120",
    en: "ISO 9001 · ISO 14001 · ISO 37120",
  } as Bi,
  intro: {
    pt: "O apoio ao Sistema de Gestão é transversal: indicadores, evidência, documentação e amostragem de dados para auditoria das unidades orgânicas. O objectivo é dados fiáveis e interoperáveis — não um silo por norma.",
    en: "Management System support is cross-cutting: indicators, evidence, documentation and data sampling for organisational-unit audits. The goal is reliable, interoperable data — not a silo per standard.",
  } as Bi,
  items: [
    {
      id: "iso9001",
      title: { pt: "ISO 9001 — Qualidade", en: "ISO 9001 — Quality" } as Bi,
      description: {
        pt: "Indicadores e evidência no SGM; amostragem para auditoria das UOs; preparação de factos e datasets para Power BI, com documentação dos workflows em curso.",
        en: "Indicators and evidence in the MS; sampling for organisational-unit audits; preparing facts and datasets for Power BI, with workflow documentation underway.",
      } as Bi,
    },
    {
      id: "iso14001",
      title: { pt: "ISO 14001 — Ambiente", en: "ISO 14001 — Environment" } as Bi,
      description: {
        pt: "Séries ambientais no catálogo (ex.: MIRR) normalizadas para consumo analítico e metas no DataTron.",
        en: "Environmental series in the catalogue (e.g. MIRR) normalized for analytical consumption and targets in DataTron.",
      } as Bi,
    },
    {
      id: "iso37120",
      title: { pt: "ISO 37120 — Indicadores urbanos", en: "ISO 37120 — Urban indicators" } as Bi,
      description: {
        pt: "Dados urbanos (incluindo tráfego) e alimentação dos portais de dados — aberto e interno — na plataforma Huwise.",
        en: "Urban data (including traffic) and feeding the open and internal data portals on the Huwise platform.",
      } as Bi,
    },
  ],
  portals: {
    title: { pt: "Portais de dados (Huwise)", en: "Data portals (Huwise)" } as Bi,
    openData: {
      label: { pt: "Portal de dados aberto", en: "Open data portal" } as Bi,
      note: {
        pt: "Em construção e alimentação contínua — ainda não completamente aprovado.",
        en: "Under construction and continuous feeding — not yet fully approved.",
      } as Bi,
      href: "https://dados.cm-maia.pt",
    },
    internal: {
      label: { pt: "Portal interno do SGM", en: "Internal MS portal" } as Bi,
      note: {
        pt: "Dados internos do Sistema de Gestão na mesma plataforma Huwise.",
        en: "Internal Management System data on the same Huwise platform.",
      } as Bi,
    },
  },
};

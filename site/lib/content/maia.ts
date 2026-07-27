import type { Bi } from "./types";

export const maiaNavItems: { id: string; label: Bi }[] = [
  { id: "intro", label: { pt: "Entrada", en: "Opening" } },
  { id: "linked", label: { pt: "Ligados", en: "Linked" } },
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
  eyebrow: { pt: "Dados Município Maia", en: "Maia Municipality Data" } as Bi,
  title: {
    pt: "Quando os dados vivem em sítios diferentes, alguém tem de os tornar faláveis.",
    en: "When data lives in different places, someone has to make it speakable.",
  } as Bi,
  subtitle: {
    pt: "Esta página mostra como fontes dispersas — trânsito, meteorologia, catálogo, formulários, estatística — passam a um contrato comum: limpar, documentar, expor e vigiar. Interoperabilidade não é um slogan; é o trabalho diário para o Sistema de Gestão, o Power BI e quem decide poder usar o mesmo dado.",
    en: "This page shows how dispersed sources — traffic, weather, catalogue, forms, statistics — become a shared contract: clean, document, expose and watch. Interoperability is not a slogan; it is the daily work so the Management System, Power BI and decision-makers can use the same data.",
  } as Bi,
  tagline: {
    pt: "Contributo técnico em pipelines, APIs e observabilidade — em equipa, com evidência.",
    en: "Technical contribution on pipelines, APIs and observability — as a team, with evidence.",
  } as Bi,
};

/** Kept for PulsePanel / API consumers if re-enabled later; not shown in the case study UI. */
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

export const maiaLinked = {
  eyebrow: { pt: "O que já está ligado", en: "What is already linked" } as Bi,
  title: {
    pt: "Três peças concretas — sem inventar o resto",
    en: "Three concrete pieces — without inventing the rest",
  } as Bi,
  intro: {
    pt: "Há mais dados no município. O contributo técnico documentado aqui concentra-se no que já corre e é observável: catálogo, tráfego e meteorologia local.",
    en: "There is more municipal data. The technical contribution documented here focuses on what already runs and is observable: catalogue, traffic and local weather.",
  } as Bi,
  items: [
    {
      id: "catalog",
      title: { pt: "Catálogo de datasets", en: "Dataset catalogue" } as Bi,
      description: {
        pt: "Séries e metadados com linguagem comum — a base para Power BI, DataTron e consumo controlado.",
        en: "Series and metadata with a shared language — the base for Power BI, DataTron and controlled consumption.",
      } as Bi,
    },
    {
      id: "traffic",
      title: { pt: "Traffic Flow", en: "Traffic Flow" } as Bi,
      description: {
        pt: "Contagens das câmaras urbanas em observações normalizadas (GeoJSON / NGSI-LD), semi real-time, expostas via WELLS_API.",
        en: "Urban camera counts as normalized observations (GeoJSON / NGSI-LD), near real-time, exposed via WELLS_API.",
      } as Bi,
    },
    {
      id: "weather",
      title: { pt: "Weather API 4 Maia", en: "Weather API 4 Maia" } as Bi,
      description: {
        pt: "Pipeline de dados meteorológicos de pontos estratégicos da Maia — a fluir e observado no Overseer; o repositório continua a evoluir.",
        en: "Weather pipeline from strategic points across Maia — flowing and watched in Overseer; the repository is still evolving.",
      } as Bi,
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
  title: {
    pt: "Ver pipelines e o servidor — sem tocar no que corre",
    en: "Watch pipelines and the server — without touching what runs",
  } as Bi,
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

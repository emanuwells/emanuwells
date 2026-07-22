import type { Bi } from "./types";

export const maiaNavItems: { id: string; label: Bi }[] = [
  { id: "intro", label: { pt: "Entrada", en: "Opening" } },
  { id: "pulse", label: { pt: "Pulso", en: "Pulse" } },
  { id: "visible", label: { pt: "Visível", en: "Visible" } },
  { id: "invisible", label: { pt: "Invisível", en: "Invisible" } },
  { id: "observe", label: { pt: "Observar", en: "Observe" } },
  { id: "people", label: { pt: "Pessoas", en: "People" } },
];

export const maiaDisclaimer = {
  pt: "Case study pessoal de Emanuel Ferreira — não é um site oficial da Câmara Municipal da Maia.",
  en: "Personal case study by Emanuel Ferreira — not an official Maia City Council website.",
} as Bi;

export const maiaIntro = {
  eyebrow: { pt: "Câmara Municipal da Maia", en: "Maia City Council" } as Bi,
  title: {
    pt: "Um município visto por dentro dos dados",
    en: "A municipality seen from inside its data",
  } as Bi,
  subtitle: {
    pt: "Percorre o ecossistema que construí — do portal público ao WELLS_API, às pipelines e à observabilidade que sustentam a operação.",
    en: "Walk through the ecosystem I built — from the public portal to WELLS_API, the pipelines and the observability that keep operations running.",
  } as Bi,
  tagline: {
    pt: "Narrativa visual com dados reais quando a fonte o permite.",
    en: "A visual narrative with real data when the source allows.",
  } as Bi,
};

export const maiaPulse = {
  eyebrow: { pt: "Pulso da cidade", en: "City pulse" } as Bi,
  title: { pt: "O que o tempo e o trânsito dizem hoje", en: "What weather and traffic say today" } as Bi,
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
    pt: "Conteúdo editorial — sem fonte pública estável em tempo real.",
    en: "Editorial content — no stable real-time public source.",
  } as Bi,
  items: [
    {
      id: "weather",
      title: { pt: "Meteorologia", en: "Weather" } as Bi,
      description: {
        pt: "Previsão e condições integradas no portal municipal — o painel Pulso usa IPMA em tempo real.",
        en: "Forecast and conditions integrated into the municipal portal — the Pulse panel uses live IPMA data.",
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
        pt: "Paragens, linhas e fluxos via Traffic Flow — exposto publicamente pelo WELLS_API.",
        en: "Stops, lines and flows via Traffic Flow — publicly exposed through WELLS_API.",
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
  title: { pt: "Pipelines, APIs e catálogo", en: "Pipelines, APIs and catalogue" } as Bi,
  intro: {
    pt: "Por baixo das apps visíveis corre uma malha de recolha, limpeza e exposição — datasets, traffic_flow e proxies Overseer no WELLS_API.",
    en: "Beneath the visible apps runs a mesh of collection, cleaning and exposure — datasets, traffic_flow and Overseer proxies on WELLS_API.",
  } as Bi,
};

export const maiaObserve = {
  eyebrow: { pt: "Observabilidade", en: "Observability" } as Bi,
  title: { pt: "Overseer, Warden e infraestrutura", en: "Overseer, Warden and infrastructure" } as Bi,
};

export const maiaPeople = {
  eyebrow: { pt: "Pessoas e resultados", en: "People and results" } as Bi,
  title: { pt: "Equipa, entregas e próximos passos", en: "Team, deliveries and next steps" } as Bi,
  nextSteps: {
    pt: [
      "Expandir standards NGSI-LD em mais domínios municipais.",
      "Consolidar observabilidade cross-pipeline no Overseer.",
      "Documentar contratos de API para integrações externas.",
    ],
    en: [
      "Expand NGSI-LD standards across more municipal domains.",
      "Consolidate cross-pipeline observability in Overseer.",
      "Document API contracts for external integrations.",
    ],
  },
};

export const maiaBackLabel = { pt: "Voltar ao portefólio", en: "Back to portfolio" } as Bi;

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
    pt: "Os dados da Maia não começam numa dashboard — começam numa câmara de trânsito, numa resposta de Forms, numa tabela do INE. Esta é a história de como liguei essas origens a um sistema observável: pipelines que recolhem, um catálogo que dá contexto, o WELLS_API que expõe e a observabilidade que vigia tudo.",
    en: "Maia's data doesn't begin on a dashboard — it begins at a traffic camera, in a Forms response, in an INE table. This is the story of how I connected those sources into an observable system: pipelines that collect, a catalogue that adds context, WELLS_API that exposes, and observability watching it all.",
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
        pt: "Fluxos de tráfego em tempo quase real via Traffic Flow — das câmaras da cidade para mapas e BI, expostos publicamente pelo WELLS_API.",
        en: "Near-real-time traffic flows via Traffic Flow — from the city's cameras to maps and BI, publicly exposed through WELLS_API.",
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
    pt: "Por baixo das apps visíveis corre a malha que ninguém vê: seis pipelines recolhem e limpam dados de fontes tão diferentes como o INE, o SharePoint ou câmaras de tráfego; um catálogo governado dá-lhes uma linguagem comum; e o WELLS_API expõe tudo num único ponto — datasets, traffic_flow e telemetria.",
    en: "Beneath the visible apps runs the mesh nobody sees: six pipelines collect and clean data from sources as different as the national statistics office, SharePoint or traffic cameras; a governed catalogue gives them one shared language; and WELLS_API exposes it all through a single point — datasets, traffic_flow and telemetry.",
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

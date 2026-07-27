import type { Bi } from "./types";

export const siteMeta = {
  title: {
    pt: "Emanuel Ferreira — Portefólio",
    en: "Emanuel Ferreira — Portfolio",
  } as Bi,
  description: {
    pt: "Engenharia de dados e sistemas em produção — produtos WELLS, APIs, observabilidade. Handle: emanuwells.",
    en: "Data engineering and production systems — WELLS products, APIs, observability. Handle: emanuwells.",
  } as Bi,
  maiaTitle: {
    pt: "Case study · Câmara Municipal da Maia",
    en: "Case study · Maia City Council",
  } as Bi,
  maiaDescription: {
    pt: "Como a equipa de dados e programação liga fontes diversas a catálogo, APIs, Power BI e portais — com apoio ao Sistema de Gestão (ISO 9001, 14001, 37120).",
    en: "How the data and programming team connects diverse sources to catalogue, APIs, Power BI and portals — supporting the Management System (ISO 9001, 14001, 37120).",
  } as Bi,
};

export const portfolioNavItems: { id: string; label: Bi }[] = [
  { id: "hero", label: { pt: "Início", en: "Home" } },
  { id: "projects", label: { pt: "Projetos", en: "Projects" } },
  { id: "skills", label: { pt: "Competências", en: "Skills" } },
  { id: "experience", label: { pt: "Experiência", en: "Experience" } },
  { id: "about", label: { pt: "Sobre", en: "About" } },
  { id: "contact", label: { pt: "Contacto", en: "Contact" } },
];

export const hero = {
  title: {
    pt: "Sistemas de dados que consigo operar — e documentar.",
    en: "Data systems I can operate — and document.",
  } as Bi,
  typingPhrases: {
    pt: [
      "Olá — sou o Emanuel Ferreira.",
      "Pipelines, APIs e observabilidade.",
      "Produtos WELLS e forma de trabalhar.",
    ],
    en: [
      "Hi — I'm Emanuel Ferreira.",
      "Pipelines, APIs and observability.",
      "WELLS products and how I work.",
    ],
  },
  subtitle: {
    pt: "Construo e opero pipelines, APIs e consola de observação — com changelog, documentação e evidência. WELLS_OS, WELLS_API, Overseer e Warden são o núcleo do meu trabalho. Na Câmara Municipal da Maia, esse mesmo rigor aplica-se ao ecossistema municipal (contexto actual — case study dedicado).",
    en: "I build and operate pipelines, APIs and an observation console — with changelog, docs and evidence. WELLS_OS, WELLS_API, Overseer and Warden are the core of my work. At Maia City Council, that same rigor applies to the municipal ecosystem (current context — dedicated case study).",
  } as Bi,
  ctaProjects: { pt: "Ver projetos", en: "View projects" } as Bi,
  ctaMaia: { pt: "Case study Maia", en: "Maia case study" } as Bi,
};

export const evidence = {
  eyebrow: { pt: "Em números", en: "At a glance" } as Bi,
  items: [
    {
      value: "6+",
      label: { pt: "pipelines em produção", en: "production pipelines" } as Bi,
      confirmed: true,
    },
    {
      value: "3",
      label: { pt: "normas ISO no SGM", en: "ISO standards in the MS" } as Bi,
      confirmed: true,
    },
    {
      value: "4",
      label: { pt: "estágios orientados", en: "internships mentored" } as Bi,
      confirmed: true,
    },
  ],
};

export const skillBadges = [
  "Python",
  "PHP",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Docker",
  "MariaDB",
  "Power BI",
  "Linux",
  "NGSI-LD",
];

export type ProjectKind = "professional" | "hobby";

export const projects = {
  eyebrow: { pt: "Projetos", en: "Projects" } as Bi,
  title: { pt: "Sistemas seleccionados", en: "Selected systems" } as Bi,
  intro: {
    pt: "Sistemas meus (WELLS) e peças do contexto profissional actual. O link GitHub só aparece quando o código é público.",
    en: "My own systems (WELLS) and pieces from the current professional context. The GitHub link only appears when the code is public.",
  } as Bi,
  privateLabel: { pt: "Código privado", en: "Private source" } as Bi,
  kindLabels: {
    professional: { pt: "Profissional", en: "Professional" } as Bi,
    hobby: { pt: "Hobby", en: "Hobby" } as Bi,
  },
  items: [
    {
      id: "wells-os",
      name: { pt: "WELLS_OS", en: "WELLS_OS" } as Bi,
      description: {
        pt: "Consola operacional read-only da equipa: métricas Warden, execuções Overseer e registo de aplicações num só painel. Observa servidores e pipelines sem alterar o runtime — o ponto onde a operação vê o estado primeiro.",
        en: "The team's read-only operational console: Warden metrics, Overseer runs and an application registry in one panel. It watches servers and pipelines without changing runtime — the place operations see status first.",
      } as Bi,
      tags: ["Next.js", "React", "PHP API", "Postgres"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "wells-api",
      name: { pt: "WELLS_API", en: "WELLS_API" } as Bi,
      description: {
        pt: "API municipal de integração: datasets do catálogo, tráfego em GeoJSON/NGSI-LD e snapshots do Warden. Único ponto por onde Power BI, dashboards e integrações externas consomem dados normalizados.",
        en: "Municipal integration API: catalogue datasets, traffic in GeoJSON/NGSI-LD and Warden snapshots. The single point where Power BI, dashboards and external integrations consume normalized data.",
      } as Bi,
      tags: ["PHP", "REST", "MariaDB", "NGSI-LD"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "maiatron-hub",
      name: { pt: "MAIATRON-HUB", en: "MAIATRON-HUB" } as Bi,
      description: {
        pt: "Portal central municipal: autenticação, catálogo de aplicações e navegação unificada. Inclui o DataTron (dados, metas de indicadores e apoio ao Sistema de Gestão) e o Webapp-Medidata (vista clara dos dados Medidata das unidades orgânicas).",
        en: "Central municipal portal: authentication, application catalogue and unified navigation. Includes DataTron (data, indicator targets and Management System support) and Webapp-Medidata (a clearer view of Medidata data for organisational units).",
      } as Bi,
      tags: ["PHP", "JavaScript", "MariaDB"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "datatron",
      name: { pt: "DataTron", en: "DataTron" } as Bi,
      description: {
        pt: "Módulo do MAIATRON-HUB para trabalhar dados, metas de indicadores e informação do Sistema de Gestão — com o objectivo de tornar séries de fontes diversas mais interoperáveis e utilizáveis pela equipa.",
        en: "MAIATRON-HUB module for working with data, indicator targets and Management System information — aimed at making series from diverse sources more interoperable and usable by the team.",
      } as Bi,
      tags: ["PHP", "SGM", "Indicadores"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "webapp-medidata",
      name: { pt: "Webapp-Medidata", en: "Webapp-Medidata" } as Bi,
      description: {
        pt: "Módulo que apresenta os dados Medidata das unidades orgânicas de forma mais legível. A integração na base de dados é feita pelo Medidata Pipeline. Desenvolvido por necessidade da equipa e da instituição para melhorar o trabalho diário com esses dados.",
        en: "Module that presents Medidata data from organisational units in a more readable way. Database integration is handled by the Medidata Pipeline. Built out of team and institutional need to improve day-to-day work with that data.",
      } as Bi,
      tags: ["PHP", "JavaScript", "Medidata"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "overseer",
      name: { pt: "Overseer", en: "Overseer" } as Bi,
      description: {
        pt: "Observabilidade Docker-first para pipelines e DAGs externos: catálogo, runs, módulos, logs e heartbeats por API; dashboard read-only e alertas Slack. Se um pipeline deveria ter corrido e não correu, fica assinalado.",
        en: "Docker-first observability for external pipelines and DAGs: catalogue, runs, modules, logs and heartbeats via API; read-only dashboard and Slack alerts. If a pipeline should have run and didn't, it is flagged.",
      } as Bi,
      tags: ["Python", "FastAPI", "React", "Docker"],
      githubUrl: "https://github.com/emanuwells/Overseer",
      kind: "professional" as ProjectKind,
      isPrivate: false,
    },
    {
      id: "warden",
      name: { pt: "Warden", en: "Warden" } as Bi,
      description: {
        pt: "Collector Python de CPU, RAM, disco, rede e crescimento MariaDB, com retenção e limpeza. Exporta snapshots consumidos pelo WELLS_API e alerta no Slack — imediato em incidentes, digest diário no resto.",
        en: "Python collector for CPU, RAM, disk, network and MariaDB growth, with retention and cleanup. Exports snapshots consumed by WELLS_API and alerts on Slack — immediately for incidents, daily digest otherwise.",
      } as Bi,
      tags: ["Python", "MariaDB", "systemd", "Slack"],
      githubUrl: "https://github.com/emanuwells/Warden",
      kind: "professional" as ProjectKind,
      isPrivate: false,
    },
    {
      id: "traffic-flow",
      name: { pt: "Traffic Flow", en: "Traffic Flow" } as Bi,
      description: {
        pt: "Contagens e velocidades das câmaras urbanas passam a observações normalizadas (GeoJSON / NGSI-LD), prontas para mapas, BI e modelos de cidade inteligente — um exemplo concreto de interoperabilidade de dados urbanos.",
        en: "Counts and speeds from urban cameras become normalized observations (GeoJSON / NGSI-LD), ready for maps, BI and smart-city models — a concrete example of urban data interoperability.",
      } as Bi,
      tags: ["Python", "NGSI-LD", "Smart Data Models"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "weather-api-4-maia",
      name: { pt: "Weather API 4 Maia", en: "Weather API 4 Maia" } as Bi,
      description: {
        pt: "Pipeline de dados meteorológicos de pontos estratégicos da Maia — a fluir e observado no Overseer. Repositório profissional ainda em evolução.",
        en: "Weather pipeline from strategic points across Maia — flowing and watched in Overseer. Professional repository still evolving.",
      } as Bi,
      tags: ["Python", "API", "Overseer"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "vacation-mode",
      name: { pt: "Vacation Mode", en: "Vacation Mode" } as Bi,
      description: {
        pt: "Google Apps Script que lê uma grelha anual de férias, conta dias e sincroniza com o Google Calendar. Hobby pessoal — não faz parte da stack municipal.",
        en: "Google Apps Script that reads an annual vacation grid, counts days and syncs with Google Calendar. Personal hobby — not part of the municipal stack.",
      } as Bi,
      tags: ["Google Apps Script", "JavaScript"],
      githubUrl: "https://github.com/emanuwells/Vacation_Mode",
      kind: "hobby" as ProjectKind,
      isPrivate: false,
    },
  ],
};

export const skills = {
  eyebrow: { pt: "Competências", en: "Skills" } as Bi,
  title: { pt: "Ferramentas e contexto", en: "Tools and context" } as Bi,
  groups: [
    {
      category: { pt: "Dados", en: "Data" } as Bi,
      items: ["Python", "SQL", "ETL/ELT", "Catálogos", "Interoperabilidade"],
    },
    {
      category: { pt: "Engenharia", en: "Engineering" } as Bi,
      items: ["PHP", "TypeScript", "JavaScript", "REST APIs"],
    },
    {
      category: { pt: "BI e SGM", en: "BI and MS" } as Bi,
      items: ["Power BI", "DAX", "Power Query M", "Amostragem"],
    },
    {
      category: { pt: "Operações", en: "Operations" } as Bi,
      items: ["Observabilidade", "Docker", "Nginx", "Linux", "SSH"],
    },
  ],
};

export const experience = {
  eyebrow: { pt: "Experiência", en: "Experience" } as Bi,
  title: { pt: "Contexto actual · Câmara Municipal da Maia", en: "Current context · Maia City Council" } as Bi,
  intro: {
    pt: "Emprego actual na área de dados e programação: pipelines, documentação, operação e apoio ao Sistema de Gestão. O case study Maia detalha o ecossistema; aqui o foco é o contributo e a forma de trabalhar.",
    en: "Current role in data and programming: pipelines, documentation, operations and Management System support. The Maia case study details the ecosystem; here the focus is the contribution and how the work is done.",
  } as Bi,
  linkLabel: { pt: "Abrir case study", en: "Open case study" } as Bi,
  milestones: [
    {
      title: { pt: "Interoperabilidade e APIs", en: "Interoperability and APIs" } as Bi,
      description: {
        pt: "WELLS_API, catálogo, Traffic Flow, Weather API 4 Maia e exposição a BI e portais.",
        en: "WELLS_API, catalogue, Traffic Flow, Weather API 4 Maia and exposure to BI and portals.",
      } as Bi,
      progress: 92,
    },
    {
      title: { pt: "Sistema de Gestão e ISO", en: "Management System and ISO" } as Bi,
      description: {
        pt: "Apoio a ISO 9001, 14001 e 37120 — indicadores, evidência e amostragem para auditoria das UOs.",
        en: "Support for ISO 9001, 14001 and 37120 — indicators, evidence and sampling for organisational-unit audits.",
      } as Bi,
      progress: 88,
    },
    {
      title: { pt: "Operação e equipa", en: "Operations and team" } as Bi,
      description: {
        pt: "Observabilidade, documentação, máquinas e mentoria de estágios em projetos reais.",
        en: "Observability, documentation, machines and mentoring interns on real projects.",
      } as Bi,
      progress: 85,
    },
  ],
};

export const about = {
  eyebrow: { pt: "Sobre", en: "About" } as Bi,
  title: { pt: "Emanuel Ferreira", en: "Emanuel Ferreira" } as Bi,
  intro: {
    pt: "Produtos pessoais sob a marca WELLS (consola, API, Overseer, Warden) e uma forma de trabalhar deliberada: docs em português europeu, changelog, operação com evidência e sistemas que a equipa consegue manter. Prefiro arquitecturas simples e contratos claros. Online: emanuwells.",
    en: "Personal products under the WELLS brand (console, API, Overseer, Warden) and a deliberate way of working: docs in European Portuguese, changelog, evidence-backed operations and systems the team can maintain. I prefer simple architectures and clear contracts. Online: emanuwells.",
  } as Bi,
};

export const contact = {
  eyebrow: { pt: "Contacto", en: "Contact" } as Bi,
  title: { pt: "Vamos falar do próximo sistema.", en: "Let's talk about the next system." } as Bi,
  subtitle: {
    pt: "Disponível para conversas sobre engenharia de dados, interoperabilidade, observabilidade e infraestrutura.",
    en: "Open to conversations about data engineering, interoperability, observability and infrastructure.",
  } as Bi,
  githubLabel: { pt: "GitHub", en: "GitHub" } as Bi,
  linkedinLabel: { pt: "LinkedIn", en: "LinkedIn" } as Bi,
  github: "https://github.com/emanuwells",
  linkedin: "https://www.linkedin.com/in/emanuel-ferreira91",
};

export const footer = {
  text: {
    pt: "Desenhado e construído por Emanuel Ferreira · emanuwells",
    en: "Designed and built by Emanuel Ferreira · emanuwells",
  } as Bi,
};

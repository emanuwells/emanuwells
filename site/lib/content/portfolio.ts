import type { Bi } from "./types";

export const siteMeta = {
  title: {
    pt: "Emanuel Ferreira — Portefólio",
    en: "Emanuel Ferreira — Portfolio",
  } as Bi,
  description: {
    pt: "Engenharia de dados e sistemas em produção — interoperabilidade, APIs, observabilidade e Sistema de Gestão. Handle: emanuwells.",
    en: "Data engineering and production systems — interoperability, APIs, observability and management systems. Handle: emanuwells.",
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
    pt: "Dados interoperáveis. Sistemas que a equipa consegue operar.",
    en: "Interoperable data. Systems the team can operate.",
  } as Bi,
  typingPhrases: {
    pt: [
      "Olá — sou o Emanuel Ferreira.",
      "Pipelines, APIs e observabilidade.",
      "Interoperabilidade entre fontes reais.",
    ],
    en: [
      "Hi — I'm Emanuel Ferreira.",
      "Pipelines, APIs and observability.",
      "Interoperability across real sources.",
    ],
  },
  subtitle: {
    pt: "Na Câmara Municipal da Maia, o trabalho da equipa de dados e programação liga fontes diversas a um contrato comum: catálogo, WELLS_API, Power BI e portais Huwise. O contributo técnico concentra-se em pipelines, documentação, operações e observabilidade — para os dados servirem o Sistema de Gestão e quem decide.",
    en: "At Maia City Council, the data and programming team's work connects diverse sources into a shared contract: catalogue, WELLS_API, Power BI and Huwise portals. The technical focus is pipelines, documentation, operations and observability — so data serves the Management System and whoever decides.",
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
    pt: "Cada peça serve interoperabilidade: recolher, normalizar, expor e vigiar. O link GitHub só aparece quando o código é público.",
    en: "Each piece serves interoperability: collect, normalize, expose and watch. The GitHub link only appears when the code is public.",
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
  title: { pt: "Câmara Municipal da Maia · Dados e Programação", en: "Maia City Council · Data and Programming" } as Bi,
  intro: {
    pt: "Trabalho em equipa na área de dados e programação: pipelines em produção, documentação, operação de máquinas, orientação de estágios e apoio ao Sistema de Gestão. O contributo técnico cobre grande parte da malha de interoperabilidade — do catálogo ao Power BI e aos portais Huwise.",
    en: "Team work in data and programming: production pipelines, documentation, machine operations, internship mentoring and Management System support. The technical contribution covers much of the interoperability mesh — from catalogue to Power BI and Huwise portals.",
  } as Bi,
  linkLabel: { pt: "Abrir case study", en: "Open case study" } as Bi,
  milestones: [
    {
      title: { pt: "Interoperabilidade e APIs", en: "Interoperability and APIs" } as Bi,
      description: {
        pt: "WELLS_API, catálogo, Traffic Flow e exposição a BI e portais.",
        en: "WELLS_API, catalogue, Traffic Flow and exposure to BI and portals.",
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
    pt: "Preferência por arquitecturas simples e contratos claros: cada sistema faz uma coisa, a observabilidade não toca no que observa, e um dado só conta se for rastreável. Trabalho em equipa, em português europeu e inglês; as entregas levam evidência e changelog. Online: emanuwells.",
    en: "A preference for simple architectures and clear contracts: each system does one thing, observability does not touch what it watches, and data only counts if it is traceable. Team work, in European Portuguese and English; deliveries ship with evidence and a changelog. Online: emanuwells.",
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

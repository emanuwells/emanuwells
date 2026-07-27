import type { Bi } from "./types";

export const siteMeta = {
  title: {
    pt: "Emanuel Ferreira — Portefólio",
    en: "Emanuel Ferreira — Portfolio",
  } as Bi,
  description: {
    pt: "Engenharia de dados e sistemas em produção — pipelines, APIs, observabilidade. Handle: emanuwells.",
    en: "Data engineering and production systems — pipelines, APIs, observability. Handle: emanuwells.",
  } as Bi,
  maiaTitle: {
    pt: "Dados Município Maia",
    en: "Maia Municipality Data",
  } as Bi,
  maiaDescription: {
    pt: "Como a equipa de dados e programação liga fontes diversas a catálogo, APIs, Power BI e portais — com apoio ao Sistema de Gestão (ISO 9001, 14001, 37120).",
    en: "How the data and programming team connects diverse sources to catalogue, APIs, Power BI and portals — supporting the Management System (ISO 9001, 14001, 37120).",
  } as Bi,
};

/** Nav / CTA label for the Maia page (portfolio ↔ Maia). */
export const maiaPageLabel = {
  pt: "Dados Município Maia",
  en: "Maia Municipality Data",
} as Bi;

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
      "Apaixonei-me pela área dos dados.",
      "Aprendo a construir e a operar sistemas.",
    ],
    en: [
      "Hi — I'm Emanuel Ferreira.",
      "I fell in love with data work.",
      "I learn by building and operating systems.",
    ],
  },
  subtitle: {
    pt: "Construo e opero pipelines, APIs e observabilidade — com documentação, changelog e evidência do que corre. O meu contexto profissional actual é a Câmara Municipal da Maia; a página Dados Município Maia conta essa história com mais detalhe.",
    en: "I build and operate pipelines, APIs and observability — with documentation, changelog and evidence of what runs. My current professional context is Maia City Council; the Maia Municipality Data page tells that story in more detail.",
  } as Bi,
  ctaProjects: { pt: "Ver projetos", en: "View projects" } as Bi,
  ctaMaia: { pt: "Dados Município Maia", en: "Maia Municipality Data" } as Bi,
};

export const evidence = {
  eyebrow: { pt: "Em números", en: "At a glance" } as Bi,
  items: [
    {
      value: "4+",
      label: { pt: "anos na área dos dados", en: "years in data work" } as Bi,
      confirmed: true,
    },
    {
      value: "6+",
      label: { pt: "pipelines em produção", en: "production pipelines" } as Bi,
      confirmed: true,
    },
    {
      value: "2",
      label: { pt: "sistemas open source", en: "open-source systems" } as Bi,
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
    pt: "Uma amostragem do meu trabalho — o que construo, opero e documento. O link GitHub só aparece quando o código é público.",
    en: "A sample of my work — what I build, operate and document. The GitHub link only appears when the code is public.",
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
        pt: "Consola operacional read-only: métricas Warden, execuções Overseer e registo de aplicações num só painel. Observa servidores e pipelines sem alterar o runtime — o ponto onde a operação vê o estado primeiro.",
        en: "Read-only operational console: Warden metrics, Overseer runs and an application registry in one panel. It watches servers and pipelines without changing runtime — the place operations see status first.",
      } as Bi,
      tags: ["Next.js", "React", "PHP API", "Postgres"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "wells-api",
      name: { pt: "WELLS_API", en: "WELLS_API" } as Bi,
      description: {
        pt: "API de integração: datasets do catálogo, tráfego em GeoJSON/NGSI-LD e snapshots do Warden. Ponto único por onde Power BI, dashboards e integrações consomem dados normalizados.",
        en: "Integration API: catalogue datasets, traffic in GeoJSON/NGSI-LD and Warden snapshots. A single point where Power BI, dashboards and integrations consume normalized data.",
      } as Bi,
      tags: ["PHP", "REST", "MariaDB", "NGSI-LD"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "maiatron-hub",
      name: { pt: "MAIATRON-HUB", en: "MAIATRON-HUB" } as Bi,
      description: {
        pt: "Portal central: autenticação, catálogo de aplicações e navegação unificada. Inclui o DataTron (dados, metas de indicadores e apoio ao Sistema de Gestão) e o Webapp-Medidata (vista legível dos dados Medidata das unidades orgânicas).",
        en: "Central portal: authentication, application catalogue and unified navigation. Includes DataTron (data, indicator targets and Management System support) and Webapp-Medidata (a readable view of Medidata data for organisational units).",
      } as Bi,
      tags: ["PHP", "JavaScript", "MariaDB"],
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
        pt: "Contagens e velocidades das câmaras urbanas passam a observações normalizadas (GeoJSON / NGSI-LD), prontas para mapas, BI e modelos de cidade inteligente.",
        en: "Counts and speeds from urban cameras become normalized observations (GeoJSON / NGSI-LD), ready for maps, BI and smart-city models.",
      } as Bi,
      tags: ["Python", "NGSI-LD", "Smart Data Models"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "weather-api-4-maia",
      name: { pt: "Weather API 4 Maia", en: "Weather API 4 Maia" } as Bi,
      description: {
        pt: "Pipeline de dados meteorológicos de pontos estratégicos — a fluir e observado no Overseer. Repositório ainda em evolução.",
        en: "Weather pipeline from strategic points — flowing and watched in Overseer. Repository still evolving.",
      } as Bi,
      tags: ["Python", "API", "Overseer"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "vacation-mode",
      name: { pt: "Vacation Mode", en: "Vacation Mode" } as Bi,
      description: {
        pt: "Google Apps Script que lê uma grelha anual de férias, conta dias e sincroniza com o Google Calendar.",
        en: "Google Apps Script that reads an annual vacation grid, counts days and syncs with Google Calendar.",
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
    pt: "Desde 2022 trabalho em dados e programação: pipelines, documentação, operação e apoio ao Sistema de Gestão. A página Dados Município Maia detalha o ecossistema; aqui fica o essencial do contributo.",
    en: "Since 2022 I've worked in data and programming: pipelines, documentation, operations and Management System support. The Maia Municipality Data page details the ecosystem; here is the essence of the contribution.",
  } as Bi,
  linkLabel: { pt: "Abrir Dados Município Maia", en: "Open Maia Municipality Data" } as Bi,
  statusActive: { pt: "Activo", en: "Active" } as Bi,
  statusOngoing: { pt: "Em curso", en: "Ongoing" } as Bi,
  milestones: [
    {
      title: { pt: "Interoperabilidade e APIs", en: "Interoperability and APIs" } as Bi,
      description: {
        pt: "WELLS_API, catálogo, Traffic Flow, Weather API 4 Maia e exposição a BI e portais.",
        en: "WELLS_API, catalogue, Traffic Flow, Weather API 4 Maia and exposure to BI and portals.",
      } as Bi,
      status: "active" as const,
    },
    {
      title: { pt: "Sistema de Gestão e ISO", en: "Management System and ISO" } as Bi,
      description: {
        pt: "Apoio a ISO 9001, 14001 e 37120 — indicadores, evidência e amostragem para auditoria das UOs.",
        en: "Support for ISO 9001, 14001 and 37120 — indicators, evidence and sampling for organisational-unit audits.",
      } as Bi,
      status: "ongoing" as const,
    },
    {
      title: { pt: "Operação e documentação", en: "Operations and documentation" } as Bi,
      description: {
        pt: "Observabilidade, documentação e operação das máquinas que fazem o sistema correr.",
        en: "Observability, documentation and operating the machines that keep the system running.",
      } as Bi,
      status: "active" as const,
    },
  ],
};

export const about = {
  eyebrow: { pt: "Sobre", en: "About" } as Bi,
  title: { pt: "Emanuel Ferreira", en: "Emanuel Ferreira" } as Bi,
  lead: {
    pt: "Apaixonei-me pela área dos dados — e construo sistemas para os tornar utilizáveis.",
    en: "I fell in love with data work — and I build systems to make data usable.",
  } as Bi,
  /** First paragraph uses `{age}` replaced at render time. */
  introTemplate: {
    pt: "Sou o Emanuel Ferreira, {age} anos. Trabalho em pipelines, APIs e observabilidade: ligar fontes, limpar o que entra, expor o que importa e vigiar o que corre. Prefiro arquitecturas simples, contratos claros e entregas com evidência.",
    en: "I'm Emanuel Ferreira, {age} years old. I work on pipelines, APIs and observability: connecting sources, cleaning what comes in, exposing what matters and watching what runs. I prefer simple architectures, clear contracts and deliveries with evidence.",
  } as Bi,
  networks: {
    pt: "Sou Técnico de Gestão de Redes e Sistemas Informáticos. A formação não é em dados — mas dá-me base sólida em redes, sistemas e operação, e isso ajuda no dia-a-dia com infraestrutura, máquinas e o resto das valências que o trabalho pede.",
    en: "I'm a Network and Computer Systems Management technician. The training isn't in data — but it gives me a solid base in networks, systems and operations, and that helps day-to-day with infrastructure, machines and the other skills the work asks for.",
  } as Bi,
  selfTaughtBefore: {
    pt: "Quase tudo o que sei de engenharia de dados e software aprendi por conta própria: estudar, construir, falhar, melhorar e procuro sempre as melhores práticas e aplicá-las com rigor. Online: ",
    en: "Almost everything I know about data engineering and software I taught myself: study, build, fail, improve — and I always look for best practices and apply them with care. Online: ",
  } as Bi,
};

export const contact = {
  eyebrow: { pt: "Contacto", en: "Contact" } as Bi,
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

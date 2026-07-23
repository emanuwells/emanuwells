import type { Bi } from "./types";

export const siteMeta = {
  title: {
    pt: "Emanuel Ferreira — Portefólio",
    en: "Emanuel Ferreira — Portfolio",
  } as Bi,
  description: {
    pt: "Engenharia de dados e sistemas em produção — pipelines, APIs e observabilidade. Handle: emanuwells.",
    en: "Data engineering and production systems — pipelines, APIs and observability. Handle: emanuwells.",
  } as Bi,
  maiaTitle: {
    pt: "Case study · Câmara Municipal da Maia",
    en: "Case study · Maia City Council",
  } as Bi,
  maiaDescription: {
    pt: "Como construí o ecossistema de dados e observabilidade da Câmara Municipal da Maia — do portal às pipelines.",
    en: "How I built the Maia City Council data and observability ecosystem — from the portal to the pipelines.",
  } as Bi,
};

export const portfolioNavItems: { id: string; label: Bi }[] = [
  { id: "hero", label: { pt: "Início", en: "Home" } },
  { id: "signals", label: { pt: "GitHub", en: "GitHub" } },
  { id: "projects", label: { pt: "Projetos", en: "Projects" } },
  { id: "skills", label: { pt: "Competências", en: "Skills" } },
  { id: "experience", label: { pt: "Experiência", en: "Experience" } },
  { id: "about", label: { pt: "Sobre", en: "About" } },
  { id: "contact", label: { pt: "Contacto", en: "Contact" } },
];

export const hero = {
  title: {
    pt: "Trabalho com dados. Programo o que falta para os pôr a funcionar.",
    en: "I work with data. I build what's missing to make it run.",
  } as Bi,
  typingPhrases: {
    pt: [
      "Olá — sou o Emanuel Ferreira.",
      "Pipelines que correm todos os dias.",
      "APIs, observabilidade e sistemas reais.",
    ],
    en: [
      "Hi — I'm Emanuel Ferreira.",
      "Pipelines that run every day.",
      "APIs, observability and real systems.",
    ],
  },
  subtitle: {
    pt: "Pipelines que correm todos os dias, APIs que alimentam dashboards e monitorização que avisa quando algo falha. O case study da Maia conta o trabalho mais aprofundado.",
    en: "Pipelines that run every day, APIs that feed dashboards, and monitoring that flags failures. The Maia case study covers the deepest work.",
  } as Bi,
  ctaProjects: { pt: "Ver projetos", en: "View projects" } as Bi,
  ctaMaia: { pt: "Case study Maia", en: "Maia case study" } as Bi,
};

export const evidence = {
  eyebrow: { pt: "Em números", en: "At a glance" } as Bi,
  items: [
    {
      value: "13",
      label: { pt: "projetos versionados", en: "versioned projects" } as Bi,
      confirmed: true,
    },
    {
      value: "330+",
      label: { pt: "entregas documentadas", en: "documented releases" } as Bi,
      confirmed: true,
    },
    {
      value: "4",
      label: { pt: "estagiários orientados", en: "interns mentored" } as Bi,
      confirmed: true,
    },
  ],
};

export const githubSignals = {
  eyebrow: { pt: "GitHub público", en: "Public GitHub" } as Bi,
  panelTitle: { pt: "github@emanuwells", en: "github@emanuwells" } as Bi,
  title: { pt: "Actividade recente", en: "Recent activity" } as Bi,
  intro: {
    pt: "Métricas públicas do perfil — repositórios, linguagens e ritmo de contribuição, com actualização horária.",
    en: "Public profile metrics — repositories, languages and contribution rhythm, refreshed hourly.",
  } as Bi,
  metrics: {
    publicRepos: { pt: "repositórios públicos", en: "public repositories" } as Bi,
    stars: { pt: "estrelas", en: "stars" } as Bi,
    forks: { pt: "forks", en: "forks" } as Bi,
    followers: { pt: "seguidores", en: "followers" } as Bi,
  },
  languagesTitle: { pt: "Linguagens", en: "Languages" } as Bi,
  activityTitle: { pt: "Ritmo semanal", en: "Weekly rhythm" } as Bi,
  liveSource: { pt: "Dados públicos GitHub · actualização horária", en: "Public GitHub data · hourly refresh" } as Bi,
  fallbackSource: {
    pt: "Snapshot local · API indisponível",
    en: "Local snapshot · API unavailable",
  } as Bi,
};

export const skillBadges = [
  "Python",
  "PHP",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Docker",
  "PostgreSQL",
  "Power BI",
  "Linux",
  "GitHub",
];

export type ProjectKind = "professional" | "hobby";

export const projects = {
  eyebrow: { pt: "Projetos", en: "Projects" } as Bi,
  title: { pt: "Sistemas seleccionados", en: "Selected systems" } as Bi,
  intro: {
    pt: "Separo trabalho profissional e case studies de hobbies ou scripts casuais. O link GitHub só aparece quando o código é público.",
    en: "I separate professional work and case studies from hobbies or casual scripts. The GitHub link only appears when the code is public.",
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
        pt: "Consola read-only dos serviços e servidores onde os meus projectos correm — métricas Warden e pipelines Overseer.",
        en: "Read-only console for the services and servers my projects run on — Warden metrics and Overseer pipelines.",
      } as Bi,
      tags: ["React", "Vite", "PHP", "Postgres"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "overseer",
      name: { pt: "Overseer", en: "Overseer" } as Bi,
      description: {
        pt: "Segue execuções de pipeline: o que correu, o que falhou e o sinal operacional que daí sai.",
        en: "Tracks pipeline runs: what ran, what failed, and the operational signal that follows.",
      } as Bi,
      tags: ["Python", "Observability", "Pipelines"],
      githubUrl: "https://github.com/emanuwells/Overseer",
      kind: "professional" as ProjectKind,
      isPrivate: false,
    },
    {
      id: "warden",
      name: { pt: "Warden", en: "Warden" } as Bi,
      description: {
        pt: "Telemetria de servidores, retenção e alertas sem mexer no runtime de produção.",
        en: "Server telemetry, retention and alerts without touching the production runtime.",
      } as Bi,
      tags: ["Python", "Linux", "Telemetry"],
      githubUrl: "https://github.com/emanuwells/Warden",
      kind: "professional" as ProjectKind,
      isPrivate: false,
    },
    {
      id: "wells-api",
      name: { pt: "WELLS_API", en: "WELLS_API" } as Bi,
      description: {
        pt: "API municipal que alimenta dashboards, Power BI e integrações externas.",
        en: "Municipal API that feeds dashboards, Power BI and external integrations.",
      } as Bi,
      tags: ["PHP", "REST", "MariaDB"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "traffic-flow",
      name: { pt: "Traffic Flow", en: "Traffic Flow" } as Bi,
      description: {
        pt: "Observações de tráfego preparadas para APIs, análise e modelos urbanos.",
        en: "Traffic observations prepared for APIs, analytics and urban data models.",
      } as Bi,
      tags: ["Python", "NGSI-LD", "Smart Data Models"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "vacation-mode",
      name: { pt: "Vacation Mode", en: "Vacation Mode" } as Bi,
      description: {
        pt: "Automação pessoal para manter rotinas estáveis quando estou fora — hobby, não stack de produção.",
        en: "Personal automation to keep routines steady when I'm away — a hobby, not a production stack.",
      } as Bi,
      tags: ["PHP", "JavaScript"],
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
      items: ["Python", "SQL", "ETL/ELT", "Catálogos de dados"],
    },
    {
      category: { pt: "Engenharia", en: "Engineering" } as Bi,
      items: ["PHP", "TypeScript", "JavaScript", "REST APIs"],
    },
    {
      category: { pt: "BI", en: "BI" } as Bi,
      items: ["Power BI", "DAX", "Power Query M"],
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
    pt: "Construí de raiz o ecossistema de dados e observabilidade do município: pipelines em produção, portal central, monitorização e acompanhamento de estágios. O trabalho fala pelos sistemas.",
    en: "I built the municipality's data and observability ecosystem from scratch: production pipelines, a central portal, monitoring and internship mentoring. The work speaks through the systems.",
  } as Bi,
  linkLabel: { pt: "Abrir case study", en: "Open case study" } as Bi,
  milestones: [
    {
      title: { pt: "Desenvolvimento backend", en: "Backend development" } as Bi,
      description: {
        pt: "APIs municipais, integrações e serviços em produção.",
        en: "Municipal APIs, integrations and production services.",
      } as Bi,
      progress: 92,
    },
    {
      title: { pt: "Integração de dados", en: "Data integration" } as Bi,
      description: {
        pt: "Pipelines, catálogos e exposição para BI.",
        en: "Pipelines, catalogues and BI exposure.",
      } as Bi,
      progress: 88,
    },
    {
      title: { pt: "Transformação digital", en: "Digital transformation" } as Bi,
      description: {
        pt: "Portal central, observabilidade e formação de equipa.",
        en: "Central portal, observability and team mentoring.",
      } as Bi,
      progress: 85,
    },
  ],
};

export const about = {
  eyebrow: { pt: "Sobre", en: "About" } as Bi,
  title: { pt: "Emanuel Ferreira", en: "Emanuel Ferreira" } as Bi,
  intro: {
    pt: "Prefiro arquitecturas simples, documentação clara e código que aguenta produção. Trabalho em português europeu e inglês; cada entrega leva evidência e changelog. Online: emanuwells.",
    en: "I prefer simple architectures, clear documentation and code that holds up in production. I work in European Portuguese and English; every delivery ships with evidence and a changelog. Online: emanuwells.",
  } as Bi,
};

export const contact = {
  eyebrow: { pt: "Contacto", en: "Contact" } as Bi,
  title: { pt: "Vamos falar do próximo sistema.", en: "Let's talk about the next system." } as Bi,
  subtitle: {
    pt: "Disponível para conversas sobre engenharia de dados, observabilidade e infraestrutura.",
    en: "Open to conversations about data engineering, observability and infrastructure.",
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

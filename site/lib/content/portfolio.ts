import type { Bi } from "./types";

export const siteMeta = {
  title: {
    pt: "Emanuel Wells — Portefólio",
    en: "Emanuel Wells — Portfolio",
  } as Bi,
  description: {
    pt: "Trabalho com dados e programo o que falta para os pôr a funcionar — pipelines, APIs, observabilidade e sistemas em produção.",
    en: "I work with data and build what's missing to make it run — pipelines, APIs, observability and production systems.",
  } as Bi,
  maiaTitle: {
    pt: "Case study · Câmara Municipal da Maia",
    en: "Case study · Maia City Council",
  } as Bi,
  maiaDescription: {
    pt: "Experiência cinematográfica sobre o ecossistema de dados e observabilidade construído para a Câmara Municipal da Maia.",
    en: "A cinematic experience about the data and observability ecosystem built for the Maia City Council.",
  } as Bi,
};

export const portfolioNavItems: { id: string; label: Bi }[] = [
  { id: "hero", label: { pt: "Início", en: "Home" } },
  { id: "signals", label: { pt: "Sinais GitHub", en: "GitHub signals" } },
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
      "Olá! Sou o Emanuel Wells.",
      "Pipelines que correm todos os dias.",
      "APIs, observabilidade e sistemas reais.",
    ],
    en: [
      "Hello! I'm Emanuel Wells.",
      "Pipelines that run every day.",
      "APIs, observability and real systems.",
    ],
  },
  subtitle: {
    pt: "Pipelines, APIs, observabilidade e infraestrutura — sistemas reais que correm todos os dias. Este portefólio junta o que construí; o case study da Maia mostra o trabalho mais profundo.",
    en: "Pipelines, APIs, observability and infrastructure — real systems that run every day. This portfolio brings together what I've built; the Maia case study shows the deepest work.",
  } as Bi,
  ctaProjects: { pt: "Ver projetos", en: "View projects" } as Bi,
  ctaMaia: { pt: "Descobrir o trabalho na Maia", en: "Discover the Maia work" } as Bi,
};

export const evidence = {
  eyebrow: { pt: "Evidência auditada", en: "Audited evidence" } as Bi,
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
      label: { pt: "estagiários orientados (confirmado)", en: "interns mentored (confirmed)" } as Bi,
      confirmed: true,
    },
  ],
};

export const githubSignals = {
  eyebrow: { pt: "Sinais públicos", en: "Public signals" } as Bi,
  panelTitle: { pt: "github@emanuwells", en: "github@emanuwells" } as Bi,
  title: { pt: "Actividade GitHub em tempo quase real", en: "Near-real-time GitHub activity" } as Bi,
  intro: {
    pt: "Métricas públicas, linguagens e ritmo de contribuição — o mesmo espírito do perfil GitHub, agora no portefólio.",
    en: "Public metrics, languages and contribution rhythm — the same spirit as the GitHub profile, now on the portfolio.",
  } as Bi,
  metrics: {
    publicRepos: { pt: "repositórios públicos", en: "public repositories" } as Bi,
    stars: { pt: "estrelas recebidas", en: "stars received" } as Bi,
    forks: { pt: "forks públicos", en: "public forks" } as Bi,
    followers: { pt: "seguidores", en: "followers" } as Bi,
  },
  languagesTitle: { pt: "Linguagens nos repositórios", en: "Repository languages" } as Bi,
  activityTitle: { pt: "Ritmo semanal (eventos públicos)", en: "Weekly rhythm (public events)" } as Bi,
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
  "React",
  "Docker",
  "Power BI",
  "PostgreSQL",
  "Linux",
];

export const projects = {
  eyebrow: { pt: "Projetos", en: "Projects" } as Bi,
  title: { pt: "Seis sistemas curados", en: "Six curated systems" } as Bi,
  intro: {
    pt: "Alguns são públicos; outros são case studies privados. O botão GitHub só aparece quando existe repositório verificável.",
    en: "Some are public; others are private case studies. The GitHub button only appears when a verifiable repository exists.",
  } as Bi,
  privateLabel: { pt: "Código privado", en: "Private source" } as Bi,
  items: [
    {
      id: "wells-os",
      name: { pt: "WELLS_OS", en: "WELLS_OS" } as Bi,
      description: {
        pt: "Hub operacional pessoal: consola React, API PHP, métricas Warden e pipelines Overseer.",
        en: "Personal operational hub: React console, PHP API, Warden metrics and Overseer pipelines.",
      } as Bi,
      tags: ["React", "Vite", "PHP", "Postgres"],
      isPrivate: true,
    },
    {
      id: "overseer",
      name: { pt: "Overseer", en: "Overseer" } as Bi,
      description: {
        pt: "Saúde de pipelines, histórico de execuções e sinais operacionais para tornar falhas acionáveis.",
        en: "Pipeline health, execution history and operational signals that make failures actionable.",
      } as Bi,
      tags: ["Python", "Observability", "Pipelines"],
      githubUrl: "https://github.com/emanuwells/Overseer",
      isPrivate: false,
    },
    {
      id: "warden",
      name: { pt: "Warden", en: "Warden" } as Bi,
      description: {
        pt: "Telemetria de servidores, retenção e alertas para observar infraestrutura sem tocar no runtime de produção.",
        en: "Server telemetry, retention and alerting that observe infrastructure without touching the production runtime.",
      } as Bi,
      tags: ["Python", "Linux", "Telemetry"],
      githubUrl: "https://github.com/emanuwells/Warden",
      isPrivate: false,
    },
    {
      id: "wells-api",
      name: { pt: "WELLS_API", en: "WELLS_API" } as Bi,
      description: {
        pt: "API municipal que expõe dados a dashboards, Power BI e integrações externas.",
        en: "Municipal API exposing data to dashboards, Power BI and external integrations.",
      } as Bi,
      tags: ["PHP", "REST", "MariaDB"],
      isPrivate: true,
    },
    {
      id: "traffic-flow",
      name: { pt: "Traffic Flow", en: "Traffic Flow" } as Bi,
      description: {
        pt: "Observações de tráfego preparadas para APIs interoperáveis, análise e modelos de dados urbanos.",
        en: "Traffic observations prepared for interoperable APIs, analytics and urban data models.",
      } as Bi,
      tags: ["Python", "NGSI-LD", "Smart Data Models"],
      isPrivate: true,
    },
    {
      id: "vacation-mode",
      name: { pt: "Vacation Mode", en: "Vacation Mode" } as Bi,
      description: {
        pt: "Automação focada, concebida para manter operação fiável durante períodos sem supervisão.",
        en: "Focused automation designed to keep operations dependable during unattended periods.",
      } as Bi,
      tags: ["PHP", "JavaScript"],
      githubUrl: "https://github.com/emanuwells/Vacation_Mode",
      isPrivate: false,
    },
  ],
};

export const skills = {
  eyebrow: { pt: "Competências", en: "Skills" } as Bi,
  title: { pt: "Linguagens e contexto", en: "Languages and context" } as Bi,
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
    pt: "Construí de raiz o ecossistema de dados e observabilidade do município — pipelines em produção, portal central, monitorização e formação de uma equipa de estágios. Sem cargo formal inventado: o trabalho fala pelos sistemas.",
    en: "I built the municipality's data and observability ecosystem from scratch — production pipelines, central portal, monitoring and mentoring an internship team. No invented job title: the work speaks through the systems.",
  } as Bi,
  linkLabel: { pt: "Ver case study cinematográfico", en: "View cinematic case study" } as Bi,
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
        pt: "Pipelines, catálogos governados e exposição para BI.",
        en: "Pipelines, governed catalogues and BI exposure.",
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
  title: { pt: "Emanuel Wells", en: "Emanuel Wells" } as Bi,
  intro: {
    pt: "Prefiro arquitecturas simples, documentação rigorosa e código que corre em produção. Trabalho em português europeu e inglês, com changelog e evidência em cada entrega.",
    en: "I prefer simple architectures, rigorous documentation and code that runs in production. I work in European Portuguese and English, with changelog and evidence in every delivery.",
  } as Bi,
};

export const contact = {
  eyebrow: { pt: "Contacto", en: "Contact" } as Bi,
  title: { pt: "Vamos falar sobre o próximo sistema.", en: "Let's talk about the next system." } as Bi,
  subtitle: {
    pt: "Aberto a conversas sobre engenharia de dados, observabilidade e infraestrutura.",
    en: "Open to conversations about data engineering, observability and infrastructure.",
  } as Bi,
  githubLabel: { pt: "GitHub", en: "GitHub" } as Bi,
  linkedinLabel: { pt: "LinkedIn", en: "LinkedIn" } as Bi,
  github: "https://github.com/emanuwells",
  linkedin: "https://www.linkedin.com/in/emanuel-ferreira91",
};

export const footer = {
  text: {
    pt: "Desenhado e construído por Emanuel Wells.",
    en: "Designed and built by Emanuel Wells.",
  } as Bi,
};

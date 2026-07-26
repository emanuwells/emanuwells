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
    pt: "Construí um ecossistema onde cada peça faz uma coisa: pipelines recolhem, o WELLS_API expõe, o Overseer e o Warden vigiam, e o WELLS_OS mostra tudo num só painel. O case study da Maia conta essa história do princípio ao fim.",
    en: "I built an ecosystem where each piece does one thing: pipelines collect, WELLS_API exposes, Overseer and Warden watch, and WELLS_OS shows it all in a single console. The Maia case study tells that story end to end.",
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
    pt: "Cada cartão é um sistema real em produção — e a maioria fala com os outros. Separo trabalho profissional de hobbies; o link GitHub só aparece quando o código é público.",
    en: "Each card is a real production system — and most of them talk to each other. I separate professional work from hobbies; the GitHub link only appears when the code is public.",
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
        pt: "A sala de controlo do ecossistema: consola read-only, protegida por login, que agrega métricas Warden, execuções Overseer e o registo de aplicações. Observa tudo sem tocar em nada — se um servidor sofre ou um pipeline falha, é aqui que se vê primeiro.",
        en: "The ecosystem's control room: a login-protected, read-only console aggregating Warden metrics, Overseer runs and the application registry. It watches everything and touches nothing — if a server struggles or a pipeline fails, this is where it shows first.",
      } as Bi,
      tags: ["Next.js", "React", "PHP API", "Postgres"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "wells-api",
      name: { pt: "WELLS_API", en: "WELLS_API" } as Bi,
      description: {
        pt: "A espinha dorsal da integração municipal: uma API PHP que serve datasets do catálogo, observações de tráfego em GeoJSON e NGSI-LD e snapshots de telemetria do Warden. É o único ponto por onde dashboards, Power BI e plataformas externas tocam nos dados.",
        en: "The backbone of municipal integration: a PHP API serving catalogue datasets, traffic observations in GeoJSON and NGSI-LD, and Warden telemetry snapshots. It is the single point where dashboards, Power BI and external platforms touch the data.",
      } as Bi,
      tags: ["PHP", "REST", "MariaDB", "NGSI-LD"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "overseer",
      name: { pt: "Overseer", en: "Overseer" } as Bi,
      description: {
        pt: "Observabilidade Docker-first para pipelines e DAGs externos: catálogo, runs, módulos, logs e heartbeats chegam por API; um dashboard read-only mostra o estado e o Slack recebe falhas e um digest diário. Se um pipeline devia ter corrido e não correu, o Overseer assinala.",
        en: "Docker-first observability for external pipelines and DAGs: catalogue, runs, modules, logs and heartbeats arrive via API; a read-only dashboard shows status and Slack receives failures plus a daily digest. If a pipeline should have run and didn't, Overseer flags it.",
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
        pt: "Collector Python que vigia CPU, RAM, disco, rede e crescimento da MariaDB, com retenção configurável e limpeza automática. Exporta snapshots consumidos pelo WELLS_API e alerta no Slack — imediato em incidentes, digest diário para o resto.",
        en: "A Python collector watching CPU, RAM, disk, network and MariaDB growth, with configurable retention and automatic cleanup. It exports snapshots consumed by WELLS_API and alerts on Slack — immediately for incidents, a daily digest for the rest.",
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
        pt: "Das câmaras Maia Nascente e Maia Poente saem contagens e velocidades em bruto; daqui saem observações normalizadas, servidas como GeoJSON para mapas ou NGSI-LD com URN estável — interoperáveis com os modelos europeus de cidades inteligentes.",
        en: "The Maia Nascente and Maia Poente cameras produce raw counts and speeds; this turns them into normalized observations served as GeoJSON for maps or NGSI-LD with stable URNs — interoperable with European smart-city models.",
      } as Bi,
      tags: ["Python", "NGSI-LD", "Smart Data Models"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "maiatron-hub",
      name: { pt: "MAIATRON-HUB", en: "MAIATRON-HUB" } as Bi,
      description: {
        pt: "O portal central do município: autenticação, catálogo de aplicações e navegação unificada. É a porta de entrada de quem consome os dados — e a fronteira que mantém domínios como a gestão de risco em serviços independentes.",
        en: "The municipality's central portal: authentication, application catalogue and unified navigation. It's the front door for data consumers — and the boundary that keeps domains like risk management in independent services.",
      } as Bi,
      tags: ["PHP", "JavaScript", "MariaDB"],
      kind: "professional" as ProjectKind,
      isPrivate: true,
    },
    {
      id: "vacation-mode",
      name: { pt: "Vacation Mode", en: "Vacation Mode" } as Bi,
      description: {
        pt: "Um Google Apps Script que lê a grelha anual de férias pintada à mão numa folha de cálculo, conta dias gozados e planeados e sincroniza tudo com o Google Calendar — agrupando dias consecutivos num só evento. Hobby, não stack de produção.",
        en: "A Google Apps Script that reads a hand-painted annual vacation grid in a spreadsheet, counts used and planned days, and syncs everything to Google Calendar — grouping consecutive days into a single event. A hobby, not a production stack.",
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
    pt: "Em cerca de oito meses, construí de raiz o ecossistema de dados e observabilidade do município: seis pipelines em produção, um portal central, uma API de integração e monitorização que vigia tudo sem tocar em nada. Pelo caminho, orientei quatro estágios em projetos reais. O trabalho fala pelos sistemas.",
    en: "In roughly eight months, I built the municipality's data and observability ecosystem from scratch: six production pipelines, a central portal, an integration API and monitoring that watches everything without touching anything. Along the way, I mentored four interns on real projects. The work speaks through the systems.",
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
    pt: "Prefiro arquitecturas simples a arquitecturas impressionantes: cada peça faz uma coisa, os sistemas de observação nunca tocam no que observam, e um dado só conta se for rastreável até à origem. Trabalho em português europeu e inglês; cada entrega leva evidência e changelog — mesmo quando ninguém pede. Online: emanuwells.",
    en: "I prefer simple architectures over impressive ones: each piece does one thing, observability systems never touch what they watch, and data only counts if it's traceable to its source. I work in European Portuguese and English; every delivery ships with evidence and a changelog — even when nobody asks. Online: emanuwells.",
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

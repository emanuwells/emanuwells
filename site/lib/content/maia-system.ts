/**
 * Conteúdo do site — bilingue (PT-PT / EN).
 * Centralizado aqui para facilitar edição sem tocar em componentes.
 */

export interface Bi {
  pt: string;
  en: string;
}

export const siteMeta = {
  title: {
    pt: "Emanuel Ferreira — Engenharia de dados e sistemas",
    en: "Emanuel Ferreira — Data engineering and systems",
  } as Bi,
  description: {
    pt: "Portfolio e hub operacional: engenharia de dados, observabilidade e sistemas em produção — com destaque para o ecossistema da Câmara Municipal da Maia.",
    en: "Portfolio and operational hub: data engineering, observability and production systems — featuring the Maia City Council data ecosystem.",
  } as Bi,
};

export const navItems: { id: string; label: Bi }[] = [
  { id: "hero", label: { pt: "Início", en: "Home" } },
  { id: "about", label: { pt: "Sobre", en: "About" } },
  { id: "projects", label: { pt: "Projetos", en: "Projects" } },
  { id: "maia", label: { pt: "Câmara da Maia", en: "Maia Council" } },
  { id: "maia-overview", label: { pt: "Visão Geral", en: "Overview" } },
  { id: "maia-pipelines", label: { pt: "Pipelines", en: "Pipelines" } },
  { id: "maia-monitoring", label: { pt: "Monitorização", en: "Monitoring" } },
  { id: "maia-infra", label: { pt: "Infraestrutura", en: "Infrastructure" } },
  { id: "maia-team", label: { pt: "Equipa", en: "Team" } },
  { id: "maia-results", label: { pt: "Resultados", en: "Results" } },
  { id: "stack", label: { pt: "Stack", en: "Stack" } },
  { id: "contact", label: { pt: "Contacto", en: "Contact" } },
];

export const hero = {
  eyebrow: {
    pt: "Engenharia de dados · Observabilidade · Full-stack",
    en: "Data engineering · Observability · Full-stack",
  } as Bi,
  title: {
    pt: "Construo sistemas de dados que ligam recolha, qualidade, APIs e operação.",
    en: "I build data systems that connect ingestion, quality, APIs and operations.",
  } as Bi,
  subtitle: {
    pt: "Portfolio agregador do meu trabalho: pipelines em produção, monitorização em tempo real, APIs e uma consola operacional. O case study principal é o ecossistema que construí de raiz para a Câmara Municipal da Maia.",
    en: "An aggregator portfolio of my work: production pipelines, real-time monitoring, APIs and an operational console. The flagship case study is the ecosystem I built from scratch for the Maia City Council.",
  } as Bi,
  ctaPrimary: {
    pt: "Ver projetos",
    en: "View projects",
  } as Bi,
  ctaSecondary: {
    pt: "Dados Município Maia",
    en: "Maia Municipality Data",
  } as Bi,
  statLabel1: { pt: "anos em dados", en: "years in data" } as Bi,
  statLabel2: { pt: "projetos activos", en: "active projects" } as Bi,
  statLabel3: { pt: "entregas versionadas", en: "versioned releases" } as Bi,
};

export const profile = {
  eyebrow: { pt: "Sobre", en: "About" } as Bi,
  title: {
    pt: "Engenheiro de dados com foco em sistemas reais",
    en: "Data engineer focused on real systems",
  } as Bi,
  intro: {
    pt: "Desenho e construo ecossistemas de dados completos — da recolha à observabilidade, da API ao dashboard. Prefiro arquitecturas simples, documentação rigorosa e código que corre em produção todos os dias.",
    en: "I design and build complete data ecosystems — from collection to observability, from API to dashboard. I prefer simple architectures, rigorous documentation and code that runs in production every day.",
  } as Bi,
  skills: [
    { pt: "Pipelines ETL/ELT e catálogos de dados", en: "ETL/ELT pipelines and data catalogs" },
    { pt: "Observabilidade (Overseer, Warden, métricas)", en: "Observability (Overseer, Warden, metrics)" },
    { pt: "APIs REST, PHP, Python, TypeScript", en: "REST APIs, PHP, Python, TypeScript" },
    { pt: "Frontend React, Next.js, Vite", en: "React, Next.js, Vite frontends" },
    { pt: "Docker, Nginx, Linux, deploy controlado", en: "Docker, Nginx, Linux, controlled deploy" },
    { pt: "Standards smart cities (NGSI-LD, GeoJSON)", en: "Smart city standards (NGSI-LD, GeoJSON)" },
  ] as Bi[],
};

export const projects = {
  eyebrow: { pt: "Projetos", en: "Projects" } as Bi,
  title: { pt: "Sistemas que trabalham em conjunto", en: "Systems working together" } as Bi,
  intro: {
    pt: "Cada cartão representa um sistema real — alguns públicos, outros descritos apenas ao nível necessário para explicar o trabalho.",
    en: "Each card represents a real system — some public, others described only as far as needed to explain the work.",
  } as Bi,
  items: [
    {
      id: "console",
      name: { pt: "WELLS_OS", en: "WELLS_OS" } as Bi,
      description: {
        pt: "Consola operacional com métricas Warden, jobs Overseer e registo de aplicações — a sala de controlo pessoal.",
        en: "Operational console with Warden metrics, Overseer jobs and application registry — the personal control room.",
      } as Bi,
      tags: ["React", "Vite", "PHP API"],
      hrefKey: "console" as const,
    },
    {
      id: "maia",
      name: { pt: "Ecossistema Câmara da Maia", en: "Maia City Council Ecosystem" } as Bi,
      description: {
        pt: "Pipelines, portal central, observabilidade e infraestrutura municipal construídos de raiz em ~8 meses.",
        en: "Pipelines, central portal, observability and municipal infrastructure built from scratch in ~8 months.",
      } as Bi,
      tags: ["Python", "PHP", "MariaDB", "Docker"],
      hrefKey: "anchor" as const,
      anchor: "maia",
    },
    {
      id: "github",
      name: { pt: "Código aberto", en: "Open source" } as Bi,
      description: {
        pt: "Repositórios públicos com changelog rigoroso e documentação em português europeu.",
        en: "Public repositories with rigorous changelogs and documentation in European Portuguese.",
      } as Bi,
      tags: ["GitHub", "SemVer", "Docs"],
      hrefKey: "github" as const,
    },
  ],
};

export const maiaCaseStudy = {
  eyebrow: {
    pt: "Dados Município Maia",
    en: "Maia Municipality Data",
  } as Bi,
  title: {
    pt: "Os dados da Maia não começam numa dashboard",
    en: "Maia's data does not begin on a dashboard",
  } as Bi,
  intro: {
    pt: "Começam numa câmara de trânsito, numa resposta de Forms, numa tabela do INE ou num catálogo inconsistente. Em cerca de oito meses, a equipa de dados e programação ligou essas origens a um sistema municipal observável — da recolha à decisão — com contributo técnico forte em pipelines, APIs e interoperabilidade.",
    en: "They begin at a traffic camera, in a Forms response, in an INE table, or in an inconsistent catalogue. In roughly eight months, the data and programming team connected those sources to an observable municipal system — from collection to decision — with strong technical contribution on pipelines, APIs and interoperability.",
  } as Bi,
  chapters: [
    { value: "01", label: { pt: "Recolher", en: "Collect" } as Bi },
    { value: "02", label: { pt: "Dar contexto", en: "Add context" } as Bi },
    { value: "03", label: { pt: "Vigiar", en: "Observe" } as Bi },
    { value: "04", label: { pt: "Decidir", en: "Decide" } as Bi },
  ],
};

export const overview = {
  eyebrow: { pt: "Visão Geral", en: "Overview" } as Bi,
  title: {
    pt: "Três camadas, um só sistema",
    en: "Three layers, one system",
  } as Bi,
  intro: {
    pt: "O ecossistema assenta numa regra simples: quem produz dados, quem os observa e quem os consome não se misturam. Cada peça faz uma coisa; Overseer e Warden vigiam de fora. O fio condutor é interoperabilidade — fontes diversas → contrato comum → Power BI, Huwise e APIs.",
    en: "The ecosystem rests on one simple rule: whoever produces data, observes it, or consumes it does not mix. Each piece does one thing; Overseer and Warden watch from the outside. The through-line is interoperability — diverse sources → shared contract → Power BI, Huwise and APIs.",
  } as Bi,
  layers: [
    {
      name: { pt: "Produção", en: "Production" } as Bi,
      description: {
        pt: "Pipelines que recolhem, limpam e sincronizam dados de fontes reais — do INE a câmaras de tráfego e Medidata.",
        en: "Pipelines that collect, clean and sync data from real sources — from the national statistics office to traffic cameras and Medidata.",
      } as Bi,
    },
    {
      name: { pt: "Observabilidade", en: "Observability" } as Bi,
      description: {
        pt: "Overseer regista o que cada pipeline fez; Warden vigia a saúde dos servidores que os correm.",
        en: "Overseer logs what each pipeline did; Warden watches the health of the servers running them.",
      } as Bi,
    },
    {
      name: { pt: "Consumo", en: "Consumption" } as Bi,
      description: {
        pt: "WELLS_API expõe dados a Power BI e integrações; portais Huwise (aberto e interno SGM) e o DataTron no MAIATRON-HUB fecham o ciclo.",
        en: "WELLS_API exposes data to Power BI and integrations; Huwise portals (open and internal MS) and DataTron in MAIATRON-HUB close the loop.",
      } as Bi,
    },
  ],
  hubNote: {
    pt: "O MAIATRON-HUB reúne autenticação, catálogo e navegação. O DataTron trata dados, metas de indicadores e apoio ao Sistema de Gestão. O Webapp-Medidata apresenta dados Medidata das UOs; o Medidata Pipeline integra-os na base de dados. O WELLS_OS permanece um projeto pessoal separado para observar integrações sem fazer parte do runtime municipal.",
    en: "MAIATRON-HUB brings together authentication, catalogue and navigation. DataTron handles data, indicator targets and Management System support. Webapp-Medidata presents Medidata data for organisational units; the Medidata Pipeline integrates them into the database. WELLS_OS remains a separate personal project to observe integrations without becoming part of the municipal runtime.",
  } as Bi,
};

export const pipelines = {
  eyebrow: { pt: "Produção de Dados", en: "Data Production" } as Bi,
  title: { pt: "Cinco problemas, cinco percursos de dados", en: "Five problems, five data journeys" } as Bi,
  intro: {
    pt: "Escolha um caso. Em vez de listar tecnologia, mostramos a fricção que existia, um exemplo do que entra no sistema e o que muda depois de o pipeline correr.",
    en: "Choose a case. Instead of listing technology, we show the original friction, an example of what enters the system, and what changes after the pipeline runs.",
  } as Bi,
  items: [
    {
      id: "paladin",
      name: "Data Paladin",
      role: { pt: "Governar o catálogo", en: "Govern the catalogue" } as Bi,
      status: { pt: "Ativo", en: "Active" } as Bi,
      problem: {
        pt: "O mesmo tema, fonte ou responsável aparecia escrito de formas diferentes. As séries existiam, mas deixavam de ser fáceis de encontrar, comparar e reutilizar.",
        en: "The same theme, source, or owner appeared under different spellings. The series existed, but became harder to find, compare, and reuse.",
      } as Bi,
      example: {
        label: { pt: "Exemplo de normalização", en: "Normalization example" } as Bi,
        before: "Ambiente; ambiental; AMB",
        after: "Ambiente",
        note: {
          pt: "O valor canónico vem de um vocabulário versionado; identificadores ficam sempre só de leitura.",
          en: "The canonical value comes from a versioned vocabulary; identifiers always remain read-only.",
        } as Bi,
      },
      steps: [
        { pt: "Lê o catálogo diretamente da base de dados", en: "Reads the catalogue directly from the database" },
        { pt: "Recolhe valores distintos e compara-os com vocabulários", en: "Harvests distinct values and compares them with vocabularies" },
        { pt: "Mostra o impacto em dry-run antes de escrever", en: "Shows impact in a dry run before writing" },
        { pt: "Aplica apenas colunas autorizadas, com backup e changelog", en: "Applies only authorized columns, with backup and changelog" },
      ] as Bi[],
      outcome: {
        pt: "O catálogo passa a usar a mesma linguagem em toda a cadeia e exporta esse contrato para o DataTron.",
        en: "The catalogue uses one language across the whole chain and exports that contract to DataTron.",
      } as Bi,
      tags: ["Python", "MySQL", "Tkinter GUI"],
      schedule: { pt: "Sob pedido · GUI", en: "On demand · GUI" } as Bi,
      apiEndpoint: null,
      highlights: [
        { pt: "Vocabulários versionados com dry-run antes de escrever", en: "Versioned vocabularies with dry-run before write" },
        { pt: "Backup automático e changelog por coluna", en: "Automatic backup and per-column changelog" },
      ] as Bi[],
    },
    {
      id: "ine",
      name: "INE Pipeline",
      role: { pt: "Atualizar estatística oficial", en: "Update official statistics" } as Bi,
      status: { pt: "Produção batch", en: "Batch production" } as Bi,
      problem: {
        pt: "Indicadores oficiais mudam a ritmos diferentes e a transição para NUTS 2024 cria sobreposição com séries antigas. Recarregar tudo seria lento e arriscado.",
        en: "Official indicators change at different rates, and the NUTS 2024 transition overlaps with legacy series. Reloading everything would be slow and risky.",
      } as Bi,
      example: {
        label: { pt: "Decisão incremental", en: "Incremental decision" } as Bi,
        before: "2021 ✓  2022 ✓  2023 —",
        after: "pedir 2023",
        note: {
          pt: "Se o valor já existe, o pipeline regista a verificação sem fingir que houve uma atualização.",
          en: "If the value already exists, the pipeline records the check without pretending an update occurred.",
        } as Bi,
      },
      steps: [
        { pt: "Lê conectores de séries e o último período publicado", en: "Reads series connectors and the latest published period" },
        { pt: "Planeia apenas períodos em falta ou dentro do lookback", en: "Plans only missing periods or those within the lookback" },
        { pt: "Faz merge entre perfis legacy e NUTS 2024", en: "Merges legacy and NUTS 2024 profiles" },
        { pt: "Faz upsert idempotente em dados e metadados", en: "Performs idempotent upserts on data and metadata" },
      ] as Bi[],
      outcome: {
        pt: "A Maia mantém séries oficiais atuais sem duplicar pedidos, factos ou datas de atualização.",
        en: "Maia keeps official series current without duplicating requests, facts, or update dates.",
      } as Bi,
      tags: ["Python", "REST API", "MySQL/MariaDB"],
      schedule: { pt: "Batch noturno · INE", en: "Nightly batch · INE" } as Bi,
      apiEndpoint: "datasets.php",
      highlights: [
        { pt: "Merge incremental NUTS 2024 vs séries legacy", en: "Incremental NUTS 2024 vs legacy series merge" },
        { pt: "Upsert idempotente — sem duplicar períodos já publicados", en: "Idempotent upsert — no duplicate published periods" },
      ] as Bi[],
    },
    {
      id: "medidata",
      name: "Medidata Pipeline",
      role: { pt: "Integrar indicadores internos", en: "Integrate internal indicators" } as Bi,
      status: { pt: "Produção · 07:30", en: "Production · 07:30" } as Bi,
      problem: {
        pt: "A aplicação Medidata expõe indicadores numa interface interna. O Webapp-Medidata apresenta esses dados das unidades orgânicas de forma mais legível; o Medidata Pipeline é que integra factos normalizados na base de dados para o repositório analítico.",
        en: "The Medidata application exposes indicators in an internal interface. Webapp-Medidata presents that organisational-unit data more clearly; the Medidata Pipeline integrates normalized facts into the database for the analytical repository.",
      } as Bi,
      example: {
        label: { pt: "Separação de camadas", en: "Layer separation" } as Bi,
        before: "página interna → registo raw",
        after: "dataset + origem + data",
        note: {
          pt: "O raw fica em MAIATRON; a normalização e os metadados operacionais seguem para Chronos.",
          en: "Raw data remains in MAIATRON; normalization and operational metadata go to Chronos.",
        } as Bi,
      },
      steps: [
        { pt: "Recolhe a listagem interna e persiste o registo original", en: "Collects the internal listing and persists the original record" },
        { pt: "Valida o mapping versionado de cada indicador", en: "Validates each indicator's versioned mapping" },
        { pt: "Normaliza origem, data e valor", en: "Normalizes source, date, and value" },
        { pt: "Sincroniza factos e atualiza metadados operacionais", en: "Synchronizes facts and updates operational metadata" },
      ] as Bi[],
      outcome: {
        pt: "Uma fonte interna passa a alimentar o mesmo modelo analítico usado pelas restantes séries municipais.",
        en: "An internal source feeds the same analytical model used by the other municipal series.",
      } as Bi,
      tags: ["Python", "MySQL"],
      schedule: { pt: "Produção diária · 07:30", en: "Daily production · 07:30" } as Bi,
      apiEndpoint: "datasets.php",
      highlights: [
        { pt: "Raw em MAIATRON · normalização em Chronos", en: "Raw in MAIATRON · normalization in Chronos" },
        { pt: "Mapping versionado por indicador", en: "Versioned mapping per indicator" },
      ] as Bi[],
    },
    {
      id: "forms",
      name: "Microsoft Forms → Datalake",
      role: { pt: "Libertar dados das folhas", en: "Release data from spreadsheets" } as Bi,
      status: { pt: "Produção · 07:45", en: "Production · 07:45" } as Bi,
      problem: {
        pt: "Respostas operacionais chegam em ficheiros Excel sincronizados pelo SharePoint. Sem automação, cada atualização depende de abrir, validar e copiar linhas manualmente.",
        en: "Operational responses arrive in Excel files synchronized by SharePoint. Without automation, every update depends on manually opening, validating, and copying rows.",
      } as Bi,
      example: {
        label: { pt: "Chave que evita duplicados", en: "Key that prevents duplicates" } as Bi,
        before: "Form: valor + período",
        after: "(dataset_id, fim do período)",
        note: {
          pt: "Se o formulário voltar a trazer a mesma resposta, o upsert atualiza o registo certo em vez de criar outro.",
          en: "If the form returns the same response again, the upsert updates the right record instead of creating another one.",
        } as Bi,
      },
      steps: [
        { pt: "Descobre ficheiros na pasta SharePoint do utilizador", en: "Discovers files in the user's SharePoint folder" },
        { pt: "Lê Excel clássico ou exportação de Forms", en: "Reads classic Excel or a Forms export" },
        { pt: "Valida cabeçalhos, séries e períodos", en: "Validates headers, series, and periods" },
        { pt: "Sincroniza por SSH com lock de execução", en: "Synchronizes over SSH with an execution lock" },
      ] as Bi[],
      outcome: {
        pt: "A recolha continua familiar para as equipas, mas o dado chega ao datalake de forma repetível e auditável.",
        en: "Collection remains familiar to teams, while the data reaches the data lake in a repeatable, auditable way.",
      } as Bi,
      tags: ["Python", "SharePoint", "SSH"],
      schedule: { pt: "Produção diária · 07:45", en: "Daily production · 07:45" } as Bi,
      apiEndpoint: null,
      highlights: [
        { pt: "Descoberta automática na pasta SharePoint", en: "Automatic discovery in SharePoint folder" },
        { pt: "Lock de execução e sync por SSH", en: "Execution lock and SSH sync" },
      ] as Bi[],
    },
    {
      id: "traffic",
      name: "Traffic Flow",
      role: { pt: "Transformar movimento em dado urbano", en: "Turn movement into urban data" } as Bi,
      status: { pt: "Ativo · API pública", en: "Active · public API" } as Bi,
      problem: {
        pt: "As câmaras Maia Nascente e Maia Poente produzem contagens e velocidades por gate. Esse sinal bruto não serve diretamente um mapa, Power BI ou uma plataforma de cidade inteligente.",
        en: "The Maia Nascente and Maia Poente cameras produce counts and speeds by gate. That raw signal cannot directly serve a map, Power BI, or a smart-city platform.",
      } as Bi,
      example: {
        label: { pt: "Uma observação", en: "One observation" } as Bi,
        before: "Nascente · gate 3 · Car 37 · 42 km/h",
        after: "TrafficFlowObserved",
        note: {
          pt: "A mesma observação pode sair como GeoJSON para mapas ou NGSI-LD com URN estável para interoperabilidade.",
          en: "The same observation can be served as GeoJSON for maps or as NGSI-LD with a stable URN for interoperability.",
        } as Bi,
      },
      steps: [
        { pt: "Recolhe contagens por classe e velocidades das câmaras", en: "Collects counts by class and camera speeds" },
        { pt: "Converte unidades e persiste a observação", en: "Converts units and persists the observation" },
        { pt: "Filtra por câmara, gate, veículo e intervalo", en: "Filters by camera, gate, vehicle, and interval" },
        { pt: "Publica GeoJSON, keyValues ou NGSI-LD", en: "Publishes GeoJSON, keyValues, or NGSI-LD" },
      ] as Bi[],
      outcome: {
        pt: "Um dado local passa a ser legível por mapas e BI e interoperável com modelos europeus de territórios inteligentes.",
        en: "Local data becomes readable by maps and BI, and interoperable with European smart-territory models.",
      } as Bi,
      tags: ["Python", "PHP", "GeoJSON", "NGSI-LD"],
      schedule: { pt: "Contínuo · API pública", en: "Continuous · public API" } as Bi,
      apiEndpoint: "traffic_flow.php",
      highlights: [
        { pt: "Câmaras Maia Nascente e Maia Poente", en: "Maia Nascente and Maia Poente cameras" },
        { pt: "GeoJSON, keyValues e NGSI-LD com URN estável", en: "GeoJSON, keyValues and NGSI-LD with stable URN" },
      ] as Bi[],
    },
  ],
};

export const monitoring = {
  eyebrow: { pt: "Observabilidade", en: "Observability" } as Bi,
  title: {
    pt: "Duas perguntas, dois sistemas",
    en: "Two questions, two systems",
  } as Bi,
  intro: {
    pt: "O Overseer responde «os pipelines correram?» — runs, logs e heartbeats de processos externos. O Warden responde «o servidor principal está saudável?» — CPU, RAM, disco e MariaDB. Nenhum executa código de produção: só observam. Hoje o Warden corre no servidor principal; a expansão a mais hosts está em curso.",
    en: "Overseer answers \"did the pipelines run?\" — runs, logs and heartbeats from external processes. Warden answers \"is the main server healthy?\" — CPU, RAM, disk and MariaDB. Neither executes production code: they only observe. Today Warden runs on the main server; expansion to more hosts is underway.",
  } as Bi,
  cards: [
    {
      name: "Overseer",
      tagline: {
        pt: "O que cada pipeline fez — e o que falhou",
        en: "What each pipeline did — and what failed",
      } as Bi,
      description: {
        pt: "Serviço Docker-first de observabilidade: pipelines externos reportam catálogo, runs, módulos e logs por API. O dashboard é só de leitura. Se um job deveria ter corrido e não correu, fica assinalado. Weather API 4 Maia e outros pipelines já reportam aqui.",
        en: "Docker-first observability service: external pipelines report catalogue, runs, modules and logs via API. The dashboard is read-only. If a job should have run and didn't, it is flagged. Weather API 4 Maia and other pipelines already report here.",
      } as Bi,
      points: {
        pt: [
          "Catálogo, runs, módulos e heartbeats por API",
          "Dashboard read-only + alertas Slack",
          "Não executa o código dos pipelines — só observa",
        ],
        en: [
          "Catalogue, runs, modules and heartbeats via API",
          "Read-only dashboard + Slack alerts",
          "Does not run pipeline code — only watches",
        ],
      },
    },
    {
      name: "Warden",
      tagline: {
        pt: "Saúde do servidor principal",
        en: "Main server health",
      } as Bi,
      description: {
        pt: "Collector Python no servidor principal de produção: CPU, RAM, disco, rede e crescimento MariaDB. Exporta snapshots consumidos pelo WELLS_API e alerta no Slack. A meta é cobrir mais hosts; por agora a telemetria Warden está neste servidor.",
        en: "Python collector on the main production server: CPU, RAM, disk, network and MariaDB growth. Exports snapshots consumed by WELLS_API and alerts on Slack. The goal is more hosts; for now Warden telemetry is on this server.",
      } as Bi,
      points: {
        pt: [
          "Métricas de sistema e MariaDB no servidor principal",
          "Alertas Slack + digest diário",
          "Expansão a mais hosts em curso",
        ],
        en: [
          "System and MariaDB metrics on the main server",
          "Slack alerts + daily digest",
          "Expansion to more hosts underway",
        ],
      },
    },
  ],
  exampleLabel: { pt: "Endpoints de leitura (exemplos)", en: "Read endpoints (examples)" } as Bi,
};

export const infrastructure = {
  eyebrow: { pt: "Infraestrutura", en: "Infrastructure" } as Bi,
  title: { pt: "Um servidor principal, postos de operação", en: "One main server, operations workstations" } as Bi,
  intro: {
    pt: "A infraestrutura é deliberadamente simples: um servidor Linux de produção corre a stack Docker-first (Nginx, PHP-FPM, MariaDB) e é onde o Warden recolhe telemetria hoje. Cinco postos Windows municipais servem como pontos de recolha e operação — um deles agenda pipelines via Task Scheduler — sem afirmar cobertura Warden em todos.",
    en: "The infrastructure is deliberately simple: one Linux production server runs a Docker-first stack (Nginx, PHP-FPM, MariaDB) and is where Warden collects telemetry today. Five municipal Windows workstations act as collection and operations points — one schedules pipelines via Task Scheduler — without claiming Warden coverage on all of them.",
  } as Bi,
  points: [
    {
      title: { pt: "Servidor de produção", en: "Production server" } as Bi,
      description: {
        pt: "Linux, Docker-first, Nginx + PHP-FPM, MariaDB. Runtime partilhado das apps do ecossistema — e alvo actual do Warden.",
        en: "Linux, Docker-first, Nginx + PHP-FPM, MariaDB. Shared runtime for ecosystem apps — and the current Warden target.",
      } as Bi,
    },
    {
      title: { pt: "Postos de trabalho Windows", en: "Windows workstations" } as Bi,
      description: {
        pt: "Máquinas municipais para operação e recolha; pipelines agendados num dos postos. Telemetria Warden nestes hosts ainda não é o estado actual.",
        en: "Municipal machines for operations and collection; scheduled pipelines on one workstation. Warden telemetry on these hosts is not the current state.",
      } as Bi,
    },
    {
      title: { pt: "Deploy controlado", en: "Controlled deploy" } as Bi,
      description: {
        pt: "Scripts de publicação com backup antes de alterações em produção e validação pós-deploy dos endpoints críticos.",
        en: "Publishing scripts with backup before production changes and post-deploy validation of critical endpoints.",
      } as Bi,
    },
  ],
};

export const team = {
  eyebrow: { pt: "Equipa e estágios", en: "Team and internships" } as Bi,
  title: {
    pt: "Estágios que entram nos dados do município",
    en: "Internships that feed municipal data work",
  } as Bi,
  intro: {
    pt: "Os estágios em dados e programação não são tarefas isoladas: entram no trabalho real do município. Assisto e acompanho o percurso — documentação, máquinas, boas práticas — porque isso ajuda a equipa, fortalece os dados e dá espaço aos estagiários para crescerem com responsabilidade. Dois exemplos concretos e um contributo decisivo para o INE Pipeline.",
    en: "Internships in data and programming are not isolated tasks: they join the municipality's real work. I assist and support the journey — docs, machines, good practices — because that helps the team, strengthens the data and gives interns room to grow with responsibility. Two concrete examples and a decisive contribution to the INE Pipeline.",
  } as Bi,
  projects: [
    {
      name: {
        pt: "Billboard digital do concelho",
        en: "Municipality digital billboard",
      } as Bi,
      description: {
        pt: "Painel dedicado a dados do concelho — trânsito, acessos, tempo — e redefinição do site institucional, com participação activa dos estágios.",
        en: "A display dedicated to municipality data — traffic, access points, weather — plus a redesign of the institutional website, with active internship participation.",
      } as Bi,
    },
    {
      name: {
        pt: "Limpeza e harmonização de dados",
        en: "Data cleaning & harmonization",
      } as Bi,
      description: {
        pt: "Limpeza e harmonização entre fontes distintas — base para o trabalho que hoje corre no Data Paladin.",
        en: "Cleaning and harmonization across distinct sources — groundwork for what today runs in Data Paladin.",
      } as Bi,
    },
    {
      name: {
        pt: "Códigos INE → pipeline em produção",
        en: "INE codes → production pipeline",
      } as Bi,
      description: {
        pt: "A busca e organização de códigos INE, com apoio dos estágios que acompanho, acelerou a colocação do INE Pipeline em produção — séries oficiais a actualizar de forma repetível.",
        en: "Finding and organising INE codes, with support from the internships I assist, accelerated putting the INE Pipeline into production — official series updating in a repeatable way.",
      } as Bi,
    },
  ],
};

export const stack = {
  eyebrow: { pt: "Stack Tecnológico", en: "Tech Stack" } as Bi,
  title: { pt: "As ferramentas por trás de tudo", en: "The tools behind it all" } as Bi,
  groups: [
    {
      category: { pt: "Linguagens", en: "Languages" } as Bi,
      items: ["Python", "PHP", "TypeScript", "JavaScript"],
    },
    {
      category: { pt: "Backend & APIs", en: "Backend & APIs" } as Bi,
      items: ["FastAPI", "PHP procedural", "REST"],
    },
    {
      category: { pt: "Frontend", en: "Frontend" } as Bi,
      items: ["Next.js", "React", "Vite", "Framer Motion"],
    },
    {
      category: { pt: "Dados", en: "Data" } as Bi,
      items: ["MariaDB", "MySQL", "Postgres (Neon)", "Power BI / DAX"],
    },
    {
      category: { pt: "Infraestrutura", en: "Infrastructure" } as Bi,
      items: ["Docker", "Nginx", "systemd", "SSH"],
    },
    {
      category: { pt: "Standards", en: "Standards" } as Bi,
      items: ["GeoJSON", "NGSI-LD", "Smart Data Models"],
    },
  ],
};

export const results = {
  eyebrow: { pt: "Resultados", en: "Results" } as Bi,
  title: { pt: "Construído de raiz, em produção real", en: "Built from scratch, in real production" } as Bi,
  intro: {
    pt: "Não é uma prova de conceito. É um sistema que corre todas as manhãs — às 07:30 sincroniza indicadores internos, às 07:45 recolhe formulários, e as câmaras de tráfego não param. Quando algo falha, o Slack avisa a equipa. O mesmo fio alimenta Power BI, o DataTron e os portais Huwise.",
    en: "This isn't a proof of concept. It's a system that runs every morning — syncing internal indicators at 07:30, collecting forms at 07:45, with traffic cameras that do not stop. When something fails, Slack alerts the team. The same through-line feeds Power BI, DataTron and Huwise portals.",
  } as Bi,
  metrics: [
    { value: "~8", label: { pt: "meses do zero à produção", en: "months from zero to production" } as Bi },
    { value: "6+", label: { pt: "pipelines activos", en: "active pipelines" } as Bi },
    { value: "3", label: { pt: "normas ISO no SGM", en: "ISO standards in the MS" } as Bi },
    { value: "2", label: { pt: "portais Huwise de dados", en: "Huwise data portals" } as Bi },
  ],
  highlights: {
    pt: [
      "Interoperabilidade como regra: fontes diversas → catálogo/DataTron → WELLS_API → Power BI e Huwise.",
      "Apoio ao Sistema de Gestão (ISO 9001, 14001, 37120) com amostragem para auditoria das UOs.",
      "Observabilidade própria (Overseer + Warden) sem interferir no código observado.",
      "Dois portais Huwise — dados aberto (dados.cm-maia.pt) e portal interno do SGM — em alimentação contínua.",
    ],
    en: [
      "Interoperability as the rule: diverse sources → catalogue/DataTron → WELLS_API → Power BI and Huwise.",
      "Management System support (ISO 9001, 14001, 37120) with sampling for organisational-unit audits.",
      "Custom observability (Overseer + Warden) without interfering with watched code.",
      "Two Huwise portals — open data (dados.cm-maia.pt) and the internal MS portal — under continuous feeding.",
    ],
  },
};

export const contact = {
  eyebrow: { pt: "Contacto", en: "Contact" } as Bi,
  title: {
    pt: "Vamos falar sobre o próximo sistema.",
    en: "Let's talk about the next system.",
  } as Bi,
  subtitle: {
    pt: "Aberto a novas oportunidades em engenharia de dados, observabilidade e infraestrutura.",
    en: "Open to new opportunities in data engineering, observability and infrastructure.",
  } as Bi,
  emailLabel: { pt: "Email", en: "Email" } as Bi,
  githubLabel: { pt: "GitHub", en: "GitHub" } as Bi,
  github: "https://github.com/emanuwells",
};

export const footer = {
  text: {
    pt: "Desenhado e construído por Emanuel Ferreira · emanuwells",
    en: "Designed and built by Emanuel Ferreira · emanuwells",
  } as Bi,
};

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
    pt: "Emanuel Wells — Engenharia de dados e sistemas",
    en: "Emanuel Wells — Data engineering and systems",
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
    pt: "Case study Maia",
    en: "Maia case study",
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
    pt: "Case study · Câmara Municipal da Maia",
    en: "Case study · Maia City Council",
  } as Bi,
  title: {
    pt: "Os dados da Maia não começam numa dashboard",
    en: "Maia's data does not begin on a dashboard",
  } as Bi,
  intro: {
    pt: "Começam numa câmara de trânsito, numa resposta de Forms, numa tabela do INE ou num catálogo que já perdeu consistência. Em cerca de oito meses, liguei essas origens a um sistema municipal observável — da recolha à decisão.",
    en: "They begin at a traffic camera, in a Forms response, in an INE table, or in a catalogue that has lost consistency. In roughly eight months, I connected those sources to an observable municipal system — from collection to decision.",
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
    pt: "O ecossistema separa claramente quem produz dados, quem os observa e quem os consome — unificado por um portal central. Nenhuma camada executa o trabalho da outra: cada peça faz uma coisa e o Overseer e o Warden observam tudo de fora, sem tocar no código dos pipelines.",
    en: "The ecosystem clearly separates who produces data, who observes it, and who consumes it — unified by a central portal. No layer does another's job: each piece does one thing, and Overseer and Warden observe everything from the outside, without touching pipeline code.",
  } as Bi,
  layers: [
    {
      name: { pt: "Produção", en: "Production" } as Bi,
      description: {
        pt: "Pipelines que recolhem, limpam e sincronizam dados de fontes reais — do INE a câmaras de tráfego.",
        en: "Pipelines that collect, clean and sync data from real sources — from the national statistics office to traffic cameras.",
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
        pt: "WELLS_API expõe os dados a dashboards, Power BI e integrações externas — tudo acessível pelo portal MAIATRON-HUB.",
        en: "WELLS_API exposes data to dashboards, Power BI and external integrations — all reachable from the MAIATRON-HUB portal.",
      } as Bi,
    },
  ],
  hubNote: {
    pt: "O MAIATRON-HUB reúne autenticação, catálogo e navegação entre aplicações. O WELLS_OS permanece um projeto pessoal separado, concebido para observar as integrações sem fazer parte do runtime municipal.",
    en: "MAIATRON-HUB brings together authentication, catalogue and navigation across applications. WELLS_OS remains a separate personal project designed to observe integrations without becoming part of the municipal runtime.",
  } as Bi,
};

export const pipelines = {
  eyebrow: { pt: "Produção de Dados", en: "Data Production" } as Bi,
  title: { pt: "Seis problemas, seis percursos de dados", en: "Six problems, six data journeys" } as Bi,
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
        pt: "A aplicação Medidata expõe indicadores numa interface interna, mas o repositório analítico precisa de factos normalizados, rastreáveis e seguros para consumo.",
        en: "The Medidata application exposes indicators in an internal interface, but the analytical repository needs normalized, traceable, and safe facts for consumption.",
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
    {
      id: "risk",
      name: "Risk Improve",
      role: { pt: "Acompanhar risco até à ação", en: "Track risk through to action" } as Bi,
      status: { pt: "Em extração controlada", en: "Controlled extraction" } as Bi,
      problem: {
        pt: "Riscos, ações de melhoria e indicadores estavam presos a uma aplicação do portal central. Evoluir esse domínio exigia tocar no monólito e aumentar o impacto de cada mudança.",
        en: "Risks, improvement actions, and indicators were tied to an application in the central portal. Evolving that domain meant touching the monolith and increasing the impact of each change.",
      } as Bi,
      example: {
        label: { pt: "Fluxo operacional", en: "Operational flow" } as Bi,
        before: "Excel → comparação manual",
        after: "importar → diff → ativar",
        note: {
          pt: "A importação mostra diferenças antes de tornar uma versão ativa; a migração destrutiva continua bloqueada por backup e confirmação.",
          en: "Import shows differences before making a version active; destructive migration remains gated by backup and confirmation.",
        } as Bi,
      },
      steps: [
        { pt: "Importa a versão Excel para um pipeline canónico", en: "Imports the Excel version into a canonical pipeline" },
        { pt: "Calcula diferenças e aplica presets", en: "Calculates differences and applies presets" },
        { pt: "Liga riscos a ações e indicadores", en: "Connects risks to actions and indicators" },
        { pt: "Expõe o domínio como serviço independente", en: "Exposes the domain as an independent service" },
      ] as Bi[],
      outcome: {
        pt: "A gestão de risco ganha um ciclo próprio de entrega e uma fronteira clara, sem perder as salvaguardas de migração.",
        en: "Risk management gains its own delivery cycle and a clear boundary without losing migration safeguards.",
      } as Bi,
      tags: ["PHP", "JavaScript", "MySQL"],
      schedule: { pt: "Extração controlada", en: "Controlled extraction" } as Bi,
      apiEndpoint: null,
      highlights: [
        { pt: "Diff antes de ativar versão importada", en: "Diff before activating imported version" },
        { pt: "Domínio independente do monólito do portal", en: "Domain independent from portal monolith" },
      ] as Bi[],
    },
  ],
};

export const monitoring = {
  eyebrow: { pt: "Observabilidade", en: "Observability" } as Bi,
  title: { pt: "Ver tudo sem tocar em nada", en: "See everything, touch nothing" } as Bi,
  intro: {
    pt: "Dois sistemas complementares: um observa os pipelines, o outro observa as máquinas que os correm. Nenhum dos dois executa código de produção — só o vigiam.",
    en: "Two complementary systems: one watches the pipelines, the other watches the machines running them. Neither executes production code — they only watch it.",
  } as Bi,
  cards: [
    {
      name: "Overseer",
      tagline: {
        pt: "Observabilidade de pipelines e DAGs",
        en: "Pipeline and DAG observability",
      } as Bi,
      description: {
        pt: "Recebe catálogo e telemetria por API — runs, logs, heartbeats — e expõe um dashboard só de leitura com o estado de cada pipeline. Se um pipeline devia ter corrido há mais de 24h e não correu, aparece assinalado automaticamente.",
        en: "Receives catalog and telemetry via API — runs, logs, heartbeats — and exposes a read-only dashboard with each pipeline's status. If a pipeline should have run in the last 24h and didn't, it's automatically flagged.",
      } as Bi,
      points: {
        pt: ["Catálogo de pipelines, nodes e edges", "Runs, logs e heartbeats em tempo real", "Deteção automática de pipelines parados"],
        en: ["Catalog of pipelines, nodes and edges", "Real-time runs, logs and heartbeats", "Automatic detection of stalled pipelines"],
      },
    },
    {
      name: "Warden",
      tagline: {
        pt: "Monitorização de servidor e base de dados",
        en: "Server and database monitoring",
      } as Bi,
      description: {
        pt: "Recolhe CPU, RAM, disco, rede e crescimento da base de dados a cada intervalo definido, e envia alertas para Slack — imediatos em incidentes críticos, com resumo diário para o resto.",
        en: "Collects CPU, RAM, disk, network and database growth at set intervals, sending Slack alerts — immediate for critical incidents, with a daily digest for the rest.",
      } as Bi,
      points: {
        pt: ["Métricas de sistema e de MariaDB", "Alertas Slack imediatos + digest diário", "Limpeza automática de dados antigos"],
        en: ["System and MariaDB metrics", "Immediate Slack alerts + daily digest", "Automatic cleanup of old data"],
      },
    },
  ],
  exampleLabel: { pt: "Exemplos reais de endpoints expostos", en: "Real exposed endpoint examples" } as Bi,
};

export const infrastructure = {
  eyebrow: { pt: "Infraestrutura", en: "Infrastructure" } as Bi,
  title: { pt: "Um servidor, cinco postos de trabalho", en: "One server, five workstations" } as Bi,
  intro: {
    pt: "A infraestrutura é deliberadamente simples: um servidor Linux de produção corre a stack Docker-first (Nginx, PHP-FPM, MariaDB), e cinco postos de trabalho Windows municipais servem como pontos de recolha — um deles corre pipelines agendados via Task Scheduler, todos vigiados pelo Warden.",
    en: "The infrastructure is deliberately simple: one Linux production server runs a Docker-first stack (Nginx, PHP-FPM, MariaDB), and five municipal Windows workstations act as collection points — one of them runs scheduled pipelines via Task Scheduler, all watched by Warden.",
  } as Bi,
  points: [
    {
      title: { pt: "Servidor de produção", en: "Production server" } as Bi,
      description: {
        pt: "Linux, Docker-first, Nginx + PHP-FPM na frente, MariaDB por trás. Todas as apps do ecossistema partilham a mesma raiz de deploy.",
        en: "Linux, Docker-first, Nginx + PHP-FPM up front, MariaDB behind it. All ecosystem apps share the same deploy root.",
      } as Bi,
    },
    {
      title: { pt: "Postos de trabalho Windows", en: "Windows workstations" } as Bi,
      description: {
        pt: "Cinco máquinas municipais, cada uma com o seu papel operacional; uma delas corre pipelines agendados automaticamente e reporta saúde ao Warden.",
        en: "Five municipal machines, each with its own operational role; one of them runs scheduled pipelines automatically and reports health to Warden.",
      } as Bi,
    },
    {
      title: { pt: "Deploy controlado", en: "Controlled deploy" } as Bi,
      description: {
        pt: "Scripts de publicação com backup automático antes de qualquer alteração em produção, e validação pós-deploy dos endpoints críticos.",
        en: "Publishing scripts with automatic backup before any production change, and post-deploy validation of critical endpoints.",
      } as Bi,
    },
  ],
};

export const team = {
  eyebrow: { pt: "Gestão de Equipa", en: "Team Management" } as Bi,
  title: { pt: "Quatro estágios, dois projetos reais", en: "Four internships, two real projects" } as Bi,
  intro: {
    pt: "Ao longo de cerca de 3 meses, orientei 4 estágios em mentoria e assistência nas áreas de dados e programação — não em tarefas isoladas, mas em projetos reais que foram para produção.",
    en: "Over roughly 3 months, I mentored 4 interns across data and programming — not on isolated tasks, but on real projects that shipped to production.",
  } as Bi,
  projects: [
    {
      name: {
        pt: "Billboard digital do concelho",
        en: "Municipality digital billboard",
      } as Bi,
      description: {
        pt: "Painel dedicado a dados do concelho — trânsito, acessos, tempo — e redefinição do site institucional.",
        en: "A display dedicated to municipality data — traffic, access points, weather — plus a redesign of the institutional website.",
      } as Bi,
    },
    {
      name: {
        pt: "Limpeza e harmonização de dados",
        en: "Data cleaning & harmonization",
      } as Bi,
      description: {
        pt: "Projeto de data cleaning e harmonização entre fontes distintas, base para o trabalho que hoje corre no Data Paladin.",
        en: "Data cleaning and harmonization across distinct sources — groundwork for what today runs in Data Paladin.",
      } as Bi,
    },
  ],
  statLabel: { pt: "estagiários orientados", en: "interns mentored" } as Bi,
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
    pt: "Não é uma prova de conceito. É um sistema que corre todos os dias para um município real, com dados reais e utilizadores reais.",
    en: "This isn't a proof of concept. It's a system that runs every day for a real municipality, with real data and real users.",
  } as Bi,
  metrics: [
    { value: "~8", label: { pt: "meses do zero à produção", en: "months from zero to production" } as Bi },
    { value: "12+", label: { pt: "repositórios ativos", en: "active repositories" } as Bi },
    { value: "300+", label: { pt: "entregas versionadas registadas", en: "logged versioned releases" } as Bi },
    { value: "4", label: { pt: "estagiários orientados", en: "interns mentored" } as Bi },
  ],
  highlights: {
    pt: [
      "Sistema de observabilidade próprio (Overseer + Warden), desenhado para nunca interferir com o código que vigia.",
      "Integração com standards europeus de cidades inteligentes (NGSI-LD, Smart Data Models, CNMD) no Traffic Flow.",
      "Portal central (MAIATRON-HUB) que unifica autenticação, catálogo e navegação entre todas as apps.",
      "Cultura de documentação e changelog rigorosos em todos os repositórios — cada alteração é rastreável.",
    ],
    en: [
      "A custom observability system (Overseer + Warden), designed to never interfere with the code it watches.",
      "Integration with European smart-city standards (NGSI-LD, Smart Data Models, CNMD) in Traffic Flow.",
      "A central portal (MAIATRON-HUB) unifying authentication, catalog and navigation across every app.",
      "A rigorous documentation and changelog culture across every repository — every change is traceable.",
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
    pt: "Desenhado e construído por Emanuel Wells.",
    en: "Designed and built by Emanuel Wells.",
  } as Bi,
};

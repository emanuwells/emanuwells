const TERM_ALIASES: Record<string, string[]> = {
  consola: ["console", "warden", "overseer", "dashboard", "ops"],
  console: ["consola", "operacoes", "operações"],
  warden: ["metricas", "métricas", "servidor", "servidores"],
  overseer: ["pipeline", "pipelines", "jobs", "agendamento"],
  maia: ["camara", "câmara", "municipal", "case study"],
  portfolio: ["portefolio", "portefólio", "projetos", "projects"],
  projeto: ["project", "sistema", "app"],
  dados: ["data", "bi", "analytics"],
  python: ["pipeline", "script"],
  github: ["codigo", "código", "repo", "repositorio"],
  linkedin: ["contacto", "contact", "rede"],
  competencias: ["skills", "stack", "tecnologias"],
  experiencia: ["experience", "trabalho", "maia"],
};

export function expandQueryWithSynonyms(query: string): string {
  const trimmed = query.trim();
  if (!trimmed) return trimmed;
  const words = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
  const extras = new Set<string>();
  for (const word of words) {
    const aliases = TERM_ALIASES[word];
    if (aliases) aliases.forEach((a) => extras.add(a));
  }
  return extras.size ? `${trimmed} ${[...extras].join(" ")}` : trimmed;
}

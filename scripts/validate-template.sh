#!/usr/bin/env bash
# Valida a estrutura essencial do template.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

fail() {
  echo "ERRO: $1" >&2
  exit 1
}

require_file() {
  [[ -f "$1" ]] || fail "Ficheiro obrigatório ausente: $1"
}

require_dir() {
  [[ -d "$1" ]] || fail "Pasta obrigatória ausente: $1"
}

for f in AGENTS.md README.md COMMANDS.md CHANGELOG.md VERSION LICENSE .gitattributes .gitignore .github/SECURITY.md .github/workflows/ci.yml .github/workflows/profile-metrics.yml .github/assets/profile-metrics.svg docs/governance/CONTRIBUTING.md docs/resources/README.md docs/resources/templates/PROJECT_CONTEXT.template.md docs/resources/templates/README.template.md docs/resources/templates/.env.example docs/resources/templates/.gitignore.template docs/resources/examples/secrets/README.md site/package.json site/package-lock.json site/app/page.tsx site/app/maia/page.tsx site/app/api/maia/pulse/route.ts; do
  require_file "$f"
done

for d in .github docs docs/ai docs/architecture docs/adr docs/governance docs/resources docs/resources/templates docs/resources/examples tasks scripts site tools tools/ai-adapters; do
  require_dir "$d"
done

for f in docs/ai/DAILY_AGENT_WORKFLOW.md docs/ai/ORCHESTRATION.md docs/ai/workflows/GOAL_SEEKING_LOOP.md docs/ai/policies/CONTEXT_BUDGET_POLICY.md docs/architecture/overview.md docs/architecture/frontend.md docs/architecture/backend.md docs/architecture/database.md docs/architecture/deployment.md docs/architecture/decisions.md; do
  require_file "$f"
done

# Ficheiros movidos para manter a raiz limpa.
for p in CONTRIBUTING.md SECURITY.md PROJECT_CONTEXT.template.md .env.example .gitignore.template .editorconfig DEPLOY.md package.json package-lock.json next.config.ts tsconfig.json vercel.json; do
  [[ ! -e "$p" ]] || fail "Ficheiro não deve estar na raiz por defeito: $p"
done

for p in docs/templates docs/examples; do
  [[ ! -e "$p" ]] || fail "Pasta antiga não deve existir: $p"
done

# Adaptadores não devem estar ativos na raiz por defeito.
for p in .cursor .claude .codex .devin .vscode .cursorrules .windsurfrules CLAUDE.md GEMINI.md; do
  [[ ! -e "$p" ]] || fail "Adaptador ativo na raiz por defeito: $p"
done

# Copilot é exceção parcial porque .github existe; o ficheiro ativo não deve existir.
[[ ! -f ".github/copilot-instructions.md" ]] || fail "Adaptador Copilot ativo na raiz por defeito."

# AGENTS.md deve ser operacional e não excessivo.
AGENTS_LINES="$(wc -l < AGENTS.md | tr -d ' ')"
if [[ "$AGENTS_LINES" -gt 220 ]]; then
  fail "AGENTS.md demasiado longo: ${AGENTS_LINES} linhas. Objetivo: <= 220."
fi

VERSION_VALUE="$(tr -d '\n\r ' < VERSION)"
[[ "$VERSION_VALUE" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || fail "VERSION não usa SemVer: $VERSION_VALUE"

echo "Template válido. Versão: $VERSION_VALUE. AGENTS.md: ${AGENTS_LINES} linhas."

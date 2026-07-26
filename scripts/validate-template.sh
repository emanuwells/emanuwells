#!/usr/bin/env bash
# Valida a estrutura essencial do repositório emanuwells (WELLS Agent Runtime 0.5.0).

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

node .agents/tools/validate-project.mjs

for f in \
  README.md COMMANDS.md CHANGELOG.md VERSION LICENSE PROJECT_CONTEXT.md \
  .gitattributes .gitignore \
  .github/SECURITY.md .github/workflows/ci.yml .github/workflows/profile-metrics.yml \
  .github/assets/profile-metrics.svg \
  docs/governance/CONTRIBUTING.md docs/ROOT_STRUCTURE.md \
  docs/resources/README.md \
  docs/resources/templates/PROJECT_CONTEXT.template.md \
  docs/resources/templates/README.template.md \
  docs/resources/templates/.env.example \
  docs/resources/templates/.gitignore.template \
  docs/resources/examples/secrets/README.md \
  docs/architecture/overview.md docs/architecture/frontend.md \
  docs/architecture/backend.md docs/architecture/database.md \
  docs/architecture/deployment.md docs/architecture/decisions.md \
  site/package.json site/package-lock.json \
  site/app/page.tsx site/app/maia/page.tsx site/app/api/maia/pulse/route.ts; do
  require_file "$f"
done

for d in .github docs docs/architecture docs/adr docs/governance docs/resources \
  docs/resources/templates docs/resources/examples scripts site .agents; do
  require_dir "$d"
done

for p in AGENTS.md CONTRIBUTING.md SECURITY.md PROJECT_CONTEXT.template.md \
  .env.example .gitignore.template docs/ai tasks tools; do
  [[ ! -e "$p" ]] || fail "Legado ou item não deve existir na raiz: $p"
done

for p in .cursor .claude .codex .devin .vscode .cursorrules .windsurfrules CLAUDE.md GEMINI.md; do
  [[ ! -e "$p" ]] || fail "Adaptador ativo na raiz por defeito: $p"
done

[[ ! -f ".github/copilot-instructions.md" ]] || fail "Adaptador Copilot ativo na raiz por defeito."

VERSION_VALUE="$(tr -d '\n\r ' < VERSION)"
[[ "$VERSION_VALUE" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || fail "VERSION não usa SemVer: $VERSION_VALUE"

TOOLKIT_VERSION="$(node -e "console.log(JSON.parse(require('fs').readFileSync('.agents/manifest.json','utf8')).version)")"
[[ "$TOOLKIT_VERSION" == "0.5.0" ]] || fail "Toolkit esperado 0.5.0, encontrado: $TOOLKIT_VERSION"

echo "Repositório válido. Projeto: $VERSION_VALUE. WELLS toolkit: $TOOLKIT_VERSION."

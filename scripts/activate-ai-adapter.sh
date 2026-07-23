#!/usr/bin/env bash
# Ativa um adaptador de IA/IDE copiando os ficheiros necessários para a raiz do repositório.
# Uso: ./scripts/activate-ai-adapter.sh {cursor|claude|codex|gemini|copilot|vscode|windsurf|devin} [--force]

set -euo pipefail

ADAPTER="${1:-}"
FORCE="${2:-}"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ADAPTERS_ROOT="$REPO_ROOT/tools/ai-adapters"

usage() {
  echo "Uso: $0 {cursor|claude|codex|gemini|copilot|vscode|windsurf|devin|list} [--force]"
}

if [[ -z "$ADAPTER" ]]; then
  usage
  exit 1
fi

if [[ "$ADAPTER" == "list" ]]; then
  find "$ADAPTERS_ROOT" -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | sort
  exit 0
fi

copy_path() {
  local source_rel="$1"
  local target_rel="$2"
  local source="$ADAPTERS_ROOT/$source_rel"
  local target="$REPO_ROOT/$target_rel"

  if [[ ! -e "$source" ]]; then
    echo "Fonte não encontrada: $source"
    exit 1
  fi

  if [[ -e "$target" && "$FORCE" != "--force" ]]; then
    echo "Destino já existe: $target. Usa --force para sobrescrever."
    exit 1
  fi

  mkdir -p "$(dirname "$target")"
  rm -rf "$target"
  cp -R "$source" "$target"
  echo "Ativado: $target_rel"
}

case "$ADAPTER" in
  cursor)
    copy_path "cursor/.cursor" ".cursor"
    copy_path "cursor/.cursorrules" ".cursorrules"
    ;;
  claude)
    copy_path "claude/CLAUDE.md" "CLAUDE.md"
    copy_path "claude/.claude" ".claude"
    ;;
  codex)
    copy_path "codex/.codex" ".codex"
    ;;
  gemini)
    copy_path "gemini/GEMINI.md" "GEMINI.md"
    ;;
  copilot)
    copy_path "github-copilot/.github/copilot-instructions.md" ".github/copilot-instructions.md"
    ;;
  vscode)
    copy_path "vscode/.vscode" ".vscode"
    ;;
  windsurf)
    copy_path "windsurf/.windsurfrules" ".windsurfrules"
    ;;
  devin)
    copy_path "devin/.devin" ".devin"
    ;;
  *)
    echo "Adaptador inválido: $ADAPTER"
    usage
    exit 1
    ;;
esac

echo "Adaptador '$ADAPTER' ativado. Confirma o diff antes de commitar."

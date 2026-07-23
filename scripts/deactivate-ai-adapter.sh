#!/usr/bin/env bash
# Remove adaptadores de IA/IDE previamente ativados na raiz do repositório.
# Uso: ./scripts/deactivate-ai-adapter.sh {cursor|claude|codex|gemini|copilot|vscode|windsurf|devin|all} [--dry-run]

set -euo pipefail

ADAPTER="${1:-}"
MODE="${2:-}"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

usage() {
  echo "Uso: $0 {cursor|claude|codex|gemini|copilot|vscode|windsurf|devin|all} [--dry-run]"
}

remove_path() {
  local rel="$1"
  local target="$REPO_ROOT/$rel"

  if [[ "$MODE" == "--dry-run" ]]; then
    if [[ -e "$target" ]]; then
      echo "Removeria: $rel"
    else
      echo "Não existe: $rel"
    fi
    return
  fi

  if [[ -e "$target" ]]; then
    rm -rf "$target"
    echo "Removido: $rel"
  else
    echo "Não existe: $rel"
  fi
}

if [[ -z "$ADAPTER" ]]; then
  usage
  exit 1
fi

deactivate_one() {
  case "$1" in
    cursor)
      remove_path ".cursor"
      remove_path ".cursorrules"
      ;;
    claude)
      remove_path "CLAUDE.md"
      remove_path ".claude"
      ;;
    codex)
      remove_path ".codex"
      ;;
    gemini)
      remove_path "GEMINI.md"
      ;;
    copilot)
      remove_path ".github/copilot-instructions.md"
      ;;
    vscode)
      remove_path ".vscode"
      ;;
    windsurf)
      remove_path ".windsurfrules"
      ;;
    devin)
      remove_path ".devin"
      ;;
    *)
      echo "Adaptador inválido: $1"
      usage
      exit 1
      ;;
  esac
}

if [[ "$ADAPTER" == "all" ]]; then
  for item in cursor claude codex gemini copilot vscode windsurf devin; do
    deactivate_one "$item"
  done
else
  deactivate_one "$ADAPTER"
fi

echo "Desativação concluída. Confirma o diff antes de commitar."

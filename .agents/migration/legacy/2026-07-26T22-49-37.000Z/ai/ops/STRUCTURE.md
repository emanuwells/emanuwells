# STRUCTURE.md

Estrutura recomendada para projetos limpos, simples e escaláveis.

## Princípio

A raiz deve conter apenas ficheiros úteis para humanos, ferramentas e IAs. Políticas e operação ficam em `docs/ai/`; adaptadores de IDE/agente ficam em `tools/ai-adapters/` e só são ativados quando necessários.

## Raiz Recomendada

```text
projeto/
├── AGENTS.md
├── README.md
├── PROJECT_CONTEXT.md   # opcional no projeto real
├── COMMANDS.md
├── CHANGELOG.md
├── VERSION
├── LICENSE
├── .gitignore
├── .github/
│   └── SECURITY.md
├── docs/
│   ├── ai/
│   ├── architecture/
│   ├── governance/
│   │   └── CONTRIBUTING.md
│   └── resources/
│       ├── examples/
│       └── templates/
│           ├── .env.example
│           ├── .gitignore.template
│           └── PROJECT_CONTEXT.template.md
├── tasks/
├── scripts/
├── tools/
│   └── ai-adapters/
├── src/ ou frontend/backend/
└── tests/
```

## Markdown na raiz

Por defeito, manter apenas:

- `README.md`
- `AGENTS.md`
- `COMMANDS.md`
- `CHANGELOG.md`

Opcional quando preenchido no projeto real:

- `PROJECT_CONTEXT.md`

## Adaptadores

Adaptadores específicos, como `.cursor/`, `.claude/`, `.codex/`, `.devin/`, `.vscode/`, `.cursorrules`, `.windsurfrules`, `CLAUDE.md`, `GEMINI.md` e `.github/copilot-instructions.md`, não devem estar ativos na raiz por defeito.

Devem viver em:

```text
tools/ai-adapters/
```

Ativar apenas com `scripts/activate-ai-adapter.*` quando a ferramenta for usada.

## Estrutura `docs/ai/`

```text
docs/ai/
├── README.md
├── DAILY_AGENT_WORKFLOW.md
├── ORCHESTRATION.md
├── agents/
├── policies/
├── ops/
├── skills/
├── workflows/
└── mcp/
```

## Projeto Full Stack

```text
projeto/
├── frontend/
├── backend/
├── database/
├── docs/
│   ├── ai/
│   ├── architecture/
│   ├── governance/
│   └── resources/
│       ├── examples/
│       └── templates/
├── scripts/
├── tests/
└── ops/
```

Usar `src/` único quando o projeto for pequeno. Usar `frontend/` e `backend/` quando houver separação real.

## Regras

- Não criar pastas preventivas vazias sem finalidade.
- Não duplicar documentação entre raiz e `docs/`.
- Não ativar adaptadores de IDE/agente sem necessidade real.
- Não colocar documentação longa na raiz.
- Manter `docs/architecture/` atualizado quando a arquitetura mudar.

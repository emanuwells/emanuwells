# Estrutura da Raiz

A raiz do repositório deve ser minimalista, previsível e profissional.

## Raiz Esperada

```text
.
├── .agents/                 # WELLS Agent Runtime (contrato, skills, estado)
├── .gitattributes
├── .gitignore
├── .github/
│   └── SECURITY.md
├── CHANGELOG.md
├── COMMANDS.md
├── docs/
├── LICENSE
├── PROJECT_CONTEXT.md
├── README.md
├── scripts/
├── site/                    # aplicação Next.js publicável
└── VERSION
```

## Ficheiros Git na raiz (obrigatório)

`.gitignore` e `.gitattributes` **devem ficar na raiz do repositório**. O Git não lê estes ficheiros a partir de `.github/` nem de outras pastas.

Templates reutilizáveis ficam em `docs/resources/templates/` (ex.: `.gitignore.template`).

## Markdown permitido na raiz

- `README.md`
- `COMMANDS.md`
- `CHANGELOG.md`
- `PROJECT_CONTEXT.md` (preenchido e útil para humanos e agentes)

O contrato de agentes vive em `.agents/AGENTS.md` (não na raiz).

## Fora da raiz por defeito

- `docs/resources/templates/PROJECT_CONTEXT.template.md`
- `docs/resources/templates/.env.example`
- `docs/resources/templates/.gitignore.template`
- `docs/governance/CONTRIBUTING.md`
- `.github/SECURITY.md`
- `docs/resources/examples/` para exemplos reutilizáveis
- adaptadores de IDE/agente em `.agents/adapters/`
- documentação longa em `docs/`

## O que não deve estar ativo na raiz por defeito

- `AGENTS.md` (legado — usar `.agents/AGENTS.md`)
- `docs/ai/` (legado — migrado para `.agents/`)
- `tasks/` (legado — estado em `.agents/state/`)
- `tools/ai-adapters/` (legado — adaptadores em `.agents/adapters/`)
- `.cursor/`, `.claude/`, `.codex/`, `.devin/`, `.vscode/`
- `.cursorrules`, `.windsurfrules`, `CLAUDE.md`, `GEMINI.md`
- `copilot-instructions.md` ativo em `.github/`

## Política

- Ficheiros universais e de consulta diária ficam na raiz.
- Documentação técnica do produto fica em `docs/architecture/`, `docs/design/` e `docs/governance/`.
- Templates e exemplos reutilizáveis ficam em `docs/resources/`.
- Políticas GitHub ficam em `.github/`.
- Estado operacional de agentes fica em `.agents/state/`.
- Automação fica em `scripts/`.
- O produto publicável fica isolado em `site/`.
- Runtime WELLS e adaptadores ficam em `.agents/`.

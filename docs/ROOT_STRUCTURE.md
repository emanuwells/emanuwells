# Estrutura da Raiz

A raiz do repositório deve ser minimalista, previsível e profissional.

## Raiz Esperada

```text
.
├── .gitattributes
├── .gitignore
├── .github/
│   └── SECURITY.md
├── AGENTS.md
├── CHANGELOG.md
├── COMMANDS.md
├── docs/
├── LICENSE
├── README.md
├── scripts/
├── site/                 # aplicação Next.js publicável
├── tasks/
├── tools/
└── VERSION
```

## Markdown permitido na raiz

Por defeito, apenas:

- `README.md`
- `AGENTS.md`
- `COMMANDS.md`
- `CHANGELOG.md`

Opcional em projetos reais:

- `PROJECT_CONTEXT.md`, quando estiver preenchido e for útil para humanos e agentes.

## Fora da raiz por defeito

- `docs/resources/templates/PROJECT_CONTEXT.template.md`
- `docs/resources/templates/.env.example`
- `docs/resources/templates/.gitignore.template`
- `docs/governance/CONTRIBUTING.md`
- `.github/SECURITY.md`
- `docs/resources/examples/` para exemplos reutilizáveis
- adaptadores de IDE/agente
- documentação longa

## O que não deve estar ativo na raiz por defeito

- `.cursor/`
- `.claude/`
- `.codex/`
- `.devin/`
- `.vscode/`
- `.cursorrules`
- `.windsurfrules`
- `CLAUDE.md`
- `GEMINI.md`
- `copilot-instructions.md`
- `CONTRIBUTING.md`
- `SECURITY.md`
- `PROJECT_CONTEXT.template.md`

Estes ficheiros vivem em `tools/ai-adapters/`, `.github/`, `docs/governance/` ou `docs/resources/`, conforme o caso.

## Política

- Ficheiros universais e de consulta diária ficam na raiz.
- Documentação técnica fica em `docs/`.
- Templates e exemplos reutilizáveis ficam em `docs/resources/`.
- Políticas GitHub ficam em `.github/`.
- Estado operacional fica em `tasks/`.
- Automação fica em `scripts/`.
- O produto publicável fica isolado em `site/`.
- Adaptadores e ferramentas auxiliares ficam em `tools/`.

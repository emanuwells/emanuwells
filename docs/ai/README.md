# Camada IA Neutra

Esta pasta contém o núcleo operacional da equipa IA sénior. É independente de Cursor, Claude, Codex, Gemini, Copilot, Windsurf/Devin Desktop ou VS Code.

## Leitura Recomendada

1. `AGENTS.md`
2. `PROJECT_CONTEXT.md`
3. `COMMANDS.md`
4. `docs/ai/DAILY_AGENT_WORKFLOW.md`
5. `docs/ai/policies/CONTEXT_BUDGET_POLICY.md`
6. `docs/ai/ORCHESTRATION.md`, quando a tarefa envolver vários papéis, risco médio/alto/crítico ou refactor
7. `docs/ai/workflows/GOAL_SEEKING_LOOP.md`, quando houver objetivo verificável
8. documentos específicos da tarefa

## Estrutura

```text
docs/ai/
├── DAILY_AGENT_WORKFLOW.md
├── ORCHESTRATION.md
├── README.md
├── TEAM.md
├── agents/
├── adapters/
├── mcp/
├── ops/
├── policies/
├── skills/
└── workflows/
```

## Regra

O agente deve carregar apenas o contexto necessário. Não deve abrir todos os documentos desta pasta por defeito. `ORCHESTRATION.md` deve ser usado como roteador quando a tarefa exigir coordenação entre papéis, workflows ou skills.

Para objetivos verificáveis, `workflows/GOAL_SEEKING_LOOP.md` deve controlar iterações, validação, repetição e paragem.

Conflitos de instruções devem ser resolvidos pela `Hierarquia de Autoridade` de `AGENTS.md`. A realidade técnica deve ser confirmada pelas `Fontes de Verdade do Projeto` de `AGENTS.md`.

## Relação com Adaptadores

Adaptadores vivem em `tools/ai-adapters/` e servem apenas para traduzir o núcleo para uma ferramenta específica.

As fontes de verdade técnicas principais são:

```text
Código real + testes + configs + COMMANDS.md + PROJECT_CONTEXT.md + docs/architecture/
```

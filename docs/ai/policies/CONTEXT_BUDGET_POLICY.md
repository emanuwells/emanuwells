# Política de Orçamento de Contexto

## Objetivo

Reduzir ruído, conflitos de instruções e custo cognitivo dos agentes. Mais contexto não significa melhor execução; o agente deve carregar apenas o necessário para a tarefa.

## Regra Principal

O agente deve começar pelo núcleo mínimo e só abrir documentação adicional quando houver relação direta com a tarefa.

## Núcleo Mínimo

Para tarefas não triviais, ler:

1. `AGENTS.md`
2. `PROJECT_CONTEXT.md`, se existir
3. `COMMANDS.md`, se existir
4. `docs/ai/DAILY_AGENT_WORKFLOW.md`
5. `tasks/todo.md`
6. `tasks/lessons.md`

## Carregamento Condicional

| Situação | Documentos a abrir |
|---|---|
| Refactor | `docs/ai/policies/SAFE_REFACTOR_POLICY.md`, `docs/REFACTOR_PLAN.template.md` |
| Feature | `docs/ai/workflows/10-feature-delivery.md` |
| Bugfix | `docs/ai/workflows/30-bugfix.md` |
| Objetivo verificável | `docs/ai/workflows/GOAL_SEEKING_LOOP.md` |
| Revisão | `docs/ai/workflows/40-quality-review.md`, `docs/ai/ops/QUALITY_GATES.md` |
| Arquitetura | `docs/architecture/`, `docs/adr/` |
| Base de dados | `docs/architecture/database.md`, skill de DB se existir |
| Segurança | `.github/SECURITY.md`, `docs/ai/policies/SECRETS_POLICY.md` |
| Dependências | `docs/ai/policies/DEPENDENCY_POLICY.md` |
| README/docs | `docs/ai/policies/README_BADGES_POLICY.md`, `docs/resources/templates/README.template.md` |
| MCP | `docs/ai/mcp/README.md`, `docs/ai/mcp/MCP_POLICY.md` |
| Release | `docs/ai/workflows/50-release-handoff.md`, `CHANGELOG.md`, `VERSION` |

## Proibido

- Carregar todos os ficheiros de `docs/ai/` sem necessidade.
- Carregar todos os adaptadores em `tools/ai-adapters/`.
- Dar prioridade a instruções duplicadas de adaptadores sobre `AGENTS.md`.
- Ignorar código real porque a documentação diz algo diferente.

## Resolução de Conflitos

Quando houver conflito, aplicar sempre a `Hierarquia de Autoridade` definida em `AGENTS.md`.

Não manter listas paralelas de prioridade neste documento. Se for necessário alterar a precedência, alterar primeiro `AGENTS.md` e depois ajustar referências.

Para confirmar o estado técnico real do projeto, usar as `Fontes de Verdade do Projeto` definidas em `AGENTS.md`.

## Sinal de Excesso de Contexto

Se o agente começar a propor alterações fora do pedido, assumir excesso de contexto e reduzir para:

- objetivo do utilizador;
- ficheiros afetados;
- comandos reais;
- política específica da tarefa.

## Orquestração

Usar `docs/ai/ORCHESTRATION.md` apenas quando a tarefa envolver múltiplos papéis, risco médio/alto/crítico, refactor estrutural, full stack, backend, DB, DevOps, segurança ou produção. Não o carregar para alterações triviais.

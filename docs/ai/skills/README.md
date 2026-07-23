# Skills Neutras

Skills reutilizáveis independentes do IDE.

Estas skills devem ser a referência principal. Cópias em `.cursor/skills/` ou `.claude/skills/` são apenas adaptadores.

## Skills principais

- `safe-refactor` — refactor faseado e reversível.
- `feature-delivery` — entrega de features com validação e docs.
- `bugfix-diagnostics` — diagnóstico e correção de bugs.
- `quality-review` — revisão de qualidade, segurança e regressões.
- `docs-maintainer` — documentação, README, changelog e handoff.
- `repo-onboarding` — primeira leitura e mapeamento do projeto.
- `repo-hygiene` — limpeza segura e estrutura.
- `quality-gate-runner` — validações antes de terminar.
- `dependency-manager` — dependências e risco de supply chain.
- `mcp-server-operator` — MCP seguro.

## Regra

Aplicar skills de forma proporcional ao risco. Não invocar todas as skills se a tarefa for simples.

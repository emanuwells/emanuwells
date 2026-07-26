# GitHub Copilot — Instruções do Repositório

Este projeto usa um núcleo neutro de instruções para IA.

Antes de sugerir alterações relevantes, seguir:

- `AGENTS.md` como contrato principal;
- `PROJECT_CONTEXT.md` para contexto real;
- `COMMANDS.md` para comandos reais;
- `docs/ai/` para políticas, qualidade, segurança e changelog;
- `docs/ai/` para papéis e workflows.

Regras essenciais:

- preservar comportamento existente;
- evitar dependências desnecessárias;
- não misturar refactor com feature;
- usar nomes claros e arquitetura simples;
- atualizar testes/documentação/changelog quando aplicável;
- nunca sugerir segredos reais em código;
- não declarar validações não executadas.

# Adaptador Cursor

Esta pasta existe apenas para melhorar a experiência no Cursor.

O Cursor não é a fonte de verdade do projeto. Antes de aplicar regras Cursor, a IA deve ler:

1. `AGENTS.md`;
2. `PROJECT_CONTEXT.md`;
3. `COMMANDS.md`;
4. `docs/ai/`;
5. `docs/ai/`.

## Conteúdo

```text
.cursor/
├── rules/   # regras Cursor derivadas do núcleo neutro
├── agents/  # subagentes Cursor opcionais
└── skills/  # skills Cursor opcionais
```

## Regra de manutenção

Quando o núcleo neutro mudar, atualizar este adaptador apenas se necessário. Não transformar `.cursor/` no centro do projeto.

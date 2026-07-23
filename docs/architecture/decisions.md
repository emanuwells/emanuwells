# Decisões técnicas

| Data | Decisão | Motivo |
|---|---|---|
| 2026-07-15 | Manter o Profile README e a aplicação no mesmo repositório, com a aplicação em `site/` | Preservar uma raiz GitHub limpa e permitir deployment independente |
| 2026-07-15 | Gerar métricas como SVG versionado | Evitar widgets externos em runtime e tornar o perfil resiliente |
| 2026-07-15 | Não usar autenticação nem base de dados | O portefólio é público e read-only |
| 2026-07-15 | Representar código privado através de demos e casos públicos | Evitar links quebrados e preservar a separação entre publicação e operação |

Criar um ADR adicional quando uma decisão introduzir persistência, autenticação, novo runtime ou dependência operacional difícil de reverter.


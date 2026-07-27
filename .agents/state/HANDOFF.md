# HANDOFF

- **Última atualização:** 2026-07-27T03:00:00+00:00
- **Estado:** concluído — fix mobile (menu opaco, header Maia, grelhas)
- **Branch:** `cursor/mobile-layout-fixes-2456` (PR #4)
- **URL produção:** `https://emanuwells.vercel.app`

## Notas

- Menu mobile com fundo opaco (`.mobile-nav-panel`); body lock com menu aberto.
- Header Maia: «← Portefólio» em telemóvel; gaps/ícones mais compactos.
- Bento 1 coluna &lt;sm; `overflow-x: clip`; FAB com safe-area; Maia sem `background-attachment: fixed` em mobile.
- Validação: lint/typecheck/build ok; deploy prod aliased; smoke `/` e `/maia` 200.

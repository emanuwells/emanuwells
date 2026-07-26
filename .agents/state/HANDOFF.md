# HANDOFF

- **Última atualização:** 2026-07-26T23:50:00+00:00
- **Estado:** conteúdo e polish prontos; deploy Vercel a executar
- **Branch:** `main`
- **URL produção:** `https://emanuwells.vercel.app`

## Estado útil

- **Concluído:** storytelling equipa + ISO/Huwise/DataTron/Medidata; README sem stats; home sem GitHub Signals; capítulo `#governance`; runbook deploy modo C
- **Em curso:** commit/push + `vercel deploy --prod` (login/token)
- **Bloqueios/riscos:** ambiente pode precisar de `vercel login` interactivo ou `VERCEL_TOKEN`
- **Ficheiros relevantes:** `site/lib/content/*`, `README.md`, `docs/architecture/deployment.md`, `COMMANDS.md`
- **Validações:** a correr antes do push
- **Próximo passo exato:** validar, push `main`, deploy prod, smoke `/` `/maia` `/api/maia/pulse`

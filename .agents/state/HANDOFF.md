# HANDOFF

- **Última atualização:** 2026-07-26T23:55:00+00:00
- **Estado:** concluído — storytelling + polish + deploy produção
- **Branch:** `main` (`ac1ef77`)
- **URL produção:** `https://emanuwells.vercel.app`

## Estado útil

- **Concluído:** conteúdo equipa/ISO/Huwise/DataTron; README sem stats; home sem GitHub Signals; capítulo SGM; Vercel login + `vercel deploy --prod` OK (alias produção)
- **Em curso:** N/A
- **Bloqueios/riscos:** `site/.env.local` gerado pelo `vercel link` — manter fora do Git; Git Integration continua recomendada para pushes futuros
- **Ficheiros relevantes:** `site/lib/content/*`, `README.md`, `docs/architecture/deployment.md`
- **Validações:** lint, typecheck, build, validate-project, smoke prod `/` `/maia` `/api/maia/pulse` 200
- **Próximo passo exato:** opcional — activar Git Integration no dashboard Vercel e `PROFILE_METRICS_PAT`

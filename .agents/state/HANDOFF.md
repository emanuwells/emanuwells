# HANDOFF

- **Última atualização:** 2026-07-27T00:30:00+00:00
- **Estado:** em curso — Maia enxuta + portefólio pessoal
- **Branch:** `cursor/maia-polish-portfolio-2456`
- **URL produção:** `https://emanuwells.vercel.app` (actualizar após deploy)

## Estado útil

- **Concluído nesta iteração (código):** Maia sem Pulso/Visível/Risk Improve; bloco «O que já está ligado»; Observar sem carrossel; Warden = servidor principal; tech icons legíveis; home/README recentrados; Weather API 4 Maia; contacto só GitHub/LinkedIn
- **Em curso:** validação, commit/push, deploy prod, smoke
- **Bloqueios/riscos:** `site/.env.local` do `vercel link` fora do Git
- **Ficheiros relevantes:** `site/components/maia/MaiaChapters.tsx`, `site/lib/content/maia.ts`, `maia-system.ts`, `portfolio.ts`, `Monitoring.tsx`, `PortfolioContact.tsx`, `styles/glass.css`, `README.md`
- **Próximo passo exato:** `npm run lint && typecheck && build` em `site/`; commit; push; `vercel deploy --prod --yes`; smoke `/` e `/maia`

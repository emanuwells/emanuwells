# Trabalho atual

## 2026-07-15 — Perfil GitHub vivo e portefólio Vercel

**Estado:** concluído  
**Risco:** alto  
**Objetivo:** perfil GitHub com widgets dinâmicos, secção de sinais no portefólio, deployment Vercel e commit/push.

### Concluído

- [x] README PT-PT com typing, badges, stats, linguagens, gráfico de contribuições e citação dev (tema Wells).
- [x] API `/api/github/summary` com ISR e fallback.
- [x] Secção `PortfolioGitHubSignals`, hero com typing e badges de skills.
- [x] Métricas SVG em português e script regenerado.
- [x] Lint, typecheck e build validados (cópia em `C:\temp`).
- [x] Deployment Vercel em `https://emanuwells.vercel.app` (smoke tests 200).
- [x] Commit e push em `main`.

### Validação

- `GET /` — 200
- `GET /maia` — 200
- `GET /api/maia/pulse` — 200
- `GET /api/github/summary` — 200

### Nota

- `npm ci` na drive `G:` (Google Drive) falhou localmente por erros de filesystem; o build remoto na Vercel passou sem problemas.

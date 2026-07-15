# Handoff operacional

## Metadados

| Campo | Valor |
|---|---|
| Última atualização | 2026-07-15 |
| Branch | `main` |
| Estado | Perfil vivo e portefólio em produção |
| URL produção | `https://emanuwells.vercel.app` |

## Concluído nesta iteração

- README de perfil em PT-PT com widgets dinâmicos (tema Wells ciano/verde).
- Secção `PortfolioGitHubSignals` com métricas, gráficos e citações.
- API `/api/github/summary` com cache ISR de 1 hora.
- Hero com efeito typing e badges de stack na secção de competências.
- Deployment Vercel do projecto `emanuwells` (root `site/`).
- Smoke tests HTTP 200 em `/`, `/maia`, `/api/maia/pulse` e `/api/github/summary`.

## Validação

| Critério | Resultado |
|---|---|
| Lint e typecheck | Passaram (build em `C:\temp\emanuwells-site-build`) |
| Next.js build remoto Vercel | Passou; 5 rotas |
| Produção `emanuwells.vercel.app` | 200 em todas as rotas testadas |
| `test:pulse` local | Requer servidor activo; validado em produção (200) |

## Limitações conhecidas

- `npm ci` no caminho Google Drive (`G:`) falha por erros EPERM/EBADF; usar build remoto Vercel ou cópia local em `C:\temp`.
- Widgets externos do README dependem de CDNs de terceiros; o SVG local em `.github/assets/profile-metrics.svg` serve de fallback visual.

## Próximo passo opcional

- Ligar deploy automático Git → Vercel no dashboard, se ainda não estiver activo para `main`.

# HANDOFF

- **Última atualização:** 2026-07-26T23:05:00+00:00
- **Estado:** README e storytelling do site reescritos; a aguardar redeploy Vercel
- **Branch:** `main`
- **URL produção:** `https://emanuwells.vercel.app`

## Estado útil

- **Concluído:** README de perfil (SVG corrigido, ecossistema WELLS, tabela completa); `portfolio.ts`, `maia.ts`, `maia-system.ts` com storytelling melhorado; runtime `.agents/` 0.5.0 em `main`
- **Em curso:** deploy Vercel pendente — o projeto não tem Git integration ativa (produção não atualizou 5+ min após push) e este ambiente não tem `VERCEL_TOKEN`; correr `vercel deploy` em `site/` localmente ou adicionar o secret em Cloud Agents
- **Bloqueios/riscos:** repos privados (WELLS_API, WELLS_OS) inacessíveis por API — descrições baseadas no conteúdo já público do site e nos READMEs públicos; Luna Sheet deliberadamente omitido
- **Ficheiros relevantes:** `README.md`, `site/lib/content/portfolio.ts`, `site/lib/content/maia.ts`, `site/lib/content/maia-system.ts`
- **Validações executadas:** `npm run lint`; `npm run typecheck`; `npm run build`
- **Próximo passo exato:** confirmar em produção que `/` e `/maia` refletem o novo conteúdo após o redeploy automático

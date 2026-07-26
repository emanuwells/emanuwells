# HANDOFF

- **Última atualização:** 2026-07-26T22:50:00+00:00
- **Estado:** migração WELLS Agent Runtime 0.5.0 concluída
- **Branch:** `chore/wells-ai-toolkit` → merge para `main`
- **URL produção:** `https://emanuwells.vercel.app`

## Estado útil

- **Concluído:** runtime `.agents/` 0.5.0; legado (`docs/ai/`, `tools/ai-adapters/`, `AGENTS.md` na raiz, `tasks/`) arquivado em `.agents/migration/legacy/`; documentação alinhada
- **Em curso:** validação final e push
- **Bloqueios/riscos:** `test:pulse` exige servidor Next.js em execução; secret `PROFILE_METRICS_PAT` ainda pendente
- **Ficheiros relevantes:** `.agents/AGENTS.md`, `COMMANDS.md`, `site/`, `docs/architecture/`
- **Validações executadas:** `node .agents/tools/validate-project.mjs`; `npm run lint`; `npm run build`
- **Próximo passo exato:** merge `chore/wells-ai-toolkit` → `main`, push e confirmar deploy Vercel

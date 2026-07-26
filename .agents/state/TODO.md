# Trabalho atual

## 2026-07-26 — README top-tier + storytelling do portefólio e Maia

**Estado:** concluído  
**Risco:** médio (conteúdo público, sem lógica)  
**Objetivo:** README de perfil sem cortes no SVG e com ecossistema WELLS; site com storytelling melhor (foco WELLS_API/WELLS_OS); Maia caprichada.

### Concluído

- [x] README: Typing SVG width 760 (sem cortes), secção «O ecossistema WELLS», tabela com WELLS_API e Traffic Flow.
- [x] `portfolio.ts`: 7 projetos com descrições baseadas nos READMEs reais (Overseer, Warden, Vacation Mode) + MAIATRON-HUB.
- [x] `maia.ts` / `maia-system.ts`: intro, invisível, observabilidade e resultados reescritos.
- [x] Lint, typecheck e build OK.

### Follow-up

- [ ] Deploy Vercel manual: `cd site && vercel deploy --prod` (sem Git integration nem `VERCEL_TOKEN` neste ambiente).

## 2026-07-26 — Migração WELLS Agent Runtime 0.5.0

**Estado:** concluído  
**Risco:** alto (reestruturação governação IA)  
**Objetivo:** migrar de `docs/ai/` + `AGENTS.md` raiz para `.agents/` 0.5.0; validar site; merge para `main`.

### Concluído

- [x] Branch `chore/wells-ai-toolkit` com `.agents/` 0.5.0 (`manifest.json`, `toolkit-lock.json`).
- [x] Estado migrado para `.agents/state/`; legado arquivado em `.agents/migration/legacy/`.
- [x] Documentação, `COMMANDS.md`, CI e scripts de validação alinhados.
- [x] `npm run lint`, `npm run build` OK; `validate-project.mjs` OK.

### Follow-up

- [ ] Criar secret `PROFILE_METRICS_PAT` no GitHub.
- [ ] Confirmar deploy Vercel após merge.

## 2026-07-23 — README perfil, hobby vs pro, limpeza Git e deploy

**Estado:** concluído  
**Risco:** crítico (force push / orphan squash)  
**Objetivo:** README natural + Olá animado, logos, hobby vs profissional, só `main` e contributor Emanuel, deploy Vercel.

### Concluído

- [x] Conteúdo README + site (`kind` hobby/pro, Typing SVG, badges).
- [x] Qualidade em espelho `C:\temp`: audit high 0, lint, build, test:pulse.
- [x] Workflow métricas + COMMANDS/CHANGELOG/lessons; Next 16.2.11 + sharp override.
- [x] Orphan squash, force push `main`, branches Cursor apagadas; worktree stale removido.
- [x] Deploy Vercel produção (`emanuwells.vercel.app`); smoke `/`, `/maia`, `/api/maia/pulse` OK.

### Follow-up

- [ ] Criar secret `PROFILE_METRICS_PAT` no GitHub para o refresh semanal não voltar a listar `github-actions[bot]`.

## 2026-07-22 — Nome Ferreira, copy, brand e polish visual

**Estado:** concluído  
**Risco:** médio  
**Objetivo:** nome Emanuel Ferreira, copy natural, tipografia/cores Home↔Maia, logo/nav polish, deploy.

### Concluído

- [x] Nome e copy PT/EN (portfolio, Maia, README, PROJECT_CONTEXT).
- [x] PersonalMark sem gap + WellsHeader com motion e accent Maia.
- [x] Fonts (Inter / Space Grotesk / JetBrains Mono); header dentro de `MaiaThemeShell`.
- [x] QA HTTP home + `/maia` + pulse; lint/typecheck/build OK.
- [x] Commit, push e deploy Vercel (em curso no fecho).

## 2026-07-22 — Portefólio: limpeza, navegação e motion

**Estado:** concluído  
**Risco:** médio  

### Concluído

- [x] Remover search/`fuse.js`, FloatingCategories, chrome redundante e nav legado.
- [x] Motion system + WellsHeader unificado.

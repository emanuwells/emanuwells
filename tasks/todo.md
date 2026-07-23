# Trabalho atual

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

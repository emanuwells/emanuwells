# Trabalho atual

## 2026-07-22 — Portefólio: limpeza, navegação e motion

**Estado:** concluído  
**Risco:** médio  
**Objetivo:** remover features redundantes, unificar navegação profissional e aprofundar Framer Motion sem novas dependências.

### Concluído

- [x] Remover search/`fuse.js`, FloatingCategories, clock, System Pulse duplicado, nav legado, orfãos e stubs time-of-day.
- [x] `WellsHeader` com scroll-spy unificado, `layoutId`, menu mobile `AnimatePresence`, `useScroll`/`useSpring`.
- [x] Consolidar `lib/motion.ts` + `Reveal` + `PageMotion`; hover em cards/botões.
- [x] Limpar GitHub Signals (sem citações); atualizar `DESIGN.md` v1.1.0.
- [x] Validação em `C:\temp\emanuwells-site-validate`: lint, typecheck, build OK; `test:pulse` OK com servidor local.

### Nota

- Em Google Drive, `PortfolioNav.tsx` / `MaiaNav.tsx` ficaram bloqueados no disco (Access denied) após `git update-index --force-remove`. Confirmar apagamento local quando o sync libertar os ficheiros.

## 2026-07-15 — DESIGN.md v1.0.0 (Grinnu Nells)

**Estado:** concluído  
**Risco:** médio  
**Objetivo:** substituir `docs/design/DESIGN.md` pela spec v1.0.0 e alinhar site (Home mono cyan+lime, Maia magenta sans).

### Concluído

- [x] `docs/design/DESIGN.md` v1.0.0 + apêndice Next.js/Tailwind.
- [x] Tokens v1.0.0 e sub-marca Maia (`data-brand="maia"`).
- [x] `circuit-pattern.svg` e componentes Badge/StatCard/ProgressBar.
- [x] Secções Home e `/maia` alinhadas à spec.
- [x] Build validado em `C:\temp`.
- [x] Commit, push e deploy Vercel.

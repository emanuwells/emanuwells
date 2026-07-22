# Changelog

Todas as alterações relevantes deste projeto serão documentadas neste ficheiro.

## [Unreleased]

### Removed

- Pesquisa site-wide (`fuse.js`, `WellsSearchBar`, `lib/search/*`).
- Rail flutuante de categorias, popup, relógio do header e “System Pulse” duplicado.
- Nav legado (`PortfolioNav`, `MaiaNav`), `TopologyDiagram`, `DataCard`.
- Stubs de tema time-of-day (`lib/design-system/time.ts`, `lib/maia/theme.ts`) e CSS `.theme-selector*`.
- Bloco de citações rotativas em GitHub Signals.

### Changed

- `WellsHeader` unificado: scroll-spy partilhado, indicador `layoutId`, menu mobile com `AnimatePresence`, progresso via `useScroll`/`useSpring`.
- Sistema de motion consolidado em `lib/motion.ts` (`Reveal`, `PageMotion`, hover em `NeonCard`/`Button`, Bento).
- Hero e secções alinhados a apresentação mais limpa; tokens do header em `--theme-*`.
- `docs/design/DESIGN.md` v1.1.0 — stack real (Next.js + Tailwind + Framer Motion).

### Added

- `docs/design/DESIGN.md` v1.0.0 (Grinnu Nells) — spec completa Home + sub-marca `/maia`.
- Componentes `Badge`, `StatCard`, `ProgressBar`; variante `magenta` em `NeonCard`.
- Asset `site/public/assets/circuit-pattern.svg`.
- `ArchitectureDiagram` na secção Maia; carousel de observability com dots.

### Changed (anterior)

- Tokens alinhados à spec v1.0.0 (`#4dd8e8`, `#c8f04a`, `#0a0e17`; Maia `#140a1f` + magenta).
- Home com tipografia mono; `/maia` com sans-serif via `data-brand="maia"`.
- `Button` com variantes primary/secondary/tertiary; System Pulse no header.
- Hero Maia em `glass-card-maia`; KPIs com glow magenta; footer CONTACT/SOCIAL.

### Added (anterior)
- Secção `PortfolioGitHubSignals` no portefólio com métricas, gráficos de linguagens e actividade, e citações rotativas.
- API pública `/api/github/summary` com cache ISR de 1 hora e fallback local.
- Componente `TypingText` no hero e fila de badges coloridos na secção de competências.
- Repositório público independente para o GitHub Profile README, portefólio e casos.
- Estrutura inicial extraída do WELLS_OS sem autenticação nem consola operacional.
- Estrutura integral de governação, arquitetura, operações e adaptadores opcionais do template de repositório.
- Métricas públicas do perfil geradas semanalmente por GitHub Actions e guardadas como SVG versionado.
- Pipeline de integração contínua para validar o template e a aplicação Next.js.

### Changed

- Métricas SVG do perfil passaram a labels em português europeu.
- Portefólio publicado em `https://emanuwells.vercel.app` a partir de `site/`.
- Aplicação Next.js movida para `site/`, mantendo `/`, `/maia` e `/api/maia/pulse`.
- README convertido num perfil GitHub visual, com ligações públicas verificáveis e distinção entre código público e privado.
- Documentação de desenvolvimento e deployment consolidada em `COMMANDS.md` e `docs/architecture/`.

### Removed

- Configurações de produto dispersas na raiz, documentação de deployment duplicada e instalações locais obsoletas.

### Security

- Removidos endereços concretos de infraestrutura e ligações diretas a endpoints operacionais.
- A integração Traffic Flow passou a ser opcional e configurada apenas por variável de ambiente.
- Aplicado um override compatível para PostCSS 8.5.10 ou superior, eliminando o aviso de segurança presente na dependência transitiva do Next.js 16.2.10.

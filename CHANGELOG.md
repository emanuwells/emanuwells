# Changelog

Todas as alterações relevantes deste projeto serão documentadas neste ficheiro.

## [Unreleased]

### Changed

- Logo Maia: «M» oficial (path do wordmark CM Maia, branco) no header; nav Maia `text-sm` alinhada ao portefólio.
- «O que já está ligado» com hierarquia e ícones; Equipa reescrita (assisto/acompanho + cartão INE); Resultados com 2 portais Huwise.
- WELLS_OS CTA no estilo do botão Maia; projetos/competências com mais presença; CTA fim Maia só botão.
- README: typing, autodidacta enxuto, foco actual (interoperabilidade + escalagem WELLS).

### Changed (anterior)

- Header homogéneo portefólio/Maia: `emanuwells` → início, ícone GitHub, «M» Maia → dados.cm-maia.pt; label **Dados Município Maia** / **Maia Municipality Data**; sem disclaimer na UI.
- Navegação seamless: FAB ↑/↓, CTA voltar no fim da Maia, footer GH/LI na Maia, page transition reforçada.
- Fix TypingText ao trocar PT/EN; Sobre com idade dinâmica (Europe/Lisbon) e frase self-taught + link; Experiência sem % (chips Activo/Em curso, desde 2022).
- README alinhado (sem idade).

### Changed (anterior)

- Portefólio com voz pessoal: hero e Em números (4+ anos / 6+ pipelines / 2 open source); Sobre com layout reforçado (paixão por dados, TGRSI, self-taught); contacto só links; projetos como amostragem (sem cartões DataTron/Webapp; Vacation Mode limpo); experiência sem mentoria de estágios.
- README alinhado à mesma narrativa (self-taught, TGRSI, números, tabela enxuta).

### Changed (anterior)

- Case study Maia enxuto: intro com hierarquia forte; bloco «O que já está ligado» (catálogo, Traffic Flow, Weather API 4 Maia); remoção de Pulso/Visível da UI; Observar sem carrossel; Warden = servidor principal.
- Portefólio e README recentrados na pessoa (produtos WELLS + forma de trabalhar); Maia como contexto profissional + case study; Weather API 4 Maia na grelha; contacto só GitHub e LinkedIn.
- Tech icons (simple-icons) legíveis em tema `terminal`/`dark` via `filter: invert` (já não anulados pelo selector `:not([data-theme=dark])`).

### Removed

- Risk Improve do case study (conteúdo, pipeline explorer e ícone).
- Secções UI Pulso da cidade e «O que a cidade mostra» (API `/api/maia/pulse` mantém-se no código).

### Changed (anterior)

- Storytelling do portefólio e case study Maia: tom de equipa (contributo técnico realista), ISO 9001/14001/37120, DataTron, Webapp-Medidata, Huwise, open data e Power BI.
- README de perfil sem métricas GitHub; diagrama de interoperabilidade e badges ISO.
- Home sem secção GitHub Signals; capítulo Maia **SGM** (`#governance`).
- Deploy documentado em modo C (Git Integration `site/` + CLI `vercel deploy --prod`).
- Motion: `riseSoft`, hover lift reforçado; DESIGN.md → 1.2.0.

### Changed (anterior)

- README de perfil reescrito: Typing SVG com largura corrigida (sem cortes), secção «O ecossistema WELLS», tabela de projetos com WELLS_API, Traffic Flow e descrições mais ricas.
- Portefólio: storytelling melhorado — hero, projetos (7 cartões, incluindo WELLS_API, MAIATRON-HUB e descrições baseadas na documentação real dos repos), sobre e experiência.
- Case study Maia: intro, sistemas invisíveis, observabilidade e resultados reescritos com narrativa mais concreta.

### Changed (toolkit)

- Migração para **WELLS Agent Runtime 0.5.0**: runtime em `.agents/`; legado (`docs/ai/`, `tools/ai-adapters/`, `AGENTS.md` na raiz, `tasks/`) arquivado em `.agents/migration/legacy/`.
- `COMMANDS.md`, `docs/ROOT_STRUCTURE.md` e governação alinhados ao novo contrato (`.agents/AGENTS.md`).
- CI valida `.agents/` com `validate-project.mjs`; scripts `activate-ai-adapter` removidos (adaptadores em `.agents/adapters/`).

### Changed (anterior)
- Portefólio: distinção `professional` vs `hobby` nos projetos; Vacation Mode marcado como hobby; copy de pipelines alinhada ao README.
- Workflow `profile-metrics`: commits com identidade Emanuel Ferreira; secret opcional `PROFILE_METRICS_PAT` para evitar `github-actions[bot]` nos contributors.
- Dependências: `next`/`eslint-config-next` → 16.2.11; override `sharp` ^0.35.3 (audit high limpo).

### Changed (anterior)

- Nome pessoal alinhado a **Emanuel Ferreira**; handle/logo `emanuwells` e produtos WELLS_* mantidos.
- Copy PT/EN do portefólio e Maia reescrita com tom mais natural e profissional.
- Tipografia partilhada: Inter (corpo), Space Grotesk (títulos/marca), JetBrains Mono (chrome); Nunito removido.
- Sub-marca Maia: header dentro de `data-brand`, accent magenta no progresso/nav; aliases `--color-*` ↔ `--theme-*`.
- Logo `emanuwells` sem gap; micro-interações na nav e no mark.

### Removed

- Pesquisa site-wide (`fuse.js`, `WellsSearchBar`, `lib/search/*`).
- Rail flutuante de categorias, popup, relógio do header e “System Pulse” duplicado.
- Nav legado (`PortfolioNav`, `MaiaNav`), `TopologyDiagram`, `DataCard`.
- Stubs de tema time-of-day (`lib/design-system/time.ts`, `lib/maia/theme.ts`) e CSS `.theme-selector*`.
- Bloco de citações rotativas em GitHub Signals.

### Changed (motion / limpeza)

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

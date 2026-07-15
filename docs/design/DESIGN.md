# DESIGN.md — Sistema de Design "Grinnu Nells" Portfolio

> Documento de referência para implementação em **React + Styled Components**.
> Cobre dois layouts: **Home** (portfolio principal) e **/maia** (case study de projeto).
> Versão do documento: `1.0.0`

---

## 1. Visão Geral

O portfolio segue uma estética **cyberpunk / terminal tech**, fundo escuro, tipografia monospace na Home e acentos neon com efeito *glow*. A página de case study `/maia` é uma **sub-marca** do mesmo sistema: mantém a base escura e o cyan, mas troca o verde-lima por **magenta/roxo** e usa tipografia sans-serif, refletindo um projeto "mais institucional/urbano" (imagem de cidade à noite).

| | Home | /maia |
|---|---|---|
| Tom | Terminal, developer-first | Case study, storytelling visual |
| Cor de destaque | Cyan + Verde-lima | Cyan + Magenta |
| Tipografia | Monospace | Sans-serif |
| Fundo | Preto-azulado + padrão de circuito | Roxo-escuro profundo |

---

## 2. Fundação Visual (Design Tokens)

### 2.1 Cores

```js
// theme.js
export const theme = {
  colors: {
    // Base comum (dark)
    bgPrimary: '#0a0e17',
    bgSecondary: '#0d1220',
    bgCard: 'rgba(16, 21, 31, 0.75)',
    bgCardSolid: '#10151f',
    borderSubtle: 'rgba(77, 216, 232, 0.15)',
    borderDefault: 'rgba(77, 216, 232, 0.35)',

    textPrimary: '#e8ecf1',
    textSecondary: '#8b95a5',
    textMuted: '#5a6478',

    // Tema Home
    cyan: '#4dd8e8',
    cyanGlow: 'rgba(77, 216, 232, 0.45)',
    lime: '#c8f04a',
    limeGlow: 'rgba(200, 240, 74, 0.45)',
    mint: '#5eebb0',
    mintGlow: 'rgba(94, 235, 176, 0.4)',

    // Tema /maia
    bgMaia: '#140a1f',
    bgMaiaSecondary: '#1a0e2e',
    magenta: '#d946ef',
    magentaGlow: 'rgba(217, 70, 239, 0.45)',
    heatRed: '#ef4444',
    heatYellow: '#fbbf24',
    heatBlue: '#3b82f6',
    positiveGreen: '#4ade80',

    // Estados
    success: '#4ade80',
    warning: '#fbbf24',
    danger: '#ef4444',
  },
};
```

> **Nota:** os valores hexadecimais são aproximações fiéis extraídas visualmente dos mockups. Antes de produção, confirmar com ficheiros-fonte (Figma/exports) se existirem, para garantir 100% de fidelidade cromática.

### 2.2 Tipografia

```js
fonts: {
  mono: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace", // Home
  sans: "'Inter', -apple-system, 'Segoe UI', sans-serif",          // /maia
},

fontSizes: {
  xs: '0.75rem',   // 12px — labels, badges
  sm: '0.875rem',  // 14px — texto secundário
  base: '1rem',    // 16px — corpo
  md: '1.125rem',  // 18px — subtítulos
  lg: '1.5rem',    // 24px — títulos de secção
  xl: '2rem',      // 32px — hero terminal
  xxl: '2.75rem',  // 44px — números de stats/KPI
  hero: '2rem',    // hero da /maia (dentro do glass card)
},

fontWeights: {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
},

lineHeights: {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.7,
},
```

Números grandes (stats, KPIs) usam `font-variant-numeric: tabular-nums;` para alinhamento consistente.

### 2.3 Espaçamento (escala base 4px)

```js
spacing: {
  1: '4px', 2: '8px', 3: '12px', 4: '16px',
  5: '24px', 6: '32px', 7: '48px', 8: '64px', 9: '96px',
},
```

### 2.4 Raios de Borda

```js
radii: {
  sm: '6px',    // badges, inputs
  md: '10px',   // cards pequenos
  lg: '16px',   // cards grandes, painéis
  pill: '999px', // botões e badges de tag
},
```

### 2.5 Sombras & Efeito Glow

O efeito de "glow" neon é o traço mais característico do sistema — usado em bordas de cards, botões e números de destaque.

```js
// Mixin de glow (styled-components)
export const neonGlow = (color) => `
  border: 1px solid ${color};
  box-shadow:
    0 0 8px ${color}55,
    0 0 24px ${color}22,
    inset 0 0 12px ${color}11;
`;

shadows: {
  cardDefault: '0 4px 20px rgba(0, 0, 0, 0.4)',
  glowCyan: neonGlow('#4dd8e8'),
  glowLime: neonGlow('#c8f04a'),
  glowMagenta: neonGlow('#d946ef'),
},
```

### 2.6 Breakpoints & Grid

```js
breakpoints: {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
},

// Container central
container: {
  maxWidth: '1200px',
  padding: '0 24px',
},

// Grids
gridProjects: 'repeat(3, 1fr)',      // desktop → 1 col em mobile
gridStats: 'repeat(3, 1fr)',         // desktop → 1 col em mobile
gridKpis: 'repeat(4, 1fr)',          // desktop → 2 col em tablet, 1 em mobile
```

---

## 3. Setup Base (Styled Components)

```jsx
// GlobalStyle.jsx
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.mono};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    /* Padrão de circuito de fundo, subtil, via SVG repetido */
    background-image: url('/assets/circuit-pattern.svg');
    background-repeat: repeat;
    background-size: 400px;
  }

  a { color: inherit; text-decoration: none; }
  button { font-family: inherit; cursor: pointer; }
`;
```

---

## 4. Componentes Base

### 4.1 `Button`

**Variantes:** `primary` (fill lime), `secondary` (outline cyan), `tertiary` (outline cyan subtil).
**Estados:** `default`, `hover` (glow intensifica + leve translateY), `active` (glow reduz), `disabled` (opacidade 0.4, sem glow).

```jsx
// Button.jsx
import styled, { css } from 'styled-components';

/**
 * Botão principal do sistema.
 * @param {'primary'|'secondary'|'tertiary'} variant - estilo visual
 */
const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.lime};
    color: #0a0e17;
    border: 1px solid ${({ theme }) => theme.colors.lime};
    &:hover {
      box-shadow: 0 0 16px ${({ theme }) => theme.colors.limeGlow};
      transform: translateY(-1px);
    }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.cyan};
    border: 1px solid ${({ theme }) => theme.colors.cyan};
    &:hover {
      box-shadow: 0 0 16px ${({ theme }) => theme.colors.cyanGlow};
      background: rgba(77, 216, 232, 0.08);
    }
  `,
  tertiary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
    &:hover { color: ${({ theme }) => theme.colors.cyan}; }
  `,
};

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition: all 0.2s ease;
  ${({ variant }) => variants[variant] || variants.tertiary}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
```

### 4.2 `Badge` (tech stack tags)

```jsx
export const Badge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: rgba(255, 255, 255, 0.03);
`;
```

### 4.3 `Card` (base, com variante de glow)

```jsx
/**
 * Card base reutilizável.
 * @param {'cyan'|'lime'|'magenta'|null} glow - cor do efeito neon na borda
 */
export const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(8px);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing[5]};
  box-shadow: ${({ theme }) => theme.shadows.cardDefault};
  ${({ glow, theme }) => glow && theme.shadows[`glow${glow[0].toUpperCase()}${glow.slice(1)}`]}
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
```

### 4.4 `StatCard` (usado em "Evidência Auditada" e KPIs)

```jsx
export const StatCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[2]};

  .value {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .label {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
```

### 4.5 `ProgressBar`

```jsx
/**
 * Barra de progresso horizontal com glow.
 * @param {number} value - percentagem 0-100
 * @param {string} color - cor do preenchimento
 */
export const ProgressBarTrack = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radii.pill};
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  width: ${({ value }) => value}%;
  background: ${({ color, theme }) => color || theme.colors.cyan};
  box-shadow: 0 0 8px ${({ color, theme }) => color || theme.colors.cyanGlow};
  transition: width 0.4s ease;
`;
```

### 4.6 `TerminalWindow` (hero da Home)

```jsx
/**
 * Janela estilo terminal/macOS com efeito de "typing" opcional.
 */
export const TerminalFrame = styled.div`
  background: #05070c;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  overflow: hidden;
`;

export const TerminalTitleBar = styled.div`
  display: flex;
  gap: 6px;
  padding: 10px 14px;
  background: #0d1117;

  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    &:nth-child(1) { background: #ff5f56; }
    &:nth-child(2) { background: #ffbd2e; }
    &:nth-child(3) { background: #27c93f; }
  }
`;

export const TerminalBody = styled.pre`
  padding: ${({ theme }) => theme.spacing[5]};
  color: ${({ theme }) => theme.colors.cyan};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  white-space: pre-wrap;

  /* cursor piscante ao fim do texto */
  &::after {
    content: '▍';
    animation: blink 1s step-end infinite;
    color: ${({ theme }) => theme.colors.cyan};
  }
  @keyframes blink { 50% { opacity: 0; } }
`;
```

### 4.7 `GlassCard` (hero da /maia, sobre imagem de fundo)

```jsx
export const HeroImage = styled.div`
  position: relative;
  min-height: 320px;
  background: url(${({ src }) => src}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(20,10,31,0.2), rgba(20,10,31,0.7));
  }
`;

export const GlassCard = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(20, 10, 31, 0.45);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  text-align: center;
  max-width: 560px;
`;
```

### 4.8 `NavBar` (duas variantes)

| | Home | /maia |
|---|---|---|
| Logo | Ícone hexagonal cyan + "GRINNU NELLS" (mono, uppercase) | "/maia" (sans, minúsculas) |
| Links | Home · Projects · Skills · Experience · Contact | Projects · About · Contact |
| Extra | Badge "PT/EN" com borda lime, canto direito | — |
| Link ativo | Sublinhado cyan | Sublinhado cyan |

```jsx
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSubtle};
`;

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ active, theme }) => active ? theme.colors.cyan : theme.colors.textSecondary};
  border-bottom: 2px solid ${({ active, theme }) => active ? theme.colors.cyan : 'transparent'};
  padding-bottom: 4px;
  transition: color 0.2s ease;
  &:hover { color: ${({ theme }) => theme.colors.cyan}; }
`;
```

### 4.9 `Footer` (Home)

Duas colunas: **CONTACT** (email + ícones) à esquerda, **SOCIAL** (Twitter/X, GitHub, YouTube) à direita. Fundo igual ao body, separador subtil no topo.

---

## 5. Layout — Página Home

Estrutura vertical, container centrado a `1200px`, secções espaçadas por `theme.spacing[8]` (64px).

### 5.1 Hero
- `TerminalFrame` com texto animado tipo "digitação" (`APIs, observability and real systems.`)
- 3 CTAs por baixo: `Button variant="primary"` ("Ver projetos"), `Button variant="secondary"` ("Descobrir o trabalho na Maia →"), `Button variant="tertiary"` ("Conhecer o WELLS_OS ↗")

### 5.2 "Evidência Auditada"
- Título de secção em cyan, uppercase, `letter-spacing: 0.05em`
- Grid `gridStats` (3 colunas) de `StatCard`, cada uma com ícone + número + label:
  - `13` — projetos verificados
  - `330+` — entregas documentadas
  - `4` — estagiários orientados
- Cores de glow alternadas: cyan / lime / cyan

### 5.3 "Sinais Públicos"
- `Card` grande (glow cyan) com header "System Pulse" + `ProgressBar` fina no topo direito
- Sub-grid de 4 mini-stats com ícone (repositórios públicos, estrelas, forks, seguidores)
- Duas visualizações lado a lado:
  - Gráfico de linha suave (área com gradiente verde→cyan)
  - Waveform tipo equalizador (barras verticais cyan/verde alternadas)
- Bloco de citação ("CITAÇÃO DEV"): texto em itálico, borda esquerda cyan de 2px

### 5.4 "Projetos"
- Grid `gridProjects` (3×2) de `ProjectCard`:
  - Título do projeto
  - Label "Tech stack:" + lista de `Badge`
  - Link "Link →" em cyan
- Projetos: WELLS_OS, Overseer, Warden, WELLS_API, Traffic Flow, Vacation Mode

### 5.5 "Experiência"
- `Card` único (Câmara Municipal da Maia): logo redondo + nome + `Badge` verde "Câmara Municipal" + intervalo de datas + `ProgressBar` no topo
- Lista de itens (`TimelineItem`): bullet colorido (cyan/verde) + linha vertical conectora + título a negrito + descrição + mini progress bar à direita indicando "nível de impacto/conclusão"
- Itens: Desenvolvimento Backend, Integração de Dados, Transformação Digital do Setor Público

---

## 6. Layout — Página `/maia` (Case Study)

Tema visual diferenciado: fundo roxo profundo (`bgMaia`), acentos magenta, tipografia sans-serif. Estrutura em **duas colunas amplas** no desktop (esquerda: hero + arquitetura; direita: dashboards + KPIs), empilhando em mobile.

### 6.1 Hero
- `HeroImage` com foto de cidade à noite (estrada com motion blur de luzes)
- `GlassCard` centrado sobre a imagem: título "Ecossistema Digital: Maia" + subtítulo descritivo

### 6.2 "Architecture & Flow"
- Título + subtítulo (cinza)
- `Card` cinza-escuro com diagrama de 6 nós em grelha 3×2:
  `Citizen Portal → Municipal Services API → IoT Sensors`
  `Data Lake ← Municipal Services API → Cloud Infrastructure`
- Nós = pequenos ícones + label; ligações = setas com labels ("Real-time Ingestion", "Secure Processing") em `fontSizes.xs`, cor cyan

### 6.3 "Observability Dashboards"
- Título + subtítulo
- 3 `Card` lado a lado:
  1. Gráfico de linha (Public Transport Efficiency, +15%, verde `positiveGreen`)
  2. Heatmap (Utility Service Requests) — mapa com pontos de calor vermelho/amarelo/azul
  3. Gauge/semicírculo (System Uptime 99.98%) — gradiente cyan→verde
- Dots de paginação por baixo (indicador de carousel, 4 pontos, ativo em cyan)

### 6.4 "Results & KPIs"
- Título + subtítulo
- Grid `gridKpis` (4 colunas) de `StatCard` com `glow="magenta"`:
  - `40%` Faster Service Delivery
  - `25%` Cost Reduction
  - `95%` Citizen Satisfaction
  - `24/7` Monitoring

---

## 7. Responsividade

| Breakpoint | Comportamento |
|---|---|
| `< 768px` (mobile) | Nav colapsa em menu hambúrguer; grids passam a 1 coluna; hero da /maia reduz padding; diagrama de arquitetura empilha verticalmente |
| `768–1023px` (tablet) | `gridProjects` e `gridStats` → 2 colunas; `gridKpis` → 2 colunas |
| `≥ 1024px` (desktop) | Layout completo conforme secções 5 e 6 |
| `≥ 1440px` (wide) | Container mantém `max-width: 1200px`, espaço extra distribuído nas margens |

```jsx
// exemplo de uso com styled-components
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: 1023px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 767px) { grid-template-columns: 1fr; }
`;
```

---

## 8. Acessibilidade

- Contraste mínimo AA: `textSecondary` (#8b95a5) sobre `bgPrimary` (#0a0e17) → verificar ratio ≥ 4.5:1 antes de usar em texto pequeno; preferir `textPrimary` para corpo de texto crítico.
- Todos os `Button` e `NavLink` devem ter `:focus-visible` com outline cyan de 2px (nunca remover outline sem substituto visível).
- Ícones decorativos (SVGs de circuito, ondas) devem ter `aria-hidden="true"`.
- `TerminalBody` com cursor animado: respeitar `prefers-reduced-motion` (parar animação de piscar se o utilizador preferir menos movimento).
- Gráficos (line chart, heatmap, gauge) devem ter texto alternativo/tabela de dados acessível por leitor de ecrã, não depender só da cor.

---

## 9. Animações & Microinterações

| Elemento | Efeito |
|---|---|
| Cursor do terminal | Piscar `1s step-end infinite` |
| Cards (hover) | `translateY(-2px)` + box-shadow glow, `0.2s ease` |
| Botões (hover) | Intensificação do glow + leve elevação |
| Progress bars | `width` anima em `0.4s ease` ao entrar em viewport |
| Waveform (Sinais Públicos) | Barras com altura animada em loop subtil, dessincronizada |
| Dots de paginação (/maia) | Transição de opacidade/cor ao trocar de slide ativo |

Respeitar sempre `@media (prefers-reduced-motion: reduce)` desativando ou reduzindo estas animações.

---

## 10. Estrutura de Pastas Sugerida

```
src/
├── theme/
│   ├── theme.js
│   └── GlobalStyle.jsx
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── Card.jsx
│   │   ├── StatCard.jsx
│   │   ├── ProgressBar.jsx
│   │   └── Nav.jsx
│   ├── home/
│   │   ├── TerminalWindow.jsx
│   │   ├── PublicSignals.jsx
│   │   ├── ProjectsGrid.jsx
│   │   └── ExperienceTimeline.jsx
│   └── maia/
│       ├── HeroGlass.jsx
│       ├── ArchitectureDiagram.jsx
│       ├── ObservabilityDashboards.jsx
│       └── KpiGrid.jsx
├── pages/
│   ├── Home.jsx
│   └── Maia.jsx
└── assets/
    └── circuit-pattern.svg
```

---

## 11. Implementação neste repositório

Este documento usa **Styled Components** como referência pedagógica. A implementação real em `site/` segue a stack do projeto:

- Next.js App Router, React 19, TypeScript;
- Tailwind CSS 4 + variáveis CSS (`site/styles/tokens.css`, `site/styles/cyber.css`);
- componentes React em `site/components/ui/`;
- branding público: **Emanuel Wells** (`emanuwells.vercel.app`).

| Spec DESIGN.md | Implementação |
|---|---|
| `theme.js` | `tokens.css`, `palettes.ts` |
| `Button` | `site/components/ui/Button.tsx` |
| `Badge` | `site/components/ui/Badge.tsx` |
| `StatCard` | `site/components/ui/StatCard.tsx` |
| `ProgressBar` | `site/components/ui/ProgressBar.tsx` |
| `TerminalWindow` | `site/components/ui/TerminalPanel.tsx` |
| `GlassCard` | `site/components/ui/GlassPanel.tsx` |
| `circuit-pattern.svg` | `site/public/assets/circuit-pattern.svg` |
| Home | `/` — tipografia mono (`.portfolio-shell`) |
| `/maia` | `MaiaThemeShell` com `data-brand="maia"` — sans-serif, tokens magenta |

---

*Fim do documento.*

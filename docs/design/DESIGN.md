# Sistema visual Wells Terminal

Contrato de design reutilizável para interfaces cyberpunk-lite / dev-ops / terminal. Baseado nos mockups do portefólio Emanuel Wells e do case study Maia.

## Referência

| Mockup | Ficheiro |
|---|---|
| Portefólio home | [`assets/home-mockup.png`](assets/home-mockup.png) |
| Case study Maia | [`assets/maia-mockup.png`](assets/maia-mockup.png) |

## Princípios

1. **Terminal-first** — o utilizador entra numa consola viva, não numa landing genérica.
2. **Evidência > marketing** — métricas, gráficos e timelines substituem adjetivos vazios.
3. **Cyberpunk-lite** — neon controlado; legibilidade e contraste prevalecem sobre efeitos.
4. **Dark fixo** — um único tema escuro; sem variação hora-do-dia.
5. **Portável** — tokens CSS e componentes React copiáveis para outros repos.

## Paleta

| Token | Valor | Uso |
|---|---|---|
| `--cyber-bg` | `#050a0f` | Fundo base |
| `--cyber-bg-elevated` | `#07111f` | Painéis, cartões |
| `--cyber-cyan` | `#22d3ee` | Bordas, links, gráficos primários |
| `--cyber-cyan-bright` | `#67e8f9` | Títulos, destaques |
| `--cyber-lime` | `#84cc16` | CTAs primários, barras de progresso |
| `--cyber-lime-bright` | `#a3e635` | Hover, acentos secundários |
| `--cyber-purple` | `#a855f7` | KPIs gradiente (Maia) |
| `--cyber-text` | `#f8fafc` | Texto principal |
| `--cyber-text-muted` | `#94a3b8` | Labels, meta |
| `--cyber-border` | `rgba(34, 211, 238, 0.35)` | Bordas neon |
| `--cyber-glow-cyan` | `0 0 20px rgba(34, 211, 238, 0.35)` | Box-shadow ciano |
| `--cyber-glow-lime` | `0 0 20px rgba(132, 204, 22, 0.35)` | Box-shadow lima |

Aliases `--theme-*` mapeiam para estes tokens no runtime.

## Tipografia

| Papel | Família | Peso |
|---|---|---|
| Display | Space Grotesk | 600–700 |
| Corpo | Inter | 400–500 |
| Sistema / terminal | JetBrains Mono | 400–500 |

Regras:
- Títulos de secção: display, `text-3xl`–`text-4xl`.
- Conteúdo terminal: mono, `text-sm`–`text-lg`.
- Eyebrows: mono, `10px`–`12px`, uppercase, tracking largo, cor ciano.

## Superfícies

### Painel terminal (`TerminalPanel`)
- Barra de título com três dots (vermelho, amarelo, verde).
- Borda 1px ciano + glow subtil.
- Fundo `rgba(7, 17, 31, 0.92)` + `backdrop-blur`.

### Cartão neon (`NeonCard`)
- Variantes: `cyan`, `lime`, `gradient`.
- Cantos com bracket decorativo (pseudo-elementos CSS).
- Hover: elevação `-2px` + glow intensificado.

### KPI gradiente
- Borda `linear-gradient(135deg, cyan, purple)`.
- Número grande em ciano; label em muted.

## Gráficos

- Fundo transparente ou `#07111f`.
- Linhas: ciano (`#22d3ee`) e lima (`#a3e635`).
- Grelha: `rgba(148, 163, 184, 0.12)`.
- Tooltip: fundo `#07111f`, borda ciano 35% opacidade.
- Waveform: barras verticais ciano com opacidade variável.

## Motion

| Efeito | Quando | Fallback |
|---|---|---|
| Typing no hero | Portefólio | Texto estático |
| Pulse em bordas | Cartões KPI | Sem animação |
| Float nos FABs | Categorias flutuantes | Estático |
| Ken burns / parallax | Hero Maia | Imagem fixa |

Sempre respeitar `prefers-reduced-motion: reduce`.

## Responsividade

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile | `<640px` | 1 coluna; métricas 2×2; nav hamburger; glow reduzido |
| Tablet | `640–1023px` | Projectos 2 colunas; charts empilhados ou 2 colunas |
| Desktop | `≥1024px` | Layout completo como mockup; System Pulse 2 colunas |

Regras gerais:
- Sem overflow horizontal (`overflow-x: hidden` no body se necessário).
- Touch targets mínimo 44×44px.
- Tipografia do terminal: `text-lg` mobile, `text-xl`+ desktop.

## Acessibilidade

- Contraste texto/fundo ≥ 4.5:1 (AA) para corpo; ≥ 3:1 para títulos grandes.
- Glow não substitui contraste de texto.
- `:focus-visible` com outline ciano 2px.
- Gráficos com título/aria; decorações com `aria-hidden`.
- Citações em `<blockquote>` com atribuição.

## Implementação de referência

```
site/
├── styles/
│   ├── tokens.css      # variáveis --cyber-* e --theme-*
│   ├── cyber.css       # PCB, scanlines, neon, brackets
│   └── glass.css       # painéis escuros
├── components/ui/
│   ├── TerminalPanel.tsx
│   ├── NeonCard.tsx
│   ├── CircuitBackground.tsx
│   └── Button.tsx      # variantes lime / cyan / ghost
└── lib/design-system/
    ├── palettes.ts     # TERMINAL_PALETTE
    └── apply-theme.ts
```

## Adoptar noutro projecto

1. Copiar `tokens.css`, `cyber.css` e componentes `ui/`.
2. Importar fontes: Space Grotesk, Inter, JetBrains Mono.
3. Aplicar `data-theme="terminal"` no `<html>`.
4. Usar `TerminalPanel` para heros e `NeonCard` para métricas.
5. Configurar gráficos com cores da tabela acima.

## Placeholders aceites

- Heatmap geográfico Maia: placeholder estilizado até existir dados reais.
- Waveform de actividade: derivada de eventos públicos GitHub ou snapshot local.

# Arquitetura frontend

## Stack

- Next.js 16 com App Router e Server Components por defeito;
- React 19 e TypeScript em modo estrito;
- Tailwind CSS 4 e CSS próprio para temas;
- Framer Motion para movimento, Fuse.js para pesquisa e Recharts para gráficos.

## Estrutura

```text
site/
├── app/          # rotas, layout, estilos globais e Route Handlers
├── components/   # interface partilhada, portefólio, pesquisa e caso Maia
├── lib/          # conteúdo, i18n, design system, pesquisa e integração pública
├── public/       # ativos estáticos
└── styles/       # tokens e superfícies partilhadas
```

## Rotas públicas

| Rota | Responsabilidade |
|---|---|
| `/` | Portefólio, projetos, experiência e contacto |
| `/maia` | Caso técnico pessoal da Maia |

O estado interativo fica em componentes cliente pequenos. Conteúdo e composição permanecem em Server Components sempre que possível.

## Qualidade

- navegação por teclado, semântica e contraste devem ser preservados;
- estados de loading, erro e fallback são obrigatórios nas integrações remotas;
- mudanças visuais relevantes exigem verificação desktop e mobile;
- não existe autenticação nem estado persistente do utilizador.

## Design system

O contrato visual (paleta terminal, componentes cyberpunk-lite, responsividade e acessibilidade) está documentado em [`docs/design/DESIGN.md`](../design/DESIGN.md), com mockups de referência em `docs/design/assets/`.


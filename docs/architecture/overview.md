# Visão geral da arquitetura

## Objetivo

O repositório publica um perfil GitHub e um portefólio pessoal. O perfil apresenta uma síntese verificável do trabalho; a aplicação Next.js desenvolve essa narrativa com páginas de projeto e casos técnicos.

## Componentes

| Componente | Responsabilidade | Tecnologia |
|---|---|---|
| Profile README | Entrada pública no GitHub | Markdown e SVG local |
| Portefólio | Interface, navegação e casos | Next.js, React, TypeScript |
| Pulse Maia | Agregação read-only com fallback ilustrativo | Route Handler e `fetch` |
| Métricas | Snapshot de atividade pública | Node.js e GitHub Actions |
| Deployment | Build e publicação | Vercel |

## Fluxos

```text
Visitante -> GitHub README -> portefólio ou projeto público
Visitante -> Next.js -> /api/maia/pulse -> endpoint público opcional
GitHub Actions -> API pública GitHub -> SVG versionado -> README
```

## Fronteiras

Dentro do sistema ficam apenas conteúdo público, dados ilustrativos e chamadas read-only. Autenticação, operações de servidor, bases de dados, SSH, credenciais e código privado permanecem fora deste repositório.

## Riscos arquiteturais

- indisponibilidade do endpoint opcional, mitigada pelo fallback ilustrativo;
- ligações públicas desatualizadas, mitigadas por revisão periódica;
- limites da API GitHub, mitigados por atualização semanal e token temporário da workflow.


# Deploy e operação

## Ambientes

| Ambiente | Origem | Utilização |
|---|---|---|
| Local | `site/` com `npm run dev` | Desenvolvimento e validação |
| Preview | Vercel (Git Integration ou `vercel deploy`) | Smoke tests e revisão visual |
| Produção | `https://emanuwells.vercel.app` | Portefólio público |

## Build

O projeto Vercel usa **`site/` como Root Directory**, instala com `npm ci` e compila com `npm run build` (ver `site/vercel.json`). Node.js 20.9 ou superior é obrigatório pelo Next.js 16.

| Campo Vercel | Valor |
|---|---|
| Project | `emanuwells` |
| Scope / team | `emanuwells-projects` |
| Root Directory | `site/` |
| Production Branch | `main` |
| Framework | Next.js |

## Configuração

`MAIA_TRAFFIC_FLOW_URL` é opcional e deve conter apenas um endpoint público. O exemplo canónico está em `docs/resources/templates/.env.example`; valores locais pertencem a `site/.env.local` e ficam ignorados pelo Git.

## Estratégia de publicação (modo C)

Há dois caminhos equivalentes. Preferir o que estiver autenticado no ambiente.

### A — Git Integration (dia-a-dia)

1. Validar localmente: template, lint, typecheck, build em `site/`.
2. Commit e push para `main`.
3. A Vercel faz build automático a partir de `site/`.
4. Smoke em produção: `/`, `/maia`, `/api/maia/pulse`.
5. Se falhar, rollback no dashboard Vercel para o deployment anterior.

### B — CLI (agentes / forçar produção)

Requer sessão Vercel (`vercel login`) ou `VERCEL_TOKEN` (+ opcionalmente `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID`).

```bash
cd site
vercel link --yes --project emanuwells --scope emanuwells-projects
vercel deploy --prod --yes
```

Pré-visualização sem promover:

```bash
cd site
vercel deploy --yes
```

1. Validar localmente antes do deploy.
2. Executar CLI a partir de `site/`.
3. Smoke HTTP nas rotas críticas.
4. Rever logs de build/runtime na Vercel.

## Auth para agentes

- Preferir `vercel login` (device/browser) para ficar ligado de forma persistente.
- Alternativa: secret `VERCEL_TOKEN` no ambiente do agente (e IDs de org/project se o link falhar).
- Nunca versionar tokens.

## Rollback e observabilidade

Se a validação de produção falhar, usar o rollback da Vercel para o deployment anterior. A operação usa logs de build/runtime da Vercel e verificações HTTP; não existe estado persistente a migrar ou recuperar.

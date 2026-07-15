# Deploy e operação

## Ambientes

| Ambiente | Origem | Utilização |
|---|---|---|
| Local | `site/` com `npm run dev` | Desenvolvimento e validação |
| Preview | Vercel, deployment sem alias de produção | Smoke tests e revisão visual |
| Produção | `https://emanuwells.vercel.app` | Portefólio público |

## Build

O projeto Vercel usa `site/` como Root Directory, instala com `npm ci` e compila com `npm run build`. Node.js 20.9 ou superior é obrigatório pelo Next.js 16.

## Configuração

`MAIA_TRAFFIC_FLOW_URL` é opcional e deve conter apenas um endpoint público. O exemplo canónico está em `docs/resources/templates/.env.example`; valores locais pertencem a `site/.env.local` e ficam ignorados pelo Git.

## Estratégia de publicação

1. Validar template, lint, typecheck e build local.
2. Criar um Preview Vercel a partir de `site/`.
3. Verificar `/`, `/maia` e `/api/maia/pulse` em desktop e mobile.
4. Promover o artefacto validado para produção.
5. Rever logs de runtime e respostas HTTP.

## Rollback e observabilidade

Se a validação de produção falhar, usar o rollback da Vercel para o deployment anterior. A operação usa logs de build/runtime da Vercel e verificações HTTP; não existe estado persistente a migrar ou recuperar.


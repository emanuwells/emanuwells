# Publicação do portefólio

O portefólio é uma aplicação Next.js publicada em `emanuwells.vercel.app`. O repositório usa a raiz como diretório da aplicação.

## Validação local

```powershell
npm ci
npm run lint
npm run build
```

## Variáveis de ambiente

`MAIA_TRAFFIC_FLOW_URL` é opcional. Quando não existe, o caso Maia mantém a narrativa e apresenta dados ilustrativos claramente identificados, sem tentar contactar infraestrutura privada.

Valores reais devem existir apenas em `.env.local` ou nas variáveis protegidas da plataforma. Não devem ser adicionados ao Git.

## Publicação

Depois de associar este repositório ao projeto Vercel correto:

```powershell
vercel link --project emanuwells
vercel --prod
```

Uma publicação de produção exige confirmação explícita e revisão prévia do domínio, das variáveis e do rollback.

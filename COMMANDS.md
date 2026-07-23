# Comandos do projeto

Os comandos da aplicação são executados em `site/`. A raiz contém o perfil GitHub e a governação do repositório.

## Instalação e desenvolvimento

```powershell
Set-Location site
npm ci
npm run dev
```

## Qualidade e build

```powershell
Set-Location site
npm audit --audit-level=high
npm run lint
npm run build
npm run test:pulse
```

O contrato visual está em [`docs/design/DESIGN.md`](docs/design/DESIGN.md).

## Métricas do perfil

```powershell
node scripts/generate-profile-metrics.mjs
```

O script consulta apenas dados públicos da conta `emanuwells`.

Na workflow `.github/workflows/profile-metrics.yml`, o commit do SVG deve ficar atribuído a ti:

1. Cria um fine-grained PAT com `Contents: Read and write` neste repositório.
2. Guarda-o como secret do repositório `PROFILE_METRICS_PAT` (Settings → Secrets and variables → Actions).
3. Sem este secret, a workflow faz fallback para `GITHUB_TOKEN` e o contributor `github-actions[bot]` volta a aparecer.

### Tema Wells para widgets externos

Parâmetros de cor usados no README para `github-readme-stats` e `github-readme-activity-graph`:

```
bg_color=07111f&title_color=67e8f9&text_color=a8b5c7&icon_color=22d3ee&border_color=263449
```


## Validação do template

```powershell
./scripts/validate-template.ps1
```

```bash
./scripts/validate-template.sh
```

## Vercel

```powershell
Set-Location site
vercel link --yes --project emanuwells --scope emanuwells-projects
vercel deploy
```

O deployment de produção só deve ser promovido depois de o Preview passar as verificações descritas em `docs/architecture/deployment.md`.

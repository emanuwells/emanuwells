# Comandos do projeto

Os comandos da aplicação são executados em `site/`. A raiz contém o perfil GitHub e a governação do repositório.

Contrato de agentes: ler `.agents/AGENTS.md` (nunca duplicar regras IA na raiz).

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
npm run typecheck
npm run build
npm run test:pulse
```

`test:pulse` requer o servidor de desenvolvimento (`npm run dev`) em execução.

O contrato visual está em [`docs/design/DESIGN.md`](docs/design/DESIGN.md).

## Runtime WELLS

```bash
node .agents/tools/validate-project.mjs
```

Confirma contagens e integridade mínima de `.agents/` (versão em `manifest.json` / `toolkit-lock.json`).

## Validação do repositório

```powershell
./scripts/validate-template.ps1
```

```bash
bash ./scripts/validate-template.sh
```

## Métricas do perfil (opcional)

```powershell
node scripts/generate-profile-metrics.mjs
```

O script consulta dados públicos da conta `emanuwells` e actualiza `.github/assets/profile-metrics.svg`. O README de perfil **não** exibe estes widgets; a workflow `.github/workflows/profile-metrics.yml` pode continuar a correr no repo.

Para commits da workflow com a tua identidade: secret `PROFILE_METRICS_PAT` (Contents: Read and write). Sem este secret, o fallback é `GITHUB_TOKEN` / `github-actions[bot]`.

## Vercel

Project `emanuwells`, scope `emanuwells-projects`, Root Directory `site/`, Production Branch `main`. Detalhe em [`docs/architecture/deployment.md`](docs/architecture/deployment.md).

### Login (uma vez)

```bash
cd site
vercel login
```

Ou definir `VERCEL_TOKEN` no ambiente do agente.

### Preview

```powershell
Set-Location site
vercel link --yes --project emanuwells --scope emanuwells-projects
vercel deploy --yes
```

### Produção

```powershell
Set-Location site
vercel link --yes --project emanuwells --scope emanuwells-projects
vercel deploy --prod --yes
```

Alternativa: push para `main` com Git Integration activa (Root Directory `site/`).

Smoke após deploy: `/`, `/maia`, `/api/maia/pulse`.

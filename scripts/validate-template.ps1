# Valida a estrutura essencial do repositório emanuwells (WELLS Agent Runtime 0.5.0).

$ErrorActionPreference = 'Stop'
Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..'))

function Assert-File([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
        throw "Ficheiro obrigatório ausente: $Path"
    }
}

function Assert-Dir([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path -PathType Container)) {
        throw "Pasta obrigatória ausente: $Path"
    }
}

function Assert-Missing([string]$Path) {
    if (Test-Path -LiteralPath $Path) {
        throw "Legado ou item não deve existir: $Path"
    }
}

node .agents/tools/validate-project.mjs

@(
    'README.md', 'COMMANDS.md', 'CHANGELOG.md', 'VERSION', 'LICENSE', 'PROJECT_CONTEXT.md',
    '.gitattributes', '.gitignore',
    '.github/SECURITY.md', '.github/workflows/ci.yml', '.github/workflows/profile-metrics.yml',
    '.github/assets/profile-metrics.svg',
    'docs/governance/CONTRIBUTING.md', 'docs/ROOT_STRUCTURE.md',
    'docs/resources/README.md',
    'docs/resources/templates/PROJECT_CONTEXT.template.md',
    'docs/resources/templates/README.template.md',
    'docs/resources/templates/.env.example',
    'docs/resources/templates/.gitignore.template',
    'docs/resources/examples/secrets/README.md',
    'docs/architecture/overview.md', 'docs/architecture/frontend.md',
    'docs/architecture/backend.md', 'docs/architecture/database.md',
    'docs/architecture/deployment.md', 'docs/architecture/decisions.md',
    'site/package.json', 'site/package-lock.json',
    'site/app/page.tsx', 'site/app/maia/page.tsx', 'site/app/api/maia/pulse/route.ts'
) | ForEach-Object { Assert-File $_ }

@(
    '.github', 'docs', 'docs/architecture', 'docs/adr', 'docs/governance', 'docs/resources',
    'docs/resources/templates', 'docs/resources/examples', 'scripts', 'site', '.agents'
) | ForEach-Object { Assert-Dir $_ }

@(
    'AGENTS.md', 'CONTRIBUTING.md', 'SECURITY.md', 'PROJECT_CONTEXT.template.md',
    '.env.example', '.gitignore.template', 'docs/ai', 'tasks', 'tools'
) | ForEach-Object { Assert-Missing $_ }

@(
    '.cursor', '.claude', '.codex', '.devin', '.vscode', '.cursorrules', '.windsurfrules',
    'CLAUDE.md', 'GEMINI.md'
) | ForEach-Object { Assert-Missing $_ }

if (Test-Path -LiteralPath '.github/copilot-instructions.md') {
    throw 'Adaptador Copilot ativo na raiz por defeito.'
}

$Version = (Get-Content 'VERSION' -Raw).Trim()
if ($Version -notmatch '^\d+\.\d+\.\d+$') {
    throw "VERSION não usa SemVer: $Version"
}

$ToolkitVersion = (Get-Content '.agents/manifest.json' -Raw | ConvertFrom-Json).version
if ($ToolkitVersion -ne '0.5.0') {
    throw "Toolkit esperado 0.5.0, encontrado: $ToolkitVersion"
}

Write-Host "Repositório válido. Projeto: $Version. WELLS toolkit: $ToolkitVersion."

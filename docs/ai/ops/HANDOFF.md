# Handoff operacional

## Metadados

| Campo | Valor |
|---|---|
| Última atualização | 2026-07-15 |
| Branch | `main` |
| Estado | Implementação local concluída; deployment bloqueado por autenticação CLI |
| Próximo passo | Autenticar Vercel, configurar o projeto `site`, validar Preview e promover |

## Concluído

- aplicação movida para `site/` sem alterar os contratos `/`, `/maia` e `/api/maia/pulse`;
- estrutura integral do template incorporada e adaptada;
- Profile README, métricas SVG e workflows de CI criados;
- documentação de arquitetura, operações e contexto atualizada;
- auditoria de publicação dos três repositórios privados registada;
- template, audit, lint, typecheck, build e browser verificados.

## Bloqueio

O MCP Vercel confirmou o projeto `site`, mas só dispõe de leitura. A Vercel CLI não tem credenciais locais e o browser automatizado isolado não partilha uma sessão autenticada. Não foi criado outro projeto nem foi alterada produção.

## Git

| Item | Valor |
|---|---|
| Branch | `main` |
| Estado inicial | Limpo em `3251093` |
| Alterações do utilizador em risco | Nenhuma detetada |
| Commit/push | Pendente até validar o deployment |

## Validação

| Critério | Resultado |
|---|---|
| Template PowerShell | Passou, versão `1.0.0` |
| Secret scan atual/histórico | Sem credenciais conhecidas, tokens, chaves ou endereços internos no `emanuwells` |
| `npm audit --audit-level=high` | Zero vulnerabilidades |
| Lint e typecheck | Passaram |
| Next.js build | Passou; quatro rotas esperadas |
| Browser desktop/mobile | Passou, sem overflow ou error overlay |
| API Maia | HTTP 200; Traffic Flow ilustrativo quando não configurado |
| Links externos | Projetos públicos e WELLS_OS disponíveis; domínio do portefólio ainda 404 |

## Auditoria de limpeza

- **Removidos:** configuração de aplicação da raiz, `DEPLOY.md`, `.env.example` duplicado e instalações npm obsoletas/incompletas.
- **Mantidos:** recursos e adaptadores exigidos pela opção de template integral; assets Maia usados pela aplicação.
- **Candidatos a confirmação:** nenhum ficheiro ambíguo no `emanuwells`; reescrita de histórico nos repositórios privados exige autorização própria.
- **Verificações:** imports, rotas, manifests, workflows, links, segredos, build, browser e estrutura.

## MCP e ferramentas externas

| Integração | Finalidade | Resultado |
|---|---|---|
| Vercel MCP | Projetos, equipa e configuração existente | Projeto `site` confirmado, read-only |
| Browser | Verificação visual local e tentativa de sessão Vercel | UI local passou; Vercel requer login |
| GitHub público | Estado do perfil e links públicos | Profile README reconhecido; pins dependem de sessão da conta |

## Próximo passo exato

1. Executar `npx --yes vercel@56.2.0 login` numa PowerShell do utilizador.
2. Renomear/configurar o projeto existente, criar Preview e validar.
3. Promover para `emanuwells.vercel.app`, rever logs, finalizar registos, commit e push.

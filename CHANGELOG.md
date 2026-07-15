# Changelog

Todas as alterações relevantes deste projeto serão documentadas neste ficheiro.

## [Unreleased]

### Added

- Repositório público independente para o GitHub Profile README, portefólio e casos.
- Estrutura inicial extraída do WELLS_OS sem autenticação nem consola operacional.
- Estrutura integral de governação, arquitetura, operações e adaptadores opcionais do template de repositório.
- Métricas públicas do perfil geradas semanalmente por GitHub Actions e guardadas como SVG versionado.
- Pipeline de integração contínua para validar o template e a aplicação Next.js.

### Changed

- Aplicação Next.js movida para `site/`, mantendo `/`, `/maia` e `/api/maia/pulse`.
- README convertido num perfil GitHub visual, com ligações públicas verificáveis e distinção entre código público e privado.
- Documentação de desenvolvimento e deployment consolidada em `COMMANDS.md` e `docs/architecture/`.

### Removed

- Configurações de produto dispersas na raiz, documentação de deployment duplicada e instalações locais obsoletas.

### Security

- Removidos endereços concretos de infraestrutura e ligações diretas a endpoints operacionais.
- A integração Traffic Flow passou a ser opcional e configurada apenas por variável de ambiente.
- Aplicado um override compatível para PostCSS 8.5.10 ou superior, eliminando o aviso de segurança presente na dependência transitiva do Next.js 16.2.10.

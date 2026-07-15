# Changelog

Todas as alterações relevantes deste projeto serão documentadas neste ficheiro.

## [Unreleased]

### Added

- Repositório público independente para o GitHub Profile README, portefólio e casos.
- Estrutura inicial extraída do WELLS_OS sem autenticação nem consola operacional.

### Security

- Removidos endereços concretos de infraestrutura e ligações diretas a endpoints operacionais.
- A integração Traffic Flow passou a ser opcional e configurada apenas por variável de ambiente.
- Aplicado um override compatível para PostCSS 8.5.10 ou superior, eliminando o aviso de segurança presente na dependência transitiva do Next.js 16.2.10.

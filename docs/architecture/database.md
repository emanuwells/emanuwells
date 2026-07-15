# Arquitetura de dados

Este projeto não usa base de dados, ORM, migrações ou armazenamento persistente. O conteúdo editorial é versionado no código e a integração opcional do caso Maia é read-only.

Introduzir persistência exigirá uma decisão arquitetural própria, modelo de dados, política de retenção, migrações reversíveis e revisão de privacidade. Uma base de dados não deve ser adicionada apenas para gerir o perfil ou as métricas públicas.


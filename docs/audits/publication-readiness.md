# Auditoria de preparação para publicação

**Data:** 2026-07-15  
**Âmbito:** `WELLS_OS`, `WELLS_API` e `Traffic_Flow`  
**Decisão:** nenhum repositório deve mudar de visibilidade nesta fase.

Esta auditoria foi read-only nos repositórios avaliados, com exceção de artefactos locais regeneráveis criados pelos próprios comandos de validação. Não foram alteradas configurações de produção, credenciais ou visibilidade no GitHub.

## Critérios

- estado Git e histórico completo;
- nomes de ficheiro sensíveis e referências operacionais;
- assinaturas conhecidas de tokens, chaves privadas e duas credenciais previamente usadas;
- documentação, licença e propriedade intelectual;
- instalação, lint, sintaxe, build e empacotamento disponíveis;
- separação entre exemplos públicos e configuração local.

Os scans por padrão reduzem risco, mas não substituem rotação de credenciais, revisão humana do histórico e autorização do proprietário dos sistemas e dados.

## WELLS_OS — não pronto

### Evidência favorável

- working tree limpo em `main`;
- estrutura validada;
- `npm audit --omit=dev`: zero vulnerabilidades;
- lint e build Next.js passaram sobre um `git archive` limpo;
- nenhuma das credenciais conhecidas e nenhuma assinatura de token ou chave privada foi encontrada no estado atual ou histórico.

### Bloqueios

- é uma consola operacional autenticada e expõe publicamente a arquitetura de integração, identificadores estáveis de servidor e contratos de serviços;
- o histórico contém implementações antigas de autenticação, backend e infraestrutura que precisam de revisão manual antes de publicação;
- a mudança de visibilidade aumentaria a superfície de reconhecimento sobre um produto já publicado.

### Para ficar pronto

1. Produzir um threat model público e rever auth, sessões, rate limiting e tratamento de erros.
2. Generalizar nomes de servidores, topologia e exemplos públicos.
3. Rever todos os blobs históricos classificados como autenticação, configuração e infraestrutura.
4. Rodar password administrativa, segredo de sessão e tokens de integração no momento da publicação.
5. Repetir secret scan e validar o deployment após a rotação.

## WELLS_API — não pronto

### Evidência favorável

- working tree limpo em `main`;
- template validado e todos os ficheiros PHP atuais passaram `php -l`;
- nenhuma das credenciais conhecidas e nenhuma assinatura de token ou chave privada foi encontrada.

### Bloqueios

- `scripts/build-release.ps1` falha porque o pacote inclui uma pasta de exemplos chamada `secrets`, que o próprio controlo de publicação bloqueia;
- documentação e histórico incluem referências a hosts, utilizadores, caminhos de produção, schemas, perfis e fluxos de datasets privados;
- o pacote de release copia documentação operacional em excesso e duplica a cópia de recursos;
- a validação automatizada limita-se sobretudo a sintaxe e testes manuais de endpoints;
- o código e os contratos foram criados em contexto profissional, exigindo confirmação de direitos e autorização antes de publicação.

### Para ficar pronto

1. Separar documentação pública de runbooks internos e retirar detalhes operacionais do histórico publicável.
2. Corrigir o build de release para produzir uma allowlist mínima e passar a verificação de ficheiros privados.
3. Adicionar testes de contrato para endpoints públicos, CORS, autenticação por token e respostas de erro.
4. Obter autorização explícita sobre código, schemas, nomes, exemplos e documentação produzidos no contexto laboral.
5. Rodar tokens e credenciais associados aos ambientes documentados antes de qualquer abertura.

## Traffic Flow — bloqueado, risco crítico

### Evidência favorável

- working tree limpo em `main`;
- template, sintaxe dos ficheiros PHP, compilação Python e whitespace Git passaram;
- instalação das dependências fixadas é reproduzível e `pip check` não encontrou incompatibilidades;
- nenhuma assinatura de token ou chave privada foi encontrada no estado atual ou histórico.

### Bloqueios críticos

- uma password anteriormente usada existe no histórico de `config/config_db.py`, em dois commits antigos;
- `pip-audit` encontrou 12 vulnerabilidades conhecidas em quatro dependências diretas ou transitivas;
- documentação atual e histórica expõe detalhes de produção, SSH, paths de deployment, câmaras, fornecedor e contratos institucionais;
- a licença reserva todos os direitos e atribui o desenvolvimento ao contexto laboral, pelo que repositório público não equivale a autorização para publicação ou reutilização.

### Para ficar pronto

1. Revogar ou rodar imediatamente a credencial histórica em todos os sistemas onde possa ter sido reutilizada.
2. Atualizar `requests`, `urllib3`, `mysql-connector-python` e a dependência transitiva `protobuf`; executar testes de ingestão e API.
3. Criar uma cópia de segurança e reescrever o histórico com `git filter-repo`, removendo o ficheiro/segredo dos commits afetados.
4. Sanitizar runbooks, endereços, utilizadores, caminhos, identificadores de câmaras e exemplos de produção.
5. Confirmar por escrito direitos sobre código, dados, marca, modelos e documentação.
6. Repetir scans ao working tree, todas as refs e clone fresco antes de alterar a visibilidade.

## Regra de publicação

Uma recomendação futura de `pronto` exige simultaneamente:

- zero credenciais ativas no estado atual e em todas as refs;
- segredos históricos revogados e história limpa;
- dependências sem vulnerabilidades conhecidas de severidade relevante;
- build/testes reproduzíveis num clone limpo;
- documentação pública sem detalhes operacionais desnecessários;
- licença e autorização de publicação inequívocas;
- confirmação explícita do utilizador antes da mudança de visibilidade.


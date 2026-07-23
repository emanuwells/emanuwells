# Arquitetura backend

## Âmbito

O backend limita-se a Route Handlers read-only da aplicação Next.js. Não existe serviço independente, autenticação, mutações ou acesso a base de dados.

## API

| Endpoint | Responsabilidade | Autenticação |
|---|---|---|
| `GET /api/maia/pulse` | Agregar sinais públicos do caso Maia e devolver fallback ilustrativo quando a fonte não está configurada ou disponível | Nenhuma |

## Integração externa

`MAIA_TRAFFIC_FLOW_URL` pode apontar para um endpoint HTTP público. A chamada tem timeout, validação defensiva e cache curta. Erros não expõem detalhes internos e resultam em dados ilustrativos identificados como tal.

## Segurança

- aceitar apenas configuração server-side;
- nunca usar variáveis `NEXT_PUBLIC_` para segredos;
- não registar payloads sensíveis ou credenciais;
- manter a API sem efeitos laterais.


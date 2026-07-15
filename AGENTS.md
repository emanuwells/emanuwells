# AGENTS.md

Regras operacionais para agentes que trabalhem neste repositório.

## Princípios

- Preservar alterações existentes e verificar o estado Git antes de mudanças não triviais.
- Nunca versionar passwords, tokens, chaves SSH, cookies, dados pessoais ou endereços internos.
- Separar conteúdo público de detalhes operacionais ou confidenciais do trabalho.
- Tratar o caso Maia como um caso técnico pessoal, nunca como publicação oficial da entidade empregadora.
- Executar `npm run lint` e `npm run build` antes de concluir alterações de código.
- Atualizar `CHANGELOG.md` quando houver alterações publicáveis.
- Manter documentação em português europeu ou inglês natural e consistente.
- Produção, DNS, variáveis reais e ações destrutivas exigem confirmação explícita.

## Estrutura

- `app/`: rotas e APIs públicas.
- `components/`: interface e casos.
- `lib/`: conteúdo, temas, pesquisa e integrações públicas opcionais.
- `public/`: ativos usados pelo site.

Não adicionar templates genéricos, adaptadores de ferramentas ou documentação sem relação direta com o produto.

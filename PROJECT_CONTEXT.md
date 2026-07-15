# Contexto do projeto

## Identidade

`emanuwells` é simultaneamente o repositório de perfil GitHub de Emanuel Wells e a fonte do portefólio publicado em `emanuwells.vercel.app`.

## Objetivos

- apresentar experiência, competências e projetos com evidência verificável;
- dar destaque editorial a grandes projetos e casos técnicos;
- manter o caso Maia como narrativa técnica pessoal, sem o apresentar como publicação institucional;
- encaminhar para produtos e repositórios independentes, incluindo o WELLS_OS;
- servir uma aplicação pública sem autenticação, base de dados ou dependências privadas obrigatórias.

## Fora de âmbito

- consola operacional ou administração de servidores;
- autenticação, credenciais, SSH e gestão de segredos;
- execução de pipelines ou alterações de produção;
- publicação automática de repositórios privados.

## Stack e contratos

| Área | Tecnologia | Contrato |
|---|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS | `/` e `/maia` |
| API pública | Next.js Route Handler | `GET /api/maia/pulse` |
| Dados opcionais | Endpoint HTTP público | `MAIA_TRAFFIC_FLOW_URL` |
| Deployment | Vercel | `emanuwells.vercel.app` |
| Métricas do perfil | Node.js e GitHub Actions | `.github/assets/profile-metrics.svg` |

## Restrições de publicação

- O site deve compilar e apresentar dados ilustrativos sem variáveis de ambiente.
- Ligações a código privado não podem devolver 404 a visitantes; usar uma demo ou página pública de caso.
- Nenhum segredo, caminho local, endereço interno ou dado pessoal desnecessário pode ser versionado.

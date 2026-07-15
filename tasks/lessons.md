# Aprendizagens reutilizáveis

## 2026-07-15 — Perfil GitHub e aplicação podem partilhar o repositório sem partilhar a raiz

**Contexto:** o README de perfil tem de permanecer na raiz, enquanto a aplicação Next.js traz manifestos, código e configurações próprios.  
**Aprendizagem:** isolar a aplicação em `site/` mantém o perfil compatível com GitHub e dá à Vercel uma Root Directory inequívoca.  
**Aplicação futura:** preservar a raiz para identidade e governação; colocar produtos publicáveis em pastas explícitas e documentar os respetivos comandos.

## 2026-07-15 — Projetos privados precisam de uma superfície pública estável

**Contexto:** links para repositórios privados devolvem 404 a visitantes, mesmo quando o projeto existe.  
**Aprendizagem:** um perfil público deve ligar a demos ou casos públicos e identificar claramente quando o código é privado.  
**Aplicação futura:** só adicionar uma ligação GitHub depois de validar a visibilidade e a segurança do histórico.


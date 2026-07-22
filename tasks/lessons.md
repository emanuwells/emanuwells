# Aprendizagens reutilizáveis

## 2026-07-22 — Google Drive pode bloquear deletes de ficheiros já removidos do índice Git

**Contexto:** ao limpar nav legado (`PortfolioNav`, `MaiaNav`) no caminho `G:\O meu disco\...`, o SO devolveu Access denied e o `git rm` falhou no disco embora `git update-index --force-remove` tenha marcado a eliminação.  
**Aprendizagem:** validar build/lint em espelho local (`C:\temp`) quando o sync cloud corrompe `npm install` ou bloqueia deletes; confirmar depois o estado dos ficheiros fantasma no working tree.  
**Aplicação futura:** em repos sob Drive/OneDrive, preferir validação em disco local e tratar locks de ficheiro como risco operacional separado do código.

## 2026-07-15 — Perfil GitHub e aplicação podem partilhar o repositório sem partilhar a raiz

**Contexto:** o README de perfil tem de permanecer na raiz, enquanto a aplicação Next.js traz manifestos, código e configurações próprios.  
**Aprendizagem:** isolar a aplicação em `site/` mantém o perfil compatível com GitHub e dá à Vercel uma Root Directory inequívoca.  
**Aplicação futura:** preservar a raiz para identidade e governação; colocar produtos publicáveis em pastas explícitas e documentar os respetivos comandos.

## 2026-07-15 — DESIGN.md portável acelera consistência visual

**Contexto:** mockups cyberpunk precisavam de contrato reutilizável e implementação única no site.  
**Aprendizagem:** documentar tokens, padrões e breakpoints em `docs/design/DESIGN.md` antes do CSS evita deriva entre projectos.  
**Aplicação futura:** copiar `DESIGN.md` + `tokens.css` + `cyber.css` + componentes `ui/` como kit inicial.

## 2026-07-15 — Widgets do README e portefólio podem partilhar a mesma paleta

**Contexto:** o perfil GitHub usa serviços externos (stats, activity graph) enquanto o portefólio precisa de dados equivalentes sem depender de iframes.  
**Aprendizagem:** uma API interna com ISR (`/api/github/summary`) e fallback estático mantém o site vivo mesmo com rate limits da API GitHub.  
**Aplicação futura:** reutilizar o mesmo contrato de dados entre README (SVG/widgets) e secções do portefólio.


**Contexto:** links para repositórios privados devolvem 404 a visitantes, mesmo quando o projeto existe.  
**Aprendizagem:** um perfil público deve ligar a demos ou casos públicos e identificar claramente quando o código é privado.  
**Aplicação futura:** só adicionar uma ligação GitHub depois de validar a visibilidade e a segurança do histórico.


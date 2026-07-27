# Aprendizagens reutilizáveis

## 2026-07-27 — Menu mobile precisa de fundo próprio (não herdar glass)

**Contexto:** menu aberto no portefólio (header `bg-transparent` / glass 88%) deixava o texto ilegível sobre o conteúdo.  
**Aprendizagem:** painéis de nav mobile devem ter classe própria com fundo ≥95% opaco (`var(--theme-bg)`); forçar header sólido + `body { overflow: hidden }` enquanto o menu está aberto.  
**Aplicação futura:** nunca confiar no blur do header para legibilidade de menus overlay em viewports estreitos.

## 2026-07-27 — Remount com `key` evita typing acelerado

**Contexto:** trocar PT/EN no boot sequence acelerava/bugava as letras.  
**Aprendizagem:** timers do `TypingText` acumulavam estado com frases novas; reset via `key={lang}` no parent remonta o componente limpo sem `setState` num effect (lint React Compiler).  
**Aplicação futura:** animações com timers ligados a i18n devem remountar por `key` ou cancelar todos os timers na mudança de idioma.

## 2026-07-27 — Tema `terminal` não é `dark` para CSS de ícones

**Contexto:** logos simple-icons pretos ficavam invisíveis no fundo escuro do portefólio/Maia.  
**Aprendizagem:** o site usa `data-theme="terminal"`. Um selector `:root:not([data-theme="dark"])` anulava o `filter: invert(1)` dos `.tech-icon`. Em temas custom, o invert deve ser o default escuro e só desligar em `[data-theme="light"]`.  
**Aplicação futura:** ao adicionar filtros CSS por tema, alinhar aos valores reais de `data-theme` (`terminal`, não assumir `dark`).

## 2026-07-26 — WELLS 0.5.0 concentra IA em `.agents/`

**Contexto:** migrar `emanuwells` do template legado (`AGENTS.md` na raiz, `docs/ai/`, `tasks/`, `tools/ai-adapters/`) para WELLS Agent Runtime 0.5.0.  
**Aprendizagem:** o toolkit 0.5.0 valida com `node .agents/tools/validate-project.mjs` e `toolkit-lock.json`; o legado deve ser arquivado em `.agents/migration/legacy/` antes de remover paths antigos. Estado operacional passa para `.agents/state/`.  
**Aplicação futura:** em repos WELLS, o prompt universal é `Lê .agents/AGENTS.md e <tarefa>`; não recriar `docs/ai/` nem `AGENTS.md` na raiz.

## 2026-07-23 — Contributors do GitHub vêm de commits, não de settings

**Contexto:** limpar branches Cursor e manter só o owner nos contributors do perfil.  
**Aprendizagem:** collaborators removem-se nas settings; contributors só mudam com rewrite de histórico (ou orphan squash). Workflows que fazem commit com `GITHUB_TOKEN` reintroduzem `github-actions[bot]` — usar PAT do owner (`PROFILE_METRICS_PAT`) e identidade de commit explícita.  
**Aplicação futura:** antes de “limpar contributors”, planear backup/`force-with-lease`, apagar branches remotas e auditar workflows que fazem push.

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


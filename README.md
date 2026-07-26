<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=25&pause=1000&color=67E8F9&center=true&vCenter=true&width=760&height=60&lines=Ol%C3%A1!+Sou+o+Emanuel+Ferreira;Pipelines+%C2%B7+APIs+%C2%B7+observabilidade;Dados+em+produ%C3%A7%C3%A3o%2C+todos+os+dias)](https://emanuwells.vercel.app)

<br />

Trabalho com dados em produção: pipelines que correm todos os dias, APIs que alimentam dashboards e monitorização que avisa quando algo falha — antes de alguém perguntar. Gosto de arquitectura simples, evidência em vez de slides e documentação que ainda serve depois da entrega.

[**Portefólio**](https://emanuwells.vercel.app) · [**Case study Maia**](https://emanuwells.vercel.app/maia) · [**WELLS_OS**](https://wells-os.vercel.app) · [**LinkedIn**](https://www.linkedin.com/in/emanuel-ferreira91)

## Sobre mim

- Construo e mantenho o ecossistema de dados de um município: ingestão, catálogo, APIs e observabilidade
- Pergunta-me sobre ingestão de dados, Power BI, Docker ou como transformar um job vermelho num alerta acionável
- Hábito: cada entrega leva changelog e evidência — mesmo quando ninguém pede
- Baseado em Portugal · trabalho em português europeu e inglês

## Stack

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" alt="MariaDB" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="Power BI" />
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
</p>

## O ecossistema WELLS

Os meus projectos não são repositórios isolados — trabalham em conjunto, em produção:

```text
pipelines (Python) ──▶ WELLS_API ──▶ Power BI · dashboards · integrações NGSI-LD
      │                    ▲
      ├── Overseer ────────┤   observabilidade de pipelines (runs, logs, alertas)
      └── Warden ──────────┘   telemetria de servidores (CPU, RAM, disco, MariaDB)
                           │
                       WELLS_OS   consola read-only — a sala de controlo
```

- **WELLS_API** é a espinha dorsal: uma API municipal em PHP que expõe datasets, observações de tráfego (GeoJSON/NGSI-LD) e snapshots do Warden a dashboards, Power BI e integrações externas.
- **WELLS_OS** é a sala de controlo: uma consola read-only, protegida por login, que agrega métricas Warden, execuções Overseer e o registo de aplicações — observa tudo sem tocar no runtime.

## Trabalho seleccionado

| Projecto | Tipo | O que faz | Acesso |
| --- | --- | --- | --- |
| [WELLS_OS](https://wells-os.vercel.app) | Profissional | Consola operacional read-only: métricas Warden, execuções Overseer e registo de aplicações num só painel. | Produto activo; código privado |
| WELLS_API | Profissional | API municipal que serve datasets, tráfego em GeoJSON/NGSI-LD e telemetria a Power BI e integrações externas. | Em produção; código privado |
| [Case study Maia](https://emanuwells.vercel.app/maia) | Case study | Como liguei seis pipelines, catálogo, APIs e observabilidade num ecossistema municipal — do zero à produção em ~8 meses. | Página pública |
| [Overseer](https://github.com/emanuwells/Overseer) | Profissional | Observabilidade Docker-first para pipelines e DAGs externos: catálogo, runs, logs e heartbeats por API, dashboard read-only e alertas Slack. | Código público |
| [Warden](https://github.com/emanuwells/Warden) | Profissional | Collector Python que vigia CPU, RAM, disco, rede e MariaDB; exporta snapshots consumidos pelo WELLS_API e alerta no Slack. | Código público |
| Traffic Flow | Profissional | Transforma contagens das câmaras de tráfego da Maia em observações normalizadas — GeoJSON e NGSI-LD com URN estável. | API pública; código privado |
| [Vacation Mode](https://github.com/emanuwells/Vacation_Mode) | Hobby | Google Apps Script que converte uma grelha anual de férias pintada à mão em eventos do Google Calendar. | Código público |

## Estatísticas GitHub

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=emanuwells&show_icons=true&hide_border=false&count_private=false&bg_color=07111f&title_color=67e8f9&text_color=a8b5c7&icon_color=22d3ee&border_color=263449" alt="Estatísticas GitHub de emanuwells" height="165" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=emanuwells&layout=compact&hide=html,css&bg_color=07111f&title_color=67e8f9&text_color=a8b5c7&border_color=263449" alt="Linguagens mais usadas" height="165" />
</p>

## Gráfico de contribuições

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=emanuwells&bg_color=07111f&color=22d3ee&line=34d399&point=67e8f9&area=true&hide_border=false&custom_title=Emanuel%20Ferreira%20%E2%80%94%20contribui%C3%A7%C3%B5es" alt="Gráfico de contribuições GitHub" />
</p>

## Sinais públicos de build

<p align="center">
  <img src=".github/assets/profile-metrics.svg" alt="Visão geral da actividade pública GitHub e tecnologias" width="820" />
</p>

## Foco actual

- Pipelines que ingerem, transformam e expõem dados com falhas visíveis
- APIs estáveis para BI, mapas e integrações smart city (NGSI-LD, Smart Data Models)
- Observabilidade que transforma um job vermelho num alerta acionável
- Interfaces simples para sistemas operacionais complexos

<sub>O case study Maia é um relato técnico pessoal e não constitui uma publicação oficial da Câmara Municipal da Maia.</sub>

---

Este repositório é o meu perfil GitHub e a fonte do portefólio. A app Next.js está em [`site/`](site/); os comandos estão em [`COMMANDS.md`](COMMANDS.md); o contrato de agentes em [`.agents/AGENTS.md`](.agents/AGENTS.md).
</div>

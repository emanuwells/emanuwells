<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=25&pause=1000&color=67E8F9&center=true&vCenter=true&width=760&height=60&lines=Ol%C3%A1!+Sou+o+Emanuel+Ferreira;Pipelines+%C2%B7+APIs+%C2%B7+observabilidade;Interoperabilidade+de+dados+em+produ%C3%A7%C3%A3o)](https://emanuwells.vercel.app)

<br />

Trabalho em equipa na engenharia de dados e sistemas em produção: pipelines, APIs, documentação e observabilidade. O fio condutor é **interoperabilidade** — tornar dados de fontes diversas utilizáveis para o Sistema de Gestão, Power BI e portais.

[**Portefólio**](https://emanuwells.vercel.app) · [**Case study Maia**](https://emanuwells.vercel.app/maia) · [**WELLS_OS**](https://wells-os.vercel.app) · [**Open data Maia**](https://dados.cm-maia.pt) · [**LinkedIn**](https://www.linkedin.com/in/emanuel-ferreira91)

## Sobre o trabalho

- Equipa de dados e programação na Câmara Municipal da Maia — pipelines, catálogo, APIs e operação
- Apoio ao Sistema de Gestão: **ISO 9001**, **ISO 14001**, **ISO 37120** (indicadores, evidência, amostragem para auditoria das UOs)
- Power BI: preparação de amostras/factos e datasets; documentação dos workflows em curso
- Portais Huwise: dados aberto ([dados.cm-maia.pt](https://dados.cm-maia.pt), ainda não completamente aprovado) e portal interno do SGM
- Orientação de estágios, documentação e operação de máquinas no dia-a-dia
- Baseado em Portugal · português europeu e inglês

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
  <img src="https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="Power BI" />
  <img src="https://img.shields.io/badge/NGSI--LD-0ea5e9?style=for-the-badge" alt="NGSI-LD" />
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/ISO_9001-Qualidade-1e293b?style=flat-square" alt="ISO 9001" />
  <img src="https://img.shields.io/badge/ISO_14001-Ambiente-1e293b?style=flat-square" alt="ISO 14001" />
  <img src="https://img.shields.io/badge/ISO_37120-Indicadores_urbanos-1e293b?style=flat-square" alt="ISO 37120" />
</p>

## Interoperabilidade — o fio condutor

```text
fontes diversas          contrato comum              consumo
───────────────          ──────────────              ───────
INE · Forms · Medidata   Catálogo · DataTron    →    Power BI
Câmaras · SGM            WELLS_API              →    Huwise (aberto + interno)
                         NGSI-LD / GeoJSON      →    dashboards · integrações
                                ▲
              Overseer · Warden ┘   observabilidade sem tocar no runtime
                                │
                           WELLS_OS   consola read-only da operação
```

- **WELLS_API** — espinha dorsal: datasets, tráfego e telemetria para BI e integrações
- **WELLS_OS** — sala de controlo: métricas Warden + execuções Overseer num painel read-only
- **MAIATRON-HUB / DataTron** — portal e módulo para dados, metas de indicadores e SGM
- **Webapp-Medidata + Medidata Pipeline** — vista legível dos dados das UOs + integração na DB

## Trabalho seleccionado

| Projecto | Tipo | O que faz | Acesso |
| --- | --- | --- | --- |
| [WELLS_OS](https://wells-os.vercel.app) | Profissional | Consola operacional read-only: Warden, Overseer e registo de apps. | Produto activo; código privado |
| WELLS_API | Profissional | API municipal — datasets, tráfego GeoJSON/NGSI-LD, snapshots Warden. | Em produção; código privado |
| MAIATRON-HUB / DataTron | Profissional | Portal central + dados, metas e apoio ao Sistema de Gestão. | Interno; código privado |
| Webapp-Medidata | Profissional | Vista clara dos dados Medidata das unidades orgânicas. | Interno; código privado |
| [Case study Maia](https://emanuwells.vercel.app/maia) | Case study | Pipelines, SGM/ISO, portais Huwise e observabilidade — narrativa da equipa. | Página pública |
| [Overseer](https://github.com/emanuwells/Overseer) | Profissional | Observabilidade de pipelines: runs, logs, heartbeats, Slack. | Código público |
| [Warden](https://github.com/emanuwells/Warden) | Profissional | Telemetria de servidores e MariaDB; snapshots para WELLS_API. | Código público |
| Traffic Flow | Profissional | Contagens urbanas → observações interoperáveis (GeoJSON / NGSI-LD). | Código privado |
| [Vacation Mode](https://github.com/emanuwells/Vacation_Mode) | Hobby | Grelha de férias → Google Calendar. | Código público |

## Foco actual

- Interoperabilidade entre fontes reais e consumo (BI, Huwise, APIs)
- Documentação dos workflows de amostragem em Power BI
- Portal de dados aberto Maia (Huwise) — criação e alimentação contínua
- Observabilidade e operação estáveis para a equipa

<sub>O case study Maia é um relato técnico pessoal e não constitui uma publicação oficial da Câmara Municipal da Maia.</sub>

---

Este repositório é o perfil GitHub e a fonte do portefólio. App em [`site/`](site/); comandos em [`COMMANDS.md`](COMMANDS.md); agentes em [`.agents/AGENTS.md`](.agents/AGENTS.md).
</div>

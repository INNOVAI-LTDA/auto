# AUTO Framework

Repositório inicial do **AUTO Framework**, uma proposta de linha produtiva de software guiada por IA, com separação visual e operacional entre:

- **AUTO Commercial**: portal do cliente/stakeholder, focado em solicitação, status, dúvidas, entregas e aprovação.
- **AUTO Industrial**: cockpit interno da fábrica, focado em linha produtiva, artefatos, agentes, testes, findings, telemetria, custos e evidências.

## Visão do produto

O AUTO nasce como uma fábrica de produção de software orientada por artefatos, eventos e métricas cruas.

A frase-guia:

> Cliente vê progresso. Operação vê evidência. Gestão vê aprendizado. Governança ajusta a fábrica.

## Objetivos iniciais

- Capturar pedidos de forma estruturada.
- Gerar uma Ordem de Produção a partir da entrada do cliente/stakeholder.
- Produzir artefatos versionados ao longo da linha produtiva.
- Testar artefatos antes da implementação.
- Decompor trabalho em tarefas atômicas.
- Executar tarefas com apoio de IA/Codex.
- Registrar eventos, métricas cruas, custos e intervenções humanas.
- Apoiar validação humana com `MAN-override` e retorno para automático com `AUTO-engaged`.
- Preparar base futura para análise organizacional e teoria dos jogos.

## Stack-alvo

### Backend

```text
Python
FastAPI
PostgreSQL
Redis
Workers Python
WebSocket / Server-Sent Events
```

### Frontend

```text
TypeScript
Next.js
Tailwind CSS
shadcn/ui
React Flow
TanStack Table
ECharts / Recharts
Monaco Editor
```

## Estrutura planejada

```text
auto/
  apps/
    client-portal/      # Portal Commercial
    factory-cockpit/    # Cockpit Industrial

  services/
    api/                # FastAPI
    orchestrator/       # Orquestração da linha produtiva
    agents/             # Agentes AUTO

  packages/
    ui/                 # Componentes compartilhados
    schemas/            # Schemas e contratos
    sdk/                # Client SDK para APIs

  docs/
    ui/                 # Direção visual e navegação
    architecture/       # Arquitetura conceitual
    database/           # Banco de dados e telemetria
    production-line/    # Linha produtiva e casos de uso
```

## Temas visuais

### AUTO Commercial

Interface clara, comercial e confiável para o cliente.

```text
Navy:   #071E41
Orange: #FF9600
White:  #FFFFFF
Off:    #F7F9FB
```

### AUTO Industrial

Interface operacional, densa e rastreável para a fábrica.

```text
Background: #0B172A
Panel:      #101F36
Signal:     #2FB7D3
Action:     #FF9600
Success:    #67C587
Fault:      #E45757
```

## Lifecycle stages

```text
DSG — Design
LAB — Laboratório experimental
TST — Teste / homologação
PRD — Produção interna
CLI — Cliente externo
```

## Eventos de controle

```text
MAN-override — humano assume controle manual
AUTO-engaged — linha retorna ao modo automático
```

## Estado atual

Este repositório está em fase inicial de estruturação.

O primeiro objetivo prático é criar um MVP navegável com:

- Portal Commercial com solicitação, status e aprovação.
- Cockpit Industrial com linha produtiva, execução IA e qualidade pré-código.
- Backend FastAPI com endpoints mockados.
- Documentação de identidade visual e arquitetura.

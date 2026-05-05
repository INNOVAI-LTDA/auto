# AUTO — Guia Inicial de Implementacao da UI

## 1. Objetivo

Este documento descreve como iniciar a codificacao das telas do AUTO.

A recomendacao e separar a experiencia visual em dois produtos:

- client-portal: experiencia Commercial para cliente/stakeholder.
- factory-cockpit: experiencia Industrial para operacao interna.

Ambos devem consumir o mesmo backend Python/FastAPI.

## 2. Stack recomendada

### Backend

- Python
- FastAPI
- PostgreSQL
- Redis
- Workers Python
- WebSocket ou Server-Sent Events

### Frontend

- TypeScript
- Next.js
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- TanStack Query
- TanStack Table
- React Flow
- ECharts ou Recharts
- Monaco Editor

## 3. Estrutura sugerida

```text
auto/
  apps/
    client-portal/
    factory-cockpit/

  services/
    api/
    orchestrator/
    agents/

  packages/
    ui/
    schemas/
    sdk/
```

## 4. Client Portal

### Responsabilidade

- nova solicitacao
- status da solicitacao
- duvidas abertas
- entregas
- aprovacao

### Linguagem visual

- clara
- comercial
- pouco tecnica
- baixa densidade
- orientada a progresso

### Primeiras rotas

```text
/
/request
/status
/approval
```

## 5. Factory Cockpit

### Responsabilidade

- linha produtiva
- artefatos
- tarefas atomicas
- execucoes IA
- testes
- findings
- validacao humana
- eventos

### Linguagem visual

- industrial
- operacional
- densa
- tecnica
- orientada a evidencia

### Primeiras rotas

```text
/
/execution
/quality
/run/[id]
/artifacts
/tasks
/events
```

## 6. Componentes compartilhados

```text
packages/ui/
  StatusBadge.tsx
  Timeline.tsx
  ArtifactCard.tsx
  FindingCard.tsx
  StationCard.tsx
  EvidencePanel.tsx
  ExecutionPanel.tsx
```

## 7. Ordem pratica de construcao

1. Criar layout base do client-portal.
2. Criar layout base do factory-cockpit.
3. Criar tokens CSS das duas paletas.
4. Criar telas com dados mockados.
5. Criar endpoints mockados no FastAPI.
6. Ligar frontend aos endpoints.
7. Trocar mock por dados reais de eventos e artefatos.
8. Adicionar WebSocket/SSE para eventos de linha produtiva.

## 8. Principio tecnico

Comecar com casca viva e dados mockados.

Depois conectar:

```text
UI mockada -> API mockada -> eventos reais -> artefatos reais -> agentes reais
```

Isso evita construir motor antes de parafusar o chassi.

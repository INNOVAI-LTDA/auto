# AUTO — Inventario Inicial de Telas

Este documento lista as telas iniciais planejadas para o MVP visual do AUTO.

## Commercial

### 1. Nova Solicitacao

Objetivo: transformar uma intencao informal em ficha estruturada de entrada.

Publico: cliente, stakeholder, gestor solicitante.

Componentes:

- header institucional
- card de boas-vindas
- wizard/formulario guiado
- upload de anexos
- resumo lateral
- CTA de envio

Stack sugerida:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod

### 2. Status da Solicitacao

Objetivo: mostrar status amigavel da solicitacao sem expor complexidade interna.

Componentes:

- timeline amigavel
- marcos de progresso
- duvidas pendentes
- resumo do pedido
- proximos passos

Status comerciais:

- Solicitacao recebida
- Entendimento em elaboracao
- Planejamento tecnico
- Em construcao
- Em validacao
- Pronto para entrega
- Entregue

### 3. Aprovacao / Entrega

Objetivo: permitir revisar uma entrega, aprovar ou solicitar ajuste.

Componentes:

- preview da entrega
- checklist simplificado
- painel de evidencias leves
- CTA de aprovar
- CTA de pedir ajustes
- campo de comentario

## Industrial

### 4. Cockpit da Linha Produtiva

Objetivo: operar a fabrica e visualizar a linha G0-G7 com status, filas, alertas e eventos.

Componentes:

- sidebar
- pipeline map
- cards por estacao
- event timeline
- KPIs operacionais
- alertas
- status AUTO/MAN

Stack sugerida:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- WebSocket
- React Flow
- ECharts/Recharts

### 5. Execucao IA

Objetivo: mostrar execucao de tarefa atomica por agente/modelo, consumo e resultado.

Componentes:

- resumo do agente
- prompt bundle tabs
- context package
- arquivos alterados
- tokens
- testes executados
- custo estimado
- event log lateral

### 6. Qualidade Pre-codigo

Objetivo: inspecionar artefatos e findings antes da codificacao.

Componentes:

- paineis de checks
- findings
- filtros por defect_type
- rastreabilidade
- rotas de correcao
- resumo A0-A4

## Telas futuras

- Organization Dashboard: areas de negocio, custo da qualidade e origem/deteccao/correcao.
- Governance Agents: configuracao de agentes, modelos, prompts e permissoes.
- Artifact Lineage: grafo de artefatos e versoes.
- Production Bundle Export: exportacao de artefatos, eventos e relatorios da run.

## Componentes reutilizaveis

- StatusBadge
- Timeline
- ArtifactCard
- FindingCard
- StationCard
- ExecutionPanel
- EvidencePanel

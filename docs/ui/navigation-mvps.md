# AUTO — Navegação da Interface por MVPs

## 1. Visão geral

A interface do AUTO deve evoluir por MVPs, evitando construir um dashboard grande antes de existir operação real.

A evolução proposta é:

```text
MVP 1 — Operacional mínimo
MVP 2 — Qualidade pré-código
MVP 3 — Organização e qualidade
MVP 4 — Governança da fábrica
```

```mermaid
flowchart TD
    MVP1[MVP 1<br/>Operacional mínimo] --> MVP2[MVP 2<br/>Qualidade pré-código]
    MVP2 --> MVP3[MVP 3<br/>Organização e qualidade]
    MVP3 --> MVP4[MVP 4<br/>Governança da fábrica]

    MVP1 --> O1[Produzir e registrar]
    MVP2 --> O2[Detectar antes do código]
    MVP3 --> O3[Entender responsabilidade e custo]
    MVP4 --> O4[Controlar conhecimento, agentes e políticas]
```

---

## 2. MVP 1 — Operacional mínimo

### Escopo

```text
Nova Solicitação
Dashboard da Linha
Artefatos
Tarefas Atômicas
Execução IA
Testes
Validação Humana
Histórico de Eventos
```

### Perguntas respondidas

```text
O pedido entrou?
Virou Ordem de Produção?
A tarefa está pronta?
A IA executou?
Os testes passaram?
O humano precisou assumir?
Tudo ficou registrado?
```

### Navegação

```mermaid
flowchart TD
    A[Login / Seleção de Perfil] --> B[Dashboard da Linha Produtiva]

    B --> C[Nova Solicitação]
    C --> C1[Formulário G0]
    C1 --> C2{Formulário válido?}

    C2 -- Sim --> C3[Prévia da Ordem de Produção]
    C3 --> C4{Emitir OP?}
    C4 -- Sim --> D[Ordem de Produção Criada]
    C4 -- Não --> C1

    C2 -- Não --> C_ERR[Erros de preenchimento]
    C_ERR --> C1

    D --> B

    B --> E[Detalhe da Produção]
    E --> F[Artefatos]
    E --> G[Tarefas Atômicas]
    E --> H[Execução IA]
    E --> I[Testes]
    E --> J[Validação Humana]
    E --> K[Histórico de Eventos]

    G --> G1[Detalhe da Tarefa]
    G1 --> G2{Tarefa pronta?}

    G2 -- Sim --> H
    G2 -- Não --> G_ERR[Tarefa incompleta]
    G_ERR --> F
    G_ERR --> G1

    H --> H1[Prompt Bundle]
    H --> H2[Context Package]
    H --> H3[Executar Agente IA]
    H3 --> H4{Execução concluída?}

    H4 -- Sim --> H5[Relatório de Execução IA]
    H5 --> I

    H4 -- Erro de contexto --> H_ERR1[Erro: contexto insuficiente]
    H_ERR1 --> G1

    H4 -- Erro de agente/modelo --> H_ERR2[Erro: agente/modelo indisponível]
    H_ERR2 --> K
    H_ERR2 --> H

    I --> I1[Executar Testes]
    I1 --> I2{Testes passaram?}

    I2 -- Sim --> J
    I2 -- Não --> I_ERR[Testes falharam]
    I_ERR --> I3[Ver falhas]
    I3 --> G_CORR[Gerar Tarefa Corretiva]
    G_CORR --> G

    J --> J1{Assumir controle?}
    J1 -- Sim --> J2[MAN-override]
    J2 --> J3[Registrar Validação Humana]
    J3 --> J4{Achados?}

    J4 -- Sim --> J5[Gerar Tarefas Corretivas]
    J5 --> J6[AUTO-engaged]
    J6 --> G

    J4 -- Não --> J7[AUTO-engaged]
    J7 --> B

    J1 -- Não --> B

    K --> E
```

### Erros cobertos

```text
Formulário inválido
Tarefa incompleta
Contexto insuficiente
Agente indisponível
Modelo indisponível
Teste falho
Achado humano
Necessidade de MAN-override
```

---

## 3. MVP 2 — Qualidade pré-código

### Escopo

```text
Testes de Artefatos
Findings
Rastreabilidade OP → Requisitos → Arquitetura → Tarefas
```

### Objetivo

Encontrar defeitos antes da implementação.

### Navegação

```mermaid
flowchart TD
    A[Dashboard da Linha] --> B[Detalhe da Produção]
    B --> C[Artefatos]
    B --> D[Testes de Artefatos]

    C --> C1[Ordem de Produção]
    C --> C2[Requisitos]
    C --> C3[Arquitetura]
    C --> C4[Tarefas Atômicas]

    D --> D1[Selecionar Nível de Teste]
    D1 --> A0[A0 Schema/Form Tests]
    D1 --> A1[A1 Local Artifact Tests]
    D1 --> A2[A2 Cross-Artifact Tests]
    D1 --> A3[A3 Scenario/Flow Tests]
    D1 --> A4[A4 Risk/Tradeoff Reviews]

    A0 --> R0[Relatório A0]
    A1 --> R1[Relatório A1]
    A2 --> R2[Relatório A2]
    A3 --> R3[Relatório A3]
    A4 --> R4[Relatório A4]

    R0 --> F[Findings]
    R1 --> F
    R2 --> F
    R3 --> F
    R4 --> F

    F --> F1[Detalhe do Finding]
    F1 --> F2{Tipo de desvio}

    F2 -- Missing --> F_MISSING[Lacuna / Informação ausente]
    F2 -- Ambiguous --> F_AMB[Ambiguidade]
    F2 -- Inconsistent --> F_INC[Inconsistência]
    F2 -- Unsupported --> F_UNSUP[Sem suporte posterior]
    F2 -- Orphan --> F_ORPH[Elemento órfão]
    F2 -- Risky --> F_RISK[Risco / Trade-off]

    F_MISSING --> ROTA{Onde corrigir?}
    F_AMB --> ROTA
    F_INC --> ROTA
    F_UNSUP --> ROTA
    F_ORPH --> ROTA
    F_RISK --> ROTA

    ROTA -- G0 --> C1
    ROTA -- G1 --> C2
    ROTA -- G2 --> C3
    ROTA -- G3 --> C4

    C1 --> RERUN[Reexecutar Teste de Artefato]
    C2 --> RERUN
    C3 --> RERUN
    C4 --> RERUN

    RERUN --> D

    B --> TRACE[Rastreabilidade]
    TRACE --> T1[OP → Requisitos]
    TRACE --> T2[Requisitos → Arquitetura]
    TRACE --> T3[Arquitetura → Tarefas]
    TRACE --> T4[Requisitos → Testes]

    T1 --> T_ERR{Quebra de rastreabilidade?}
    T2 --> T_ERR
    T3 --> T_ERR
    T4 --> T_ERR

    T_ERR -- Sim --> F
    T_ERR -- Não --> B
```

### Erros cobertos

```text
Schema inválido
Artefato sem source_artifacts
Requisito sem critério de aceite
Requisito sem arquitetura correspondente
Componente sem requisito
Endpoint sem tarefa
Tarefa sem teste
Cenário sem suporte documental
Risco arquitetural sem mitigação
```

---

## 4. MVP 3 — Organização e qualidade

### Escopo

```text
Áreas de Negócio
Custo da Qualidade
Origem / Detecção / Correção
Pacote de Não-Retorno
```

### Objetivo

Mostrar a produção sob ótica organizacional.

### Perguntas respondidas

```text
Quem preveniu?
Quem detectou?
Quem corrigiu?
Quem deixou escapar?
Onde está o custo?
O que chegou na Expedição?
O que voltou?
```

---

## 5. MVP 4 — Governança

### Escopo

```text
Base de Conhecimento
Agentes
Model Profiles
Prompts
Routing Rules
Lifecycle Stage
Test Definitions
Políticas Operacionais
```

### Tela crítica

A tela de **Editar Agente** precisa impedir configurações perigosas.

```yaml
agent_validation:
  must_have:
    - agent_id
    - station_code
    - system_prompt
    - instructions
    - model_profile
    - input_contract
    - output_contract
    - permissions
    - business_area
    - quality_contribution_type

  forbidden:
    - deploy_permission_for_code_executor_without_release_operator
    - repository_write_for_architecture_agent
    - scoring_enabled_in_observe_mode
    - missing_output_schema
```

---

## 6. Rotas de erro transversais

```mermaid
flowchart TD
    A[Usuário em qualquer tela] --> B{Erro detectado}

    B -- Erro de formulário --> C[Mostrar campos inválidos]
    C --> C1[Voltar ao formulário]

    B -- Erro de schema --> D[Mostrar erro de schema]
    D --> D1[Abrir artefato/template relacionado]

    B -- Erro de permissão --> E[Acesso negado]
    E --> E1[Solicitar permissão / trocar perfil]

    B -- Erro de agente --> F[Agente indisponível ou inválido]
    F --> F1[Abrir configuração do agente]
    F --> F2[Registrar evento de falha]

    B -- Erro de modelo --> G[Provider/modelo indisponível]
    G --> G1[Abrir model profile]
    G --> G2[Usar fallback, se permitido]

    B -- Erro de teste --> H[Teste falhou]
    H --> H1[Ver relatório]
    H --> H2[Gerar tarefa corretiva]

    B -- Erro de rastreabilidade --> I[Quebra de rastreabilidade]
    I --> I1[Abrir artefato origem]
    I --> I2[Abrir artefato alvo]

    B -- Anormalidade operacional --> J[MAN-override]
    J --> J1[Validação humana]
    J1 --> J2[AUTO-engaged]
```

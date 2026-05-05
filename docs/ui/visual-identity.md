# AUTO — Identidade Visual da Interface

## 1. Objetivo

Este documento define a primeira direção visual da interface do AUTO Framework.

A interface deve separar duas experiências:

```text
AUTO Commercial  -> cliente vê progresso
AUTO Industrial  -> operação vê evidência
```

A mesma plataforma pode compartilhar backend, banco, artefatos e eventos, mas deve apresentar linguagens visuais diferentes para públicos diferentes.

---

## 2. AUTO Commercial

### Uso

```text
portal do cliente
nova solicitação
status da solicitação
dúvidas abertas
entregas
aprovação
```

### Intenção visual

```text
claro
confiável
moderno
premium
consultivo
espaçado
orientado a valor
```

### Paleta

```yaml
auto_commercial_palette:
  navy_primary: "#071E41"
  navy_deep: "#03142B"
  orange_accent: "#FF9600"
  orange_soft: "#FFB13B"
  white_base: "#FFFFFF"
  off_white: "#F7F9FB"
  light_border: "#DDE4EA"
  text_primary: "#071E41"
  text_secondary: "#526071"
  teal_support: "#1BA6A6"
  green_success: "#67C587"
```

### Linguagem textual

Evitar termos internos:

```text
G0
G1
A2
artifact_test_report
Codex execution
tokens
internal_failure_cost
quality_contribution_type
```

Usar termos comerciais:

```text
Solicitação recebida
Entendimento em elaboração
Planejamento técnico
Em construção
Em validação
Pronto para entrega
Entregue
```

### Componentes principais

```yaml
commercial_components:
  request_wizard:
    description: Entrada guiada de solicitação.

  friendly_status_timeline:
    description: Status simplificado da produção.

  question_card:
    description: Dúvida pendente para o cliente.

  delivery_preview:
    description: Prévia de entrega.

  approval_panel:
    description: Aceite ou solicitação de ajuste.

  message_thread:
    description: Conversa cliente/consultoria.
```

---

## 3. AUTO Industrial

### Uso

```text
cockpit interno
linha produtiva
artefatos
tarefas
agentes
execuções IA
testes
findings
telemetria
MAN-override
AUTO-engaged
expedição
```

### Intenção visual

```text
operacional
denso
técnico
rastreável
industrial
sala de controle
orientado a evidência
```

### Paleta

```yaml
auto_industrial_palette:
  industrial_navy: "#03142B"
  panel_navy: "#071E41"
  steel_blue: "#123B5D"
  cyan_signal: "#2FB7D3"
  teal_process: "#17A398"
  green_ok: "#67C587"
  amber_attention: "#FFB13B"
  orange_action: "#FF9600"
  red_fault: "#E45757"
  slate_bg: "#0B172A"
  card_bg_dark: "#101F36"
  card_bg_light: "#FFFFFF"
  border_dark: "#1F3554"
  text_light: "#F4F8FB"
  text_muted: "#9CADBE"
```

### Linguagem textual

Usar termos da fábrica:

```text
Ordem de Produção
Estação
Artefato
Finding
Retrabalho
Expedição
Rastreabilidade
Inspeção
MAN-override
AUTO-engaged
Pipeline Run
```

### Componentes principais

```yaml
industrial_components:
  pipeline_map:
    description: Mapa G0-G7 da produção.

  station_card:
    description: Card de estação com status, eventos e filas.

  production_run_card:
    description: Card de pipeline run.

  andon_banner:
    description: Banner de MAN-override e anormalidades.

  event_timeline:
    description: Linha do tempo operacional.

  finding_drawer:
    description: Painel lateral de achados.

  artifact_lineage_graph:
    description: Grafo de rastreabilidade dos artefatos.

  atomic_task_board:
    description: Quadro de tarefas atômicas.

  agent_execution_console:
    description: Console de execução do agente.

  test_result_panel:
    description: Painel de testes.
```

---

## 4. Diferença essencial

| Aspecto | AUTO Commercial | AUTO Industrial |
|---|---|---|
| Público | Cliente/stakeholder | Operação interna |
| Densidade | Baixa | Alta |
| Linguagem | Comercial | Técnica/operacional |
| Principal pergunta | Como está minha solicitação? | Onde está a produção e o que aconteceu? |
| Foco | Clareza e confiança | Evidência e rastreabilidade |

---

## 5. Frase-guia

> O cliente não precisa ver a sala de máquinas. A fábrica não pode operar sem sala de máquinas.
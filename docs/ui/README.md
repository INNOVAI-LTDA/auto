# AUTO UI Documentation

Esta pasta concentra a documentação inicial da interface do AUTO Framework.

A interface do AUTO é dividida em duas experiências visuais principais:

- **AUTO Commercial**: portal externo para cliente/stakeholder, com linguagem clara, comercial e orientada a progresso.
- **AUTO Industrial**: cockpit interno da fábrica, com linguagem operacional, densa, rastreável e orientada a evidência.

## Documentos

| Documento | Finalidade |
|---|---|
| `visual-identity.md` | Paletas, temas, linguagem visual e direção de identidade. |
| `navigation-mvps.md` | Navegação por MVP, fluxos principais e rotas de erro. |
| `screen-inventory.md` | Inventário das telas propostas e seus objetivos. |
| `implementation-guide.md` | Stack recomendada e caminho para codificar os esqueletos das telas. |

## Frase-guia

> Cliente vê progresso. Operação vê evidência. Gestão vê aprendizado. Governança ajusta a fábrica.

## Princípio de produto

A interface não deve começar como um dashboard executivo sofisticado. Ela deve começar como uma interface de trabalho:

```text
entrar pedido
ver status
gerar artefato
testar artefato
decompor tarefa
executar IA
rodar teste
validar humano
expedir
registrar tudo
```

Nesta fase, a interface trabalha em modo **observe-only**:

```yaml
metric_policy:
  mode: observe_only
  scoring_enabled: false
  blocking_enabled: false
  classification_enabled: false
```

Ou seja: medir e registrar antes de julgar.
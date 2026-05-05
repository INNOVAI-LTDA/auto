export default function RequestPage() {
  const fields = [
    'O que voce quer criar?',
    'Qual problema isso resolve?',
    'Quem vai usar?',
    'Como isso e feito hoje?',
    'Qual seria a primeira versao util?',
  ]

  return (
    <main className="commercial-shell">
      <header className="commercial-header">
        <div className="commercial-brand">AUTO<span>.</span></div>
        <span className="status-pill">Nova solicitacao</span>
      </header>

      <section className="commercial-main">
        <div className="grid-2">
          <div className="card">
            <h1>Conte o que voce precisa construir</h1>
            <p className="muted">
              Sem linguagem tecnica. A fabrica transforma isso em uma Ordem de Producao.
            </p>

            <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
              {fields.map((field) => (
                <label key={field} style={{ display: 'grid', gap: 8, fontWeight: 700 }}>
                  {field}
                  <textarea
                    rows={3}
                    placeholder="Escreva com suas palavras..."
                    style={{ border: '1px solid var(--auto-border)', borderRadius: 16, padding: 14 }}
                  />
                </label>
              ))}
            </div>

            <button className="button-primary" style={{ marginTop: 24 }}>Enviar solicitacao</button>
          </div>

          <aside className="card">
            <h2>Resumo inicial</h2>
            <p className="muted">
              Esta etapa gera a ficha estruturada G0, sem expor termos tecnicos ao solicitante.
            </p>
            <ul className="muted" style={{ lineHeight: 2 }}>
              <li>Campos obrigatorios</li>
              <li>Duvidas abertas</li>
              <li>Primeira versao util</li>
              <li>Fora de escopo inicial</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  )
}

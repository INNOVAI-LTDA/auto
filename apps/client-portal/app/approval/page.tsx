export default function ApprovalPage() {
  return (
    <main className="commercial-shell">
      <header className="commercial-header">
        <div className="commercial-brand">AUTO<span>.</span></div>
        <span className="status-pill">Entrega e aprovacao</span>
      </header>

      <section className="commercial-main">
        <div className="grid-2">
          <div className="card">
            <h1>Entrega pronta para revisao</h1>
            <p className="muted">
              Revise o pacote entregue e escolha aprovar ou solicitar ajustes.
            </p>

            <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
              <div className="status-pill">Resumo funcional</div>
              <div className="status-pill">Ambiente de validacao</div>
              <div className="status-pill">Relatorio de entrega</div>
            </div>
          </div>

          <aside className="card">
            <h2>Acoes</h2>
            <button className="button-primary" style={{ width: '100%', marginBottom: 12 }}>
              Aprovar entrega
            </button>
            <button
              style={{
                width: '100%',
                border: '1px solid var(--auto-border)',
                background: 'white',
                borderRadius: 14,
                padding: 12,
                fontWeight: 700,
              }}
            >
              Solicitar ajustes
            </button>
          </aside>
        </div>
      </section>
    </main>
  )
}

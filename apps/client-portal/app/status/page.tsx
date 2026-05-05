export default function StatusPage() {
  const steps = [
    'Solicitacao recebida',
    'Entendimento em elaboracao',
    'Planejamento tecnico',
    'Em construcao',
    'Em validacao',
    'Pronto para entrega',
  ]

  return (
    <main className="commercial-shell">
      <header className="commercial-header">
        <div className="commercial-brand">AUTO<span>.</span></div>
        <span className="status-pill">Status da solicitacao</span>
      </header>

      <section className="commercial-main">
        <div className="card">
          <h1>App de cadastro de clientes</h1>
          <p className="muted">Acompanhe o progresso da sua solicitacao em linguagem simples.</p>

          <div style={{ display: 'grid', gap: 14, marginTop: 28 }}>
            {steps.map((step, index) => (
              <div
                key={step}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: 16,
                  border: '1px solid var(--auto-border)',
                  borderRadius: 18,
                  background: index <= 2 ? 'rgba(103,197,135,0.10)' : 'white',
                }}
              >
                <strong style={{ color: index <= 2 ? 'var(--auto-success)' : 'var(--auto-muted)' }}>
                  {String(index + 1).padStart(2, '0')}
                </strong>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

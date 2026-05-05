import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="commercial-shell">
      <header className="commercial-header">
        <div className="commercial-brand">AUTO<span>.</span></div>
        <nav style={{ display: 'flex', gap: 16, color: 'var(--auto-muted)', fontWeight: 700 }}>
          <Link href="/request">Nova solicitacao</Link>
          <Link href="/status">Status</Link>
          <Link href="/approval">Aprovacao</Link>
        </nav>
      </header>

      <section className="commercial-main">
        <div className="grid-2">
          <div className="card">
            <span className="status-pill">Portal Commercial</span>
            <h1 style={{ fontSize: 48, lineHeight: 1.05, marginBottom: 16 }}>
              Solicite, acompanhe e aprove entregas guiadas por IA.
            </h1>
            <p className="muted" style={{ fontSize: 18, lineHeight: 1.6 }}>
              Uma experiencia clara para transformar necessidades de negocio em ordens de producao
              rastreaveis dentro do AUTO Framework.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
              <Link className="button-primary" href="/request">Criar solicitacao</Link>
              <Link className="status-pill" href="/status">Ver status</Link>
            </div>
          </div>

          <aside className="card">
            <h2>Fluxo do cliente</h2>
            <ol className="muted" style={{ lineHeight: 2 }}>
              <li>Nova solicitacao</li>
              <li>Entendimento inicial</li>
              <li>Planejamento tecnico</li>
              <li>Construcao</li>
              <li>Validacao</li>
              <li>Aprovacao</li>
            </ol>
          </aside>
        </div>
      </section>
    </main>
  )
}

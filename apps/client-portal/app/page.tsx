import Link from 'next/link'

function Sidebar(){
  return (
    <aside className="portal-sidebar">
      <div className="portal-logo">AUTO<span>.</span></div>
      <p style={{opacity:.85}}>Portal do Cliente</p>
      <nav className="portal-nav">
        <Link href="/" className="active">Visao geral</Link>
        <Link href="/request">Nova solicitacao</Link>
        <Link href="/status">Status da solicitacao</Link>
        <Link href="/approval">Entregas e aprovacao</Link>
      </nav>
    </aside>
  )
}

export default function HomePage() {
  return (
    <main className="commercial-shell">
      <Sidebar />
      <section className="commercial-main">
        <header className="commercial-header">
          <strong>Plataforma de Gestao Comercial</strong>
          <span className="status-pill">Em andamento</span>
        </header>
        <div className="grid-2">
          <div className="card">
            <h1 style={{fontSize:52,margin:'10px 0'}}>3/3 Entregas e Aprovação</h1>
            <p className="muted">Revise os artefatos, acompanhe o status e aprove o pacote com total rastreabilidade.</p>
            <div style={{marginTop:18,display:'flex',gap:10}}><Link className="button-primary" href="/approval">Aprovar pacote</Link><Link className="card" href="/status" style={{padding:'10px 14px'}}>Ver status</Link></div>
          </div>
          <aside className="card"><h3>Ciclo V-BOUNCE</h3><ol className="muted" style={{lineHeight:2}}><li>Descoberta</li><li>Estrategia</li><li>Construcao</li><li>Validacao</li><li>Implantacao</li></ol></aside>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'

const stations = ['G0 Intake', 'G1 Requisitos', 'G2 Arquitetura', 'G3 Tarefas', 'G4 IA', 'G5 Validacao', 'G6 Deploy', 'G7 Manutencao']

export default function CockpitPage() {
  return (
    <main className="industrial-shell">
      <aside className="sidebar">
        <div className="brand">AUTO<span>.</span></div>
        <p className="muted">Cockpit Industrial</p>
        <Link className="nav-link" href="/">Linha produtiva</Link>
        <Link className="nav-link" href="/execution">Execucao IA</Link>
        <Link className="nav-link" href="/quality">Qualidade pre-codigo</Link>
      </aside>

      <section className="main">
        <div className="panel" style={{ marginBottom: 18 }}>
          <span className="signal ok">AUTO-engaged</span>
          <h1 style={{ fontSize: 38, marginBottom: 8 }}>Linha produtiva</h1>
          <p className="muted">Visao operacional da fabrica AUTO, com estacoes, eventos e evidencias.</p>
        </div>

        <div className="grid-3">
          {stations.map((station, index) => (
            <div className="panel" key={station}>
              <span className={index === 4 ? 'signal warn' : 'signal'}>{station}</span>
              <h3>{index === 4 ? 'Em execucao' : 'Aguardando'}</h3>
              <p className="muted">Eventos: {12 + index}</p>
              <p className="muted">Artefatos: {index + 1}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

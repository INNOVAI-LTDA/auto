const findings = [
  {
    id: 'FIND-001',
    type: 'unsupported',
    description: 'RF-004 nao possui endpoint correspondente.',
    route: 'G2 Arquitetura',
  },
  {
    id: 'FIND-002',
    type: 'ambiguous',
    description: "Termo 'rapido' sem criterio verificavel.",
    route: 'G1 Requisitos',
  },
]

export default function QualityPage() {
  return (
    <main className="industrial-shell">
      <aside className="sidebar">
        <div className="brand">AUTO<span>.</span></div>
        <p className="muted">Qualidade pre-codigo</p>
      </aside>

      <section className="main">
        <div className="panel" style={{ marginBottom: 18 }}>
          <span className="signal">A0-A4 Artifact Tests</span>
          <h1>Inspecao de artefatos</h1>
          <p className="muted">Findings antes da implementacao, sem score e sem bloqueio automatico.</p>
        </div>

        <div className="grid-2">
          <div className="panel">
            <h2>Findings abertos</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {findings.map((finding) => (
                <div className="panel" key={finding.id}>
                  <span className="signal fault">{finding.type}</span>
                  <h3>{finding.id}</h3>
                  <p>{finding.description}</p>
                  <p className="muted">Rota sugerida: {finding.route}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="panel">
            <h2>Resumo A0-A4</h2>
            <p className="muted">checks_executed_total: 32</p>
            <p className="muted">findings_total: 5</p>
            <p className="muted">missing_total: 1</p>
            <p className="muted">ambiguous_total: 2</p>
            <p className="muted">unsupported_total: 1</p>
          </aside>
        </div>
      </section>
    </main>
  )
}

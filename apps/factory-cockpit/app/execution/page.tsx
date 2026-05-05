export default function ExecutionPage() {
  return (
    <main className="industrial-shell">
      <aside className="sidebar">
        <div className="brand">AUTO<span>.</span></div>
        <p className="muted">Execucao IA</p>
      </aside>

      <section className="main">
        <div className="grid-2">
          <div className="panel">
            <span className="signal warn">G4 Execucao IA</span>
            <h1>TASK-002 Criar entidade Customer</h1>
            <p className="muted">
              Execucao atomica por agente, com contexto controlado e telemetria crua.
            </p>

            <div className="grid-3" style={{ marginTop: 18 }}>
              <div className="panel"><span className="muted">Agente</span><h3>g4_code_executor</h3></div>
              <div className="panel"><span className="muted">Modelo</span><h3>codex_executor</h3></div>
              <div className="panel"><span className="muted">Status</span><h3>completed</h3></div>
            </div>
          </div>

          <aside className="panel">
            <h2>Metricas cruas</h2>
            <p className="muted">input_tokens_total: 18400</p>
            <p className="muted">output_tokens_total: 6200</p>
            <p className="muted">files_changed_total: 2</p>
            <p className="muted">tests_executed_total: 8</p>
          </aside>
        </div>
      </section>
    </main>
  )
}

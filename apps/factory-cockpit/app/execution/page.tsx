import {
  AlertTriangleIcon,
  BellIcon,
  BotIcon,
  BoxesIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  FileCodeIcon,
  FlaskIcon,
  GaugeIcon,
  GitBranchIcon,
  HomeIcon,
  ListChecksIcon,
  MapIcon,
  PlayIcon,
  SendIcon,
  SettingsIcon,
  ShieldCheckIcon,
  UserIcon,
} from '../../components/IndustrialIcons'

const navItems = [
  { icon: HomeIcon, label: 'Visão Geral' },
  { icon: MapIcon, label: 'Roadmap' },
  { icon: ListChecksIcon, label: 'Backlog' },
  { icon: PlayIcon, label: 'Execução', active: true },
  { icon: BoxesIcon, label: 'Artefatos' },
  { icon: FlaskIcon, label: 'Testes' },
  { icon: ShieldCheckIcon, label: 'Qualidade' },
  { icon: SettingsIcon, label: 'Configurações' },
]

const tasks = [
  { id: 24, title: 'Gerar entidade', subtitle: 'SensorTemp', state: 'done' },
  { id: 25, title: 'Criar repositório', subtitle: 'SensorTempRepo', state: 'done' },
  { id: 26, title: 'Implementar serviço', subtitle: 'SensorTempService', state: 'current' },
  { id: 27, title: 'Controller', subtitle: 'SensorTempCtrl', state: 'pending' },
  { id: 28, title: 'Testes unitários', subtitle: 'SensorTemp', state: 'pending' },
  { id: 29, title: 'Testes integração', subtitle: 'Fluxo completo', state: 'pending' },
]

const logs = [
  { time: '10:26:52', tone: 'ok', title: 'Tarefa 26 concluída', desc: 'Implementar serviço SensorTempService' },
  { time: '10:26:50', tone: 'info', title: 'Teste unitário gerado', desc: 'SensorTempServiceTest.cs · 12 testes criados' },
  { time: '10:26:47', tone: 'info', title: 'Arquivo criado', desc: 'SensorTempService.cs · 312 linhas adicionadas' },
  { time: '10:26:45', tone: 'warn', title: 'Regra de negócio aplicada', desc: 'Validação de faixa de temperatura · RN-TEC-045' },
  { time: '10:26:42', tone: 'info', title: 'Dependência identificada', desc: 'ISensorTempRepository injetada com sucesso' },
  { time: '10:26:39', tone: 'info', title: 'Prompt enviado para IA', desc: 'Tokens: 18.642 · Modelo: GPT-4o' },
  { time: '10:26:35', tone: 'ok', title: 'Tarefa 25 concluída', desc: 'Criar repositório SensorTempRepo' },
]

const artifacts = [
  { label: 'Entidade', name: 'SensorTemp', icon: ShieldCheckIcon, state: 'done' },
  { label: 'Repositório', name: 'SensorTempRepo', icon: CheckCircleIcon, state: 'done' },
  { label: 'Serviço', name: 'SensorTempService', icon: SettingsIcon, state: 'current' },
  { label: 'Controller', name: 'SensorTempCtrl', icon: FileCodeIcon, state: 'pending' },
  { label: 'Testes', name: 'SensorTempTests', icon: FlaskIcon, state: 'pending' },
]

function Panel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`panel ${className}`}>{children}</div>
}

function MiniLabel({ children, tone = 'blue' }: { children: React.ReactNode; tone?: 'blue' | 'green' | 'orange' | 'red' }) {
  const className = {
    blue: 'label-blue',
    green: 'label-green',
    orange: 'label-orange',
    red: 'label-red',
  }[tone]

  return <span className={`mini-label ${className}`}>{children}</span>
}

function Radial({ value, label, tone = 'cyan', size = 92 }: { value: number; label?: string; tone?: 'cyan' | 'green'; size?: number }) {
  const safeValue = Math.max(0, Math.min(100, value))
  const color = tone === 'green' ? '#55d477' : '#42b9ff'

  return (
    <div
      className="radial"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${color} ${safeValue * 3.6}deg, #12314f 0deg)`,
      }}
    >
      <div className="radial-inner">
        <div style={{ color: 'white', fontSize: 20, fontWeight: 900, lineHeight: 1 }}>{safeValue}%</div>
        {label ? <div style={{ color: '#9fb7cf', fontSize: 9, marginTop: 2 }}>{label}</div> : null}
      </div>
    </div>
  )
}

function SummaryCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Panel className="summary-card">
      <div className="summary-card-title" title={title}>{title}</div>
      {children}
    </Panel>
  )
}

function TaskNode({ task }: { task: { id: number; title: string; subtitle: string; state: string } }) {
  const isDone = task.state === 'done'
  const isCurrent = task.state === 'current'

  return (
    <div style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
      <div
        className="task-node"
        style={{
          border: isCurrent ? '1px solid var(--orange)' : isDone ? '1px solid #1d8a58' : '1px solid #335572',
          background: isCurrent ? '#0d223c' : isDone ? '#0b2a38' : '#091c34',
          boxShadow: isCurrent ? '0 0 0 1px rgba(255,150,0,.35), 0 0 24px rgba(255,150,0,.22)' : undefined,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ display: 'grid', placeItems: 'center', width: 22, height: 22, borderRadius: 999, border: `1px solid ${isDone ? '#43d17a' : isCurrent ? '#ff9600' : '#6f8ba5'}`, color: isDone ? '#43d17a' : isCurrent ? 'white' : '#9ab4d2', fontSize: 10, fontWeight: 900 }}>
            {isDone ? <CheckIcon className="industrial-icon" /> : task.id}
          </div>
          {isCurrent ? <SettingsIcon className="industrial-icon text-warn" /> : isDone ? <CheckCircleIcon className="industrial-icon text-ok" /> : <ClockIcon className="industrial-icon muted" />}
        </div>
        <div className="task-node-title" title={task.title}>{task.title}</div>
        <div className="task-node-subtitle muted" title={task.subtitle}>{task.subtitle}</div>
        {isCurrent ? <div style={{ marginTop: 8, color: 'var(--orange)', fontSize: 10, fontWeight: 900, textTransform: 'uppercase' }}>● Em execução</div> : null}
      </div>
      {task.id < 29 ? <ChevronRightIcon className="industrial-icon muted" /> : null}
    </div>
  )
}

function MetricRow({ icon: Icon, label, value, tone = 'green', extra }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; tone?: 'green' | 'red' | 'blue' | 'muted'; extra?: string }) {
  const colorClass = {
    green: 'text-ok',
    red: 'text-danger',
    blue: 'text-cyan',
    muted: 'muted',
  }[tone]

  return (
    <div className="metric-row">
      <div className="metric-label" title={label}>
        <Icon className="industrial-icon" />
        {label}
      </div>
      <div className={`metric-value ${colorClass}`} title={`${value} ${extra ?? ''}`}>
        {value} {extra ? <span className="muted">{extra}</span> : null}
      </div>
    </div>
  )
}

function LogItem({ item, isLast }: { item: { time: string; tone: string; title: string; desc: string }; isLast: boolean }) {
  const dotColor = item.tone === 'ok' ? 'var(--ok)' : item.tone === 'warn' ? 'var(--warn)' : 'var(--cyan)'

  return (
    <div className="event-log-row">
      <div style={{ color: 'var(--muted)', fontSize: 12 }}>{item.time}</div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 10, height: 10, marginTop: 4, borderRadius: 999, background: dotColor, boxShadow: `0 0 10px ${dotColor}` }} />
        {!isLast ? <div style={{ position: 'absolute', top: 16, width: 1, height: '100%', background: '#244867' }} /> : null}
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="event-log-title" style={{ color: 'white', fontSize: 12, fontWeight: 900 }}>{item.title}</div>
        <div className="event-log-desc muted" style={{ marginTop: 4, fontSize: 12, lineHeight: 1.35 }}>{item.desc}</div>
      </div>
    </div>
  )
}

export default function ExecutionPage() {
  return (
    <div className="industrial-page">
      <div className="industrial-frame">
        <header className="execution-topbar">
          <div className="brand-block">
            <div className="brand-mark">
              <span className="brand-mark-main">A</span>
              <span className="brand-mark-arrow">↗</span>
            </div>
            <div style={{ minWidth: 0 }}>
              <div className="brand-title">AUTO FRAMEWORK</div>
              <div className="brand-subtitle">(SDLC AI-Native)</div>
            </div>
          </div>

          <div className="stage-pills">
            <div className="stage-pills-inner">
              <div className="stage-pill"><CheckCircleIcon className="industrial-icon text-ok" />&nbsp;1&nbsp; Descoberta</div>
              <div className="stage-pill"><CheckCircleIcon className="industrial-icon text-ok" />&nbsp;2&nbsp; Diagnóstico</div>
              <div className="stage-pill stage-pill-active"><span style={{ display: 'grid', width: 24, height: 24, placeItems: 'center', border: '1px solid var(--orange)', borderRadius: 999, marginRight: 8 }}>3</span>Execução IA</div>
            </div>
          </div>

          <div className="topbar-meta">
            <div style={{ minWidth: 0 }}>
              <div style={{ color: 'white', fontSize: 14 }}>Planta 42 · Linha de Produção</div>
              <div className="muted" style={{ fontSize: 14 }}>Ambiente: <b className="text-ok">HOMOLOGAÇÃO</b></div>
            </div>
            <BellIcon className="industrial-icon muted" />
            <div style={{ position: 'relative', display: 'grid', width: 48, height: 48, placeItems: 'center', borderRadius: 999, background: '#d9e7f1', color: '#0b1e36' }}>
              <UserIcon className="industrial-icon" />
              <span style={{ position: 'absolute', right: 0, bottom: 0, width: 14, height: 14, border: '2px solid #06162e', borderRadius: 999, background: 'var(--ok)' }} />
            </div>
          </div>
        </header>

        <div className="execution-layout">
          <aside className="icon-sidebar">
            <nav className="icon-nav">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className={`icon-nav-item ${item.active ? 'icon-nav-item-active' : ''}`}>
                    <Icon className="industrial-icon" />
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </nav>
          </aside>

          <main className="execution-main">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ display: 'grid', width: 28, height: 28, placeItems: 'center', borderRadius: 999, background: 'var(--cyan)', color: '#06162e', fontWeight: 900 }}>3</div>
              <div style={{ minWidth: 0 }}>
                <h1 style={{ margin: 0, color: 'white', fontSize: 26, lineHeight: 1.05 }}>Execução IA e Artefatos</h1>
                <p className="muted" style={{ margin: '5px 0 0', fontSize: 14 }}>Execução de tarefas atômicas com IA e geração de artefatos</p>
              </div>
            </div>

            <section className="summary-grid" style={{ marginBottom: 12 }}>
              <SummaryCard title="Progresso da Execução">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <Radial value={76} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ color: '#9ed8ff', fontSize: 20, fontWeight: 900 }}>24 / 32</div>
                    <div className="muted" style={{ fontSize: 12 }}>Tarefas concluídas</div>
                    <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px solid #1d3f5f', color: '#c4d3e3', fontSize: 12 }}>8 restantes<br />Tempo estimado: 12min</div>
                  </div>
                </div>
              </SummaryCard>

              <SummaryCard title="IA Ativa ●">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontSize: 14, fontWeight: 900 }}><BotIcon className="industrial-icon text-ok" />GPT-4o</div>
                <div style={{ marginTop: 18, display: 'grid', gap: 11, color: '#c9d7e6', fontSize: 13 }}>
                  <div>Temperatura: <b>0.2</b></div>
                  <div>Modo: <b>Padrão Seguro</b></div>
                </div>
              </SummaryCard>

              <SummaryCard title="Tokens (este run)">
                <div className="token-metrics">
                  <div className="token-metric"><div className="token-label">Entrada</div><div className="token-value" title="128.750">128.750</div></div>
                  <div className="token-metric"><div className="token-label">Saída</div><div className="token-value" title="96.320">96.320</div></div>
                  <div className="token-metric"><div className="token-label">Total</div><div className="token-value" title="225.070">225.070</div></div>
                </div>
                <div className="muted" style={{ marginTop: 15, borderTop: '1px solid #1d3f5f', paddingTop: 10, fontSize: 12 }}>Limite: 2.000.000</div>
              </SummaryCard>

              <SummaryCard title="Qualidade da Execução">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Radial value={92} label="Muito boa" tone="green" size={82} />
                  <div style={{ display: 'grid', gap: 7, color: '#c8d6e6', fontSize: 13, minWidth: 0 }}>
                    <div><CheckIcon className="industrial-icon text-ok" /> Conformidade</div>
                    <div><CheckIcon className="industrial-icon text-ok" /> Testes</div>
                    <div><CheckIcon className="industrial-icon text-ok" /> Segurança</div>
                    <div><AlertTriangleIcon className="industrial-icon text-warn" /> Padrões</div>
                  </div>
                </div>
              </SummaryCard>

              <SummaryCard title="Status Geral">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ display: 'grid', width: 64, height: 64, placeItems: 'center', borderRadius: 999, background: '#67c587', color: '#06263e', flex: '0 0 auto' }}><CheckIcon className="industrial-icon" /></div>
                  <div style={{ minWidth: 0 }}>
                    <div className="text-ok" style={{ fontWeight: 900 }}>SAUDÁVEL</div>
                    <div style={{ marginTop: 4, color: '#c9d6e5', fontSize: 13, lineHeight: 1.3 }}>Execução dentro dos parâmetros</div>
                    <button style={{ marginTop: 10, border: '1px solid #2d5272', borderRadius: 7, background: 'transparent', color: 'white', padding: '8px 12px', fontSize: 12 }}>Ver resumo</button>
                  </div>
                </div>
              </SummaryCard>
            </section>

            <Panel className="panel-pad" style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', gap: 32, marginBottom: 16, borderBottom: '1px solid #1d3f5f', color: 'var(--muted)', fontSize: 14, fontWeight: 800 }}>
                <div style={{ borderBottom: '2px solid var(--cyan)', paddingBottom: 12, color: '#9ed8ff' }}>Tarefas Atômicas</div>
                <div style={{ paddingBottom: 12 }}>Execução IA</div>
                <div style={{ paddingBottom: 12 }}>Artefatos Gerados</div>
              </div>
              <div className="task-flow">{tasks.map((task) => <TaskNode key={task.id} task={task} />)}</div>
            </Panel>

            <section className="detail-grid" style={{ marginBottom: 12 }}>
              <Panel className="panel-pad">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 12 }}><h2 style={{ margin: 0, fontSize: 16 }}>Execução da Tarefa Atual</h2><MiniLabel tone="orange">Tarefa 26 de 32</MiniLabel></div>
                <div style={{ display: 'grid', gap: 12, color: '#c8d6e6', fontSize: 13, lineHeight: 1.38 }}>
                  <div><div className="muted">Nome</div><div className="text-ellipsis" title="Implementar serviço SensorTempService"><b style={{ color: 'white' }}>Implementar serviço SensorTempService</b></div></div>
                  <div><div className="muted">Tipo</div><div>Implementação</div></div>
                  <div><div className="muted">Prioridade</div><div><b style={{ color: 'white' }}>↑ Alta</b></div></div>
                  <div><div className="muted">Objetivo</div><div>Criar serviço com regras de negócio para leitura e validação de temperatura.</div></div>
                  <div><div className="muted">Contexto</div><div>Baseado na entidade SensorTemp e regras de negócio definidas no roadmap.</div></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 8, marginTop: 14, paddingTop: 12, borderTop: '1px solid #1d3f5f', fontSize: 12 }}>
                  <div><div className="muted">Status</div><b className="text-warn text-ellipsis">● Em execução...</b></div>
                  <div><div className="muted">Iniciado em</div><b>10:24:18</b></div>
                  <div><div className="muted">Duração</div><b>02:34</b></div>
                </div>
              </Panel>

              <Panel className="panel-pad">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 12 }}><h2 style={{ margin: 0, fontSize: 16 }}>Resumo do Prompt Bundle</h2><button style={{ border: 0, background: 'transparent', color: '#69caff', fontWeight: 900 }}>Ver detalhes</button></div>
                <div style={{ display: 'grid', gap: 11, color: '#c8d6e6', fontSize: 13, lineHeight: 1.35 }}>
                  <div><div className="muted">System Prompt</div><div>AUTO Industrial - Implementação Segura</div></div>
                  <div><div className="muted">Contexto</div><div>Entidades, regras, padrões, boas práticas</div></div>
                  <div><div className="muted">Referências</div><div>12 arquivos, 3 ADRs, 2 decisões</div></div>
                  <div><div className="muted">Instrução</div><div>Implementar serviço com validações</div></div>
                  <div><div className="muted">Saída Esperada</div><div>Código, testes e documentação</div></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginTop: 14, paddingTop: 12, borderTop: '1px solid #1d3f5f', fontSize: 13 }}><span className="muted">Tamanho do prompt</span><b>18.642 tokens</b></div>
              </Panel>

              <Panel className="panel-pad">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 12 }}><h2 style={{ margin: 0, fontSize: 16 }}>Resultados da Execução</h2><button style={{ border: 0, background: 'transparent', color: '#69caff', fontWeight: 900 }}>Ver no editor</button></div>
                <MetricRow icon={CheckCircleIcon} label="Status" value="Sucesso" tone="green" />
                <MetricRow icon={BoxesIcon} label="Artefatos gerados" value="3 arquivos" tone="muted" />
                <MetricRow icon={FileCodeIcon} label="Alterações de código" value="+ 412" tone="green" extra="- 8" />
                <MetricRow icon={FlaskIcon} label="Testes executados" value="12" tone="green" extra="0" />
                <MetricRow icon={GaugeIcon} label="Cobertura" value="94%" tone="green" extra="+6%" />
                <MetricRow icon={ClockIcon} label="Tempo de execução" value="02:34" tone="muted" />
                <MetricRow icon={GitBranchIcon} label="Próxima tarefa" value="27 - Controller" tone="muted" />
                <button style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 14, border: 0, borderRadius: 9, background: 'linear-gradient(90deg,#ff9600,#ff7b00)', color: 'white', padding: '12px 16px', fontWeight: 900, boxShadow: '0 10px 24px rgba(255,150,0,.25)' }}>Validar e Avançar <ChevronRightIcon className="industrial-icon" /></button>
              </Panel>
            </section>

            <Panel className="panel-pad">
              <h2 style={{ margin: '0 0 12px', fontSize: 16 }}>Linhagem de Artefatos <span className="muted" style={{ fontWeight: 400 }}>(Esta Execução)</span></h2>
              <div className="artifact-flow">
                {artifacts.map((artifact, index) => {
                  const Icon = artifact.icon
                  const current = artifact.state === 'current'
                  return (
                    <div key={artifact.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div className="artifact-node" style={{ border: current ? '1px solid var(--orange)' : '1px solid #335572', background: current ? '#0d223c' : '#091c34' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ display: 'grid', width: 32, height: 32, placeItems: 'center', borderRadius: 999, background: current ? '#3c2a10' : '#0c3b34', color: current ? 'var(--orange)' : 'var(--ok)' }}><Icon className="industrial-icon" /></div>
                          <div style={{ minWidth: 0 }}>
                            <div className="text-ellipsis" title={artifact.label} style={{ color: 'white', fontSize: 12, fontWeight: 900 }}>{artifact.label}</div>
                            <div className="text-ellipsis muted" title={artifact.name} style={{ fontSize: 12 }}>{artifact.name}</div>
                            <div className="muted" style={{ fontSize: 12 }}>v1.0.0</div>
                          </div>
                        </div>
                      </div>
                      {index < artifacts.length - 1 ? <ChevronRightIcon className="industrial-icon muted" /> : null}
                    </div>
                  )
                })}
              </div>
            </Panel>
          </main>

          <aside className="logs-column">
            <Panel className="panel-pad" style={{ height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #1d3f5f' }}><h2 style={{ margin: 0, fontSize: 16 }}>Logs de Eventos</h2><button style={{ border: 0, background: 'transparent', color: 'var(--muted)' }}>Filtrar⌄</button></div>
              {logs.map((log, idx) => <LogItem key={`${log.time}-${log.title}`} item={log} isLast={idx === logs.length - 1} />)}
              <button style={{ width: '100%', marginTop: 18, border: '1px solid #214768', borderRadius: 9, background: 'transparent', color: '#69caff', padding: '12px 14px', fontWeight: 900 }}>Ver todos os logs</button>
            </Panel>
          </aside>
        </div>

        <footer className="footer-bar">
          <div className="text-ellipsis">AUTO FRAMEWORK (SDLC AI-Native) v2.1.0</div>
          <div style={{ textAlign: 'center' }}>Pipeline: DEV → HOMOLOG → PROD</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 14, minWidth: 0 }}><span className="text-ellipsis">Última execução: hoje às 10:24:18</span><button style={{ display: 'flex', alignItems: 'center', gap: 6, border: '1px solid #2d5272', borderRadius: 8, background: 'transparent', color: '#9ed8ff', padding: '8px 12px' }}><SendIcon className="industrial-icon" />Enviar feedback</button></div>
        </footer>
      </div>
    </div>
  )
}

export function getExecutionPreviewState() {
  return {
    navCount: navItems.length,
    taskCount: tasks.length,
    logCount: logs.length,
    artifactCount: artifacts.length,
    hasActiveNav: navItems.some((item) => item.active),
    currentTask: tasks.find((task) => task.state === 'current')?.id,
  }
}

import Link from 'next/link'

const Sidebar=()=> (<aside className="portal-sidebar"><div className="portal-logo">AUTO<span>.</span></div><p style={{opacity:.85}}>Portal do Cliente</p><nav className="portal-nav"><Link href="/">Visao geral</Link><Link href="/request" className="">Nova solicitacao</Link><Link href="/status" className="active">Status</Link><Link href="/approval" className="">Aprovacao</Link></nav></aside>)

export default function Page(){
return <main className="commercial-shell"><Sidebar/><section className="commercial-main"><header className="commercial-header"><strong>Status da Solicitação</strong><span className="status-pill">AUTO Framework</span></header><div className="grid-2"><div className="card"><h1>Status da Solicitação</h1><p className="muted">Acompanhe etapas e pendencias</p></div><aside className="card"><h3>Resumo</h3><p className="muted">Tela adaptada ao novo visual comercial baseado nos anexos.</p><button className="button-primary">Continuar</button></aside></div></section></main>
}

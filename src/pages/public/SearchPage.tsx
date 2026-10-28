import { useMemo, useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, ArrowRight, Package, FileText, Newspaper, HelpCircle } from 'lucide-react'
import { searchAll, SearchItem } from '@/data/searchIndex'
import './PageShared.css'

const typeIcon = {
  xizmat: Package,
  sahifa: FileText,
  yangilik: Newspaper,
  yordam: HelpCircle,
}

const typeLabel = {
  xizmat: 'Xizmat',
  sahifa: 'Sahifa',
  yangilik: 'Yangilik',
  yordam: 'Yordam',
}

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const initial = params.get('q') || ''
  const [q, setQ] = useState(initial)

  useEffect(() => {
    setQ(params.get('q') || '')
  }, [params])

  const results = useMemo(() => searchAll(q), [q])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setParams(q.trim() ? { q: q.trim() } : {})
  }

  return (
    <div className="page">
      <section className="page-hero" style={{ paddingBottom: 48 }}>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Qidiruv</span>
          <h1>Sayt bo‘ylab qidirish</h1>
          <p>Xizmat, sahifa, yangilik va yordam materiallari</p>
          <form onSubmit={onSubmit} style={{ marginTop: 28, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: 18, top: 16, color: '#64748B' }} />
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value)
                setParams(e.target.value.trim() ? { q: e.target.value.trim() } : {})
              }}
              placeholder="Masalan: Beeline, agent, FAQ..."
              autoFocus
              style={{
                width: '100%',
                padding: '16px 20px 16px 52px',
                borderRadius: 16,
                border: 'none',
                fontSize: 16,
                boxSizing: 'border-box',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            />
          </form>
        </div>
      </section>

      <section className="page-section">
        <div className="container" style={{ maxWidth: 800 }}>
          {!q.trim() && (
            <p style={{ textAlign: 'center', color: '#64748B' }}>Qidiruv so‘zini yozing…</p>
          )}
          {q.trim() && results.length === 0 && (
            <div className="page-card" style={{ textAlign: 'center', padding: 40 }}>
              <h3>«{q}» bo‘yicha hech narsa topilmadi</h3>
              <p>Boshqa so‘z bilan urinib ko‘ring yoki katalogni oching.</p>
              <Link to="/services" style={{ color: '#00A651', fontWeight: 600 }}>Xizmatlar →</Link>
            </div>
          )}
          {results.length > 0 && (
            <>
              <p style={{ marginBottom: 16, color: '#64748B', fontSize: 14 }}>
                {results.length} ta natija
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {results.map((r: SearchItem) => {
                  const Icon = typeIcon[r.type]
                  return (
                    <Link
                      key={r.id}
                      to={r.path}
                      className="page-card"
                      style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none', color: 'inherit', padding: 18 }}
                    >
                      <div className="page-icon" style={{ margin: 0, flexShrink: 0 }}>
                        <Icon size={20} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, color: '#00A651', fontWeight: 700, marginBottom: 4 }}>
                          {typeLabel[r.type]}
                        </div>
                        <h3 style={{ margin: 0, fontSize: 16 }}>{r.title}</h3>
                        <p style={{ margin: '4px 0 0', fontSize: 13 }}>{r.description}</p>
                      </div>
                      <ArrowRight size={18} color="#94A3B8" />
                    </Link>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

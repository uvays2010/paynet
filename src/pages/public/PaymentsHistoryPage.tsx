import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { History, Search } from 'lucide-react'
import Button from '@/components/ui/Button'
import { platform, Tx, subscribePlatform } from '@/store/platformStore'
import './PageShared.css'

function formatSum(n: number) {
  return n.toLocaleString('uz-UZ') + ' so‘m'
}

export default function PaymentsHistoryPage() {
  const [txs, setTxs] = useState<Tx[]>([])
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('all')

  useEffect(() => {
    platform.init()
    const load = () => setTxs(platform.getTxs())
    load()
    return subscribePlatform(load)
  }, [])

  const list = useMemo(() => {
    return txs.filter((p) => {
      const matchQ =
        !q ||
        p.service.toLowerCase().includes(q.toLowerCase()) ||
        p.account.includes(q) ||
        p.id.toLowerCase().includes(q.toLowerCase())
      const matchS = status === 'all' || p.status === status
      return matchQ && matchS
    })
  }, [txs, q, status])

  const total = txs.filter((p) => p.status === 'success').reduce((s, p) => s + p.amount, 0)

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>
            <History size={14} style={{ verticalAlign: -2 }} /> Tarix
          </span>
          <h1>To‘lovlar tarixi</h1>
          <p>
            Admin bilan bir xil ma’lumot · Jami:{' '}
            <strong style={{ color: '#86EFAC' }}>{formatSum(total)}</strong>
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
            <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: 12, top: 14, color: '#94A3B8' }} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Xizmat, hisob yoki ID..."
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 36px',
                  borderRadius: 12,
                  border: '1.5px solid #E2E8F0',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{ padding: '12px 14px', borderRadius: 12, border: '1.5px solid #E2E8F0' }}
            >
              <option value="all">Barcha holat</option>
              <option value="success">Muvaffaqiyatli</option>
              <option value="pending">Kutilmoqda</option>
              <option value="failed">Xato</option>
            </select>
          </div>

          {list.length === 0 ? (
            <div className="page-card" style={{ padding: 40, textAlign: 'center' }}>
              <p style={{ color: '#64748B' }}>Hali to‘lov yo‘q.</p>
              <Link to="/">
                <Button>Bosh sahifa</Button>
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {list.map((p) => (
                <div
                  key={p.id}
                  className="page-card"
                  style={{
                    padding: 16,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12,
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <strong>{p.service}</strong>
                    <div style={{ fontSize: 13, color: '#64748B' }}>
                      {p.account} · {p.id} · {p.channel}
                    </div>
                    <div style={{ fontSize: 12, color: '#94A3B8' }}>
                      {new Date(p.createdAt).toLocaleString('uz-UZ')}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, color: '#00A651' }}>{formatSum(p.amount)}</div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color:
                          p.status === 'success'
                            ? '#059669'
                            : p.status === 'failed'
                              ? '#DC2626'
                              : '#D97706',
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

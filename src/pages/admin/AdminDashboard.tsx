import { useEffect, useState } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { platform, Tx, subscribePlatform } from '@/store/platformStore'
import { formatSum } from '@/data/demoData'
import './Admin.css'

export default function AdminDashboard() {
  const [txs, setTxs] = useState<Tx[]>([])
  const [stats, setStats] = useState(platform.stats())

  const refresh = () => {
    setTxs(platform.getTxs().slice(0, 8))
    setStats(platform.stats())
  }

  useEffect(() => {
    platform.init()
    refresh()
    const h = () => refresh()
    return subscribePlatform(h)
  }, [])

  const chart = ['Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan', 'Yak'].map((name, i) => {
    const slice = platform.getTxs().filter((t) => t.status === 'success').slice(i * 2, i * 2 + 3)
    return {
      name,
      amount: slice.reduce((s, t) => s + t.amount, 0) / 1000 || (i + 1) * 12,
      count: slice.length || i + 2,
    }
  })

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Dashboard</h1>
        <p>Public sayt + admin bir ma’lumot bazasi (localStorage platform)</p>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">{stats.totalTx}</div>
          <div className="admin-stat-card__label">Jami tranzaksiya</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value" style={{ color: '#34D399' }}>{stats.successTx}</div>
          <div className="admin-stat-card__label">Muvaffaqiyatli</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">{formatSum(stats.volume)}</div>
          <div className="admin-stat-card__label">Aylanma</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">{stats.activeUsers}/{stats.users}</div>
          <div className="admin-stat-card__label">Faol foydalanuvchi</div>
        </div>
      </div>

      <div className="admin-grid-2">
        <div className="admin-chart-card">
          <h3>Aylanma (ming so‘m)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={chart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
              <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
              <YAxis stroke="#64748B" fontSize={12} />
              <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8 }} />
              <Area type="monotone" dataKey="amount" stroke="#00A651" fill="rgba(0,166,81,0.25)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="admin-chart-card">
          <h3>So‘nggi to‘lovlar (live)</h3>
          <div style={{ maxHeight: 240, overflow: 'auto' }}>
            {txs.length === 0 && <p style={{ color: '#94A3B8' }}>Hali yo‘q</p>}
            {txs.map((t) => (
              <div
                key={t.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #334155',
                  fontSize: 13,
                }}
              >
                <div>
                  <strong style={{ color: '#F8FAFC' }}>{t.service}</strong>
                  <div style={{ color: '#94A3B8' }}>{t.userName} · {t.channel}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#34D399', fontWeight: 700 }}>{formatSum(t.amount)}</div>
                  <div style={{ color: t.status === 'success' ? '#86EFAC' : '#FCA5A5' }}>{t.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

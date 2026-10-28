import { useMemo, useState } from 'react'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { demoTransactions, formatSum } from '@/data/demoData'
import './Admin.css'

const days = ['Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan', 'Yak']

export default function AdminReports() {
  const [range, setRange] = useState('7')

  const chart = useMemo(() => {
    return days.map((name, i) => {
      const slice = demoTransactions.slice(i * 10, i * 10 + 12)
      const success = slice.filter((t) => t.status === 'success').length
      const amount = slice.reduce((s, t) => s + (t.status === 'success' ? t.amount : 0), 0)
      return { name, success, amount: Math.round(amount / 1000), failed: slice.filter((t) => t.status === 'failed').length }
    })
  }, [])

  const totals = useMemo(() => {
    const success = demoTransactions.filter((t) => t.status === 'success')
    return {
      count: success.length,
      sum: success.reduce((s, t) => s + t.amount, 0),
      commission: success.reduce((s, t) => s + t.commission, 0),
      failed: demoTransactions.filter((t) => t.status === 'failed').length,
    }
  }, [])

  const exportCsv = () => {
    const header = 'ID,User,Service,Amount,Status,Date\n'
    const rows = demoTransactions
      .slice(0, 50)
      .map((t) => `${t.id},${t.userName},${t.service},${t.amount},${t.status},${t.date}`)
      .join('\n')
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'paynet-report-demo.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="admin-page">
      <div className="admin-header admin-header--row">
        <div>
          <h1>Hisobotlar</h1>
          <p>Tranzaksiya va aylanma tahlili · demo</p>
        </div>
        <div className="admin-header-actions">
          <select className="admin-select" value={range} onChange={(e) => setRange(e.target.value)}>
            <option value="7">7 kun</option>
            <option value="30">30 kun</option>
            <option value="90">90 kun</option>
          </select>
          <button type="button" className="admin-btn admin-btn--primary" onClick={exportCsv}>
            CSV yuklab olish
          </button>
        </div>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">{totals.count}</div>
          <div className="admin-stat-card__label">Muvaffaqiyatli tx</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">{formatSum(totals.sum)}</div>
          <div className="admin-stat-card__label">Aylanma</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">{formatSum(totals.commission)}</div>
          <div className="admin-stat-card__label">Komissiya</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">{totals.failed}</div>
          <div className="admin-stat-card__label">Muvaffaqiyatsiz</div>
        </div>
      </div>

      <div className="admin-grid-2">
        <div className="admin-chart-card">
          <h3>Kunlik muvaffaqiyatli tx</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={chart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
              <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
              <YAxis stroke="#64748B" fontSize={12} />
              <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8 }} />
              <Area type="monotone" dataKey="success" stroke="#00A651" fill="rgba(0,166,81,0.25)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="admin-chart-card">
          <h3>Aylanma (ming so‘m)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
              <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
              <YAxis stroke="#64748B" fontSize={12} />
              <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8 }} />
              <Bar dataKey="amount" fill="#3B82F6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

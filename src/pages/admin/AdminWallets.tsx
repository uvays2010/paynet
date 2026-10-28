import { useMemo, useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { demoUsers, formatSum } from '@/data/demoData'
import './Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminWallets() {
  const [users, setUsers] = useState(demoUsers)
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return users
    return users.filter(
      (u) => u.name.toLowerCase().includes(s) || u.phone.includes(s)
    )
  }, [users, q])

  const totalBalance = users.reduce((s, u) => s + (u.balance || 0), 0)

  const topUp = (id: number) => {
    const raw = prompt('Summa (so‘m):', '100000')
    const n = Number(raw)
    if (!n || n <= 0) return
    setUsers((p) => p.map((u) => (u.id === id ? { ...u, balance: (u.balance || 0) + n } : u)))
  }

  return (
    <div className="admin-page">
      <div className="admin-header admin-header--row">
        <div>
          <h1>Balanslar</h1>
          <p>Jami: {formatSum(totalBalance)}</p>
        </div>
        <input
          className="admin-select"
          style={{ minWidth: 220 }}
          placeholder="Qidiruv..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={filtered}
          columns={[
            {
              key: 'name',
              label: 'Foydalanuvchi',
              render: (r) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {r.avatar && (
                    <img src={r.avatar} alt="" style={{ width: 28, height: 28, borderRadius: '50%' }} />
                  )}
                  <strong>{r.name}</strong>
                </div>
              ),
            },
            { key: 'phone', label: 'Telefon' },
            {
              key: 'balance',
              label: 'Balans',
              render: (r) => <strong style={{ color: '#34D399' }}>{formatSum(r.balance || 0)}</strong>,
            },
            {
              key: 'status',
              label: 'Holat',
              render: (r) => (
                <span className={`badge ${r.status === 'active' ? 'badge--green' : 'badge--red'}`}>
                  {r.status}
                </span>
              ),
            },
            {
              key: 'id',
              label: 'Amallar',
              render: (r) => (
                <button type="button" className="admin-btn admin-btn--ghost" onClick={() => topUp(r.id)}>
                  To‘ldirish
                </button>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

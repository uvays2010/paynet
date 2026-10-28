import { useMemo, useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { formatSum } from '@/data/demoData'
import './Admin.css'
import '@/components/admin/DataTable.css'

const seed = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  code: `REF${1000 + i}`,
  owner: ['Ali', 'Madina', 'Jasur', 'Dilnoza', 'Sardor'][i % 5],
  invites: 3 + (i % 12),
  bonus: (i + 1) * 15000,
  status: i % 4 === 0 ? 'pending' : 'paid',
}))

export default function AdminReferrals() {
  const [q, setQ] = useState('')
  const rows = useMemo(() => {
    const s = q.toLowerCase()
    if (!s) return seed
    return seed.filter((r) => r.code.toLowerCase().includes(s) || r.owner.toLowerCase().includes(s))
  }, [q])
  const total = seed.reduce((a, r) => a + r.bonus, 0)

  return (
    <div className="admin-page">
      <div className="admin-header admin-header--row">
        <div>
          <h1>Referrallar</h1>
          <p>Jami bonus: {formatSum(total)}</p>
        </div>
        <input className="admin-select" placeholder="Kod yoki ism..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={rows}
          columns={[
            { key: 'code', label: 'Kod', render: (r) => <strong>{r.code}</strong> },
            { key: 'owner', label: 'Egasi' },
            { key: 'invites', label: 'Takliflar' },
            { key: 'bonus', label: 'Bonus', render: (r) => formatSum(r.bonus) },
            {
              key: 'status',
              label: 'Holat',
              render: (r) => (
                <span className={`badge ${r.status === 'paid' ? 'badge--green' : 'badge--yellow'}`}>{r.status}</span>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

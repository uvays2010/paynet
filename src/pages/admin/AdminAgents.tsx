import { useState, useMemo } from 'react'
import DataTable from '@/components/admin/DataTable'
import { demoAgents, DemoAgent, formatSum } from '@/data/demoData'
import '../admin/Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminAgents() {
  const [agents, setAgents] = useState(demoAgents)
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('all')
  const [region, setRegion] = useState('all')

  const regions = [...new Set(agents.map((a) => a.region))]

  const filtered = useMemo(() => {
    return agents.filter((a) => {
      const matchQ = a.name.toLowerCase().includes(q.toLowerCase()) || a.phone.includes(q)
      const matchS = status === 'all' || a.status === status
      const matchR = region === 'all' || a.region === region
      return matchQ && matchS && matchR
    })
  }, [agents, q, status, region])

  const setStatusOf = (id: number, s: DemoAgent['status']) => {
    setAgents((prev) => prev.map((a) => a.id === id ? { ...a, status: s } : a))
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Agentlar</h1>
        <p>{agents.length} ta agent · arizalarni tasdiqlash / rad etish</p>
      </div>
      <div className="admin-toolbar">
        <input placeholder="Ism yoki telefon..." value={q} onChange={(e) => setQ(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">Barcha holat</option>
          <option value="active">Faol</option>
          <option value="pending">Kutilmoqda</option>
          <option value="rejected">Rad etilgan</option>
        </select>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="all">Barcha hududlar</option>
          {regions.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={filtered}
          columns={[
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Ism', render: (r) => <strong>{r.name}</strong> },
            { key: 'phone', label: 'Telefon' },
            { key: 'region', label: 'Hudud' },
            { key: 'points', label: 'Punktlar', align: 'center' },
            { key: 'revenue', label: 'Daromad', align: 'right', render: (r) => formatSum(r.revenue) },
            { key: 'status', label: 'Holat', render: (r) => (
              <span className={`badge ${r.status === 'active' ? 'badge--green' : r.status === 'pending' ? 'badge--yellow' : 'badge--red'}`}>
                {r.status === 'active' ? 'Faol' : r.status === 'pending' ? 'Kutilmoqda' : 'Rad'}
              </span>
            )},
            { key: 'actions', label: '', render: (r) => r.status === 'pending' ? (
              <div className="admin-actions">
                <button className="admin-btn admin-btn--primary" onClick={() => setStatusOf(r.id, 'active')}>Tasdiqlash</button>
                <button className="admin-btn admin-btn--danger" onClick={() => setStatusOf(r.id, 'rejected')}>Rad</button>
              </div>
            ) : null },
          ]}
        />
      </div>
    </div>
  )
}

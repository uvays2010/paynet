import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { demoTickets, DemoTicket } from '@/data/demoData'
import '../admin/Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminSupport() {
  const [tickets, setTickets] = useState(demoTickets)
  const [status, setStatus] = useState('all')

  const filtered = tickets.filter((t) => status === 'all' || t.status === status)

  const update = (id: number, data: Partial<DemoTicket>) => {
    setTickets((prev) => prev.map((t) => t.id === id ? { ...t, ...data } : t))
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Murojaatlar</h1>
        <p>Foydalanuvchi so‘rovlari · holat va ustuvorlik</p>
      </div>
      <div className="admin-toolbar">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">Barcha</option>
          <option value="open">Ochiq</option>
          <option value="in_progress">Jarayonda</option>
          <option value="closed">Yopilgan</option>
        </select>
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={filtered}
          columns={[
            { key: 'id', label: '#' },
            { key: 'user', label: 'Foydalanuvchi' },
            { key: 'subject', label: 'Mavzu', render: (r) => <strong>{r.subject}</strong> },
            { key: 'priority', label: 'Ustuvorlik', render: (r) => (
              <span className={`badge ${r.priority === 'high' ? 'badge--red' : r.priority === 'medium' ? 'badge--yellow' : 'badge--gray'}`}>
                {r.priority}
              </span>
            )},
            { key: 'status', label: 'Holat', render: (r) => (
              <span className={`badge ${r.status === 'open' ? 'badge--blue' : r.status === 'in_progress' ? 'badge--yellow' : 'badge--green'}`}>
                {r.status === 'open' ? 'Ochiq' : r.status === 'in_progress' ? 'Jarayonda' : 'Yopiq'}
              </span>
            )},
            { key: 'assignee', label: 'Operator' },
            { key: 'date', label: 'Sana' },
            { key: 'actions', label: '', render: (r) => (
              <div className="admin-actions">
                {r.status === 'open' && (
                  <button className="admin-btn admin-btn--primary" onClick={() => update(r.id, { status: 'in_progress', assignee: 'Bobur' })}>
                    Qabul
                  </button>
                )}
                {r.status !== 'closed' && (
                  <button className="admin-btn admin-btn--ghost" onClick={() => update(r.id, { status: 'closed' })}>Yopish</button>
                )}
              </div>
            )},
          ]}
        />
      </div>
    </div>
  )
}

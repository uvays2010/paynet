import { useMemo, useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import './Admin.css'
import '@/components/admin/DataTable.css'

const logs = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  actor: ['Admin', 'Operator', 'System', 'Content'][i % 4],
  action: ['Login', 'User block', 'Service edit', 'Banner publish', 'Settings save', 'Export CSV'][i % 6],
  target: ['#user-' + (i + 10), '#service-' + (i % 8), '#banner-' + (i % 3), 'settings'][i % 4],
  ip: `192.168.1.${(i % 50) + 1}`,
  time: `2026-10-${String((i % 28) + 1).padStart(2, '0')} ${String(8 + (i % 12)).padStart(2, '0')}:${String((i * 7) % 60).padStart(2, '0')}`,
}))

export default function AdminAudit() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const s = q.toLowerCase()
    if (!s) return logs
    return logs.filter(
      (l) =>
        l.actor.toLowerCase().includes(s) ||
        l.action.toLowerCase().includes(s) ||
        l.target.toLowerCase().includes(s)
    )
  }, [q])

  return (
    <div className="admin-page">
      <div className="admin-header admin-header--row">
        <div>
          <h1>Audit jurnal</h1>
          <p>Admin amallari tarixi · demo</p>
        </div>
        <input className="admin-select" placeholder="Qidiruv..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={filtered}
          columns={[
            { key: 'time', label: 'Vaqt' },
            { key: 'actor', label: 'Kim' },
            { key: 'action', label: 'Amal' },
            { key: 'target', label: 'Obyekt' },
            { key: 'ip', label: 'IP' },
          ]}
        />
      </div>
    </div>
  )
}

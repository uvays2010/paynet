import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { demoServices } from '@/data/demoData'
import './Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminCommissions() {
  const [rows, setRows] = useState(
    demoServices.map((s) => ({
      id: s.id,
      name: s.name,
      category: s.category,
      commission: s.commission,
      status: s.status,
    }))
  )

  const setCommission = (id: number, value: number) => {
    setRows((p) => p.map((r) => (r.id === id ? { ...r, commission: value } : r)))
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Komissiyalar</h1>
        <p>Xizmatlar bo‘yicha foiz · o‘zgartirish lokal saqlanadi (demo)</p>
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={rows}
          columns={[
            { key: 'name', label: 'Xizmat', render: (r) => <strong>{r.name}</strong> },
            { key: 'category', label: 'Kategoriya' },
            {
              key: 'commission',
              label: 'Komissiya %',
              render: (r) => (
                <input
                  type="number"
                  min={0}
                  max={20}
                  step={0.1}
                  value={r.commission}
                  onChange={(e) => setCommission(r.id, Number(e.target.value))}
                  style={{
                    width: 80,
                    padding: '6px 8px',
                    borderRadius: 8,
                    border: '1px solid #334155',
                    background: '#0B1120',
                    color: '#F8FAFC',
                  }}
                />
              ),
            },
            {
              key: 'status',
              label: 'Holat',
              render: (r) => (
                <span className={`badge ${r.status === 'active' ? 'badge--green' : 'badge--gray'}`}>
                  {r.status}
                </span>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

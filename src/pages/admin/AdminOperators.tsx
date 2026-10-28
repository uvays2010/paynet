import { useMemo, useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import './Admin.css'
import '@/components/admin/DataTable.css'

type Op = { id: number; name: string; phone: string; shift: string; tickets: number; status: 'online' | 'offline' }

const seed: Op[] = [
  { id: 1, name: 'Dilnoza K.', phone: '+99890 111-22-33', shift: '08:00–16:00', tickets: 24, status: 'online' },
  { id: 2, name: 'Jasur R.', phone: '+99891 222-33-44', shift: '16:00–00:00', tickets: 18, status: 'online' },
  { id: 3, name: 'Madina A.', phone: '+99893 333-44-55', shift: '00:00–08:00', tickets: 11, status: 'offline' },
  { id: 4, name: 'Bekzod T.', phone: '+99894 444-55-66', shift: '08:00–16:00', tickets: 31, status: 'online' },
  { id: 5, name: 'Sardor N.', phone: '+99895 555-66-77', shift: '16:00–00:00', tickets: 9, status: 'offline' },
]

export default function AdminOperators() {
  const [rows, setRows] = useState(seed)
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const s = q.toLowerCase()
    return rows.filter((r) => r.name.toLowerCase().includes(s) || r.phone.includes(s))
  }, [rows, q])

  return (
    <div className="admin-page">
      <div className="admin-header admin-header--row">
        <div>
          <h1>Operatorlar</h1>
          <p>Support smenasi · demo</p>
        </div>
        <input
          className="admin-select"
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
            { key: 'name', label: 'Ism', render: (r) => <strong>{r.name}</strong> },
            { key: 'phone', label: 'Telefon' },
            { key: 'shift', label: 'Smena' },
            { key: 'tickets', label: 'Ticketlar' },
            {
              key: 'status',
              label: 'Holat',
              render: (r) => (
                <span className={`badge ${r.status === 'online' ? 'badge--green' : 'badge--gray'}`}>
                  {r.status}
                </span>
              ),
            },
            {
              key: 'id',
              label: '',
              render: (r) => (
                <button
                  type="button"
                  className="admin-btn admin-btn--ghost"
                  onClick={() =>
                    setRows((p) =>
                      p.map((x) =>
                        x.id === r.id
                          ? { ...x, status: x.status === 'online' ? 'offline' : 'online' }
                          : x
                      )
                    )
                  }
                >
                  Holatni almashtirish
                </button>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import './Admin.css'
import '@/components/admin/DataTable.css'

type Promo = { id: number; title: string; code: string; discount: string; until: string; active: boolean }

const seed: Promo[] = [
  { id: 1, title: 'Yangi mijoz', code: 'WELCOME5', discount: '5%', until: '2026-12-31', active: true },
  { id: 2, title: 'Steam cashback', code: 'STEAM3', discount: '3%', until: '2026-11-30', active: true },
  { id: 3, title: 'Agent bonus', code: 'AGENT10', discount: '10k', until: '2026-10-31', active: false },
  { id: 4, title: 'Bayram aksiya', code: 'HOLIDAY', discount: '7%', until: '2027-01-10', active: true },
]

export default function AdminPromotions() {
  const [rows, setRows] = useState(seed)
  return (
    <div className="admin-page">
      <div className="admin-header admin-header--row">
        <div>
          <h1>Aksiyalar / Promo</h1>
          <p>Kodlar va chegirmalar · demo</p>
        </div>
        <button
          type="button"
          className="admin-btn admin-btn--primary"
          onClick={() =>
            setRows((p) => [
              {
                id: Date.now(),
                title: 'Yangi aksiya',
                code: 'NEW' + Math.floor(Math.random() * 100),
                discount: '2%',
                until: '2026-12-31',
                active: true,
              },
              ...p,
            ])
          }
        >
          + Qo‘shish
        </button>
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={rows}
          columns={[
            { key: 'title', label: 'Nomi', render: (r) => <strong>{r.title}</strong> },
            { key: 'code', label: 'Kod' },
            { key: 'discount', label: 'Chegirma' },
            { key: 'until', label: 'Amal qilish' },
            {
              key: 'active',
              label: 'Holat',
              render: (r) => (
                <button
                  type="button"
                  className={`badge ${r.active ? 'badge--green' : 'badge--gray'}`}
                  onClick={() => setRows((p) => p.map((x) => (x.id === r.id ? { ...x, active: !x.active } : x)))}
                >
                  {r.active ? 'Faol' : 'O‘chiq'}
                </button>
              ),
            },
            {
              key: 'id',
              label: '',
              render: (r) => (
                <button type="button" className="admin-btn admin-btn--danger" onClick={() => setRows((p) => p.filter((x) => x.id !== r.id))}>
                  O‘chirish
                </button>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

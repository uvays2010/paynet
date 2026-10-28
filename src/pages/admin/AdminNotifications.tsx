import DataTable from '@/components/admin/DataTable'
import { demoNotifications } from '@/data/demoData'
import './Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminNotifications() {
  return (
    <div className="admin-page">
      <div className="admin-header admin-header--row">
        <div>
          <h1>Bildirishnomalar</h1>
          <p>Push / in-app e’lonlar tarixi</p>
        </div>
        <button type="button" className="admin-btn admin-btn--primary">+ Yangi e’lon</button>
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={demoNotifications}
          columns={[
            { key: 'title', label: 'Sarlavha', render: (r) => <strong>{r.title}</strong> },
            { key: 'body', label: 'Matn' },
            { key: 'audience', label: 'Auditoriya' },
            { key: 'sentAt', label: 'Yuborilgan' },
            { key: 'readRate', label: 'O‘qilgan %', render: (r) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 6, background: '#334155', borderRadius: 4, maxWidth: 80 }}>
                  <div style={{ width: `${r.readRate}%`, height: '100%', background: '#00A651', borderRadius: 4 }} />
                </div>
                {r.readRate}%
              </div>
            )},
          ]}
        />
      </div>
    </div>
  )
}

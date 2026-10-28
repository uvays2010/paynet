import { useEffect, useMemo, useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { platform, PlatformUser, subscribePlatform } from '@/store/platformStore'
import { formatSum } from '@/data/demoData'
import './Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminUsers() {
  const [users, setUsers] = useState<PlatformUser[]>([])
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('all')

  const refresh = () => setUsers(platform.getUsers())

  useEffect(() => {
    platform.init()
    refresh()
    const h = () => refresh()
    return subscribePlatform(h)
  }, [])

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const matchQ =
        u.name.toLowerCase().includes(q.toLowerCase()) || u.phone.includes(q)
      const matchS = status === 'all' || u.status === status
      return matchQ && matchS
    })
  }, [users, q, status])

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Foydalanuvchilar</h1>
        <p>Platforma foydalanuvchilari · public bilan bir xil store</p>
      </div>
      <div className="admin-toolbar">
        <input placeholder="Ism yoki telefon..." value={q} onChange={(e) => setQ(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">Barcha holat</option>
          <option value="active">Faol</option>
          <option value="blocked">Blok</option>
        </select>
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={filtered}
          columns={[
            { key: 'name', label: 'Ism', render: (r) => <strong>{r.name}</strong> },
            { key: 'phone', label: 'Telefon' },
            { key: 'role', label: 'Rol' },
            {
              key: 'balance',
              label: 'Balans',
              render: (r) => <span style={{ color: '#34D399' }}>{formatSum(r.balance)}</span>,
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
                <div className="admin-actions">
                  <button
                    type="button"
                    className="admin-btn admin-btn--ghost"
                    onClick={() => {
                      platform.setUserStatus(r.id, r.status === 'active' ? 'blocked' : 'active')
                      refresh()
                    }}
                  >
                    {r.status === 'active' ? 'Blok' : 'Faol'}
                  </button>
                  <button
                    type="button"
                    className="admin-btn admin-btn--primary"
                    onClick={() => {
                      const n = Number(prompt('To‘ldirish summası', '50000'))
                      if (n > 0) {
                        platform.topUp(r.id, n)
                        refresh()
                      }
                    }}
                  >
                    To‘ldirish
                  </button>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

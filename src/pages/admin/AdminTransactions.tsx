import { useMemo, useState, useEffect } from 'react'
import DataTable from '@/components/admin/DataTable'
import { platform, Tx, subscribePlatform } from '@/store/platformStore'
import { formatSum } from '@/data/demoData'
import './Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminTransactions() {
  const [rows, setRows] = useState<Tx[]>([])
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('all')
  const [page, setPage] = useState(1)
  const perPage = 12

  const refresh = () => setRows(platform.getTxs())

  useEffect(() => {
    platform.init()
    refresh()
    const h = () => refresh()
    return subscribePlatform(h)
  }, [])

  const filtered = useMemo(() => {
    return rows.filter((t) => {
      const matchQ =
        t.id.toLowerCase().includes(q.toLowerCase()) ||
        t.service.toLowerCase().includes(q.toLowerCase()) ||
        (t.userName || '').toLowerCase().includes(q.toLowerCase()) ||
        t.account.includes(q)
      const matchS = status === 'all' || t.status === status
      return matchQ && matchS
    })
  }, [rows, q, status])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const pageData = filtered.slice((page - 1) * perPage, page * perPage)
  const st = platform.stats()

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Tranzaksiyalar</h1>
        <p>Public demo to‘lovlar shu yerda ham ko‘rinadi · live</p>
      </div>

      <div className="admin-stats" style={{ marginBottom: 20 }}>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">{st.totalTx}</div>
          <div className="admin-stat-card__label">Jami</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value" style={{ color: '#34D399' }}>{st.successTx}</div>
          <div className="admin-stat-card__label">OK</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value" style={{ color: '#F87171' }}>{st.failedTx}</div>
          <div className="admin-stat-card__label">Xato</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">{formatSum(st.volume)}</div>
          <div className="admin-stat-card__label">Aylanma</div>
        </div>
      </div>

      <div className="admin-toolbar">
        <input placeholder="Qidiruv..." value={q} onChange={(e) => { setQ(e.target.value); setPage(1) }} />
        <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1) }}>
          <option value="all">Barcha holat</option>
          <option value="success">Success</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      <div className="admin-card">
        <DataTable
          keyField="id"
          data={pageData}
          columns={[
            { key: 'id', label: 'ID', render: (r) => <strong>{r.id}</strong> },
            { key: 'service', label: 'Xizmat' },
            { key: 'userName', label: 'Foydalanuvchi' },
            { key: 'account', label: 'Hisob' },
            { key: 'amount', label: 'Summa', render: (r) => formatSum(r.amount) },
            { key: 'channel', label: 'Kanal' },
            {
              key: 'status',
              label: 'Holat',
              render: (r) => (
                <span className={`badge ${r.status === 'success' ? 'badge--green' : r.status === 'failed' ? 'badge--red' : 'badge--yellow'}`}>
                  {r.status}
                </span>
              ),
            },
            {
              key: 'createdAt',
              label: 'Vaqt',
              render: (r) => new Date(r.createdAt).toLocaleString('uz-UZ'),
            },
          ]}
        />
        <div className="admin-pagination">
          <span>
            {filtered.length} ta · sahifa {page}/{totalPages}
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" disabled={page <= 1} onClick={() => setPage(page - 1)}>
              ←
            </button>
            <button type="button" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

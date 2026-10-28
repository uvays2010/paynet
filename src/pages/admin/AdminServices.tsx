import { useState, useMemo } from 'react'
import DataTable from '@/components/admin/DataTable'
import { demoServices, DemoService } from '@/data/demoData'
import '../admin/Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminServices() {
  const [services, setServices] = useState(demoServices)
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')
  const [modal, setModal] = useState<DemoService | null>(null)
  const [creating, setCreating] = useState(false)

  const categories = [...new Set(services.map((s) => s.category))]

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchQ = s.name.toLowerCase().includes(q.toLowerCase())
      const matchC = cat === 'all' || s.category === cat
      return matchQ && matchC
    }).sort((a, b) => a.order - b.order)
  }, [services, q, cat])

  const toggle = (id: number) => {
    setServices((prev) => prev.map((s) => s.id === id ? { ...s, status: s.status === 'active' ? 'inactive' : 'active' } : s))
  }

  const remove = (id: number) => {
    if (confirm('Xizmatni o‘chirishni tasdiqlaysizmi?')) {
      setServices((prev) => prev.filter((s) => s.id !== id))
    }
  }

  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (creating) {
      setServices((prev) => [{
        id: Date.now(),
        name: String(fd.get('name')),
        category: String(fd.get('category')),
        commission: Number(fd.get('commission')),
        status: 'active',
        icon: 'package',
        order: prev.length + 1,
      }, ...prev])
      setCreating(false)
    } else if (modal) {
      setServices((prev) => prev.map((s) => s.id === modal.id ? {
        ...s,
        name: String(fd.get('name')),
        category: String(fd.get('category')),
        commission: Number(fd.get('commission')),
      } : s))
      setModal(null)
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Xizmatlar</h1>
        <p>{services.length} ta xizmat · kategoriya, komissiya, holat</p>
      </div>
      <div className="admin-toolbar">
        <input placeholder="Xizmat qidirish..." value={q} onChange={(e) => setQ(e.target.value)} />
        <select value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="all">Barcha kategoriyalar</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <button className="admin-btn admin-btn--primary" onClick={() => setCreating(true)}>+ Yangi xizmat</button>
      </div>
      <div className="admin-card">
        <DataTable
          keyField="id"
          data={filtered}
          columns={[
            { key: 'order', label: '#' },
            { key: 'name', label: 'Nomi', render: (r) => <strong>{r.name}</strong> },
            { key: 'category', label: 'Kategoriya' },
            { key: 'commission', label: 'Komissiya', render: (r) => `${r.commission}%` },
            { key: 'status', label: 'Holat', render: (r) => (
              <span className={`badge ${r.status === 'active' ? 'badge--green' : 'badge--gray'}`}>
                {r.status === 'active' ? 'Yoqilgan' : 'O‘chirilgan'}
              </span>
            )},
            { key: 'actions', label: '', render: (r) => (
              <div className="admin-actions">
                <button className="admin-btn admin-btn--ghost" onClick={() => setModal(r)}>Tahrir</button>
                <button className="admin-btn admin-btn--ghost" onClick={() => toggle(r.id)}>
                  {r.status === 'active' ? 'O‘chirish' : 'Yoqish'}
                </button>
                <button className="admin-btn admin-btn--danger" onClick={() => remove(r.id)}>🗑</button>
              </div>
            )},
          ]}
        />
      </div>

      {(modal || creating) && (
        <div className="modal-overlay" onClick={() => { setModal(null); setCreating(false) }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{creating ? 'Yangi xizmat' : 'Xizmatni tahrirlash'}</h2>
            <form onSubmit={save}>
              <div className="modal-field"><label>Nomi</label><input name="name" defaultValue={modal?.name} required /></div>
              <div className="modal-field">
                <label>Kategoriya</label>
                <select name="category" defaultValue={modal?.category || 'Mobil aloqa'}>
                  {['Mobil aloqa', 'Internet', 'TV', 'Kommunal', 'Transport', 'Davlat', 'O‘yin', 'Boshqa'].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="modal-field"><label>Komissiya (%)</label><input name="commission" type="number" step="0.1" defaultValue={modal?.commission ?? 0} /></div>
              <div className="modal-actions">
                <button type="button" className="admin-btn admin-btn--ghost" onClick={() => { setModal(null); setCreating(false) }}>Bekor</button>
                <button type="submit" className="admin-btn admin-btn--primary">Saqlash</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

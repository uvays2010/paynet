import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { demoNews, DemoNews } from '@/data/demoData'
import '../admin/Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminCMS() {
  const [news, setNews] = useState(demoNews)
  const [tab, setTab] = useState<'news' | 'faq'>('news')
  const [modal, setModal] = useState<DemoNews | null>(null)
  const [creating, setCreating] = useState(false)

  const faqs = [
    { id: 1, q: 'Paynet orqali qanday to‘lov qilish mumkin?', a: 'Ilova, terminal, agent orqali.' },
    { id: 2, q: 'Komissiya qancha?', a: 'Ko‘p xizmatlar 0% yoki minimal.' },
    { id: 3, q: 'Agent bo‘lish uchun nima kerak?', a: 'Ariza qoldiring va shartnoma imzolang.' },
  ]

  const publish = (id: number) => {
    setNews((prev) => prev.map((n) => n.id === id ? { ...n, status: 'published' as const } : n))
  }

  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (creating) {
      setNews((prev) => [{
        id: Date.now(),
        title: String(fd.get('title')),
        excerpt: String(fd.get('excerpt')),
        content: String(fd.get('content')),
        status: 'draft',
        date: new Date().toISOString().slice(0, 10),
        author: 'Admin',
      }, ...prev])
      setCreating(false)
    } else if (modal) {
      setNews((prev) => prev.map((n) => n.id === modal.id ? {
        ...n,
        title: String(fd.get('title')),
        excerpt: String(fd.get('excerpt')),
        content: String(fd.get('content')),
      } : n))
      setModal(null)
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Kontent boshqaruvi (CMS)</h1>
        <p>Yangiliklar, FAQ, bannerlar</p>
      </div>
      <div className="admin-toolbar">
        <button className={`admin-btn ${tab === 'news' ? 'admin-btn--primary' : 'admin-btn--ghost'}`} onClick={() => setTab('news')}>Yangiliklar</button>
        <button className={`admin-btn ${tab === 'faq' ? 'admin-btn--primary' : 'admin-btn--ghost'}`} onClick={() => setTab('faq')}>FAQ</button>
        {tab === 'news' && <button className="admin-btn admin-btn--primary" onClick={() => setCreating(true)}>+ Yangilik</button>}
      </div>

      {tab === 'news' ? (
        <div className="admin-card">
          <DataTable
            keyField="id"
            data={news}
            columns={[
              { key: 'title', label: 'Sarlavha', render: (r) => <strong>{r.title}</strong> },
              { key: 'author', label: 'Muallif' },
              { key: 'date', label: 'Sana' },
              { key: 'status', label: 'Holat', render: (r) => (
                <span className={`badge ${r.status === 'published' ? 'badge--green' : 'badge--yellow'}`}>
                  {r.status === 'published' ? 'Nashr' : 'Qoralama'}
                </span>
              )},
              { key: 'actions', label: '', render: (r) => (
                <div className="admin-actions">
                  <button className="admin-btn admin-btn--ghost" onClick={() => setModal(r)}>Tahrir</button>
                  {r.status === 'draft' && <button className="admin-btn admin-btn--primary" onClick={() => publish(r.id)}>Nashr</button>}
                </div>
              )},
            ]}
          />
        </div>
      ) : (
        <div className="admin-card">
          <DataTable
            keyField="id"
            data={faqs}
            columns={[
              { key: 'q', label: 'Savol', render: (r) => <strong>{r.q}</strong> },
              { key: 'a', label: 'Javob' },
            ]}
          />
        </div>
      )}

      {(modal || creating) && (
        <div className="modal-overlay" onClick={() => { setModal(null); setCreating(false) }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{creating ? 'Yangi yangilik' : 'Tahrirlash'}</h2>
            <form onSubmit={save}>
              <div className="modal-field"><label>Sarlavha</label><input name="title" defaultValue={modal?.title} required /></div>
              <div className="modal-field"><label>Qisqa matn</label><input name="excerpt" defaultValue={modal?.excerpt} /></div>
              <div className="modal-field"><label>To‘liq matn</label><textarea name="content" rows={4} defaultValue={modal?.content} /></div>
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

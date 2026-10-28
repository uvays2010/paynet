import { useState } from 'react'
import './Admin.css'

type Faq = { id: number; q: string; a: string; cat: string }

const seed: Faq[] = [
  { id: 1, q: 'To‘lov qancha vaqtda o‘tadi?', a: 'Odatda bir necha soniya ichida.', cat: 'To‘lov' },
  { id: 2, q: 'Komissiya bormi?', a: 'Ko‘p mobil yo‘nalishlarda 0%. Boshqalarida farq qilishi mumkin.', cat: 'Komissiya' },
  { id: 3, q: 'Agent qanday bo‘lish mumkin?', a: 'Become-agent sahifasidan ariza topshiring.', cat: 'Agent' },
  { id: 4, q: 'Parolni unutdim', a: 'Demo tizimda faqat admin paroli ishlatiladi.', cat: 'Kirish' },
  { id: 5, q: 'Terminal qayerda?', a: 'Terminallar xaritasi sahifasidan qidiring.', cat: 'Terminal' },
]

export default function AdminFAQ() {
  const [items, setItems] = useState(seed)
  const [q, setQ] = useState('')
  const [a, setA] = useState('')
  const [cat, setCat] = useState('Umumiy')

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    if (!q.trim() || !a.trim()) return
    setItems((p) => [{ id: Date.now(), q, a, cat }, ...p])
    setQ('')
    setA('')
  }

  const remove = (id: number) => setItems((p) => p.filter((x) => x.id !== id))

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>FAQ boshqaruvi</h1>
        <p>Savol-javoblarni qo‘shish / o‘chirish · demo</p>
      </div>
      <form className="admin-card" style={{ padding: 20, marginBottom: 20 }} onSubmit={add}>
        <input placeholder="Savol" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: '100%', marginBottom: 8, padding: 10, borderRadius: 8, border: '1px solid #334155', background: '#0B1120', color: '#fff', boxSizing: 'border-box' }} />
        <textarea placeholder="Javob" value={a} onChange={(e) => setA(e.target.value)} rows={3} style={{ width: '100%', marginBottom: 8, padding: 10, borderRadius: 8, border: '1px solid #334155', background: '#0B1120', color: '#fff', boxSizing: 'border-box' }} />
        <input placeholder="Kategoriya" value={cat} onChange={(e) => setCat(e.target.value)} style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: '1px solid #334155', background: '#0B1120', color: '#fff', boxSizing: 'border-box' }} />
        <button type="submit" className="admin-btn admin-btn--primary">Qo‘shish</button>
      </form>
      <div className="admin-card" style={{ padding: 8 }}>
        {items.map((item) => (
          <div key={item.id} style={{ padding: 16, borderBottom: '1px solid #334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <div>
                <span className="badge badge--green">{item.cat}</span>
                <h3 style={{ margin: '8px 0 4px', color: '#F8FAFC' }}>{item.q}</h3>
                <p style={{ margin: 0, color: '#94A3B8' }}>{item.a}</p>
              </div>
              <button type="button" className="admin-btn admin-btn--danger" onClick={() => remove(item.id)}>O‘chirish</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

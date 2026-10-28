import { useState } from 'react'
import { Briefcase, MapPin, Clock, Send } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useToast } from '@/components/widgets/Toast'
import './PageShared.css'

const jobs = [
  { id: 1, title: 'Frontend Developer (React)', city: 'Toshkent', type: 'Full-time', dept: 'IT' },
  { id: 2, title: 'Backend Developer (Python)', city: 'Toshkent', type: 'Full-time', dept: 'IT' },
  { id: 3, title: 'Product Manager', city: 'Toshkent', type: 'Full-time', dept: 'Product' },
  { id: 4, title: 'Regional Manager', city: 'Samarqand', type: 'Full-time', dept: 'Sales' },
  { id: 5, title: 'Support Operator', city: 'Toshkent', type: 'Shift', dept: 'Support' },
  { id: 6, title: 'Marketing Specialist', city: 'Toshkent / Remote', type: 'Full-time', dept: 'Marketing' },
  { id: 7, title: 'Agent Network Coordinator', city: 'Farg‘ona', type: 'Full-time', dept: 'Sales' },
  { id: 8, title: 'QA Engineer', city: 'Toshkent', type: 'Full-time', dept: 'IT' },
]

export default function CareersPage() {
  const { push } = useToast()
  const [filter, setFilter] = useState('all')
  const [form, setForm] = useState({ name: '', phone: '', job: '', message: '' })

  const list = filter === 'all' ? jobs : jobs.filter((j) => j.dept === filter)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    push('Ariza qabul qilindi (demo)', 'success')
    setForm({ name: '', phone: '', job: '', message: '' })
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Karyera</span>
          <h1>Paynet jamoasiga qo‘shiling</h1>
          <p>Fintech, sales, support va product yo‘nalishlari</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {['all', 'IT', 'Sales', 'Support', 'Product', 'Marketing'].map((d) => (
              <button
                key={d}
                type="button"
                className="page-chip"
                onClick={() => setFilter(d)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 999,
                  border: filter === d ? 'none' : '1px solid #E2E8F0',
                  background: filter === d ? '#00A651' : '#fff',
                  color: filter === d ? '#fff' : '#334155',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {d === 'all' ? 'Barchasi' : d}
              </button>
            ))}
          </div>
          <div className="page-grid-2">
            {list.map((j) => (
              <div key={j.id} className="page-card" style={{ padding: 24 }}>
                <div className="page-icon"><Briefcase size={22} /></div>
                <h3 style={{ marginTop: 12 }}>{j.title}</h3>
                <p style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 14 }}>
                  <span><MapPin size={14} style={{ verticalAlign: -2 }} /> {j.city}</span>
                  <span><Clock size={14} style={{ verticalAlign: -2 }} /> {j.type}</span>
                  <span style={{ color: '#00A651', fontWeight: 600 }}>{j.dept}</span>
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setForm((f) => ({ ...f, job: j.title }))}
                >
                  Ariza topshirish
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="page-section page-section--alt">
        <div className="container" style={{ maxWidth: 560 }}>
          <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Ariza formasi</h2>
          <form className="page-form" onSubmit={submit}>
            <input placeholder="Ism" value={form.name} required onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Telefon" value={form.phone} required onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input placeholder="Lavozim" value={form.job} onChange={(e) => setForm({ ...form, job: e.target.value })} />
            <textarea placeholder="O‘zingiz haqingizda" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" fullWidth><Send size={16} /> Yuborish</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

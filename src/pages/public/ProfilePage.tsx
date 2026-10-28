import { useEffect, useState } from 'react'
import { User, Save } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useToast } from '@/components/widgets/Toast'
import { appStore } from '@/store/appStore'
import './PageShared.css'

export default function ProfilePage() {
  const { push } = useToast()
  const [form, setForm] = useState({ name: '', phone: '', city: '' })

  useEffect(() => {
    setForm(appStore.getProfile())
  }, [])

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    appStore.saveProfile(form)
    appStore.addNotification('Profil yangilandi', `${form.name} — ma’lumotlar saqlandi`)
    push('Profil saqlandi', 'success')
  }

  const input = {
    width: '100%' as const,
    padding: '12px 14px',
    borderRadius: 12,
    border: '1.5px solid #E2E8F0',
    marginBottom: 14,
    boxSizing: 'border-box' as const,
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>
            <User size={14} style={{ verticalAlign: -2 }} /> Profil
          </span>
          <h1>Shaxsiy ma’lumotlar</h1>
          <p>Demo profil — localStorage</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container" style={{ maxWidth: 480 }}>
          <form className="page-card" style={{ padding: 28 }} onSubmit={save}>
            <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#334155' }}>Ism</label>
            <input
              style={input}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#334155' }}>Telefon</label>
            <input
              style={input}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#334155' }}>Shahar</label>
            <input
              style={input}
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <Button type="submit" fullWidth>
              <Save size={16} /> Saqlash
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

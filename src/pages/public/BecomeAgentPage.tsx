import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'

export default function BecomeAgentPage() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="page">
        <section className="page-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: 480 }}>
            <CheckCircle2 size={64} color="#00A651" />
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: '16px 0 8px' }}>Ariza qabul qilindi</h1>
            <p style={{ color: '#64748B' }}>Tez orada mutaxassislarimiz bog‘lanadi. (Demo — haqiqiy yuborilmaydi)</p>
            <Button style={{ marginTop: 20 }} onClick={() => setSent(false)}>Yana ariza</Button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Ariza</span>
          <h1>Agent bo‘lish</h1>
          <p>Formani to‘ldiring — jamoa siz bilan bog‘lanadi.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container" style={{ maxWidth: 640 }}>
          <form
            className="page-form"
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          >
            <h2 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 700 }}>Ariza formasi</h2>
            <p style={{ margin: '0 0 8px', color: '#64748B', fontSize: 14 }}>Barcha maydonlarni to‘ldiring</p>
            <input name="name" placeholder="F.I.Sh." required />
            <input name="phone" type="tel" placeholder="Telefon (+998...)" required />
            <input name="email" type="email" placeholder="Email" />
            <select name="region" required defaultValue="">
              <option value="" disabled>Hududni tanlang</option>
              {['Toshkent', 'Samarqand', 'Andijon', 'Farg‘ona', 'Namangan', 'Buxoro', 'Xorazm', 'Qashqadaryo', 'Surxondaryo', 'Jizzax', 'Sirdaryo', 'Navoiy', 'Qoraqalpog‘iston'].map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <select name="type" required defaultValue="">
              <option value="" disabled>Faoliyat turi</option>
              <option>Do‘kon / savdo nuqtasi</option>
              <option>Alohida ofis</option>
              <option>Terminal o‘rnatish</option>
              <option>Boshqa</option>
            </select>
            <textarea name="message" rows={4} placeholder="Qo‘shimcha ma’lumot" />
            <label style={{ fontSize: 13, color: '#64748B', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <input type="checkbox" required style={{ marginTop: 3 }} />
              Shartnoma va maxfiylik siyosatiga roziman
            </label>
            <Button type="submit" size="lg" fullWidth>Yuborish</Button>
          </form>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="page-head"><span className="page-label">Talablar</span><h2>Nima kerak bo‘ladi</h2></div>
          <div className="page-grid-3">
            {['Yuridik yoki jismoniy shaxs hujjatlari', 'Faoliyat joyi (ijara / mulk)', 'Asosiy texnika (kompyuter, internet)', 'Minimal depozit (shartnomaga qarab)', 'Treningdan o‘tish', 'Paynet brendi standartlariga rioya'].map((t) => (
              <div key={t} className="page-card" style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#00A651" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, color: '#334155', fontSize: 14 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

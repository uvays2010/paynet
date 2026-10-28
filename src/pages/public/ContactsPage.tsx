import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'

const offices = [
  { city: 'Toshkent', addr: 'Yakkasaroy, Rustaveli 53B', phone: '+998 78 150-15-15' },
  { city: 'Samarqand', addr: 'Registon ko‘chasi, 12', phone: '+998 66 233-00-00' },
  { city: 'Andijon', addr: 'Bobur shoh ko‘chasi', phone: '+998 74 222-00-00' },
  { city: 'Buxoro', addr: 'Mustaqillik ko‘chasi', phone: '+998 65 223-00-00' },
]

export default function ContactsPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Aloqa</span>
          <h1>Kontaktlar</h1>
          <p>Savol, taklif yoki hamkorlik — biz bilan bog‘laning.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-grid-2">
          <div>
            <span className="page-label">Ma’lumot</span>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: '8px 0 20px' }}>Bog‘lanish usullari</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: Phone, t: 'Call-markaz', d: '+998 78 150-15-15 · 24/7' },
                { icon: Mail, t: 'Email', d: 'info@paynet.uz · support@paynet.uz' },
                { icon: MapPin, t: 'Bosh ofis', d: 'Toshkent, Yakkasaroy, Rustaveli 53B' },
                { icon: Clock, t: 'Ish vaqti', d: 'Ofis: 09:00–18:00 · Call-markaz: 24/7' },
              ].map((x) => (
                <div key={x.t} className="page-card" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div className="page-icon" style={{ margin: 0 }}><x.icon size={20} /></div>
                  <div>
                    <h3 style={{ margin: 0 }}>{x.t}</h3>
                    <p>{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="page-form" onSubmit={(e) => { e.preventDefault(); alert('Demo: xabar yuborilmadi, forma ishlaydi') }}>
            <h3 style={{ margin: 0 }}>Xabar yuborish</h3>
            <input placeholder="Ism" required />
            <input type="tel" placeholder="Telefon" required />
            <input type="email" placeholder="Email" />
            <select defaultValue="">
              <option value="" disabled>Mavzu</option>
              <option>Umumiy savol</option>
              <option>Hamkorlik</option>
              <option>Texnik yordam</option>
              <option>Agentlik</option>
            </select>
            <textarea rows={5} placeholder="Xabaringiz" required />
            <Button type="submit" fullWidth>Yuborish <Send size={16} /></Button>
          </form>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="page-head"><span className="page-label">Ofislar</span><h2>Hududiy kontaktlar</h2></div>
          <div className="page-grid-4">
            {offices.map((o) => (
              <div key={o.city} className="page-card">
                <h3>{o.city}</h3>
                <p>{o.addr}</p>
                <p style={{ color: '#00A651', fontWeight: 600, marginTop: 8 }}>{o.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-img-round" style={{ height: 320 }}>
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop" alt="Map" style={{ height: 320 }} />
          </div>
        </div>
      </section>
    </div>
  )
}

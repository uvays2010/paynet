import { Link } from 'react-router-dom'
import { Calendar, Percent, Shield, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'

export default function InstallmentPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Mahsulot</span>
          <h1>Muddatli to‘lov</h1>
          <p>Katta xaridlarni 18 oygacha bo‘lib to‘lang — qulay va tushunarli shartlar.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-grid-3">
            {[
              { icon: Calendar, t: '18 oygacha', d: 'Mos muddatni tanlang' },
              { icon: Percent, t: 'Shaffof foiz', d: 'Oldindan ko‘rsatilgan shartlar' },
              { icon: Shield, t: 'Ishonchli', d: 'Rasmiy shartnoma asosida' },
            ].map((x) => (
              <div key={x.t} className="page-card">
                <div className="page-icon"><x.icon size={22} /></div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container page-grid-2">
          <div className="page-img-round">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" alt="" />
          </div>
          <div>
            <span className="page-label">Qanday</span>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: '8px 0 14px' }}>Jarayon</h2>
            <ul className="page-list">
              {['Mahsulot / xizmatni tanlang', 'Muddatli to‘lov rejimini yoqing', 'Hujjatlar va tasdiqlash', 'Oylik to‘lovlarni bajaring'].map((x) => (
                <li key={x}><CheckCircle2 size={18} color="#00A651" /> {x}</li>
              ))}
            </ul>
            <Link to="/contacts"><Button>Batafsil so‘rash</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

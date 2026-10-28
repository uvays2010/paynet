import { Link } from 'react-router-dom'
import { FileText, Building2, Shield, BarChart3, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'

const features = [
  { icon: FileText, t: 'Hisob-faktura', d: 'Elektron hujjatlar va EHF' },
  { icon: Building2, t: 'Yuridik shaxslar', d: 'Korxonalar bilan hisob-kitob' },
  { icon: BarChart3, t: 'Hisobotlar', d: 'Daromad va to‘lovlar tahlili' },
  { icon: Shield, t: 'Xavfsizlik', d: 'Shifrlangan ma’lumotlar' },
]

export default function XolisPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Mahsulot</span>
          <h1>Xolis</h1>
          <p>Yakka tartibdagi tadbirkorlar va kichik biznes uchun hisob-kitob yechimi.</p>
          <div style={{ marginTop: 24 }}>
            <Link to="/contacts"><Button size="lg">Konsultatsiya</Button></Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-grid-2">
          <div>
            <span className="page-label">Nima bu</span>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: '8px 0 14px' }}>Biznes to‘lovlari oddiy</h2>
            <p style={{ color: '#64748B', lineHeight: 1.7 }}>
              Xolis orqali mijozlar va yetkazib beruvchilar bilan hisob-kitobni raqamlashtirasiz,
              hujjatlarni tartibga solasiz va vaqtni tejaysiz.
            </p>
            <ul className="page-list">
              {['Tezkor to‘lovlar', 'EHF qo‘llab-quvvatlash', 'Mobil va web', 'Texnik yordam'].map((x) => (
                <li key={x}><CheckCircle2 size={18} color="#00A651" /> {x}</li>
              ))}
            </ul>
          </div>
          <div className="page-img-round">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="" />
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="page-head"><span className="page-label">Imkoniyatlar</span><h2>Asosiy funksiyalar</h2></div>
          <div className="page-grid-4">
            {features.map((f) => (
              <div key={f.t} className="page-card">
                <div className="page-icon"><f.icon size={22} /></div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

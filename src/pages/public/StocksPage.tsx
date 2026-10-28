import { Percent, Gift, Zap, Star } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import './PageShared.css'

const stocks = [
  { icon: Percent, title: 'Yangi mijozlarga 5% keshbek', period: '31.12.2026 gacha', text: 'Birinchi 5 ta to‘lovda qisman qaytarish.', img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&h=280&fit=crop' },
  { icon: Gift, title: 'Steam 2x foyda', period: 'Cheklangan', text: 'Steam hisobini to‘ldirishda bonus.', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=280&fit=crop' },
  { icon: Zap, title: 'Kommunal 0% komissiya', period: 'Doimiy', text: 'Elektr, gaz, suv — ko‘pincha komissiyasiz.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=280&fit=crop' },
  { icon: Star, title: 'Agentlar uchun bonus', period: 'Choraklik', text: 'Eng faol agentlarga qo‘shimcha mukofot.', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=280&fit=crop' },
]

export default function StocksPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Takliflar</span>
          <h1>Aksiyalar va keshbek</h1>
          <p>Joriy chegirmalar, bonuslar va foydali shartlar.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-grid-2">
          {stocks.map((s) => (
            <div key={s.title} className="page-card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src={s.img} alt="" style={{ height: 160, margin: 0, borderRadius: 0 }} />
              <div style={{ padding: 24 }}>
                <div className="page-icon"><s.icon size={20} /></div>
                <h3>{s.title}</h3>
                <p style={{ color: '#00A651', fontWeight: 600, margin: '6px 0 8px', fontSize: 13 }}>{s.period}</p>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="container page-center">
          <Link to="/services"><Button>Xizmatlarga o‘tish</Button></Link>
        </div>
      </section>
    </div>
  )
}

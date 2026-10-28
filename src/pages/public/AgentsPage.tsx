import { Link } from 'react-router-dom'
import { UserCheck, TrendingUp, MapPin, Headphones, Wallet, Package, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'

const benefits = [
  { icon: Wallet, t: 'Barqaror daromad', d: 'Har bir to‘lovdan komissiya' },
  { icon: Package, t: '2000+ xizmat', d: 'Keng katalog mijozlar uchun' },
  { icon: Headphones, t: 'Qo‘llab-quvvatlash', d: 'Shaxsiy menejer va trening' },
  { icon: MapPin, t: 'Hududiy qamrov', d: 'Butun respublika bo‘ylab' },
  { icon: TrendingUp, t: 'O‘sish', d: 'Marketing va aksiya materiallari' },
  { icon: UserCheck, t: 'Brend ishonchi', d: 'Taniqli to‘lov tarmog‘i' },
]

const steps = [
  { n: '1', t: 'Ariza', d: 'Onlayn forma to‘ldiring' },
  { n: '2', t: 'Tekshiruv', d: 'Hujjatlar va suhbat' },
  { n: '3', t: 'Shartnoma', d: 'Rasmiy kelishuv' },
  { n: '4', t: 'Ishga tushirish', d: 'Terminal / ofis va trening' },
]

export default function AgentsPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Biznes</span>
          <h1>Agentlar uchun</h1>
          <p>37 000+ punkt — o‘z to‘lov biznesingizni Paynet bilan boshlang yoki kengaytiring.</p>
          <div style={{ marginTop: 24 }}>
            <Link to="/become-agent"><Button size="lg">Agent bo‘lish <ArrowRight size={18} /></Button></Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-stats">
            <div className="page-stat"><div className="page-stat__v">37 000+</div><div className="page-stat__l">Punktlar</div></div>
            <div className="page-stat"><div className="page-stat__v">14</div><div className="page-stat__l">Viloyat</div></div>
            <div className="page-stat"><div className="page-stat__v">24/7</div><div className="page-stat__l">Tizim ishlashi</div></div>
            <div className="page-stat"><div className="page-stat__v">2000+</div><div className="page-stat__l">Xizmat</div></div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="page-head"><span className="page-label">Afzalliklar</span><h2>Nima beradi agentlik</h2></div>
          <div className="page-grid-3">
            {benefits.map((b) => (
              <div key={b.t} className="page-card">
                <div className="page-icon"><b.icon size={22} /></div>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-head"><span className="page-label">Jarayon</span><h2>Qanday ulanamiz</h2></div>
          <div className="page-grid-4">
            {steps.map((s) => (
              <div key={s.n} className="page-card" style={{ textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#00A651', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: 12 }}>{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="page-center">
            <Link to="/become-agent"><Button>Ariza qoldirish</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { Handshake, Building2, Code, BarChart3 } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'

const models = [
  { icon: Building2, t: 'Korporativ hamkorlik', d: 'Yirik tarmoqlar va brendlar uchun' },
  { icon: Code, t: 'API integratsiya', d: 'Tizimingizni Paynet bilan bog‘lash' },
  { icon: Handshake, t: 'Agent / franchise', d: 'Punkt ochish va rivojlantirish' },
  { icon: BarChart3, t: 'White-label', d: 'O‘z brendingiz ostida yechim' },
]

export default function PartnersPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Biznes</span>
          <h1>Hamkorlar uchun</h1>
          <p>Birgalikda to‘lov ekotizimini kengaytiramiz.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-head"><span className="page-label">Modellar</span><h2>Hamkorlik turlari</h2></div>
          <div className="page-grid-4">
            {models.map((m) => (
              <div key={m.t} className="page-card">
                <div className="page-icon"><m.icon size={22} /></div>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container page-grid-2">
          <div className="page-img-round">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="" />
          </div>
          <div>
            <span className="page-label">Nima uchun</span>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: '8px 0 14px' }}>Biz bilan ishlash</h2>
            <ul className="page-list">
              <li>Keng foydalanuvchi bazasi</li>
              <li>Texnik va marketing qo‘llab-quvvatlash</li>
              <li>Shaffof hisobotlar</li>
              <li>Tez integratsiya jarayoni</li>
            </ul>
            <Link to="/contacts"><Button>Hamkorlik bo‘yicha yozish</Button></Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-cta">
            <h2>Terminal o‘rnatish</h2>
            <p>Biznesingizda Paynet punktini oching</p>
            <Link to="/become-agent"><Button variant="secondary">Ariza qoldirish</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

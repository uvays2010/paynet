import { Link } from 'react-router-dom'
import { CheckCircle2, Target, Eye, Heart, Award, Users, Globe, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'

const values = [
  { icon: Shield, t: 'Ishonch', d: 'Xavfsiz va shaffof to‘lovlar' },
  { icon: Users, t: 'Odamlar', d: 'Foydalanuvchi birinchi o‘rinda' },
  { icon: Globe, t: 'Qamrov', d: 'Butun O‘zbekiston bo‘ylab' },
  { icon: Heart, t: 'Mas’uliyat', d: 'Jamiyat va biznes uchun foyda' },
]

const timeline = [
  { y: '2012', t: 'Asos solindi', d: 'Birinchi terminallar va agent tarmog‘i' },
  { y: '2016', t: 'Milliy qamrov', d: 'Barcha viloyatlarda punktlar' },
  { y: '2020', t: 'Raqamli o‘sish', d: 'Mobil ilova va onlayn to‘lovlar' },
  { y: '2024', t: 'Xolis', d: 'Tadbirkorlar uchun yangi mahsulot' },
  { y: '2026', t: 'Fintech kengayish', d: 'Investitsiya va yangi integratsiyalar' },
]

const stats = [
  { v: '14+', l: 'Yil tajriba' },
  { v: '37 000+', l: 'Punktlar' },
  { v: '2000+', l: 'Xizmatlar' },
  { v: '10 mln+', l: 'Foydalanuvchilar' },
]

export default function AboutPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Kompaniya</span>
          <h1>Paynet haqida</h1>
          <p>O‘zbekiston to‘lov infratuzilmasining muhim qismi — agentlar, terminallar va raqamli mahsulotlar.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-grid-2">
          <div className="page-img-round">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop" alt="" />
          </div>
          <div>
            <span className="page-label">Missiya</span>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: '8px 0 14px' }}>Har bir to‘lovni oddiy qilish</h2>
            <p style={{ color: '#64748B', lineHeight: 1.7, marginBottom: 16 }}>
              Biz odamlar va bizneslarga kundalik to‘lovlarni tez, xavfsiz va qulay bajarish imkonini beramiz.
              Bu demo loyiha rasmiy Paynet sayti uslubida yaratilgan o‘quv platformasidir.
            </p>
            <ul className="page-list">
              <li><CheckCircle2 size={18} color="#00A651" /> Litsenziyalangan to‘lov faoliyati modeli</li>
              <li><CheckCircle2 size={18} color="#00A651" /> Bank va operatorlar bilan integratsiya</li>
              <li><CheckCircle2 size={18} color="#00A651" /> Agent tarmog‘i va raqamli kanallar</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="page-stats">
            {stats.map((s) => (
              <div key={s.l} className="page-stat">
                <div className="page-stat__v">{s.v}</div>
                <div className="page-stat__l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-head">
            <span className="page-label">Qadriyatlar</span>
            <h2>Nimaga ishonamiz</h2>
          </div>
          <div className="page-grid-4">
            {values.map((v) => (
              <div key={v.t} className="page-card">
                <div className="page-icon"><v.icon size={22} /></div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="page-head">
            <span className="page-label">Tarix</span>
            <h2>Rivojlanish yo‘li</h2>
          </div>
          <div className="page-grid-4" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {timeline.map((t) => (
              <div key={t.y} className="page-card">
                <div style={{ color: '#00A651', fontWeight: 800, fontSize: 18 }}>{t.y}</div>
                <h3>{t.t}</h3>
                <p>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-grid-2">
          <div className="page-card" style={{ padding: 32 }}>
            <Target size={28} color="#00A651" />
            <h3 style={{ marginTop: 12 }}>Maqsad</h3>
            <p>To‘lovlarni har bir fuqaro va tadbirkor uchun eng qulay qilish.</p>
          </div>
          <div className="page-card" style={{ padding: 32 }}>
            <Eye size={28} color="#00A651" />
            <h3 style={{ marginTop: 12 }}>Vizyon</h3>
            <p>Mintaqaning yetakchi fintech va to‘lov ekotizimi bo‘lish.</p>
          </div>
        </div>
        <div className="container page-center">
          <Link to="/contacts"><Button>Bog‘lanish</Button></Link>
          {' '}
          <Link to="/for-partners"><Button variant="outline">Hamkorlik</Button></Link>
        </div>
      </section>
    </div>
  )
}

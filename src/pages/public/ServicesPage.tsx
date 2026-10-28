import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Wifi, Zap, TrainFront, Gamepad2, Landmark, ArrowRight, Search, CreditCard, Tv, Car, GraduationCap } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'
import './ServicesPage.css'

const categories = [
  { icon: Smartphone, name: 'Mobil aloqa', count: 12, items: ['Beeline', 'Ucell', 'Uzmobile', 'Perfectum', 'Humans', 'MQOBIL'] },
  { icon: Wifi, name: 'Internet', count: 8, items: ['Uztelecom', 'Sarkor', 'ISTV', 'Nanosat', 'Sharq Telecom'] },
  { icon: Tv, name: 'TV', count: 6, items: ['ISTV', 'UzDigital', 'Cable TV', 'IPTV'] },
  { icon: Zap, name: 'Kommunal', count: 15, items: ['Elektr', 'Gaz', 'Issiq suv', 'Sovuq suv', 'Issiqlik', 'Chiqindi'] },
  { icon: TrainFront, name: 'Transport', count: 10, items: ['Aviabilet', 'Temir yo‘l', 'Yandex Go', 'MyTaxi', 'Avtobus'] },
  { icon: Landmark, name: 'Davlat', count: 20, items: ['MIB', 'Soliq', 'Jarima', 'Bojxona', 'Notarius'] },
  { icon: Gamepad2, name: 'O‘yin', count: 25, items: ['Steam', 'PlayStation', 'Mobile Legends', 'PUBG', 'Free Fire'] },
  { icon: GraduationCap, name: 'Ta’lim', count: 6, items: ['Universitet', 'Kurslar', 'Onlayn maktab'] },
  { icon: Car, name: 'Sug‘urta', count: 5, items: ['Avtosug‘urta', 'Hayot', 'Mulk'] },
  { icon: CreditCard, name: 'Bank / Kredit', count: 12, items: ['Kredit to‘lovi', 'Karta to‘ldirish', 'Mikromoliya'] },
]

const popular = [
  { name: 'Beeline', cat: 'Mobil', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop' },
  { name: 'Elektr energiyasi', cat: 'Kommunal', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop' },
  { name: 'Uztelecom', cat: 'Internet', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a4?w=300&h=200&fit=crop' },
  { name: 'Steam', cat: 'O‘yin', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop' },
  { name: 'MIB jarimalari', cat: 'Davlat', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop' },
  { name: 'Aviabiletlar', cat: 'Transport', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop' },
]

const steps = [
  { n: '01', t: 'Xizmatni tanlang', d: 'Katalogdan kerakli to‘lov turini toping' },
  { n: '02', t: 'Ma’lumot kiriting', d: 'Telefon, hisob yoki shartnoma raqami' },
  { n: '03', t: 'To‘lang', d: 'Karta, balans yoki naqd orqali' },
  { n: '04', t: 'Tasdiqlang', d: 'SMS yoki chek — to‘lov yakunlandi' },
]

export default function ServicesPage() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const filteredCategories = useMemo(() => {
    if (!q) return categories
    return categories
      .map((c) => ({
        ...c,
        items: c.items.filter((i) => i.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)),
      }))
      .filter((c) => c.items.length > 0 || c.name.toLowerCase().includes(q))
  }, [q])

  const filteredPopular = useMemo(() => {
    if (!q) return popular
    return popular.filter(
      (p) => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
    )
  }, [q])

  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Katalog</span>
          <h1>2000+ xizmat bir joyda</h1>
          <p>Mobil, kommunal, internet, transport, davlat va o‘yin to‘lovlari — barchasi Paynet orqali.</p>
          <div style={{ marginTop: 24, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: 16, top: 14, color: '#94A3B8' }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Xizmat qidirish (Beeline, gaz, Steam...)"
              style={{
                width: '100%', padding: '14px 16px 14px 44px', borderRadius: 12,
                border: 'none', fontSize: 15, boxSizing: 'border-box',
              }}
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-head">
            <span className="page-label">Mashhur</span>
            <h2>Eng ko‘p to‘lanadigan</h2>
          </div>
          {q && filteredPopular.length === 0 && filteredCategories.length === 0 && (
            <p style={{ textAlign: 'center', color: '#64748B', marginBottom: 24 }}>Hech narsa topilmadi. Boshqa so‘z yozing.</p>
          )}
          <div className="page-grid-3">
            {filteredPopular.map((p) => (
              <div key={p.name} className="page-card">
                <img src={p.img} alt={p.name} style={{ height: 140 }} />
                <span style={{ fontSize: 12, color: '#00A651', fontWeight: 600 }}>{p.cat}</span>
                <h3>{p.name}</h3>
                <p>Tezkor to‘lov · ko‘pincha 0% komissiya</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="page-head">
            <span className="page-label">Kategoriyalar</span>
            <h2>Barcha yo‘nalishlar</h2>
          </div>
          <div className="page-grid-2" style={{ gap: 20 }}>
            {filteredCategories.map((c) => (
              <div key={c.name} className="page-card" style={{ display: 'flex', gap: 16 }}>
                <div className="page-icon" style={{ flexShrink: 0 }}><c.icon size={22} /></div>
                <div>
                  <h3>{c.name} <span style={{ color: '#94A3B8', fontWeight: 500, fontSize: 14 }}>({c.count})</span></h3>
                  <p>{c.items.join(' · ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-head">
            <span className="page-label">Qanday</span>
            <h2>To‘lov qanday amalga oshadi</h2>
          </div>
          <div className="page-grid-4">
            {steps.map((s) => (
              <div key={s.n} className="page-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#00A651', marginBottom: 8 }}>{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="page-center">
            <Link to="/terminals-map"><Button>Yaqin terminal topish <ArrowRight size={16} /></Button></Link>
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="page-cta">
            <h2>Kerakli xizmatni topa olmadingizmi?</h2>
            <p>Yordam markazi yoki agent punktiga murojaat qiling</p>
            <Link to="/contacts"><Button variant="secondary">Bog‘lanish</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import './PageShared.css'

const news = [
  { date: '20.06.2026', tag: 'Biznes', title: 'Paynet investitsiya yo‘nalishini kengaytirmoqda', excerpt: 'FurtherIT GoInvest’ga investitsiya kiritish rejalari.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=340&fit=crop' },
  { date: '20.08.2026', tag: 'Mahsulot', title: 'Xolis’da EHF imkoniyati', excerpt: 'Tadbirkorlar yuridik shaxslar bilan bitim tuzishi mumkin.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop' },
  { date: '13.07.2026', tag: 'To‘lov', title: 'Telefon orqali Visa o‘tkazmalari', excerpt: '16 xonali karta raqamisiz xalqaro o‘tkazma.', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=340&fit=crop' },
  { date: '25.11.2025', tag: 'Mahsulot', title: 'Yangi Xolis xizmati', excerpt: 'Yakka tartibdagi tadbirkorlar uchun hisob-kitob.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop' },
  { date: '10.10.2026', tag: 'Aksiya', title: 'Steam to‘ldirishda 2x foyda', excerpt: 'Cheklangan muddatli bonus dasturi.', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=340&fit=crop' },
  { date: '01.09.2026', tag: 'Tarmoq', title: 'Yangi agent punktlari', excerpt: 'Farg‘ona vodiysida qo‘shimcha 200 nuqta.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=340&fit=crop' },
]

export default function NewsPage() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return news
    return news.filter((n) => n.title.toLowerCase().includes(s) || n.tag.toLowerCase().includes(s) || n.excerpt.toLowerCase().includes(s))
  }, [q])
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Media</span>
          <h1>Yangiliklar</h1>
          <p>Kompaniya va mahsulotlar haqidagi so‘nggi xabarlar.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Yangilik qidirish..."
            style={{ width: '100%', maxWidth: 420, margin: '0 auto 24px', display: 'block', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #E2E8F0', fontSize: 15 }}
          />
          <div className="page-grid-3">
            {filtered.map((n) => (
              <article key={n.title} className="page-card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={n.img} alt={n.title} style={{ height: 180, margin: 0, borderRadius: 0 }} />
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', gap: 10, fontSize: 12, color: '#64748B', marginBottom: 8 }}>
                    <span style={{ color: '#00A651', fontWeight: 700 }}>{n.tag}</span>
                    <span>{n.date}</span>
                  </div>
                  <h3 style={{ fontSize: 17 }}>{n.title}</h3>
                  <p>{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="page-center">
            <Link to="/stocks"><Button variant="outline">Aksiyalar ham qarang</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

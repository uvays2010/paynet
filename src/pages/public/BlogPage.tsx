import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './PageShared.css'

const posts = [
  { id: 1, title: 'Fintech tendensiyalari 2026', tag: 'Fintech', date: '2026-09-12', excerpt: 'Raqamli to‘lovlar va agent tarmoqlari haqida.' },
  { id: 2, title: 'Qanday qilib xavfsiz to‘lash mumkin', tag: 'Xavfsizlik', date: '2026-08-28', excerpt: 'Oddiy maslahatlar foydalanuvchilar uchun.' },
  { id: 3, title: 'Agent biznesini boshlash', tag: 'Biznes', date: '2026-08-10', excerpt: 'Birinchi qadamlar va talablar.' },
  { id: 4, title: 'Xolis bilan hujjat aylanishi', tag: 'Xolis', date: '2026-07-22', excerpt: 'EHF va avtomatlashtirish.' },
  { id: 5, title: 'Kommunal to‘lovlar mavsumi', tag: 'Maslahat', date: '2026-07-05', excerpt: 'Qishki oylarda nimalarga e’tibor berish kerak.' },
  { id: 6, title: 'Mobil ilova yangilanishi', tag: 'Mahsulot', date: '2026-06-18', excerpt: 'Yangi interfeys va tezlik.' },
]

export default function BlogPage() {
  const [q, setQ] = useState('')
  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return posts
    return posts.filter((p) => p.title.toLowerCase().includes(s) || p.tag.toLowerCase().includes(s))
  }, [q])

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Blog</span>
          <h1>Maqolalar va maslahatlar</h1>
          <p>Demo kontent</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Maqola qidirish..."
            style={{ width: '100%', maxWidth: 420, marginBottom: 24, padding: '12px 16px', borderRadius: 12, border: '1.5px solid #E2E8F0' }}
          />
          <div className="page-grid-3">
            {list.map((p) => (
              <article key={p.id} className="page-card" style={{ padding: 24 }}>
                <span className="page-label">{p.tag}</span>
                <h3 style={{ marginTop: 10 }}>{p.title}</h3>
                <p>{p.excerpt}</p>
                <small style={{ color: '#94A3B8' }}>{p.date}</small>
                <div style={{ marginTop: 12 }}>
                  <Link to="/news" style={{ color: '#00A651', fontWeight: 600 }}>O‘qish →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

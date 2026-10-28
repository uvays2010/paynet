import { useState } from 'react'
import { demoBanners } from '@/data/demoData'
import './Admin.css'
import '@/components/admin/DataTable.css'

export default function AdminBanners() {
  const [banners, setBanners] = useState(demoBanners)

  const toggle = (id: number) => {
    setBanners((p) => p.map((b) => b.id === id ? { ...b, active: !b.active } : b))
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Bannerlar va slayderlar</h1>
        <p>Sayt bosh sahifasi bannerlari · {banners.length} ta</p>
      </div>
      <div className="admin-banners-grid">
        {banners.map((b) => (
          <div key={b.id} className="admin-banner-card">
            <img src={b.image} alt={b.title} />
            <div className="admin-banner-card__body">
              <h3>{b.title}</h3>
              <p className="text-muted" style={{ fontSize: 13 }}>{b.link}</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <span className={`badge ${b.active ? 'badge--green' : 'badge--gray'}`}>
                  {b.active ? 'Faol' : 'O‘chirilgan'}
                </span>
                <button type="button" className="admin-btn admin-btn--ghost" onClick={() => toggle(b.id)}>
                  {b.active ? 'O‘chirish' : 'Yoqish'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

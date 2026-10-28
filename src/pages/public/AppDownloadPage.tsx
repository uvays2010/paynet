import { Smartphone, Star, ExternalLink } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'

const DEMO_URL = 'https://paynet-uvays.vercel.app/'

export default function AppDownloadPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Ilova</span>
          <h1>Paynet mobil ilova</h1>
          <p>O‘zingizning live demo versiyangiz</p>
        </div>
      </section>
      <section className="page-section">
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div>
            <h2>To‘lovlar cho‘ntagingizda</h2>
            <ul className="page-list">
              <li>2000+ xizmat</li>
              <li>Tezkor to‘lov va tarix</li>
              <li>Push bildirishnomalar (demo)</li>
              <li>Mobilga mos dizayn</li>
            </ul>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button size="lg" type="button">
                  <ExternalLink size={18} /> Mobil ilovani ochish
                </Button>
              </a>
            </div>
            <p style={{ marginTop: 14, fontSize: 14, color: '#64748B' }}>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#00A651', fontWeight: 600 }}>
                {DEMO_URL}
              </a>
            </p>
            <p style={{ marginTop: 10, color: '#64748B', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Star size={16} color="#F59E0B" /> Live demo · Vercel
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Smartphone size={160} color="#00A651" strokeWidth={1} />
          </div>
        </div>
      </section>
    </div>
  )
}

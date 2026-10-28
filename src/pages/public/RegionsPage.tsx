import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import './PageShared.css'

const regions = [
  { name: 'Toshkent shahri', points: 4200, agents: 890 },
  { name: 'Toshkent viloyati', points: 2100, agents: 410 },
  { name: 'Samarqand', points: 1800, agents: 360 },
  { name: 'Farg‘ona', points: 1600, agents: 320 },
  { name: 'Andijon', points: 1500, agents: 290 },
  { name: 'Namangan', points: 1400, agents: 270 },
  { name: 'Buxoro', points: 1200, agents: 240 },
  { name: 'Qashqadaryo', points: 1100, agents: 220 },
  { name: 'Surxondaryo', points: 950, agents: 190 },
  { name: 'Xorazm', points: 900, agents: 180 },
  { name: 'Navoiy', points: 700, agents: 140 },
  { name: 'Jizzax', points: 650, agents: 130 },
  { name: 'Sirdaryo', points: 500, agents: 100 },
  { name: 'Qoraqalpog‘iston', points: 800, agents: 160 },
]

export default function RegionsPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Hududlar</span>
          <h1>Butun O‘zbekiston bo‘ylab</h1>
          <p>Demo statistikalar — punkt va agentlar soni</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="page-grid-3">
            {regions.map((r) => (
              <div key={r.name} className="page-card" style={{ padding: 24 }}>
                <div className="page-icon"><MapPin size={22} /></div>
                <h3>{r.name}</h3>
                <p><strong style={{ color: '#00A651' }}>{r.points.toLocaleString()}</strong> punkt</p>
                <p><strong>{r.agents}</strong> agent</p>
                <Link to="/terminals-map" style={{ color: '#00A651', fontWeight: 600 }}>Xarita →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

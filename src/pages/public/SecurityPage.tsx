import { Shield, Lock, Eye, Server, FileCheck, Users } from 'lucide-react'
import './PageShared.css'

const items = [
  { icon: Lock, title: 'Shifrlash', text: 'Ma’lumotlar uzatish TLS orqali himoyalanadi (demo tavsif).' },
  { icon: Shield, title: 'Fraud monitoring', text: 'Noto‘g‘ri tranzaksiyalarni aniqlash qoidalari.' },
  { icon: Eye, title: 'Kirish nazorati', text: 'Rollar va ruxsatlar asosida admin panel.' },
  { icon: Server, title: 'Zaxira nusxa', text: 'Muntazam backup siyosati (demo).' },
  { icon: FileCheck, title: 'Audit', text: 'Muhim amallar jurnalga yoziladi.' },
  { icon: Users, title: 'Xodimlar', text: 'Ichki tartib va maxfiylik talablari.' },
]

export default function SecurityPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Xavfsizlik</span>
          <h1>Xavfsizlik va ishonch</h1>
          <p>Demo sahifa — real sertifikatlar rasmiy Paynet saytida</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="page-grid-3">
            {items.map((i) => (
              <div key={i.title} className="page-card" style={{ padding: 28 }}>
                <div className="page-icon"><i.icon size={24} /></div>
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { MapPin, Phone } from 'lucide-react'
import './PageShared.css'

const branches = [
  { region: 'Toshkent', items: [
    { name: 'Bosh ofis', addr: 'Yakkasaroy, Rustaveli 53B', phone: '+998 78 150-15-15' },
    { name: 'Chilonzor', addr: 'Qatortol mahallasi', phone: '+998 71 200-00-01' },
    { name: 'Yunusobod', addr: 'Amir Temur shoh', phone: '+998 71 200-00-02' },
  ]},
  { region: 'Samarqand', items: [
    { name: 'Markaziy', addr: 'Registon ko‘chasi 12', phone: '+998 66 233-00-00' },
  ]},
  { region: 'Andijon', items: [
    { name: 'Bobur', addr: 'Bobur shoh ko‘chasi', phone: '+998 74 222-00-00' },
  ]},
  { region: 'Farg‘ona', items: [
    { name: 'Al-Farg‘oniy', addr: 'Mustaqillik maydoni', phone: '+998 73 244-00-00' },
  ]},
  { region: 'Buxoro', items: [
    { name: 'Markaz', addr: 'Mustaqillik ko‘chasi', phone: '+998 65 223-00-00' },
  ]},
  { region: 'Namangan', items: [
    { name: 'Navoiy', addr: 'Navoiy ko‘chasi', phone: '+998 69 227-00-00' },
  ]},
]

export default function BranchesPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Tarmoq</span>
          <h1>Filiallar va vakilliklar</h1>
          <p>O‘zbekiston bo‘ylab ofis va xizmat nuqtalari.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          {branches.map((b) => (
            <div key={b.region} style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>{b.region}</h2>
              <div className="page-grid-3">
                {b.items.map((i) => (
                  <div key={i.name} className="page-card">
                    <h3>{i.name}</h3>
                    <p style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginTop: 8 }}>
                      <MapPin size={16} color="#00A651" style={{ marginTop: 2 }} /> {i.addr}
                    </p>
                    <p style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 6, color: '#00A651', fontWeight: 600 }}>
                      <Phone size={16} /> {i.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

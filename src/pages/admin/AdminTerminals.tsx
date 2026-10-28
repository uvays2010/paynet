import { MapPin } from 'lucide-react'
import './Admin.css'

const terminals = [
  { id: 1, name: 'Yakkasaroy — Rustaveli 53B', city: 'Toshkent', type: 'Ofis', status: 'online', tx: 420 },
  { id: 2, name: 'Chilonzor Qatortol', city: 'Toshkent', type: 'Terminal', status: 'online', tx: 890 },
  { id: 3, name: 'Samarqand Registon', city: 'Samarqand', type: 'Agent', status: 'online', tx: 310 },
  { id: 4, name: 'Andijon Bobur', city: 'Andijon', type: 'Terminal', status: 'offline', tx: 0 },
  { id: 5, name: 'Buxoro Mustaqillik', city: 'Buxoro', type: 'Agent', status: 'online', tx: 180 },
  { id: 6, name: 'Farg‘ona Al-Farg‘oniy', city: 'Farg‘ona', type: 'Terminal', status: 'online', tx: 540 },
  { id: 7, name: 'Namangan Navoiy', city: 'Namangan', type: 'Agent', status: 'online', tx: 220 },
  { id: 8, name: 'Nukus Dostlik', city: 'Nukus', type: 'Terminal', status: 'maintenance', tx: 12 },
]

export default function AdminTerminals() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Terminallar va punktlar</h1>
        <p>37 000+ nuqta (demo ro‘yxat)</p>
      </div>
      <div className="admin-map-placeholder">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=320&fit=crop"
          alt="Map"
        />
        <div className="admin-map-placeholder__label">Xarita ko‘rinishi (demo)</div>
      </div>
      <div className="admin-terminals-grid">
        {terminals.map((t) => (
          <div key={t.id} className="admin-terminal-card">
            <MapPin size={20} color="#00A651" />
            <div>
              <h3>{t.name}</h3>
              <p>{t.city} · {t.type} · bugun {t.tx} tx</p>
            </div>
            <span className={`badge ${t.status === 'online' ? 'badge--green' : t.status === 'offline' ? 'badge--red' : 'badge--yellow'}`}>
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

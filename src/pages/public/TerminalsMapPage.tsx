import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Navigation, Clock, ExternalLink } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useToast } from '@/components/widgets/Toast'
import './PageShared.css'

type Point = {
  name: string
  city: string
  type: string
  hours: string
  lat: number
  lng: number
}

const points: Point[] = [
  { name: 'Yakkasaroy — Rustaveli 53B', city: 'Toshkent', type: 'Ofis', hours: '09:00–18:00', lat: 41.2915, lng: 69.2692 },
  { name: 'Chilonzor Qatortol', city: 'Toshkent', type: 'Terminal', hours: '24/7', lat: 41.2850, lng: 69.2030 },
  { name: 'Sergeli 4', city: 'Toshkent', type: 'Agent', hours: '08:00–22:00', lat: 41.2200, lng: 69.2200 },
  { name: 'Registon yonida', city: 'Samarqand', type: 'Agent', hours: '09:00–20:00', lat: 39.6542, lng: 66.9758 },
  { name: 'Bobur markazi', city: 'Andijon', type: 'Terminal', hours: '24/7', lat: 40.7834, lng: 72.3500 },
  { name: 'Mustaqillik maydoni', city: 'Buxoro', type: 'Agent', hours: '09:00–19:00', lat: 39.7681, lng: 64.4556 },
  { name: 'Al-Farg‘oniy', city: 'Farg‘ona', type: 'Terminal', hours: '24/7', lat: 40.3864, lng: 71.7864 },
  { name: 'Navoiy ko‘chasi', city: 'Namangan', type: 'Agent', hours: '08:00–21:00', lat: 40.9983, lng: 71.6726 },
  { name: 'Markaziy bozor', city: 'Qarshi', type: 'Terminal', hours: '24/7', lat: 38.8600, lng: 65.7900 },
  { name: 'Urganch markaz', city: 'Xorazm', type: 'Agent', hours: '09:00–20:00', lat: 41.5500, lng: 60.6333 },
]

function mapSrc(lat: number, lng: number, zoom: number) {
  // OpenStreetMap embed — ishlaydigan interaktiv xarita
  const d = 0.08
  const bbox = `${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}`
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`
}

export default function TerminalsMapPage() {
  const { push } = useToast()
  const [q, setQ] = useState('')
  const [selected, setSelected] = useState<Point>(points[0])
  const [locating, setLocating] = useState(false)

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return points
    return points.filter(
      (p) =>
        p.name.toLowerCase().includes(s) ||
        p.city.toLowerCase().includes(s) ||
        p.type.toLowerCase().includes(s)
    )
  }, [q])

  const locateMe = () => {
    if (!navigator.geolocation) {
      push('Brauzer geolokatsiyani qo‘llab-quvvatlamaydi', 'error')
      return
    }
    setLocating(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        // eng yaqin punkt
        let best = points[0]
        let bestD = Infinity
        for (const p of points) {
          const d = (p.lat - latitude) ** 2 + (p.lng - longitude) ** 2
          if (d < bestD) {
            bestD = d
            best = p
          }
        }
        setSelected(best)
        setLocating(false)
        push(`Yaqin punkt: ${best.name}`, 'success')
      },
      () => {
        setLocating(false)
        push('Joylashuv olinmadi. Ruxsat bering yoki punktni tanlang.', 'error')
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Xarita</span>
          <h1>Terminallar xaritasi</h1>
          <p>OpenStreetMap · punktni tanlang yoki joylashuvingizni aniqlang</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div
            className="page-img-round"
            style={{
              position: 'relative',
              marginBottom: 24,
              overflow: 'hidden',
              borderRadius: 24,
              border: '1px solid #E2E8F0',
              boxShadow: '0 12px 40px rgba(15,23,42,0.1)',
            }}
          >
            <iframe
              title="Paynet terminallar xaritasi"
              src={mapSrc(selected.lat, selected.lng, 14)}
              style={{ width: '100%', height: 420, border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              style={{
                position: 'absolute',
                top: 16,
                left: 16,
                right: 16,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                justifyContent: 'space-between',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  padding: '10px 14px',
                  borderRadius: 12,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  pointerEvents: 'auto',
                  maxWidth: 320,
                }}
              >
                <strong style={{ display: 'block', color: '#0F172A' }}>{selected.name}</strong>
                <span style={{ fontSize: 13, color: '#64748B' }}>
                  {selected.city} · {selected.type} · {selected.hours}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 8, pointerEvents: 'auto' }}>
                <Button onClick={locateMe} disabled={locating}>
                  <Navigation size={16} />
                  {locating ? 'Aniqlanmoqda...' : 'Mening joylashuvim'}
                </Button>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${selected.lat}&mlon=${selected.lng}#map=15/${selected.lat}/${selected.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="outline">
                    <ExternalLink size={16} /> Katta xarita
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="page-head">
            <span className="page-label">Ro‘yxat</span>
            <h2>Punktlar — xaritada ochish uchun bosing</h2>
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Shahar yoki punkt qidirish..."
            style={{
              width: '100%',
              maxWidth: 420,
              marginBottom: 20,
              padding: '12px 16px',
              borderRadius: 12,
              border: '1.5px solid #E2E8F0',
              fontSize: 15,
            }}
          />
          <div className="page-grid-2">
            {filtered.map((p) => (
              <button
                key={p.name}
                type="button"
                className="page-card"
                onClick={() => {
                  setSelected(p)
                  push(`${p.name} xaritada`, 'info')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                style={{
                  display: 'flex',
                  gap: 14,
                  textAlign: 'left',
                  cursor: 'pointer',
                  border:
                    selected.name === p.name ? '2px solid #00A651' : '1px solid #E2E8F0',
                  background: selected.name === p.name ? '#F0FDF6' : '#fff',
                  width: '100%',
                }}
              >
                <MapPin size={22} color="#00A651" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ margin: 0 }}>{p.name}</h3>
                  <p style={{ margin: '4px 0' }}>
                    {p.city} · {p.type}
                  </p>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#64748B' }}>
                    <Clock size={14} /> {p.hours}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="page-center" style={{ marginTop: 28 }}>
            <Link to="/branches">
              <Button variant="outline">Filiallar ro‘yxati</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

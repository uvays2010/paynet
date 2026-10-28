import { useState, useEffect } from 'react'
import { CheckCircle2, AlertTriangle, Server } from 'lucide-react'
import './PageShared.css'

const services = [
  { name: 'To‘lov API', ok: true },
  { name: 'Mobil ilova', ok: true },
  { name: 'Agent kabineti', ok: true },
  { name: 'SMS gateway', ok: true },
  { name: 'Terminal tarmog‘i', ok: true },
  { name: 'Xolis', ok: true },
  { name: 'Bildirishnomalar', ok: true },
  { name: 'Hisobotlar', ok: true },
]

export default function StatusPage() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Status</span>
          <h1>Tizim holati</h1>
          <p>Barcha asosiy xizmatlar ishlayapti · {time.toLocaleTimeString('uz-UZ')}</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="page-card" style={{ padding: 20, marginBottom: 24, display: 'flex', gap: 12, alignItems: 'center' }}>
            <CheckCircle2 size={28} color="#00A651" />
            <div>
              <strong>Umumiy holat: Operational</strong>
              <p style={{ margin: 0, color: '#64748B' }}>Demo monitoring</p>
            </div>
          </div>
          {services.map((s) => (
            <div key={s.name} className="page-card" style={{ padding: 16, marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Server size={18} color="#64748B" /> {s.name}
              </span>
              {s.ok ? (
                <span className="page-label" style={{ color: '#00A651' }}>OK</span>
              ) : (
                <span style={{ color: '#F59E0B', display: 'flex', gap: 6, alignItems: 'center' }}>
                  <AlertTriangle size={16} /> Degraded
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

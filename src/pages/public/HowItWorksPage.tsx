import { Smartphone, Search, CreditCard, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import './PageShared.css'

const steps = [
  { icon: Smartphone, title: '1. Ilova yoki terminal', text: 'Paynet ilovasi, agent punkti yoki sayt orqali kiring.' },
  { icon: Search, title: '2. Xizmatni tanlang', text: '2000+ yo‘nalishdan keraklisini qidiring.' },
  { icon: CreditCard, title: '3. To‘lovni amalga oshiring', text: 'Naqd, karta yoki balans orqali to‘lang.' },
  { icon: CheckCircle2, title: '4. Tasdiq', text: 'Chek va SMS/ilova orqali tasdiqlash.' },
]

export default function HowItWorksPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Qo‘llanma</span>
          <h1>Qanday ishlaydi?</h1>
          <p>To‘rt oddiy qadam</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="page-grid-2">
            {steps.map((s) => (
              <div key={s.title} className="page-card" style={{ padding: 28, display: 'flex', gap: 16 }}>
                <div className="page-icon" style={{ flexShrink: 0 }}><s.icon size={24} /></div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services"><Button size="lg">Xizmatlarni ko‘rish</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

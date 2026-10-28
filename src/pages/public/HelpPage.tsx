import { Link } from 'react-router-dom'
import { Headphones, MessageCircle, Mail, BookOpen, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import './PageShared.css'

export default function HelpPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Yordam</span>
          <h1>Yordam markazi</h1>
          <p>Muammo yoki savol bo‘lsa — biz yordam beramiz.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-grid-4">
            {[
              { icon: Phone, t: 'Call-markaz', d: '+998 78 150-15-15', extra: '24/7' },
              { icon: MessageCircle, t: 'Chat', d: 'Ilova va sayt', extra: 'Tezkor' },
              { icon: Mail, t: 'Email', d: 'support@paynet.uz', extra: '1 ish kuni' },
              { icon: BookOpen, t: 'FAQ', d: 'Tez javoblar', extra: 'Katalog' },
            ].map((x) => (
              <div key={x.t} className="page-card" style={{ textAlign: 'center' }}>
                <div className="page-icon" style={{ margin: '0 auto 12px' }}><x.icon size={22} /></div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
                <p style={{ color: '#00A651', fontWeight: 600, marginTop: 8, fontSize: 13 }}>{x.extra}</p>
              </div>
            ))}
          </div>
          <div className="page-center">
            <Link to="/faq"><Button>FAQ ochish</Button></Link>
            {' '}
            <Link to="/contacts"><Button variant="outline">Xabar yozish</Button></Link>
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="page-head"><span className="page-label">Yo‘riqnoma</span><h2>Tez yechimlar</h2></div>
          <div className="page-grid-3">
            {[
              { t: 'To‘lov o‘tmadi', d: 'Internetni tekshiring, qayta urinib ko‘ring yoki ID bilan murojaat qiling.' },
              { t: 'SMS kod kelmadi', d: '1–2 daqiqa kuting, spam papkani tekshiring, qayta so‘rang.' },
              { t: 'Balans yangilanmadi', d: 'Bir necha daqiqadan keyin yangilang; muammo bo‘lsa supportga yozing.' },
              { t: 'Ilova ochilmayapti', d: 'Yangilang yoki qayta o‘rnating; qurilma vaqtini tekshiring.' },
              { t: 'Agent topish', d: 'Terminallar xaritasi orqali yaqin punktni ko‘ring.' },
              { t: 'Shikoyat', d: 'Kontaktlar formasida «Texnik yordam» mavzusini tanlang.' },
            ].map((x) => (
              <div key={x.t} className="page-card">
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

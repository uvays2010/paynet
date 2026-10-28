import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import './PageShared.css'

const groups = [
  {
    title: 'Umumiy',
    items: [
      { q: 'Paynet nima?', a: 'To‘lovlar uchun platforma va agent tarmog‘i. Mobil, kommunal, internet va boshqa xizmatlarni bir joyda to‘lash mumkin.' },
      { q: 'Qayerdan to‘lov qilaman?', a: 'Mobil ilova, sayt, terminal yoki agent punkti orqali.' },
      { q: 'Bu rasmiy saytmi?', a: 'Yo‘q. Bu o‘quv demo loyiha — rasmiy Paynet emas.' },
    ],
  },
  {
    title: 'To‘lovlar',
    items: [
      { q: 'Komissiya qancha?', a: 'Ko‘p mobil va kommunal xizmatlar 0%. Ba’zilarida minimal foiz ko‘rsatiladi.' },
      { q: 'Qancha vaqtda o‘tadi?', a: 'Odatda bir necha soniya — xizmatga qarab.' },
      { q: 'To‘lov qaytmasa?', a: 'Tranzaksiya ID si bilan yordam markaziga murojaat qiling.' },
    ],
  },
  {
    title: 'Agentlik',
    items: [
      { q: 'Agent bo‘lish shartlari?', a: 'Ariza, hujjatlar, shartnoma va trening. Batafsil — «Agent bo‘lish» sahifasida.' },
      { q: 'Daromad qanday?', a: 'Har bir muvaffaqiyatli to‘lovdan komissiya (tarif shartnomada).' },
    ],
  },
  {
    title: 'Xavfsizlik',
    items: [
      { q: 'Ma’lumotlar himoyalanganmi?', a: 'Shifrlash va xavfsizlik standartlari qo‘llaniladi. SMS kodni hech kimga bermang.' },
      { q: 'Firibgarlikdan qanday himoyalanish?', a: 'Faqat rasmiy kanallar, shubhali havolalarga kirmang, parolni baham ko‘rmang.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=500&fit=crop" alt="" />
        </div>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Yordam</span>
          <h1>Ko‘p so‘raladigan savollar</h1>
          <p>Tez javoblar. Topa olmasangiz — kontaktlarga yozing.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container" style={{ maxWidth: 800 }}>
          {groups.map((g) => (
            <div key={g.title} style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: '#0F172A' }}>{g.title}</h2>
              <div className="page-faq">
                {g.items.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
          <div className="page-center">
            <Link to="/contacts"><Button>Savol qoldirish</Button></Link>
            {' '}
            <Link to="/help"><Button variant="outline">Yordam markazi</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

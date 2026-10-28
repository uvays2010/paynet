import './PageShared.css'

export default function PrivacyPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Huquqiy</span>
          <h1>Maxfiylik siyosati</h1>
          <p>Demo hujjat — o‘quv loyihasi uchun namunaviy matn.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="page-card" style={{ padding: 32 }}>
            {[
              { h: '1. Umumiy qoidalar', t: 'Ushbu siyosat foydalanuvchi ma’lumotlarini qanday yig‘ish, saqlash va ishlatishni tavsiflaydi. Bu rasmiy Paynet hujjati emas.' },
              { h: '2. Yig‘iladigan ma’lumotlar', t: 'Telefon, email, to‘lov identifikatorlari, qurilma ma’lumotlari va foydalanish statistikasi.' },
              { h: '3. Maqsad', t: 'Xizmat ko‘rsatish, xavfsizlik, qo‘llab-quvvatlash, qonuniy majburiyatlar.' },
              { h: '4. Uchinchi tomonlar', t: 'Banklar, operatorlar va texnik provayderlar — faqat zarur hajmda.' },
              { h: '5. Himoya', t: 'Shifrlash, kirish nazorati va xavfsizlik monitoringi.' },
              { h: '6. Huquqlaringiz', t: 'Ma’lumotlarni ko‘rish, tuzatish yoki o‘chirish so‘rovi (qonun doirasida).' },
              { h: '7. Aloqa', t: 'privacy@paynet.uz (demo manzil).' },
            ].map((s) => (
              <div key={s.h} style={{ marginBottom: 24 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>{s.h}</h2>
                <p style={{ margin: 0, color: '#64748B', lineHeight: 1.7 }}>{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

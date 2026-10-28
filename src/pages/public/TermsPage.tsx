import './PageShared.css'

export default function TermsPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Huquqiy</span>
          <h1>Foydalanish shartlari</h1>
          <p>Demo hujjat — yuridik majburiyat yaratmaydi.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="page-card" style={{ padding: 32 }}>
            {[
              { h: '1. Qabul qilish', t: 'Platformadan foydalanish ushbu shartlarga rozilik bildiradi.' },
              { h: '2. Xizmatlar', t: 'To‘lovlar, agentlik, axborot materiallari. Ba’zi funksiyalar demo rejimida.' },
              { h: '3. Foydalanuvchi majburiyatlari', t: 'To‘g‘ri ma’lumot, xavfsiz parol, qonuniy maqsadlar.' },
              { h: '4. Ta’qiqlangan harakatlar', t: 'Firibgarlik, tizimga ruxsatsiz kirish, spam.' },
              { h: '5. Javobgarlik', t: 'Demo loyiha «boricha» taqdim etiladi; ishlab chiqarish kafolati yo‘q.' },
              { h: '6. O‘zgarishlar', t: 'Shartlar yangilanishi mumkin; sahifada e’lon qilinadi.' },
              { h: '7. Aloqa', t: 'legal@paynet.uz (demo).' },
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

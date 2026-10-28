import { Check, X } from 'lucide-react'
import './PageShared.css'

const rows = [
  { f: '2000+ xizmat', a: true, b: true, c: false },
  { f: '0% mobil komissiya', a: true, b: false, c: false },
  { f: '37 000+ punkt', a: true, b: false, c: true },
  { f: '24/7 support', a: true, b: true, c: false },
  { f: 'Agent tarmog‘i', a: true, b: false, c: true },
  { f: 'Xolis biznes', a: true, b: false, c: false },
  { f: 'Cashback', a: true, b: true, c: false },
]

export default function ComparePage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Taqqoslash</span>
          <h1>Nima uchun Paynet?</h1>
          <p>Demo taqqoslash jadvali</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="page-table-wrap">
            <table className="page-table">
              <thead>
                <tr>
                  <th>Imkoniyat</th>
                  <th>Paynet</th>
                  <th>Oddiy terminal</th>
                  <th>Bank ilovasi</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.f}>
                    <td>{r.f}</td>
                    <td>{r.a ? <Check color="#00A651" size={18} /> : <X color="#EF4444" size={18} />}</td>
                    <td>{r.b ? <Check color="#00A651" size={18} /> : <X color="#EF4444" size={18} />}</td>
                    <td>{r.c ? <Check color="#00A651" size={18} /> : <X color="#EF4444" size={18} />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

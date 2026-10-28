import { useMemo, useState } from 'react'
import { Calculator } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useToast } from '@/components/widgets/Toast'
import './PageShared.css'

const rates: Record<string, number> = {
  'Beeline / Ucell / Uzmobile': 0,
  'Internet / TV': 1,
  'Kommunal': 0,
  'Steam / o‘yin': 3,
  'Aviabilet': 2,
  'Davlat xizmatlari': 0,
}

export default function CalculatorPage() {
  const [cat, setCat] = useState(Object.keys(rates)[0])
  const [amount, setAmount] = useState(100000)
  const { push } = useToast()

  const { commission, total } = useMemo(() => {
    const c = Math.round((amount * rates[cat]) / 100)
    return { commission: c, total: amount + c }
  }, [amount, cat])

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>Kalkulyator</span>
          <h1>Komissiya kalkulyatori</h1>
          <p>Taxminiy to‘lov summasini hisoblang (demo)</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container" style={{ maxWidth: 520 }}>
          <div className="page-card" style={{ padding: 32 }}>
            <div className="page-icon"><Calculator size={22} /></div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Kategoriya</label>
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E2E8F0', marginBottom: 16 }}
            >
              {Object.keys(rates).map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Summa (so‘m)</label>
            <input
              type="number"
              min={1000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E2E8F0', marginBottom: 8, boxSizing: 'border-box' }}
            />
            <input
              type="range"
              min={1000}
              max={5000000}
              step={1000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ width: '100%', marginBottom: 24 }}
            />
            <div style={{ background: '#F8FAFC', borderRadius: 16, padding: 20, marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>Komissiya ({rates[cat]}%)</span>
                <strong>{commission.toLocaleString()} so‘m</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18 }}>
                <span>Jami</span>
                <strong style={{ color: '#00A651' }}>{total.toLocaleString()} so‘m</strong>
              </div>
            </div>
            <Button fullWidth onClick={() => push('Hisob demo sifatida saqlandi', 'info')}>
              Saqlash (demo)
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

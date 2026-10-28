import './LiveTicker.css'

const items = [
  'Ali Toshkentda Beeline 50 000 so‘m to‘ladi',
  'Yangi agent: Samarqand',
  'Steam to‘lovi muvaffaqiyatli',
  'Elektr 185 000 so‘m — Andijon',
  'Xolis orqali 12 ta hisob-faktura',
  'Cashback 5% — yangi mijozlarga',
  'MIB jarimasi to‘landi',
  'Terminal onlayn: Chilonzor',
]

export default function LiveTicker() {
  const doubled = [...items, ...items]
  return (
    <div className="live-ticker">
      <span className="live-ticker__badge">LIVE</span>
      <div className="live-ticker__track-wrap">
        <div className="live-ticker__track">
          {doubled.map((t, i) => (
            <span key={i} className="live-ticker__item">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

import './Admin.css'

const feed = [
  { time: '12:42', user: 'Ali Valiyev', action: 'Beeline 50 000 so‘m to‘ladi', img: 'https://i.pravatar.cc/40?img=1' },
  { time: '12:40', user: 'System', action: 'Backup muvaffaqiyatli yakunlandi', img: '' },
  { time: '12:38', user: 'Bobur Saidov', action: 'Ticket #105 ni yopdi', img: 'https://i.pravatar.cc/40?img=15' },
  { time: '12:35', user: 'Kamola Ergasheva', action: 'Yangilik nashr qildi', img: 'https://i.pravatar.cc/40?img=32' },
  { time: '12:30', user: 'Shahnoza Alimova', action: 'Agent arizasi yubordi', img: 'https://i.pravatar.cc/40?img=5' },
  { time: '12:22', user: 'Dilnoza Karimova', action: 'Elektr to‘lovi 185 000', img: 'https://i.pravatar.cc/40?img=5' },
  { time: '12:15', user: 'Admin', action: 'Xizmat qo‘shdi: PlayStation Store', img: 'https://i.pravatar.cc/40?img=12' },
  { time: '12:10', user: 'Otabek Ismoilov', action: 'Steam 100 000 so‘m', img: 'https://i.pravatar.cc/40?img=33' },
  { time: '12:05', user: 'System', action: 'CSV eksport: tranzaksiyalar', img: '' },
  { time: '11:58', user: 'Aziz Karimov', action: 'Ticket #108 ni oldi', img: 'https://i.pravatar.cc/40?img=20' },
]

export default function AdminActivity() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Faollik lenti</h1>
        <p>Real vaqtga yaqin hodisalar · demo</p>
      </div>
      <div className="admin-card" style={{ padding: 8 }}>
        {feed.map((f, i) => (
          <div key={i} className="activity-row">
            <span className="activity-time">{f.time}</span>
            {f.img ? (
              <img src={f.img} alt="" className="activity-avatar" />
            ) : (
              <div className="activity-avatar activity-avatar--sys">SYS</div>
            )}
            <div>
              <strong>{f.user}</strong>
              <span className="activity-action">{f.action}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

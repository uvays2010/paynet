import { Bell } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useNotifications } from '@/hooks/useAppStore'
import './PageShared.css'

export default function NotificationsPage() {
  const { notifications, unread, markAllRead } = useNotifications()

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>
            <Bell size={14} style={{ verticalAlign: -2 }} /> Bildirishnomalar
          </span>
          <h1>Bildirishnomalar</h1>
          <p>{unread} ta o‘qilmagan</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container" style={{ maxWidth: 720 }}>
          {unread > 0 && (
            <div style={{ marginBottom: 16 }}>
              <Button type="button" variant="outline" onClick={markAllRead}>
                Barchasini o‘qilgan qilish
              </Button>
            </div>
          )}
          {notifications.length === 0 ? (
            <p style={{ color: '#64748B' }}>Bildirishnoma yo‘q</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className="page-card"
                style={{
                  padding: 16,
                  marginBottom: 10,
                  borderLeft: n.read ? '3px solid #E2E8F0' : '3px solid #00A651',
                  background: n.read ? '#fff' : '#F0FDF6',
                }}
              >
                <strong>{n.title}</strong>
                <p style={{ margin: '6px 0', color: '#475569' }}>{n.body}</p>
                <small style={{ color: '#94A3B8' }}>
                  {new Date(n.createdAt).toLocaleString('uz-UZ')}
                </small>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}

import { useLocation } from 'react-router-dom'
import './Admin.css'

const titles: Record<string, string> = {
  '/admin/users': 'Foydalanuvchilarni boshqarish',
  '/admin/services': 'Xizmatlarni boshqarish',
  '/admin/transactions': 'Tranzaksiyalar moduli',
  '/admin/agents': 'Agentlar va hamkorlar',
  '/admin/cms': 'Kontent boshqaruvi (CMS)',
  '/admin/support': 'Murojaatlar va yordam',
  '/admin/notifications': 'Bildirishnomalar',
  '/admin/reports': 'Hisobotlar va analitika',
  '/admin/settings': 'Xavfsizlik va sozlamalar',
}

export default function AdminPlaceholder() {
  const { pathname } = useLocation()
  const title = titles[pathname] || 'Modul'

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>{title}</h1>
        <p>Bu bo‘lim 3-bosqichda to‘liq CRUD va API bilan to‘ldiriladi</p>
      </div>
      <div className="admin-placeholder">
        <p>Modul skeleti tayyor. Keyingi bosqichda:</p>
        <ul>
          <li>Jadval + qidiruv + filtrlash + sahifalash</li>
          <li>Yaratish / tahrirlash / o‘chirish formlari</li>
          <li>Django REST API ulanishi</li>
          <li>Rollar va ruxsatlar tekshiruvi</li>
        </ul>
      </div>
    </div>
  )
}

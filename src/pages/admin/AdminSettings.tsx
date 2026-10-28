import { useState } from 'react'
import { useToast } from '@/components/widgets/Toast'
import './Admin.css'

export default function AdminSettings() {
  const { push } = useToast()
  const [form, setForm] = useState({
    siteName: 'Paynet Ultimate',
    supportPhone: '+998 71 202-07-07',
    supportEmail: 'support@paynet.uz',
    maintenance: false,
    notifyEmail: true,
    notifySms: false,
    defaultCommission: '1',
  })

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('paynet_admin_settings', JSON.stringify(form))
    push('Sozlamalar saqlandi (demo)', 'success')
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Sozlamalar</h1>
        <p>Tizim parametrlari · localStorage</p>
      </div>
      <form className="admin-card" style={{ padding: 24, maxWidth: 560 }} onSubmit={save}>
        {(
          [
            ['siteName', 'Sayt nomi'],
            ['supportPhone', 'Support telefon'],
            ['supportEmail', 'Support email'],
            ['defaultCommission', 'Standart komissiya %'],
          ] as const
        ).map(([key, label]) => (
          <label key={key} style={{ display: 'block', marginBottom: 16 }}>
            <span style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#94A3B8' }}>{label}</span>
            <input
              value={form[key]}
              onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: 10,
                border: '1px solid #334155',
                background: '#0B1120',
                color: '#F8FAFC',
                boxSizing: 'border-box',
              }}
            />
          </label>
        ))}
        <label style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12, color: '#E2E8F0' }}>
          <input
            type="checkbox"
            checked={form.maintenance}
            onChange={(e) => setForm((f) => ({ ...f, maintenance: e.target.checked }))}
          />
          Texnik ishlar rejimi
        </label>
        <label style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12, color: '#E2E8F0' }}>
          <input
            type="checkbox"
            checked={form.notifyEmail}
            onChange={(e) => setForm((f) => ({ ...f, notifyEmail: e.target.checked }))}
          />
          Email bildirishnomalar
        </label>
        <label style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20, color: '#E2E8F0' }}>
          <input
            type="checkbox"
            checked={form.notifySms}
            onChange={(e) => setForm((f) => ({ ...f, notifySms: e.target.checked }))}
          />
          SMS bildirishnomalar
        </label>
        <button type="submit" className="admin-btn admin-btn--primary">
          Saqlash
        </button>
      </form>
    </div>
  )
}

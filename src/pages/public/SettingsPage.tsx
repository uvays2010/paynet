import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Settings, Bell, Globe, Moon, Sun, Shield, Smartphone, Save, RotateCcw,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import { useToast } from '@/components/widgets/Toast'
import './PageShared.css'

const STORAGE = 'paynet_user_settings'

type UserSettings = {
  language: string
  theme: 'light' | 'dark' | 'system'
  currency: string
  notifyPush: boolean
  notifyEmail: boolean
  notifySms: boolean
  notifyPromo: boolean
  fontSize: string
  reduceMotion: boolean
  showBalances: boolean
  defaultService: string
}

const defaults: UserSettings = {
  language: 'uz',
  theme: 'light',
  currency: 'UZS',
  notifyPush: true,
  notifyEmail: true,
  notifySms: false,
  notifyPromo: true,
  fontSize: 'normal',
  reduceMotion: false,
  showBalances: true,
  defaultService: 'mobile',
}

function load(): UserSettings {
  try {
    const raw = localStorage.getItem(STORAGE)
    if (!raw) return { ...defaults }
    return { ...defaults, ...JSON.parse(raw) }
  } catch {
    return { ...defaults }
  }
}

function applyTheme(theme: UserSettings['theme']) {
  const root = document.documentElement
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark')
    root.style.colorScheme = 'dark'
  } else if (theme === 'light') {
    root.setAttribute('data-theme', 'light')
    root.style.colorScheme = 'light'
  } else {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    root.setAttribute('data-theme', dark ? 'dark' : 'light')
    root.style.colorScheme = dark ? 'dark' : 'light'
  }
}

function applyMotion(reduce: boolean) {
  document.documentElement.style.setProperty(
    '--motion',
    reduce ? '0.01ms' : ''
  )
  if (reduce) document.documentElement.classList.add('reduce-motion')
  else document.documentElement.classList.remove('reduce-motion')
}

function applyFont(size: string) {
  const map: Record<string, string> = {
    small: '14px',
    normal: '16px',
    large: '18px',
  }
  document.documentElement.style.fontSize = map[size] || '16px'
}

export default function SettingsPage() {
  const { push } = useToast()
  const [form, setForm] = useState<UserSettings>(defaults)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const s = load()
    setForm(s)
    applyTheme(s.theme)
    applyMotion(s.reduceMotion)
    applyFont(s.fontSize)
  }, [])

  const set = <K extends keyof UserSettings>(key: K, value: UserSettings[K]) => {
    setForm((f) => {
      const next = { ...f, [key]: value }
      if (key === 'theme') applyTheme(value as UserSettings['theme'])
      if (key === 'reduceMotion') applyMotion(value as boolean)
      if (key === 'fontSize') applyFont(value as string)
      return next
    })
    setSaved(false)
  }

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem(STORAGE, JSON.stringify(form))
    applyTheme(form.theme)
    applyMotion(form.reduceMotion)
    applyFont(form.fontSize)
    setSaved(true)
    push('Sozlamalar saqlandi', 'success')
  }

  const reset = () => {
    setForm({ ...defaults })
    localStorage.removeItem(STORAGE)
    applyTheme(defaults.theme)
    applyMotion(defaults.reduceMotion)
    applyFont(defaults.fontSize)
    setSaved(false)
    push('Standart sozlamalar tiklandi', 'info')
  }

  const field = {
    width: '100%' as const,
    padding: '12px 14px',
    borderRadius: 12,
    border: '1.5px solid #E2E8F0',
    background: '#fff',
    fontSize: 15,
    boxSizing: 'border-box' as const,
  }

  const card = {
    background: '#fff',
    border: '1px solid #E2E8F0',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
  }

  return (
    <div className="page">
      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <span className="page-label" style={{ color: '#86EFAC' }}>
            <Settings size={14} style={{ verticalAlign: -2 }} /> Sozlamalar
          </span>
          <h1>Shaxsiy sozlamalar</h1>
          <p>Til, tema, bildirishnomalar — brauzeringizda saqlanadi</p>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <form onSubmit={save}>
            {/* Umumiy */}
            <div style={card}>
              <h2 style={{ margin: '0 0 16px', fontSize: 18, display: 'flex', gap: 8, alignItems: 'center' }}>
                <Globe size={20} color="#00A651" /> Umumiy
              </h2>
              <label style={{ display: 'block', marginBottom: 14 }}>
                <span style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#64748B' }}>Til</span>
                <select style={field} value={form.language} onChange={(e) => set('language', e.target.value)}>
                  <option value="uz">O‘zbekcha</option>
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                </select>
              </label>
              <label style={{ display: 'block', marginBottom: 14 }}>
                <span style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#64748B' }}>Valyuta</span>
                <select style={field} value={form.currency} onChange={(e) => set('currency', e.target.value)}>
                  <option value="UZS">UZS — so‘m</option>
                  <option value="USD">USD</option>
                </select>
              </label>
              <label style={{ display: 'block' }}>
                <span style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#64748B' }}>
                  Standart xizmat
                </span>
                <select
                  style={field}
                  value={form.defaultService}
                  onChange={(e) => set('defaultService', e.target.value)}
                >
                  <option value="mobile">Mobil aloqa</option>
                  <option value="communal">Kommunal</option>
                  <option value="internet">Internet</option>
                  <option value="transfer">O‘tkazma</option>
                </select>
              </label>
            </div>

            {/* Ko‘rinish */}
            <div style={card}>
              <h2 style={{ margin: '0 0 16px', fontSize: 18, display: 'flex', gap: 8, alignItems: 'center' }}>
                {form.theme === 'dark' ? <Moon size={20} color="#00A651" /> : <Sun size={20} color="#00A651" />}
                Ko‘rinish
              </h2>
              <label style={{ display: 'block', marginBottom: 14 }}>
                <span style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#64748B' }}>Tema</span>
                <select
                  style={field}
                  value={form.theme}
                  onChange={(e) => set('theme', e.target.value as UserSettings['theme'])}
                >
                  <option value="light">Yorug‘</option>
                  <option value="dark">Qorong‘u</option>
                  <option value="system">Tizim</option>
                </select>
              </label>
              <label style={{ display: 'block', marginBottom: 14 }}>
                <span style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#64748B' }}>Shrift o‘lchami</span>
                <select style={field} value={form.fontSize} onChange={(e) => set('fontSize', e.target.value)}>
                  <option value="small">Kichik</option>
                  <option value="normal">Oddiy</option>
                  <option value="large">Katta</option>
                </select>
              </label>
              <label style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#334155' }}>
                <input
                  type="checkbox"
                  checked={form.reduceMotion}
                  onChange={(e) => set('reduceMotion', e.target.checked)}
                />
                Animatsiyani kamaytirish
              </label>
            </div>

            {/* Bildirishnomalar */}
            <div style={card}>
              <h2 style={{ margin: '0 0 16px', fontSize: 18, display: 'flex', gap: 8, alignItems: 'center' }}>
                <Bell size={20} color="#00A651" /> Bildirishnomalar
              </h2>
              {(
                [
                  ['notifyPush', 'Push bildirishnomalar'],
                  ['notifyEmail', 'Email'],
                  ['notifySms', 'SMS'],
                  ['notifyPromo', 'Aksiya va takliflar'],
                ] as const
              ).map(([key, label]) => (
                <label
                  key={key}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    marginBottom: 12,
                    color: '#334155',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form[key]}
                    onChange={(e) => set(key, e.target.checked)}
                  />
                  {label}
                </label>
              ))}
            </div>

            {/* Maxfiylik */}
            <div style={card}>
              <h2 style={{ margin: '0 0 16px', fontSize: 18, display: 'flex', gap: 8, alignItems: 'center' }}>
                <Shield size={20} color="#00A651" /> Maxfiylik
              </h2>
              <label style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#334155' }}>
                <input
                  type="checkbox"
                  checked={form.showBalances}
                  onChange={(e) => set('showBalances', e.target.checked)}
                />
                Balanslarni ko‘rsatish
              </label>
              <p style={{ marginTop: 12, fontSize: 13, color: '#94A3B8' }}>
                Ma’lumotlar faqat shu brauzerda saqlanadi (localStorage).
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <Button type="submit" size="lg">
                <Save size={18} /> Saqlash
              </Button>
              <Button type="button" size="lg" variant="outline" onClick={reset}>
                <RotateCcw size={18} /> Tiklash
              </Button>
              <Link to="/app" style={{ textDecoration: 'none' }}>
                <Button type="button" size="lg" variant="secondary">
                  <Smartphone size={18} /> Ilova
                </Button>
              </Link>
            </div>
            {saved && (
              <p style={{ color: '#00A651', fontWeight: 600, marginTop: -24 }}>✓ Saqlandi</p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

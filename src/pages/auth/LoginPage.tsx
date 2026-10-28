import { useState, FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isAdminLoggedIn, loginAdmin } from '@/lib/adminAuth'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Allaqachon kirgan bo‘lsa — to‘g‘ridan admin
  useEffect(() => {
    if (isAdminLoggedIn()) {
      window.location.replace('/admin')
    }
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const ok = loginAdmin(password)
    if (!ok) {
      setError('Parol noto‘g‘ri. Qayta urinib ko‘ring.')
      setLoading(false)
      return
    }

    // Hard redirect — React state bilan bog‘liq muammo bo‘lmasin
    window.location.href = '/admin'
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0B1120',
        padding: 24,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          background: '#111827',
          border: '1px solid #1F2937',
          borderRadius: 16,
          padding: 32,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#00A651',
              display: 'inline-block',
            }}
          />
          <span style={{ fontSize: 22, fontWeight: 700, color: '#F9FAFB' }}>paynet</span>
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#F9FAFB', margin: '0 0 8px' }}>
          Admin panel
        </h1>
        <p style={{ color: '#9CA3AF', margin: '0 0 24px', fontSize: 15 }}>
          Parol bilan kiring
        </p>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="admin-password"
            style={{
              display: 'block',
              fontSize: 14,
              fontWeight: 500,
              color: '#D1D5DB',
              marginBottom: 6,
            }}
          >
            Parol
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parolni yozing"
            autoFocus
            required
            autoComplete="current-password"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: 10,
              border: '1.5px solid #374151',
              background: '#0B1120',
              color: '#F9FAFB',
              fontSize: 16,
              marginBottom: 12,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          {error && (
            <p style={{ color: '#F87171', fontSize: 14, margin: '0 0 12px' }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: 14,
              borderRadius: 10,
              border: 'none',
              background: '#00A651',
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: loading ? 'wait' : 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Kirilmoqda...' : 'Kirish'}
          </button>
        </form>

        <p style={{ marginTop: 20, textAlign: 'center' }}>
          <Link to="/" style={{ color: '#00A651', fontSize: 14 }}>
            ← Bosh sahifa
          </Link>
        </p>
      </div>
    </div>
  )
}

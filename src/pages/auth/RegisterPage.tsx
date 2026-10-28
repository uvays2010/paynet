import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import './Auth.css'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); navigate('/login') }, 1000)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-logo">
          <span className="auth-logo-dot" /> paynet
        </Link>
        <h1>Ro‘yxatdan o‘tish</h1>
        <p className="auth-sub">Yangi hisob yarating</p>
        <form onSubmit={handleSubmit} className="form-stack">
          <Input label="Ism" required />
          <Input label="Telefon" type="tel" placeholder="+998" required />
          <Input label="Parol" type="password" required />
          <Input label="Parolni tasdiqlash" type="password" required />
          <Button type="submit" fullWidth size="lg" loading={loading}>Ro‘yxatdan o‘tish</Button>
        </form>
        <p className="auth-footer">
          Allaqachon hisobingiz bormi? <Link to="/login">Kirish</Link>
        </p>
      </div>
    </div>
  )
}

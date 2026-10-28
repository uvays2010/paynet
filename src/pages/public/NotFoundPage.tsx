import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '120px 24px' }}>
      <h1 style={{ fontSize: 72, fontWeight: 800, color: 'var(--primary)' }}>404</h1>
      <p style={{ fontSize: 20, margin: '16px 0 32px', color: 'var(--text-muted)' }}>
        Sahifa topilmadi
      </p>
      <Link to="/"><Button>Bosh sahifaga qaytish</Button></Link>
    </div>
  )
}

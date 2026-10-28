import { Navigate, useLocation } from 'react-router-dom'
import { isAdminLoggedIn, logoutAdmin } from '@/lib/adminAuth'

/**
 * /admin himoya — sessionStorage da parol sessiyasi bo‘lmasa /login
 */
export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
  roles?: string[]
}) {
  const location = useLocation()

  // Eski localStorage sessiyasini e'tiborsiz qoldiramiz — faqat sessionStorage
  if (!isAdminLoggedIn()) {
    try {
      localStorage.removeItem('paynet_admin_ok')
      localStorage.removeItem('paynet_admin')
    } catch {
      /* ignore */
    }
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <>{children}</>
}

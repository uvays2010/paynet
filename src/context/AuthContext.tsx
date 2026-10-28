import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import {
  isAdminLoggedIn,
  loginAdmin,
  logoutAdmin,
  getAdminUser,
  ADMIN_PASSWORD,
} from '@/lib/adminAuth'

export type UserRole = 'user' | 'agent' | 'operator' | 'admin' | 'superadmin' | 'content_manager' | 'analyst'

export interface User {
  id: number
  name: string
  phone: string
  email?: string
  role: UserRole
  balance?: number
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  ready: boolean
  login: (password: string) => boolean
  logout: () => void
  updateUser: (data: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export { ADMIN_PASSWORD }

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (isAdminLoggedIn()) {
      const u = getAdminUser()
      setUser(
        u || {
          id: 1,
          name: 'Admin',
          phone: '+998901111111',
          role: 'admin',
        }
      )
    }
    setReady(true)
  }, [])

  const login = (password: string): boolean => {
    if (!loginAdmin(password)) return false
    const u = getAdminUser()
    setUser(
      u || {
        id: 1,
        name: 'Admin',
        phone: '+998901111111',
        role: 'admin',
      }
    )
    return true
  }

  const logout = () => {
    logoutAdmin()
    setUser(null)
  }

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return prev
      const updated = { ...prev, ...data }
      try {
        localStorage.setItem('paynet_admin', JSON.stringify(updated))
      } catch {
        /* ignore */
      }
      return updated
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user || isAdminLoggedIn(),
        ready,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

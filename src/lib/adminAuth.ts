/** Admin auth — faqat parol. sessionStorage: brauzer yopilsa qayta parol kerak */
export const ADMIN_PASSWORD = 'uvays1221'
export const AUTH_KEY = 'paynet_admin_ok'

function store() {
  try {
    return window.sessionStorage
  } catch {
    return null
  }
}

export function isAdminLoggedIn(): boolean {
  try {
    return sessionStorage.getItem(AUTH_KEY) === 'yes'
  } catch {
    return false
  }
}

export function loginAdmin(password: string): boolean {
  if (String(password).trim() !== ADMIN_PASSWORD) return false
  try {
    sessionStorage.setItem(AUTH_KEY, 'yes')
    sessionStorage.setItem(
      'paynet_admin',
      JSON.stringify({
        id: 1,
        name: 'Admin',
        phone: '+998901111111',
        role: 'admin',
      })
    )
    // eski localStorage sessiyasini tozalash
    localStorage.removeItem(AUTH_KEY)
    localStorage.removeItem('paynet_admin')
    return true
  } catch {
    return false
  }
}

export function logoutAdmin(): void {
  try {
    sessionStorage.removeItem(AUTH_KEY)
    sessionStorage.removeItem('paynet_admin')
    localStorage.removeItem(AUTH_KEY)
    localStorage.removeItem('paynet_admin')
    localStorage.removeItem('paynet_user')
  } catch {
    /* ignore */
  }
}

export function getAdminUser() {
  try {
    const raw = sessionStorage.getItem('paynet_admin') || localStorage.getItem('paynet_admin')
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

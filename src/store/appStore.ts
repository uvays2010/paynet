/** Professional frontend store — backend kelganda API ga ulash oson */

export type PaymentRecord = {
  id: string
  service: string
  account: string
  amount: number
  status: 'success' | 'pending' | 'failed'
  createdAt: string
}

export type FavoriteService = {
  id: string
  title: string
  category: string
}

export type AppNotification = {
  id: string
  title: string
  body: string
  read: boolean
  createdAt: string
}

const KEYS = {
  payments: 'paynet_payments',
  favorites: 'paynet_favorites',
  notifications: 'paynet_notifications',
  profile: 'paynet_profile',
} as const

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function write<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
  window.dispatchEvent(new CustomEvent('paynet-store', { detail: { key } }))
}

export const appStore = {
  getPayments(): PaymentRecord[] {
    return read(KEYS.payments, [])
  },
  addPayment(p: Omit<PaymentRecord, 'id' | 'createdAt' | 'status'> & { status?: PaymentRecord['status'] }) {
    const list = appStore.getPayments()
    const row: PaymentRecord = {
      id: 'TX' + Date.now(),
      status: p.status || 'success',
      createdAt: new Date().toISOString(),
      service: p.service,
      account: p.account,
      amount: p.amount,
    }
    write(KEYS.payments, [row, ...list].slice(0, 100))
    return row
  },

  getFavorites(): FavoriteService[] {
    return read(KEYS.favorites, [
      { id: '1', title: 'Beeline', category: 'Mobil' },
      { id: '2', title: 'Elektr', category: 'Kommunal' },
    ])
  },
  toggleFavorite(item: FavoriteService) {
    const list = appStore.getFavorites()
    const exists = list.some((x) => x.id === item.id)
    write(
      KEYS.favorites,
      exists ? list.filter((x) => x.id !== item.id) : [item, ...list]
    )
  },

  getNotifications(): AppNotification[] {
    return read(KEYS.notifications, [
      {
        id: 'n1',
        title: 'Xush kelibsiz',
        body: 'Paynet Ultimate demo — to‘lovlar tarixi saqlanadi',
        read: false,
        createdAt: new Date().toISOString(),
      },
    ])
  },
  addNotification(title: string, body: string) {
    const list = appStore.getNotifications()
    const n: AppNotification = {
      id: 'n' + Date.now(),
      title,
      body,
      read: false,
      createdAt: new Date().toISOString(),
    }
    write(KEYS.notifications, [n, ...list].slice(0, 50))
  },
  markAllRead() {
    write(
      KEYS.notifications,
      appStore.getNotifications().map((n) => ({ ...n, read: true }))
    )
  },

  getProfile() {
    return read(KEYS.profile, {
      name: 'Mehmon',
      phone: '+998',
      city: 'Toshkent',
    })
  },
  saveProfile(data: { name: string; phone: string; city: string }) {
    write(KEYS.profile, data)
  },
}

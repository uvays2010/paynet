/**
 * Yagona platforma ma’lumotlari — public + admin birga ishlaydi.
 * Backend kelganda faqat shu fayl API ga o‘tkaziladi.
 */

export type Tx = {
  id: string
  service: string
  account: string
  amount: number
  commission: number
  status: 'success' | 'pending' | 'failed'
  channel: 'web' | 'app' | 'terminal' | 'admin'
  createdAt: string
  userName?: string
}

export type PlatformUser = {
  id: number
  name: string
  phone: string
  role: string
  status: 'active' | 'blocked'
  balance: number
  createdAt: string
}

const K = {
  txs: 'paynet_platform_txs',
  users: 'paynet_platform_users',
  stats: 'paynet_platform_stats',
} as const

function read<T>(key: string, fb: T): T {
  try {
    const r = localStorage.getItem(key)
    return r ? (JSON.parse(r) as T) : fb
  } catch {
    return fb
  }
}

function write<T>(key: string, v: T) {
  localStorage.setItem(key, JSON.stringify(v))
  localStorage.setItem('paynet_platform_tick', String(Date.now()))
  window.dispatchEvent(new CustomEvent('paynet-platform'))
}

function seedUsers(): PlatformUser[] {
  return [
    { id: 1, name: 'Ali Valiyev', phone: '+998901112233', role: 'user', status: 'active', balance: 125000, createdAt: '2026-01-10' },
    { id: 2, name: 'Madina Karimova', phone: '+998911223344', role: 'user', status: 'active', balance: 84000, createdAt: '2026-02-14' },
    { id: 3, name: 'Jasur Agent', phone: '+998931112233', role: 'agent', status: 'active', balance: 2500000, createdAt: '2025-11-01' },
    { id: 4, name: 'Dilnoza', phone: '+998941234567', role: 'user', status: 'blocked', balance: 0, createdAt: '2026-03-20' },
  ]
}

function seedTxs(): Tx[] {
  const services = ['Beeline', 'Elektr', 'Steam', 'Ucell', 'Gaz', 'Uztelecom']
  return Array.from({ length: 12 }, (_, i) => ({
    id: 'SEED' + (1000 + i),
    service: services[i % services.length],
    account: '+99890' + String(1000000 + i),
    amount: (i + 1) * 25000,
    commission: i % 3 === 0 ? 500 : 0,
    status: (i % 7 === 0 ? 'failed' : i % 5 === 0 ? 'pending' : 'success') as Tx['status'],
    channel: (['web', 'app', 'terminal'] as const)[i % 3],
    createdAt: new Date(Date.now() - i * 3600_000 * 5).toISOString(),
    userName: ['Ali', 'Madina', 'Jasur', 'Mehmon'][i % 4],
  }))
}

function ensureSeed() {
  if (!localStorage.getItem(K.users)) write(K.users, seedUsers())
  if (!localStorage.getItem(K.txs)) write(K.txs, seedTxs())
}

export const platform = {
  init() {
    ensureSeed()
  },

  getTxs(): Tx[] {
    ensureSeed()
    return read(K.txs, [])
  },

  addTx(input: {
    service: string
    account: string
    amount: number
    channel?: Tx['channel']
    userName?: string
  }) {
    ensureSeed()
    const list = platform.getTxs()
    const tx: Tx = {
      id: 'TX' + Date.now(),
      service: input.service,
      account: input.account,
      amount: input.amount,
      commission: Math.round(input.amount * 0.01),
      status: 'success',
      channel: input.channel || 'web',
      createdAt: new Date().toISOString(),
      userName: input.userName || 'Mehmon',
    }
    write(K.txs, [tx, ...list].slice(0, 200))
    return tx
  },

  getUsers(): PlatformUser[] {
    ensureSeed()
    return read(K.users, [])
  },

  setUserStatus(id: number, status: 'active' | 'blocked') {
    const users = platform.getUsers().map((u) => (u.id === id ? { ...u, status } : u))
    write(K.users, users)
  },

  topUp(id: number, amount: number) {
    const users = platform.getUsers().map((u) =>
      u.id === id ? { ...u, balance: u.balance + amount } : u
    )
    write(K.users, users)
  },

  stats() {
    const txs = platform.getTxs()
    const success = txs.filter((t) => t.status === 'success')
    return {
      totalTx: txs.length,
      successTx: success.length,
      failedTx: txs.filter((t) => t.status === 'failed').length,
      volume: success.reduce((s, t) => s + t.amount, 0),
      commission: success.reduce((s, t) => s + t.commission, 0),
      users: platform.getUsers().length,
      activeUsers: platform.getUsers().filter((u) => u.status === 'active').length,
    }
  },
}

// auto init
if (typeof window !== 'undefined') {
  try {
    platform.init()
  } catch {
    /* ignore */
  }
}


export function subscribePlatform(cb: () => void) {
  const onCustom = () => cb()
  const onStorage = (e: StorageEvent) => {
    if (!e.key || e.key.startsWith('paynet_platform')) cb()
  }
  window.addEventListener('paynet-platform', onCustom)
  window.addEventListener('storage', onStorage)
  return () => {
    window.removeEventListener('paynet-platform', onCustom)
    window.removeEventListener('storage', onStorage)
  }
}

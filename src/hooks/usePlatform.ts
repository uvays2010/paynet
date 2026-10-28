import { useCallback, useEffect, useState } from 'react'
import { platform, Tx, PlatformUser } from '@/store/platformStore'

export function usePlatformTxs() {
  const [txs, setTxs] = useState<Tx[]>([])
  const refresh = useCallback(() => setTxs(platform.getTxs()), [])
  useEffect(() => {
    refresh()
    const h = () => refresh()
    window.addEventListener('paynet-platform', h)
    return () => window.removeEventListener('paynet-platform', h)
  }, [refresh])
  return { txs, refresh, addTx: platform.addTx, stats: platform.stats() }
}

export function usePlatformUsers() {
  const [users, setUsers] = useState<PlatformUser[]>([])
  const refresh = useCallback(() => setUsers(platform.getUsers()), [])
  useEffect(() => {
    refresh()
    const h = () => refresh()
    window.addEventListener('paynet-platform', h)
    return () => window.removeEventListener('paynet-platform', h)
  }, [refresh])
  return {
    users,
    refresh,
    setUserStatus: (id: number, s: 'active' | 'blocked') => {
      platform.setUserStatus(id, s)
      refresh()
    },
    topUp: (id: number, amount: number) => {
      platform.topUp(id, amount)
      refresh()
    },
  }
}

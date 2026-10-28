import { useEffect, useState, useCallback } from 'react'
import { appStore, PaymentRecord, FavoriteService, AppNotification } from '@/store/appStore'

export function usePayments() {
  const [items, setItems] = useState<PaymentRecord[]>([])
  const refresh = useCallback(() => setItems(appStore.getPayments()), [])
  useEffect(() => {
    refresh()
    const h = () => refresh()
    window.addEventListener('paynet-store', h)
    return () => window.removeEventListener('paynet-store', h)
  }, [refresh])
  return { payments: items, refresh, addPayment: appStore.addPayment }
}

export function useFavorites() {
  const [items, setItems] = useState<FavoriteService[]>([])
  const refresh = useCallback(() => setItems(appStore.getFavorites()), [])
  useEffect(() => {
    refresh()
    const h = () => refresh()
    window.addEventListener('paynet-store', h)
    return () => window.removeEventListener('paynet-store', h)
  }, [refresh])
  return { favorites: items, toggleFavorite: appStore.toggleFavorite, refresh }
}

export function useNotifications() {
  const [items, setItems] = useState<AppNotification[]>([])
  const refresh = useCallback(() => setItems(appStore.getNotifications()), [])
  useEffect(() => {
    refresh()
    const h = () => refresh()
    window.addEventListener('paynet-store', h)
    return () => window.removeEventListener('paynet-store', h)
  }, [refresh])
  const unread = items.filter((n) => !n.read).length
  return {
    notifications: items,
    unread,
    markAllRead: () => {
      appStore.markAllRead()
      refresh()
    },
    refresh,
  }
}

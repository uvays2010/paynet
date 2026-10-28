import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import './Toast.css'

type ToastItem = { id: number; message: string; type: 'success' | 'info' | 'error' }

const ToastCtx = createContext<{ push: (message: string, type?: ToastItem['type']) => void } | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([])
  const push = useCallback((message: string, type: ToastItem['type'] = 'success') => {
    const id = Date.now() + Math.random()
    setItems((p) => [...p, { id, message, type }])
    setTimeout(() => setItems((p) => p.filter((x) => x.id !== id)), 3200)
  }, [])
  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div className="toast-stack">
        {items.map((t) => (
          <div key={t.id} className={`toast toast--${t.type}`}>{t.message}</div>
        ))}
      </div>
    </ToastCtx.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastCtx)
  if (!ctx) return { push: () => {} }
  return ctx
}

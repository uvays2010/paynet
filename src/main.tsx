import { platform } from '@/store/platformStore'
import { contentStore } from '@/store/contentStore'
platform.init()
contentStore.init()
// Admin endi faqat sessionStorage — eski localStorage sessiyani o‘chirish
try {
  localStorage.removeItem('paynet_admin_ok')
} catch {}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { ToastProvider } from '@/components/widgets/Toast'
import App from './App'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)

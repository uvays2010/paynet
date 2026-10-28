import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import ChatWidget from '@/components/widgets/ChatWidget'
import LiveTicker from '@/components/widgets/LiveTicker'
import './PublicLayout.css'

export default function PublicLayout() {
  return (
    <div className="public-layout">
      <ScrollToTop />
      <Navbar />
      <LiveTicker />
      <main className="public-layout__main">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

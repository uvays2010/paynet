import { useEffect, useState } from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import ScrollToTop from '@/components/common/ScrollToTop'
import {
  LayoutDashboard, Users, Package, FileText, CreditCard,
  UserCheck, MessageSquare, Bell, BarChart3, Settings, LogOut,
  ArrowLeft, Shield, Image, MapPin, Percent, Server, Search,
  ChevronDown, Activity, Wallet, HelpCircle, Headphones, ScrollText, Gift, Share2, Film
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { logoutAdmin } from '@/lib/adminAuth'
import clsx from 'clsx'
import './AdminLayout.css'

const menuGroups = [
  {
    title: 'Asosiy',
    items: [
      { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true, badge: null },
      { to: '/admin/reports', icon: BarChart3, label: 'Hisobotlar', badge: null },
      { to: '/admin/activity', icon: Activity, label: 'Faollik lenti', badge: 'live' },
    ],
  },
  {
    title: 'Moliya',
    items: [
      { to: '/admin/transactions', icon: CreditCard, label: 'Tranzaksiyalar', badge: '80' },
      { to: '/admin/services', icon: Package, label: 'Xizmatlar', badge: '18' },
      { to: '/admin/commissions', icon: Percent, label: 'Komissiyalar', badge: null },
      { to: '/admin/wallets', icon: Wallet, label: 'Balanslar', badge: null },
      { to: '/admin/promotions', icon: Gift, label: 'Aksiyalar', badge: null },
      { to: '/admin/referrals', icon: Share2, label: 'Referrallar', badge: null },
    ],
  },
  {
    title: 'Foydalanuvchilar',
    items: [
      { to: '/admin/users', icon: Users, label: 'Foydalanuvchilar', badge: '18' },
      { to: '/admin/agents', icon: UserCheck, label: 'Agentlar', badge: '3' },
      { to: '/admin/support', icon: MessageSquare, label: 'Murojaatlar', badge: '5' },
    ],
  },
  {
    title: 'Kontent',
    items: [
      { to: '/admin/media', icon: Film, label: 'Media / Video / Rasm', badge: 'live' },
      { to: '/admin/cms', icon: FileText, label: 'Yangiliklar / CMS', badge: null },
      { to: '/admin/banners', icon: Image, label: 'Bannerlar', badge: '3' },
      { to: '/admin/notifications', icon: Bell, label: 'Bildirishnomalar', badge: null },
      { to: '/admin/faq', icon: HelpCircle, label: 'FAQ boshqaruvi', badge: null },
    ],
  },
  {
    title: 'Tizim',
    items: [
      { to: '/admin/terminals', icon: MapPin, label: 'Terminallar', badge: null },
      { to: '/admin/system', icon: Server, label: 'Tizim holati', badge: null },
      { to: '/admin/operators', icon: Headphones, label: 'Operatorlar', badge: null },
      { to: '/admin/audit', icon: ScrollText, label: 'Audit jurnal', badge: null },
      { to: '/admin/settings', icon: Settings, label: 'Sozlamalar', badge: null },
    ],
  },
]

export default function AdminLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})
  const [search, setSearch] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-admin', 'true')
    document.body.classList.add('admin-body')
    return () => {
      document.documentElement.removeAttribute('data-admin')
      document.body.classList.remove('admin-body')
    }
  }, [])

  const handleLogout = () => {
    logout()
    logoutAdmin()
    window.location.href = '/login'
  }

  const toggleGroup = (title: string) => {
    setCollapsed((p) => ({ ...p, [title]: !p[title] }))
  }

  const filteredGroups = menuGroups.map((g) => ({
    ...g,
    items: g.items.filter((i) =>
      !search || i.label.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((g) => g.items.length > 0)

  return (
    <div className="admin">
      <ScrollToTop />
      <aside className="admin__sidebar">
        <div className="admin__brand">
          <div className="admin__brand-icon">
            <Shield size={18} />
          </div>
          <div>
            <div className="admin__brand-name">Paynet Admin</div>
            <div className="admin__brand-ver">Ultimate · v1.0</div>
          </div>
        </div>

        <div className="admin__search">
          <Search size={14} />
          <input
            placeholder="Menyu qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <nav className="admin__nav">
          {filteredGroups.map((group) => (
            <div key={group.title} className="admin__group">
              <button
                type="button"
                className="admin__group-title"
                onClick={() => toggleGroup(group.title)}
              >
                {group.title}
                <ChevronDown
                  size={14}
                  className={clsx(collapsed[group.title] && 'admin__chevron--closed')}
                />
              </button>
              {!collapsed[group.title] &&
                group.items.map((m) => (
                  <NavLink
                    key={m.to}
                    to={m.to}
                    end={m.end}
                    className={({ isActive }) =>
                      clsx('admin__link', isActive && 'admin__link--active')
                    }
                  >
                    <m.icon size={17} />
                    <span className="admin__link-label">{m.label}</span>
                    {m.badge && (
                      <span className={clsx('admin__badge', m.badge === 'live' && 'admin__badge--live')}>
                        {m.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
            </div>
          ))}
        </nav>

        <div className="admin__footer">
          <div className="admin__user-card">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt=""
              className="admin__user-avatar"
            />
            <div>
              <div className="admin__user-name">{user?.name || 'Admin'}</div>
              <div className="admin__user-role">{user?.role || 'admin'}</div>
            </div>
          </div>
          <button type="button" onClick={handleLogout} className="admin__logout">
            <LogOut size={16} /> Chiqish
          </button>
          <Link to="/" className="admin__back">
            <ArrowLeft size={14} /> Saytga qaytish
          </Link>
        </div>
      </aside>

      <div className="admin__content">
        <header className="admin__topbar">
          <div className="admin__topbar-left">
            <span className="admin__topbar-env">DEMO</span>
            <span className="admin__topbar-status">
              <span className="admin__status-dot" /> Tizim ishlayapti
            </span>
          </div>
          <div className="admin__topbar-right">
            <button type="button" className="admin__topbar-btn" onClick={() => navigate('/admin/support')}>
              <MessageSquare size={18} />
              <span className="admin__topbar-dot">5</span>
            </button>
            <button type="button" className="admin__topbar-btn" onClick={() => navigate('/admin/notifications')}>
              <Bell size={18} />
            </button>
            <img src="https://i.pravatar.cc/40?img=12" alt="" className="admin__topbar-avatar" />
          </div>
        </header>
        <main className="admin__main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

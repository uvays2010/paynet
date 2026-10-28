import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Search, Phone, LogOut, LayoutDashboard, Shield } from 'lucide-react'
import clsx from 'clsx'
import { useAuth } from '@/context/AuthContext'
import './Navbar.css'

const navItems = [
  {
    label: 'Foydalanuvchilar uchun',
    children: [
      { label: 'Aksiyalar va keshbeklar', href: '/stocks', desc: 'Foydali takliflar va chegirmalar' },
      { label: 'Muddatli to\'lov', href: '/installment', desc: 'Bo\'lib to\'lash — qulay va oddiy' },
      { label: 'Yangiliklar', href: '/news', desc: 'Dolzarb voqealar va yangilanishlar' },
      { label: 'Xizmatlar katalogi', href: '/services', desc: '2000+ xizmat bir joyda' },
      { label: 'Mobil ilova', href: '/app', desc: 'iOS va Android' },
      { label: 'Blog', href: '/blog', desc: 'Maqolalar va maslahatlar' },
      { label: 'Taqqoslash', href: '/compare', desc: 'Nima uchun Paynet' },
    ],
  },
  {
    label: 'Biznes uchun',
    children: [
      { label: 'Hamkorlar uchun', href: '/for-partners', desc: 'Hamkorlik shartlari' },
      { label: 'Agentlar uchun', href: '/for-agents', desc: 'Agent tarmog\'i va imkoniyatlar' },
      { label: 'Agent bo\'lish', href: '/become-agent', desc: 'Ariza qoldirish' },
      { label: 'Terminal o\'rnatish', href: '/install-terminal', desc: 'Biznesingizda Paynet' },
    ],
  },
  {
    label: 'Biz haqimizda',
    children: [
      { label: 'Kompaniya haqida', href: '/about', desc: 'Tarix va missiya' },
      { label: 'Hududiy vakilliklar', href: '/regional-offices', desc: 'O\'zbekiston bo\'ylab' },
      { label: 'Filiallar', href: '/branches', desc: 'Xizmat ko\'rsatish nuqtalari' },
      { label: 'Kontaktlar', href: '/contacts', desc: 'Biz bilan bog\'lanish' },
    ],
  },
  {
    label: 'Yordam',
    children: [
      { label: 'FAQ', href: '/faq', desc: 'Tez-tez beriladigan savollar' },
      { label: 'Yordam markazi', href: '/help', desc: 'Qo\'llab-quvvatlash' },
      { label: 'Terminallar xaritasi', href: '/terminals-map', desc: 'Yaqin terminal topish' },
    ],
  },
]

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [userMenu, setUserMenu] = useState(false)
  const location = useLocation()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { isAuthenticated, user, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setUserMenu(false)
  }, [location.pathname])

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(label)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const isAdmin = user && ['admin', 'superadmin', 'operator', 'content_manager', 'analyst'].includes(user.role)

  return (
    <header className={clsx('navbar', scrolled && 'navbar--scrolled')}>
      <div className="navbar__inner container-wide">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-dot" />
          <span className="navbar__logo-text">paynet</span>
        </Link>

        <nav className="navbar__nav">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="navbar__item"
              onMouseEnter={() => handleEnter(item.label)}
              onMouseLeave={handleLeave}
            >
              <button
                className={clsx('navbar__link', openDropdown === item.label && 'navbar__link--active')}
                aria-expanded={openDropdown === item.label}
              >
                {item.label}
                <ChevronDown size={16} className={clsx('navbar__chevron', openDropdown === item.label && 'navbar__chevron--open')} />
              </button>

              {openDropdown === item.label && (
                <div className="navbar__dropdown">
                  {item.children.map((child) =>
                    child.href.startsWith('http') ? (
                      <a
                        key={child.href}
                        href={child.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar__dropdown-item"
                      >
                        <span className="navbar__dropdown-label">{child.label}</span>
                        <span className="navbar__dropdown-desc">{child.desc}</span>
                      </a>
                    ) : (
                      <Link key={child.href} to={child.href} className="navbar__dropdown-item">
                        <span className="navbar__dropdown-label">{child.label}</span>
                        <span className="navbar__dropdown-desc">{child.desc}</span>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          <NavLink to="/news" className={({ isActive }) => clsx('navbar__link', isActive && 'navbar__link--active')}>
            Yangiliklar
          </NavLink>
          <Link to="/xolis" className="navbar__xolis">
            <span className="navbar__xolis-icon">↻</span> Xolis
          </Link>
        </nav>

        <div className="navbar__actions">
          <a href="tel:+998712020707" className="navbar__phone">
            <Phone size={16} />
            <span>71 202-07-07</span>
          </a>
          <Link to="/search" className="navbar__icon-btn" aria-label="Qidiruv" title="Qidiruv">
            <Search size={20} />
          </Link>


          <button
            className="navbar__burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menyu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          {navItems.map((item) => (
            <div key={item.label} className="navbar__mobile-group">
              <div className="navbar__mobile-title">{item.label}</div>
              {item.children.map((child) =>
                child.href.startsWith('http') ? (
                  <a
                    key={child.href}
                    href={child.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar__mobile-link"
                  >
                    {child.label}
                  </a>
                ) : (
                  <Link key={child.href} to={child.href} className="navbar__mobile-link">
                    {child.label}
                  </Link>
                )
              )}
            </div>
          ))}
          <Link to="/news" className="navbar__mobile-link">Yangiliklar</Link>
          <Link to="/xolis" className="navbar__mobile-link">Xolis</Link>
          {isAuthenticated ? (
            <>
              <Link to="/admin" className="navbar__mobile-link">Shaxsiy kabinet</Link>
              {isAdmin && <Link to="/admin" className="navbar__mobile-link">Admin panel</Link>}
            </>
          ) : (
            <Link to="/login" className="navbar__mobile-link">Kirish</Link>
          )}
        </div>
      )}
    </header>
  )
}

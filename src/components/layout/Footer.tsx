import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-dot" />
              <span>paynet</span>
            </Link>
            <p className="footer__tagline">
              Butun Respublika bo‘ylab 20 milliondan ortiq foydalanuvchilar ishonadi
            </p>
            <div className="footer__apps">
              <a href="https://paynet-uvays.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer__app-btn">Mobil ilova</a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Foydalanuvchilar</h4>
            <Link to="/services">Xizmatlar</Link>
            <Link to="/stocks">Aksiyalar</Link>
            <Link to="/news">Yangiliklar</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/calculator">Kalkulyator</Link>
            <Link to="/compare">Taqqoslash</Link>
            <Link to="/search">Qidiruv</Link>
            <Link to="/terminals-map">Terminallar</Link>
          </div>

          <div className="footer__col">
            <h4>Biznes</h4>
            <Link to="/for-agents">Agentlar</Link>
            <Link to="/become-agent">Agent bo‘lish</Link>
            <Link to="/for-partners">Hamkorlar</Link>
            <Link to="/install-terminal">Terminal o‘rnatish</Link>
          </div>

          <div className="footer__col">
            <h4>Kompaniya</h4>
            <Link to="/about">Biz haqimizda</Link>
            <Link to="/careers">Karyera</Link>
            <Link to="/security">Xavfsizlik</Link>
            <Link to="/how-it-works">Qanday ishlaydi</Link>
            <Link to="/regions">Hududlar</Link>
            <Link to="/app">Ilova</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/status">Status</Link>
            <Link to="/settings">Sozlamalar</Link>
            <Link to="/payments">To‘lovlar tarixi</Link>
            <Link to="/notifications">Bildirishnomalar</Link>
            <Link to="/profile">Profil</Link>
            <Link to="/contacts">Kontaktlar</Link>
            <Link to="/branches">Filiallar</Link>
            <Link to="/privacy">Maxfiylik siyosati</Link>
            <Link to="/terms">Foydalanish shartlari</Link>
          </div>

          <div className="footer__col">
            <h4>Aloqa</h4>
            <a href="tel:+998712020707" className="footer__contact">
              <Phone size={16} /> 71 202-07-07
            </a>
            <a href="mailto:info@paynet.uz" className="footer__contact">
              <Mail size={16} /> info@paynet.uz
            </a>
            <a href="mailto:marketing@paynet.uz" className="footer__contact">
              <Mail size={16} /> marketing@paynet.uz
            </a>
            <p className="footer__contact">
              <MapPin size={16} /> Toshkent, Yakkasaroy, Shota Rustaveli 53B
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2005–2026 Paynet. Barcha huquqlar himoyalangan.</p>
          <p className="footer__note">
            Bu loyiha o‘quv/demo maqsadida yaratilgan. Rasmiy Paynet tizimi emas.
          </p>
        </div>
      </div>
    </footer>
  )
}

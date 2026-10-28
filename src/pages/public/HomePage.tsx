import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Smartphone, Wifi, Zap, Building2, ArrowRight, Download, Shield, Headphones,
  CreditCard, TrainFront, Gamepad2, Landmark, CheckCircle2, Users, MapPin, Clock,
  TrendingUp, Star, Play, Mail, Phone, Send, ChevronRight, Quote, Award,
  Layers, Lock, Sparkles, BarChart3, Globe, Heart, MessageCircle, Package
} from 'lucide-react'
import Button from '@/components/ui/Button'
import PaymentDemo from '@/components/widgets/PaymentDemo'
import { contentStore, HomeText, subscribeCms } from '@/store/contentStore'
import './HomePage.css'

/* ========== DATA ========== */
const services = [
  { icon: Smartphone, title: 'Mobil aloqa', desc: 'Beeline, Ucell, Uzmobile, Perfectum va boshqalar', link: '/services', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=280&fit=crop&auto=format' },
  { icon: Wifi, title: 'Internet va TV', desc: 'Uztelecom, Sarkor, ISTV va boshqa provayderlar', link: '/services', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=280&fit=crop&auto=format' },
  { icon: Zap, title: 'Kommunal', desc: 'Elektr, gaz, suv, issiqlik to‘lovlari', link: '/services', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=280&fit=crop&auto=format' },
  { icon: TrainFront, title: 'Transport', desc: 'Aviabilet, temir yo‘l, taksi to‘lovlari', link: '/services', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=280&fit=crop&auto=format' },
  { icon: Gamepad2, title: 'O‘yin va kontent', desc: 'Steam, PlayStation, mobile games', link: '/services', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=280&fit=crop&auto=format' },
  { icon: Landmark, title: 'Davlat xizmatlari', desc: 'MIB, soliq, jarimalar va boshqalar', link: '/services', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=280&fit=crop&auto=format' },
]

const features = [
  { icon: Shield, title: 'Xavfsiz to‘lovlar', text: 'Bank darajasidagi shifrlash va 3D Secure himoya' },
  { icon: Clock, title: '24/7 ishlash', text: 'Kun-u tun to‘lov qiling, tizim doim onlayn' },
  { icon: Zap, title: 'Tez operatsiyalar', text: 'Soniyalar ichida tasdiqlanadigan tranzaksiyalar' },
  { icon: Headphones, title: 'Qo‘llab-quvvatlash', text: 'Call-markaz va chat orqali yordam' },
  { icon: Layers, title: '2000+ xizmat', text: 'Bir platformada barcha to‘lov turlari' },
  { icon: Lock, title: 'Maxfiylik', text: 'Shaxsiy ma’lumotlaringiz himoyalangan' },
]

const products = [
  { title: 'Paynet App', text: 'Mobil ilova orqali barcha to‘lovlar', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=340&fit=crop', link: '#download' },
  { title: 'Xolis', text: 'Tadbirkorlar uchun hisob-kitob', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=340&fit=crop', link: '/xolis' },
  { title: 'Muddatli to‘lov', text: '18 oygacha bo‘lib to‘lash', img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=340&fit=crop', link: '/installment' },
  { title: 'Agent tarmog‘i', text: '37 000+ punkt bo‘ylab mamlakat', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=340&fit=crop', link: '/for-agents' },
]

const categories = [
  { name: 'Mobil', count: '12+', color: '#00A651' },
  { name: 'Internet', count: '8+', color: '#3B82F6' },
  { name: 'Kommunal', count: '15+', color: '#F59E0B' },
  { name: 'Transport', count: '10+', color: '#A855F7' },
  { name: 'Davlat', count: '20+', color: '#EF4444' },
  { name: 'O‘yin', count: '25+', color: '#06B6D4' },
  { name: 'Ta’lim', count: '6+', color: '#EC4899' },
  { name: 'Boshqa', count: '100+', color: '#64748B' },
]

const benefits = [
  { title: 'Komissiyasiz ko‘p xizmatlar', text: 'Mobil va kommunal to‘lovlarning aksariyati 0%' },
  { title: 'Cashback va aksiyalar', text: 'Tanlangan to‘lovlarda bonus va chegirmalar' },
  { title: 'Bir hisob — barcha to‘lovlar', text: 'Balansni to‘ldiring va istalgan xizmatga o‘tkazing' },
  { title: 'Agent bo‘lish imkoniyati', text: 'O‘z biznesingizni Paynet bilan boshlang' },
]

const stats = [
  { value: '37 000+', label: 'To‘lov punktlari' },
  { value: '2 000+', label: 'Xizmat turlari' },
  { value: '10 mln+', label: 'Foydalanuvchilar' },
  { value: '14', label: 'Yillik tajriba' },
  { value: '24/7', label: 'Qo‘llab-quvvatlash' },
  { value: '99.9%', label: 'Uptime' },
]

const portfolio = [
  { title: 'Mobil to‘lovlar', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop' },
  { title: 'Kommunal tarmoq', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop' },
  { title: 'Agent ofislar', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
  { title: 'Raqamli mahsulotlar', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
  { title: 'Korporativ yechimlar', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
  { title: 'Fintech innovatsiya', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
]

const projects = [
  { year: '2024', title: 'Xolis platformasi', text: 'Yakka tadbirkorlar uchun hisob-kitob tizimi' },
  { year: '2025', title: 'Visa telefon o‘tkazmalari', text: 'Karta raqamisiz xalqaro o‘tkazmalar' },
  { year: '2026', title: 'GoInvest hamkorligi', text: 'Investitsiya yo‘nalishini kengaytirish' },
  { year: '2026', title: 'EHF integratsiyasi', text: 'Yuridik shaxslar bilan elektron hujjat almashinuvi' },
]

const team = [
  { name: 'Akmal Rahimov', role: 'CEO', img: 'https://i.pravatar.cc/200?img=11' },
  { name: 'Dilnoza Karimova', role: 'CFO', img: 'https://i.pravatar.cc/200?img=5' },
  { name: 'Jasur Toshmatov', role: 'CTO', img: 'https://i.pravatar.cc/200?img=12' },
  { name: 'Kamola Ergasheva', role: 'Marketing', img: 'https://i.pravatar.cc/200?img=9' },
  { name: 'Bobur Saidov', role: 'Support Lead', img: 'https://i.pravatar.cc/200?img=15' },
  { name: 'Nilufar Yusupova', role: 'Product', img: 'https://i.pravatar.cc/200?img=20' },
]

const testimonials = [
  { name: 'Ali Valiyev', role: 'Toshkent', text: 'Yillar davomida kommunal to‘lovlarni Paynet orqali qilaman. Tez va ishonchli.', stars: 5 },
  { name: 'Madina Rahimova', role: 'Samarqand', text: 'Agent sifatida ishlayman — daromad barqaror, qo‘llab-quvvatlash yaxshi.', stars: 5 },
  { name: 'Sardor Nematov', role: 'Andijon', text: 'Ilova qulay, Steam va mobil to‘lovlar bir joyda.', stars: 4 },
  { name: 'Zarina Abdullayeva', role: 'Buxoro', text: 'Xolis orqali biznes to‘lovlarini oson yuritaman.', stars: 5 },
]

const reviews = [
  { source: 'Mobil ilova', score: '4.8', count: 'Demo' },
  { source: 'Vercel', score: '5.0', count: 'Live' },
  { source: 'Sayt reytingi', score: '4.9', count: '8K+' },
]

const pricing = [
  { name: 'Oddiy foydalanuvchi', price: 'Bepul', features: ['Mobil to‘lovlar', 'Kommunal', 'Cashback', '24/7 yordam'], cta: 'Ro‘yxatdan o‘tish', link: '/register', popular: false },
  { name: 'Agent', price: 'Shartnoma', features: ['Komissiya daromadi', 'Terminal / ofis', 'Marketing materiallari', 'Shaxsiy menejer'], cta: 'Agent bo‘lish', link: '/become-agent', popular: true },
  { name: 'Biznes / Xolis', price: 'Individual', features: ['Korporativ hisob', 'EHF', 'Hisobotlar', 'API integratsiya'], cta: 'Bog‘lanish', link: '/contacts', popular: false },
]

const partners = [
  'Beeline', 'Ucell', 'Uzmobile', 'Uztelecom', 'Humans', 'Click', 'Visa', 'Mastercard', 'Kapitalbank', 'NBU'
]

const clients = [
  { name: 'Retail tarmoq', text: 'Kunlik 50 000+ tranzaksiya' },
  { name: 'Kommunal korxonalar', text: 'Millions of household bills' },
  { name: 'Davlat organlari', text: 'Jarima va soliq to‘lovlari' },
  { name: 'Online o‘yinlar', text: 'Steam va boshqa platformalar' },
]

const news = [
  { date: '20.06.2026', title: 'Paynet investitsiya yo‘nalishini kengaytirmoqda', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=280&fit=crop' },
  { date: '20.08.2026', title: 'Xolis’da EHF imkoniyati', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=280&fit=crop' },
  { date: '13.07.2026', title: 'Telefon orqali Visa o‘tkazmalari', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=280&fit=crop' },
]

const blog = [
  { tag: 'Maslahat', title: 'Qanday qilib xavfsiz to‘lov qilish mumkin?', read: '5 daqiqa' },
  { tag: 'Yangilik', title: '2026-yilgi fintech tendensiyalari', read: '8 daqiqa' },
  { tag: 'Biznes', title: 'Agent sifatida daromadni oshirish', read: '6 daqiqa' },
]

const faqs = [
  { q: 'Paynet orqali qanday to‘lov qilaman?', a: 'Mobil ilova, sayt, terminal yoki agent punkti orqali. Telefon raqami yoki hisob raqamini kiriting va to‘lang.' },
  { q: 'Komissiya bormi?', a: 'Ko‘p mobil va kommunal xizmatlar 0%. Ba’zi xizmatlarda minimal komissiya ko‘rsatiladi.' },
  { q: 'Agent bo‘lish uchun nima kerak?', a: 'Ariza qoldiring, hujjatlarni topshiring va shartnoma imzolang. Tafsilotlar «Agent bo‘lish» sahifasida.' },
  { q: 'To‘lov qaytmasa nima qilaman?', a: 'Yordam markazi yoki call-markazga murojaat qiling. Tranzaksiya ID si bilan tezroq yordam beramiz.' },
]

const gallery = [
  'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
]

export default function HomePage() {
  const [cmsHome, setCmsHome] = useState<HomeText>(contentStore.getHome())
  const [heroBg, setHeroBg] = useState('/videos/hero-bg.mp4')
  const [heroSide, setHeroSide] = useState('/videos/hero-bg.mp4')
  const [serviceImgs, setServiceImgs] = useState<string[]>([])

  useEffect(() => {
    contentStore.init()
    const apply = () => {
      setCmsHome(contentStore.getHome())
      const bg = contentStore.getMediaByPlacement('hero_bg')[0]
      const side = contentStore.getMediaByPlacement('hero_side')[0]
      const svcs = contentStore.getMediaByPlacement('services')
      if (bg?.url) setHeroBg(bg.url)
      if (side?.url) setHeroSide(side.url)
      if (svcs.length) setServiceImgs(svcs.map((s) => s.url))
    }
    apply()
    return subscribeCms(apply)
  }, [])


  return (
    <div className="home">
      {/* ========== HERO ========== */}
      <section className="home-hero" id="hero">
        <div className="home-hero__bg" aria-hidden="true">
          <video
            key={heroBg}
            className="home-hero__bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/videos/hero-poster.jpg"
          >
            <source src={heroBg} type="video/mp4" />
          </video>
        </div>
        <div className="container home-hero__inner">
          <div className="home-hero__content">
            <span className="home-badge">{cmsHome.heroBadge}</span>
            <h1>
              {cmsHome.heroTitle} <span className="text-green">{cmsHome.heroTitleGreen}</span>
            </h1>
            <p>{cmsHome.heroSubtitle}</p>
            <div className="home-hero__actions">
              <Link to="/services"><Button size="lg">Xizmatlar <ArrowRight size={18} /></Button></Link>
              <Link to="/become-agent"><Button size="lg" variant="outline">Agent bo‘lish</Button></Link>
              <PaymentDemo />
            </div>
            <div className="home-hero__trust">
              <div className="home-hero__avatars">
                {[1, 5, 8, 11, 12].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} alt="" />
                ))}
              </div>
              <span>10 mln+ foydalanuvchi ishonadi</span>
            </div>
          </div>
          <div className="home-hero__card home-hero__card--video">
            <video
              key={heroSide}
              className="home-hero__video"
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=600&fit=crop"
            >
              <source
                src={heroSide}
                type="video/mp4"
              />
            </video>
            <div className="home-hero__card-badge"><Star size={14} /> 4.8 reyting</div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="home-section" id="about">
        <div className="container home-about">
          <div className="home-about__img">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=480&fit=crop" alt="About" />
          </div>
          <div className="home-about__text">
            <span className="home-label">Biz haqimizda</span>
            <h2>O‘zbekiston bo‘ylab to‘lov infratuzilmasi</h2>
            <p>
              Paynet — mamlakatning eng yirik to‘lov tarmoqlaridan biri. Minglab agent punktlari,
              raqamli mahsulotlar va zamonaviy fintech yechimlari orqali millionlab odamlarga xizmat ko‘rsatamiz.
            </p>
            <ul className="home-check-list">
              <li><CheckCircle2 size={18} /> 14 yildan ortiq tajriba</li>
              <li><CheckCircle2 size={18} /> 37 000+ to‘lov nuqtasi</li>
              <li><CheckCircle2 size={18} /> Bank va operatorlar bilan integratsiya</li>
              <li><CheckCircle2 size={18} /> Litsenziyalangan faoliyat</li>
            </ul>
            <Link to="/about"><Button variant="outline">Batafsil <ChevronRight size={16} /></Button></Link>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="home-section home-section--alt" id="services">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Xizmatlar</span>
            <h2>Asosiy yo‘nalishlar</h2>
            <p>Kundalik hayot uchun kerakli barcha to‘lovlar</p>
          </div>
          <div className="home-services-grid">
            {services.map((s, sIdx) => (
              <Link to={s.link} key={s.title} className="home-service-card">
                <div className="home-service-card__img">
                  <img
                    src={serviceImgs[sIdx] || s.img}
                    alt={s.title}
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget
                      el.onerror = null
                      el.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=280&fit=crop&auto=format'
                    }}
                  />
                </div>
                <div className="home-service-card__body">
                  <div className="home-service-card__icon"><s.icon size={22} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="home-link">Batafsil <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="home-center">
            <Link to="/services"><Button>Barcha xizmatlar</Button></Link>
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="home-section" id="features">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Imkoniyatlar</span>
            <h2>Nima uchun Paynet?</h2>
          </div>
          <div className="home-features-grid">
            {features.map((f) => (
              <div key={f.title} className="home-feature">
                <div className="home-feature__icon"><f.icon size={24} /></div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRODUCTS ========== */}
      <section className="home-section home-section--alt" id="products">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Mahsulotlar</span>
            <h2>Raqamli va oflayn yechimlar</h2>
          </div>
          <div className="home-products-grid">
            {products.map((p) => (
              <Link to={p.link} key={p.title} className="home-product">
                <img src={p.img} alt={p.title} />
                <div className="home-product__body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="home-section" id="categories">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Kategoriyalar</span>
            <h2>To‘lov turlari bo‘yicha</h2>
          </div>
          <div className="home-categories">
            {categories.map((c) => (
              <Link to="/services" key={c.name} className="home-category" style={{ borderTopColor: c.color }}>
                <span className="home-category__count" style={{ color: c.color }}>{c.count}</span>
                <span className="home-category__name">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="home-section home-section--green" id="benefits">
        <div className="container">
          <div className="home-section-head home-section-head--light">
            <span className="home-label home-label--light">Afzalliklar</span>
            <h2>Foydalanuvchi uchun qulaylik</h2>
          </div>
          <div className="home-benefits">
            {benefits.map((b, i) => (
              <div key={b.title} className="home-benefit">
                <span className="home-benefit__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATISTICS ========== */}
      <section className="home-section" id="statistics">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Raqamlar</span>
            <h2>Paynet raqamlarda</h2>
          </div>
          <div className="home-stats">
            {stats.map((s) => (
              <div key={s.label} className="home-stat">
                <div className="home-stat__value">{s.value}</div>
                <div className="home-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO ========== */}
      <section className="home-section home-section--alt" id="portfolio">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Portfolio</span>
            <h2>Bizning yo‘nalishlar</h2>
          </div>
          <div className="home-portfolio">
            {portfolio.map((p) => (
              <div key={p.title} className="home-portfolio__item">
                <img src={p.img} alt={p.title} />
                <div className="home-portfolio__caption">{p.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section className="home-section" id="projects">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Loyihalar</span>
            <h2>So‘nggi ishlar va yangiliklar</h2>
          </div>
          <div className="home-projects">
            {projects.map((p) => (
              <div key={p.title} className="home-project">
                <span className="home-project__year">{p.year}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TEAM ========== */}
      <section className="home-section home-section--alt" id="team">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Jamoa</span>
            <h2>Bizning mutaxassislar</h2>
            <p>Demo jamoa — o‘quv loyihasi uchun</p>
          </div>
          <div className="home-team">
            {team.map((t) => (
              <div key={t.name} className="home-team__card">
                <img src={t.img} alt={t.name} />
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="home-section" id="testimonials">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Fikrlar</span>
            <h2>Mijozlar nima deydi</h2>
          </div>
          <div className="home-testimonials">
            {testimonials.map((t) => (
              <div key={t.name} className="home-testimonial">
                <Quote size={24} className="home-testimonial__quote" />
                <div className="home-stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p>«{t.text}»</p>
                <div className="home-testimonial__author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== REVIEWS ========== */}
      <section className="home-section home-section--alt" id="reviews">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Reytinglar</span>
            <h2>Do‘kon va platformalarda</h2>
          </div>
          <div className="home-reviews">
            {reviews.map((r) => (
              <div key={r.source} className="home-review">
                <div className="home-review__score">{r.score}</div>
                <div className="home-stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <h3>{r.source}</h3>
                <p>{r.count} baho</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section className="home-section" id="pricing">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Tariflar</span>
            <h2>Kim uchun mos?</h2>
          </div>
          <div className="home-pricing">
            {pricing.map((p) => (
              <div key={p.name} className={`home-price-card ${p.popular ? 'home-price-card--popular' : ''}`}>
                {p.popular && <span className="home-price-card__badge">Mashhur</span>}
                <h3>{p.name}</h3>
                <div className="home-price-card__price">{p.price}</div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}><CheckCircle2 size={16} /> {f}</li>
                  ))}
                </ul>
                <Link to={p.link}><Button fullWidth variant={p.popular ? 'primary' : 'outline'}>{p.cta}</Button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARTNERS ========== */}
      <section className="home-section home-section--alt" id="partners">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Hamkorlar</span>
            <h2>Biz bilan ishlaydigan brendlar</h2>
          </div>
          <div className="home-partners">
            <div className="home-partners-track">
              {[...partners, ...partners].map((p, i) => (
                <div key={p + String(i)} className="home-partner">{p}</div>
              ))}
            </div>
          </div>
          <div className="home-center" style={{ marginTop: 24 }}>
            <Link to="/for-partners"><Button variant="outline">Hamkorlik</Button></Link>
          </div>
        </div>
      </section>

      {/* ========== CLIENTS ========== */}
      <section className="home-section" id="clients">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Mijozlar</span>
            <h2>Kimlar foydalanadi</h2>
          </div>
          <div className="home-clients">
            {clients.map((c) => (
              <div key={c.name} className="home-client">
                <Building2 size={28} color="#00A651" />
                <h3>{c.name}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEWS ========== */}
      <section className="home-section home-section--alt" id="news">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Yangiliklar</span>
            <h2>So‘nggi xabarlar</h2>
          </div>
          <div className="home-news">
            {news.map((n) => (
              <Link to="/news" key={n.title} className="home-news-card">
                <img src={n.img} alt={n.title} />
                <div className="home-news-card__body">
                  <span>{n.date}</span>
                  <h3>{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="home-center">
            <Link to="/news"><Button variant="outline">Barcha yangiliklar</Button></Link>
          </div>
        </div>
      </section>

      {/* ========== BLOG ========== */}
      <section className="home-section" id="blog">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Blog</span>
            <h2>Foydali maqolalar</h2>
          </div>
          <div className="home-blog">
            {blog.map((b) => (
              <div key={b.title} className="home-blog-card">
                <span className="home-blog-card__tag">{b.tag}</span>
                <h3>{b.title}</h3>
                <p>{b.read} o‘qish</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="home-section home-section--alt" id="faq">
        <div className="container home-faq">
          <div className="home-section-head">
            <span className="home-label">FAQ</span>
            <h2>Ko‘p so‘raladigan savollar</h2>
          </div>
          <div className="home-faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="home-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="home-center">
            <Link to="/faq"><Button variant="outline">Barcha savollar</Button></Link>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className="home-section" id="contact">
        <div className="container home-contact">
          <div className="home-contact__info">
            <span className="home-label">Aloqa</span>
            <h2>Biz bilan bog‘laning</h2>
            <p>Savol, taklif yoki hamkorlik uchun yozing.</p>
            <div className="home-contact__rows">
              <div><Phone size={18} /> +998 78 150-15-15</div>
              <div><Mail size={18} /> info@paynet.uz</div>
              <div><MapPin size={18} /> Toshkent, Yakkasaroy, Rustaveli 53B</div>
            </div>
            <Link to="/contacts"><Button>Kontaktlar sahifasi</Button></Link>
          </div>
          <form className="home-contact__form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Ismingiz" required />
            <input type="tel" placeholder="Telefon" required />
            <input type="email" placeholder="Email" />
            <textarea rows={4} placeholder="Xabar" required />
            <Button type="submit" fullWidth>Yuborish <Send size={16} /></Button>
          </form>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="home-cta" id="cta">
        <div className="container home-cta__inner">
          <h2>Bugunoq to‘lovni boshlang</h2>
          <p>Ilovani yuklab oling yoki agent punktiga boring</p>
          <div className="home-cta__actions">
            <Link to="/services"><Button size="lg" variant="secondary">Xizmatlar</Button></Link>
            <Link to="/login"><Button size="lg" variant="outline">Admin / Kirish</Button></Link>
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="home-section home-section--alt" id="newsletter">
        <div className="container home-newsletter">
          <div>
            <h2>Yangiliklarga obuna</h2>
            <p>Aksiyalar va yangi xizmatlar haqida birinchilardan biling</p>
          </div>
          <form className="home-newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email manzilingiz" required />
            <Button type="submit">Obuna</Button>
          </form>
        </div>
      </section>

      {/* ========== MAP ========== */}
      <section className="home-section" id="map">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Xarita</span>
            <h2>Terminallar va ofislar</h2>
          </div>
          <div className="home-map" style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
            <iframe
              title="Toshkent xarita"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.15%2C41.20%2C69.35%2C41.35&layer=mapnik&marker=41.2995%2C69.2401"
              style={{ width: '100%', height: 360, border: 0, display: 'block' }}
              loading="lazy"
            />
            <div className="home-map__overlay" style={{ background: 'linear-gradient(transparent, rgba(11,17,32,0.75))', justifyContent: 'flex-end', paddingBottom: 24 }}>
              <p style={{ color: '#fff', fontWeight: 600 }}>Toshkent · interaktiv xarita</p>
              <Link to="/terminals-map"><Button>Barcha terminallar</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section className="home-section home-section--alt" id="gallery">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Galereya</span>
            <h2>Bizning dunyo</h2>
          </div>
          <div className="home-gallery">
            {gallery.map((src, i) => (
              <div key={i} className="home-gallery__item">
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      
      
      {/* ========== REGIONS PREVIEW ========== */}
      <section className="home-section home-section--alt" id="regions-preview">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Hududlar</span>
            <h2>14 ta viloyat va respublika</h2>
            <p>Butun mamlakat bo‘ylab punktlar</p>
          </div>
          <div className="home-stats" style={{ marginBottom: 24 }}>
            {[
              ['Toshkent', '4 200+'],
              ['Samarqand', '1 800+'],
              ['Farg‘ona', '1 600+'],
              ['Andijon', '1 500+'],
            ].map(([k, v]) => (
              <div key={k} className="home-stat">
                <div className="home-stat__value">{v}</div>
                <div className="home-stat__label">{k}</div>
              </div>
            ))}
          </div>
          <div className="home-center">
            <Link to="/regions"><Button>Barcha hududlar</Button></Link>
            <Link to="/app" style={{ marginLeft: 12 }}><Button variant="outline">Ilovani yuklash</Button></Link>
            <Link to="/status" style={{ marginLeft: 12 }}><Button variant="secondary">Tizim statusi</Button></Link>
          </div>
        </div>
      </section>

      {/* ========== CAREERS CTA ========== */}
      <section className="home-section" id="careers-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="home-label">Karyera</span>
          <h2>Jamoamizga qo‘shiling</h2>
          <p style={{ maxWidth: 520, margin: '12px auto 24px', color: '#64748B' }}>
            IT, sales, support va marketing bo‘sh ish o‘rinlari
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/careers"><Button size="lg">Bo‘sh ish o‘rinlari</Button></Link>
            <Link to="/how-it-works"><Button size="lg" variant="outline">Qanday ishlaydi</Button></Link>
            <Link to="/security"><Button size="lg" variant="secondary">Xavfsizlik</Button></Link>
          </div>
        </div>
      </section>

      {/* ========== VIDEO ========== */}
      <section className="home-section" id="video">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Video</span>
            <h2>Paynet qanday ishlaydi</h2>
            <p>Oddiy demo video (Google sample)</p>
          </div>
          <VideoPlayer />
        </div>
      </section>

      {/* ========== DOWNLOAD / APP ========== */}
      <section className="home-section home-section--alt" id="download">
        <div className="container home-app">
          <div className="home-app__text">
            <span className="home-label">Ilova</span>
            <h2>Paynet mobil ilovasi</h2>
            <p>
              Android va iOS qurilmalarda barcha to‘lovlar, tarix, push-bildirishnomalar va tezkor shablonlar.
            </p>
            <div className="home-app__stores">
              <a
                href="https://paynet-uvays.vercel.app/"
                className="home-store-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={20} /> Mobil ilova
              </a>
            </div>
          </div>
          <div className="home-app__img">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=480&h=560&fit=crop" alt="App" />
          </div>
        </div>
      </section>

      {/* ========== SUPPORT ========== */}
      <section className="home-section" id="support">
        <div className="container">
          <div className="home-section-head">
            <span className="home-label">Yordam</span>
            <h2>Qo‘llab-quvvatlash</h2>
          </div>
          <div className="home-support">
            <div className="home-support__card">
              <Headphones size={28} color="#00A651" />
              <h3>Call-markaz</h3>
              <p>+998 78 150-15-15</p>
              <span>24/7</span>
            </div>
            <div className="home-support__card">
              <MessageCircle size={28} color="#00A651" />
              <h3>Chat</h3>
              <p>Ilova va sayt orqali</p>
              <span>Tezkor javob</span>
            </div>
            <div className="home-support__card">
              <Mail size={28} color="#00A651" />
              <h3>Email</h3>
              <p>support@paynet.uz</p>
              <span>1 ish kuni</span>
            </div>
            <div className="home-support__card">
              <HelpCircleIcon />
              <h3>FAQ</h3>
              <p>Ko‘p so‘raladigan savollar</p>
              <Link to="/faq">Ochish →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer is in PublicLayout — extra bottom CTA strip */}
      <section className="home-bottom-strip">
        <div className="container">
          <span>Demo loyiha · Rasmiy Paynet emas</span>
          <Link to="/about">Loyiha haqida</Link>
        </div>
      </section>
    </div>
  )
}



function VideoPlayer() {
  return (
    <div className="home-video home-video--simple">
      <span className="home-video__badge">VIDEO</span>
      <video
        className="home-video__media"
        controls
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop"
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Brauzeringiz video o‘ynamaydi.
      </video>
    </div>
  )
}

function HelpCircleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}

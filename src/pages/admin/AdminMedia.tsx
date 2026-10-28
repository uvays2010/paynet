import { useEffect, useState } from 'react'
import { contentStore, MediaItem, HomeText, BannerItem, NewsItem } from '@/store/contentStore'
import { useToast } from '@/components/widgets/Toast'
import './Admin.css'

type Tab = 'home' | 'media' | 'banners' | 'news'

export default function AdminMedia() {
  const { push } = useToast()
  const [tab, setTab] = useState<Tab>('media')
  const [home, setHome] = useState<HomeText>(contentStore.getHome())
  const [media, setMedia] = useState<MediaItem[]>([])
  const [banners, setBanners] = useState<BannerItem[]>([])
  const [news, setNews] = useState<NewsItem[]>([])

  const refresh = () => {
    setHome(contentStore.getHome())
    setMedia(contentStore.getMedia())
    setBanners(contentStore.getBanners())
    setNews(contentStore.getNews())
  }

  useEffect(() => {
    contentStore.init()
    refresh()
    const h = () => refresh()
    window.addEventListener('paynet-cms', h)
    return () => window.removeEventListener('paynet-cms', h)
  }, [])

  const saveHome = () => {
    contentStore.saveHome(home)
    push('Hero matnlari saqlandi — sayt yangilandi', 'success')
  }

  const addMedia = () => {
    const item: MediaItem = {
      id: 'm' + Date.now(),
      type: 'image',
      title: 'Yangi media',
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      placement: 'gallery',
      active: true,
    }
    contentStore.upsertMedia(item)
    refresh()
    push('Media qo‘shildi', 'success')
  }

  const field: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 10,
    border: '1px solid #334155',
    background: '#0B1120',
    color: '#F8FAFC',
    marginBottom: 10,
    boxSizing: 'border-box',
  }

  return (
    <div className="admin-page">
      <div className="admin-header admin-header--row">
        <div>
          <h1>Kontent / Media CMS</h1>
          <p>Video, rasm, matn — saqlang, public sayt darhol yangilanadi</p>
        </div>
      </div>

      <div className="admin-toolbar" style={{ marginBottom: 20 }}>
        {(
          [
            ['media', 'Video / Rasm'],
            ['home', 'Hero matn'],
            ['banners', 'Bannerlar'],
            ['news', 'Yangiliklar'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`admin-btn ${tab === id ? 'admin-btn--primary' : 'admin-btn--ghost'}`}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'home' && (
        <div className="admin-card" style={{ padding: 24, maxWidth: 640 }}>
          {(
            [
              ['heroBadge', 'Badge'],
              ['heroTitle', 'Sarlavha (1-qism)'],
              ['heroTitleGreen', 'Yashil qism'],
              ['heroSubtitle', 'Matn'],
            ] as const
          ).map(([key, label]) => (
            <label key={key} style={{ display: 'block', marginBottom: 8, color: '#94A3B8', fontSize: 13 }}>
              {label}
              <input
                style={field}
                value={home[key]}
                onChange={(e) => setHome({ ...home, [key]: e.target.value })}
              />
            </label>
          ))}
          <button type="button" className="admin-btn admin-btn--primary" onClick={saveHome}>
            Saqlash → saytga
          </button>
        </div>
      )}

      {tab === 'media' && (
        <>
          <button type="button" className="admin-btn admin-btn--primary" style={{ marginBottom: 16 }} onClick={addMedia}>
            + Media qo‘shish
          </button>
          <div style={{ display: 'grid', gap: 12 }}>
            {media.map((m) => (
              <div key={m.id} className="admin-card" style={{ padding: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16 }}>
                  {m.type === 'video' ? (
                    <video src={m.url} style={{ width: 120, height: 72, objectFit: 'cover', borderRadius: 8 }} muted />
                  ) : (
                    <img src={m.url} alt="" style={{ width: 120, height: 72, objectFit: 'cover', borderRadius: 8 }} />
                  )}
                  <div>
                    <input
                      style={field}
                      value={m.title}
                      onChange={(e) => contentStore.upsertMedia({ ...m, title: e.target.value })}
                      onBlur={refresh}
                    />
                    <input
                      style={field}
                      value={m.url}
                      onChange={(e) => contentStore.upsertMedia({ ...m, url: e.target.value })}
                      onBlur={() => {
                        refresh()
                        push('URL yangilandi', 'info')
                      }}
                      placeholder="Rasm yoki video URL"
                    />
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <select
                        style={{ ...field, width: 'auto', marginBottom: 0 }}
                        value={m.type}
                        onChange={(e) => {
                          contentStore.upsertMedia({ ...m, type: e.target.value as 'image' | 'video' })
                          refresh()
                        }}
                      >
                        <option value="image">Rasm</option>
                        <option value="video">Video</option>
                      </select>
                      <select
                        style={{ ...field, width: 'auto', marginBottom: 0 }}
                        value={m.placement}
                        onChange={(e) => {
                          contentStore.upsertMedia({
                            ...m,
                            placement: e.target.value as MediaItem['placement'],
                          })
                          refresh()
                        }}
                      >
                        <option value="hero_bg">Hero fon</option>
                        <option value="hero_side">Hero yon</option>
                        <option value="services">Xizmatlar</option>
                        <option value="gallery">Galereya</option>
                        <option value="about">About</option>
                      </select>
                      <button
                        type="button"
                        className={`admin-btn ${m.active ? 'admin-btn--primary' : 'admin-btn--ghost'}`}
                        onClick={() => {
                          contentStore.upsertMedia({ ...m, active: !m.active })
                          refresh()
                        }}
                      >
                        {m.active ? 'Faol' : 'O‘chiq'}
                      </button>
                      <button
                        type="button"
                        className="admin-btn admin-btn--danger"
                        onClick={() => {
                          contentStore.removeMedia(m.id)
                          refresh()
                        }}
                      >
                        O‘chirish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === 'banners' && (
        <>
          <button
            type="button"
            className="admin-btn admin-btn--primary"
            style={{ marginBottom: 16 }}
            onClick={() => {
              contentStore.upsertBanner({
                id: 'b' + Date.now(),
                title: 'Yangi banner',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=300&fit=crop',
                link: '/stocks',
                active: true,
              })
              refresh()
            }}
          >
            + Banner
          </button>
          {banners.map((b) => (
            <div key={b.id} className="admin-card" style={{ padding: 16, marginBottom: 12 }}>
              <img src={b.image} alt="" style={{ width: '100%', maxHeight: 120, objectFit: 'cover', borderRadius: 8, marginBottom: 10 }} />
              <input style={field} value={b.title} onChange={(e) => contentStore.upsertBanner({ ...b, title: e.target.value })} onBlur={refresh} />
              <input style={field} value={b.image} onChange={(e) => contentStore.upsertBanner({ ...b, image: e.target.value })} onBlur={refresh} placeholder="Rasm URL" />
              <input style={field} value={b.link} onChange={(e) => contentStore.upsertBanner({ ...b, link: e.target.value })} onBlur={refresh} placeholder="Link" />
              <button type="button" className="admin-btn admin-btn--danger" onClick={() => { contentStore.removeBanner(b.id); refresh() }}>
                O‘chirish
              </button>
            </div>
          ))}
        </>
      )}

      {tab === 'news' && (
        <>
          <button
            type="button"
            className="admin-btn admin-btn--primary"
            style={{ marginBottom: 16 }}
            onClick={() => {
              contentStore.upsertNews({
                id: 'n' + Date.now(),
                title: 'Yangi yangilik',
                excerpt: 'Qisqa matn...',
                date: new Date().toISOString().slice(0, 10),
                active: true,
              })
              refresh()
            }}
          >
            + Yangilik
          </button>
          {news.map((n) => (
            <div key={n.id} className="admin-card" style={{ padding: 16, marginBottom: 12 }}>
              <input style={field} value={n.title} onChange={(e) => contentStore.upsertNews({ ...n, title: e.target.value })} onBlur={refresh} />
              <textarea
                style={{ ...field, minHeight: 60 }}
                value={n.excerpt}
                onChange={(e) => contentStore.upsertNews({ ...n, excerpt: e.target.value })}
                onBlur={refresh}
              />
              <button type="button" className="admin-btn admin-btn--danger" onClick={() => { contentStore.removeNews(n.id); refresh() }}>
                O‘chirish
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

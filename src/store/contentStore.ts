/**
 * CMS — admin yozadi, public o‘qiydi (bir brauzer, live)
 */

export type BannerItem = {
  id: string
  title: string
  image: string
  link: string
  active: boolean
}

export type MediaItem = {
  id: string
  type: 'image' | 'video'
  title: string
  url: string
  placement: 'hero_bg' | 'hero_side' | 'services' | 'gallery' | 'about'
  active: boolean
}

export type HomeText = {
  heroBadge: string
  heroTitle: string
  heroTitleGreen: string
  heroSubtitle: string
}

export type NewsItem = {
  id: string
  title: string
  excerpt: string
  date: string
  active: boolean
}

const K = {
  banners: 'paynet_cms_banners',
  media: 'paynet_cms_media',
  home: 'paynet_cms_home',
  news: 'paynet_cms_news',
  tick: 'paynet_cms_tick',
} as const

function read<T>(key: string, fb: T): T {
  try {
    const r = localStorage.getItem(key)
    return r ? (JSON.parse(r) as T) : fb
  } catch {
    return fb
  }
}

function write<T>(key: string, v: T) {
  localStorage.setItem(key, JSON.stringify(v))
  localStorage.setItem(K.tick, String(Date.now()))
  window.dispatchEvent(new CustomEvent('paynet-cms'))
}

const defaultHome: HomeText = {
  heroBadge: "O‘zbekiston to‘lov tizimi · Demo",
  heroTitle: 'Barcha to‘lovlar',
  heroTitleGreen: 'bir joyda',
  heroSubtitle:
    'Mobil aloqa, kommunal, internet, transport, davlat xizmatlari va yana 2000+ yo‘nalish. Tez, xavfsiz va qulay — Paynet bilan.',
}

const defaultMedia: MediaItem[] = [
  {
    id: 'm1',
    type: 'video',
    title: 'Hero fon video',
    url: '/videos/hero-bg.mp4',
    placement: 'hero_bg',
    active: true,
  },
  {
    id: 'm2',
    type: 'video',
    title: 'Hero yon video',
    url: '/videos/hero-bg.mp4',
    placement: 'hero_side',
    active: true,
  },
  {
    id: 'm3',
    type: 'image',
    title: 'Mobil aloqa',
    url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=280&fit=crop&auto=format',
    placement: 'services',
    active: true,
  },
  {
    id: 'm4',
    type: 'image',
    title: 'Internet va TV',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=280&fit=crop&auto=format',
    placement: 'services',
    active: true,
  },
  {
    id: 'm5',
    type: 'image',
    title: 'Kommunal',
    url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=280&fit=crop&auto=format',
    placement: 'services',
    active: true,
  },
]

const defaultBanners: BannerItem[] = [
  {
    id: 'b1',
    title: 'Asosiy aksiya',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=300&fit=crop',
    link: '/stocks',
    active: true,
  },
]

const defaultNews: NewsItem[] = [
  {
    id: 'n1',
    title: 'Yangi xizmatlar qo‘shildi',
    excerpt: '2000+ yo‘nalish yangilandi',
    date: '2026-10-01',
    active: true,
  },
]

function ensure() {
  if (!localStorage.getItem(K.home)) write(K.home, defaultHome)
  if (!localStorage.getItem(K.media)) write(K.media, defaultMedia)
  if (!localStorage.getItem(K.banners)) write(K.banners, defaultBanners)
  if (!localStorage.getItem(K.news)) write(K.news, defaultNews)
}

export const contentStore = {
  init() {
    ensure()
  },
  getHome(): HomeText {
    ensure()
    return read(K.home, defaultHome)
  },
  saveHome(data: HomeText) {
    write(K.home, data)
  },
  getMedia(): MediaItem[] {
    ensure()
    return read(K.media, defaultMedia)
  },
  saveMedia(list: MediaItem[]) {
    write(K.media, list)
  },
  upsertMedia(item: MediaItem) {
    const list = contentStore.getMedia()
    const i = list.findIndex((x) => x.id === item.id)
    if (i >= 0) list[i] = item
    else list.unshift(item)
    write(K.media, list)
  },
  removeMedia(id: string) {
    write(K.media, contentStore.getMedia().filter((x) => x.id !== id))
  },
  getMediaByPlacement(placement: MediaItem['placement']) {
    return contentStore.getMedia().filter((m) => m.placement === placement && m.active)
  },
  getBanners(): BannerItem[] {
    ensure()
    return read(K.banners, defaultBanners)
  },
  upsertBanner(item: BannerItem) {
    const list = contentStore.getBanners()
    const i = list.findIndex((x) => x.id === item.id)
    if (i >= 0) list[i] = item
    else list.unshift(item)
    write(K.banners, list)
  },
  removeBanner(id: string) {
    write(K.banners, contentStore.getBanners().filter((x) => x.id !== id))
  },
  getNews(): NewsItem[] {
    ensure()
    return read(K.news, defaultNews)
  },
  upsertNews(item: NewsItem) {
    const list = contentStore.getNews()
    const i = list.findIndex((x) => x.id === item.id)
    if (i >= 0) list[i] = item
    else list.unshift(item)
    write(K.news, list)
  },
  removeNews(id: string) {
    write(K.news, contentStore.getNews().filter((x) => x.id !== id))
  },
}

/** React uchun: CMS o‘zgarishini tinglash */
export function subscribeCms(cb: () => void) {
  const onCustom = () => cb()
  const onStorage = (e: StorageEvent) => {
    if (!e.key || e.key.startsWith('paynet_cms')) cb()
  }
  window.addEventListener('paynet-cms', onCustom)
  window.addEventListener('storage', onStorage)
  return () => {
    window.removeEventListener('paynet-cms', onCustom)
    window.removeEventListener('storage', onStorage)
  }
}

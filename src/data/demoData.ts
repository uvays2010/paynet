export interface DemoUser {
  id: number
  name: string
  phone: string
  email: string
  role: string
  status: 'active' | 'blocked'
  createdAt: string
  balance: number
  avatar?: string
}

export interface DemoService {
  id: number
  name: string
  category: string
  commission: number
  status: 'active' | 'inactive'
  icon: string
  order: number
  image?: string
  payments?: number
}

export interface DemoTransaction {
  id: string
  userId: number
  userName: string
  service: string
  amount: number
  status: 'success' | 'failed' | 'pending'
  date: string
  commission: number
}

export interface DemoAgent {
  id: number
  name: string
  phone: string
  region: string
  status: 'active' | 'pending' | 'rejected'
  points: number
  revenue: number
  createdAt: string
  avatar?: string
}

export interface DemoNews {
  id: number
  title: string
  excerpt: string
  content: string
  status: 'published' | 'draft'
  date: string
  author: string
  image?: string
  views?: number
}

export interface DemoTicket {
  id: number
  user: string
  subject: string
  priority: 'low' | 'medium' | 'high'
  status: 'open' | 'in_progress' | 'closed'
  date: string
  assignee: string
}

export interface DemoBanner {
  id: number
  title: string
  image: string
  link: string
  active: boolean
}

export interface DemoNotification {
  id: number
  title: string
  body: string
  audience: string
  sentAt: string
  readRate: number
}

const avatars = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=8',
  'https://i.pravatar.cc/150?img=11',
  'https://i.pravatar.cc/150?img=12',
  'https://i.pravatar.cc/150?img=15',
  'https://i.pravatar.cc/150?img=20',
  'https://i.pravatar.cc/150?img=25',
  'https://i.pravatar.cc/150?img=32',
  'https://i.pravatar.cc/150?img=33',
  'https://i.pravatar.cc/150?img=47',
  'https://i.pravatar.cc/150?img=51',
]

const serviceImages: Record<string, string> = {
  mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop',
  internet: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a4?w=200&h=200&fit=crop',
  utility: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=200&fit=crop',
  transport: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&h=200&fit=crop',
  game: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=200&h=200&fit=crop',
  gov: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=200&fit=crop',
}

export const demoUsers: DemoUser[] = [
  { id: 1, name: 'Ali Valiyev', phone: '+998901234567', email: 'ali@mail.uz', role: 'user', status: 'active', createdAt: '2026-01-15', balance: 1250000, avatar: avatars[0] },
  { id: 2, name: 'Dilnoza Karimova', phone: '+998902345678', email: 'dilnoza@mail.uz', role: 'user', status: 'active', createdAt: '2026-02-20', balance: 340000, avatar: avatars[1] },
  { id: 3, name: 'Jasur Toshmatov', phone: '+998903456789', email: 'jasur@mail.uz', role: 'agent', status: 'active', createdAt: '2025-11-10', balance: 0, avatar: avatars[2] },
  { id: 4, name: 'Madina Rahimova', phone: '+998904567890', email: 'madina@mail.uz', role: 'user', status: 'blocked', createdAt: '2026-03-05', balance: 0, avatar: avatars[3] },
  { id: 5, name: 'Bobur Saidov', phone: '+998905678901', email: 'bobur@mail.uz', role: 'operator', status: 'active', createdAt: '2025-08-12', balance: 0, avatar: avatars[4] },
  { id: 6, name: 'Nilufar Yusupova', phone: '+998906789012', email: 'nilufar@mail.uz', role: 'user', status: 'active', createdAt: '2026-04-18', balance: 890000, avatar: avatars[5] },
  { id: 7, name: 'Sardor Nematov', phone: '+998907890123', email: 'sardor@mail.uz', role: 'user', status: 'active', createdAt: '2026-05-22', balance: 156000, avatar: avatars[6] },
  { id: 8, name: 'Admin User', phone: '+998901111111', email: 'admin@paynet.uz', role: 'admin', status: 'active', createdAt: '2025-01-01', balance: 0, avatar: avatars[7] },
  { id: 9, name: 'Kamola Ergasheva', phone: '+998908901234', email: 'kamola@mail.uz', role: 'content_manager', status: 'active', createdAt: '2025-09-30', balance: 0, avatar: avatars[8] },
  { id: 10, name: 'Otabek Ismoilov', phone: '+998909012345', email: 'otabek@mail.uz', role: 'user', status: 'active', createdAt: '2026-06-14', balance: 2100000, avatar: avatars[9] },
  { id: 11, name: 'Zarina Abdullayeva', phone: '+998901122334', email: 'zarina@mail.uz', role: 'user', status: 'active', createdAt: '2026-07-01', balance: 45000, avatar: avatars[10] },
  { id: 12, name: 'Farhod Qodirov', phone: '+998902233445', email: 'farhod@mail.uz', role: 'agent', status: 'blocked', createdAt: '2025-12-20', balance: 0, avatar: avatars[11] },
  { id: 13, name: 'Sevara Tursunova', phone: '+998903344556', email: 'sevara@mail.uz', role: 'user', status: 'active', createdAt: '2026-08-03', balance: 670000, avatar: avatars[0] },
  { id: 14, name: 'Jahongir Alimov', phone: '+998904455667', email: 'jahongir@mail.uz', role: 'analyst', status: 'active', createdAt: '2026-02-11', balance: 0, avatar: avatars[2] },
  { id: 15, name: 'Malika Sobirova', phone: '+998905566778', email: 'malika@mail.uz', role: 'user', status: 'active', createdAt: '2026-09-19', balance: 320000, avatar: avatars[1] },
  { id: 16, name: 'Rustam Bekmurodov', phone: '+998906677889', email: 'rustam@mail.uz', role: 'agent', status: 'active', createdAt: '2026-03-28', balance: 0, avatar: avatars[4] },
  { id: 17, name: 'Gulnora Hasanova', phone: '+998907788990', email: 'gulnora@mail.uz', role: 'user', status: 'active', createdAt: '2026-10-01', balance: 110000, avatar: avatars[5] },
  { id: 18, name: 'Aziz Karimov', phone: '+998908899001', email: 'aziz@mail.uz', role: 'operator', status: 'active', createdAt: '2025-07-14', balance: 0, avatar: avatars[6] },
]

export const demoServices: DemoService[] = [
  { id: 1, name: 'Beeline', category: 'Mobil aloqa', commission: 0, status: 'active', icon: 'smartphone', order: 1, image: serviceImages.mobile, payments: 12400 },
  { id: 2, name: 'Ucell', category: 'Mobil aloqa', commission: 0, status: 'active', icon: 'smartphone', order: 2, image: serviceImages.mobile, payments: 9800 },
  { id: 3, name: 'Uzmobile', category: 'Mobil aloqa', commission: 0, status: 'active', icon: 'smartphone', order: 3, image: serviceImages.mobile, payments: 7600 },
  { id: 4, name: 'Perfectum', category: 'Mobil aloqa', commission: 0.5, status: 'active', icon: 'smartphone', order: 4, image: serviceImages.mobile, payments: 2100 },
  { id: 5, name: 'Uztelecom Internet', category: 'Internet', commission: 1, status: 'active', icon: 'wifi', order: 5, image: serviceImages.internet, payments: 5400 },
  { id: 6, name: 'Sarkor Telecom', category: 'Internet', commission: 1, status: 'active', icon: 'wifi', order: 6, image: serviceImages.internet, payments: 3200 },
  { id: 7, name: 'ISTV', category: 'TV', commission: 1.5, status: 'active', icon: 'tv', order: 7, image: serviceImages.internet, payments: 1800 },
  { id: 8, name: 'Elektr energiyasi', category: 'Kommunal', commission: 0, status: 'active', icon: 'zap', order: 8, image: serviceImages.utility, payments: 15200 },
  { id: 9, name: 'Tabiiy gaz', category: 'Kommunal', commission: 0, status: 'active', icon: 'flame', order: 9, image: serviceImages.utility, payments: 8900 },
  { id: 10, name: 'Issiq suv', category: 'Kommunal', commission: 0, status: 'active', icon: 'droplet', order: 10, image: serviceImages.utility, payments: 4100 },
  { id: 11, name: 'Sovuq suv', category: 'Kommunal', commission: 0, status: 'inactive', icon: 'droplet', order: 11, image: serviceImages.utility, payments: 0 },
  { id: 12, name: 'Aviabiletlar', category: 'Transport', commission: 2, status: 'active', icon: 'plane', order: 12, image: serviceImages.transport, payments: 980 },
  { id: 13, name: 'Temir yo‘l', category: 'Transport', commission: 1.5, status: 'active', icon: 'train', order: 13, image: serviceImages.transport, payments: 1450 },
  { id: 14, name: 'MIB jarimalari', category: 'Davlat', commission: 0, status: 'active', icon: 'landmark', order: 14, image: serviceImages.gov, payments: 3200 },
  { id: 15, name: 'Steam', category: 'O‘yin', commission: 3, status: 'active', icon: 'gamepad', order: 15, image: serviceImages.game, payments: 5600 },
  { id: 16, name: 'PlayStation Store', category: 'O‘yin', commission: 3, status: 'active', icon: 'gamepad', order: 16, image: serviceImages.game, payments: 2100 },
  { id: 17, name: 'Yandex Go', category: 'Transport', commission: 1, status: 'active', icon: 'car', order: 17, image: serviceImages.transport, payments: 6700 },
  { id: 18, name: 'Soliqlar (DSQ)', category: 'Davlat', commission: 0, status: 'active', icon: 'landmark', order: 18, image: serviceImages.gov, payments: 2400 },
]

export const demoTransactions: DemoTransaction[] = Array.from({ length: 80 }, (_, i) => {
  const services = ['Beeline', 'Elektr energiyasi', 'Uztelecom', 'Ucell', 'Gaz', 'Steam', 'Aviabilet', 'Internet', 'MIB', 'Yandex Go']
  const users = ['Ali Valiyev', 'Dilnoza Karimova', 'Nilufar Yusupova', 'Sardor Nematov', 'Otabek Ismoilov', 'Sevara Tursunova', 'Malika Sobirova']
  const statuses: Array<'success' | 'failed' | 'pending'> = ['success', 'success', 'success', 'success', 'success', 'failed', 'pending']
  const day = String(Math.max(1, 25 - (i % 24))).padStart(2, '0')
  return {
    id: `TX-${10000 + i}`,
    userId: (i % 10) + 1,
    userName: users[i % users.length],
    service: services[i % services.length],
    amount: [30000, 50000, 99000, 185000, 72000, 100000, 450000, 15000, 25000, 80000][i % 10],
    status: statuses[i % statuses.length],
    date: `2026-10-${day} ${10 + (i % 12)}:${String(i % 60).padStart(2, '0')}`,
    commission: i % 3 === 0 ? 500 : i % 5 === 0 ? 1500 : 0,
  }
})

export const demoAgents: DemoAgent[] = [
  { id: 1, name: 'Jasur Toshmatov', phone: '+998903456789', region: 'Toshkent', status: 'active', points: 3, revenue: 4500000, createdAt: '2025-11-10', avatar: avatars[2] },
  { id: 2, name: 'Akmal Rakhimov', phone: '+998911223344', region: 'Samarqand', status: 'active', points: 5, revenue: 8200000, createdAt: '2025-06-15', avatar: avatars[4] },
  { id: 3, name: 'Shahnoza Alimova', phone: '+998912334455', region: 'Andijon', status: 'pending', points: 0, revenue: 0, createdAt: '2026-10-18', avatar: avatars[1] },
  { id: 4, name: 'Bahodir Yusupov', phone: '+998913445566', region: 'Buxoro', status: 'active', points: 2, revenue: 2100000, createdAt: '2026-01-22', avatar: avatars[6] },
  { id: 5, name: 'Gulnora Karimova', phone: '+998914556677', region: 'Farg‘ona', status: 'rejected', points: 0, revenue: 0, createdAt: '2026-09-05', avatar: avatars[5] },
  { id: 6, name: 'Rustam Nazarov', phone: '+998915667788', region: 'Namangan', status: 'active', points: 4, revenue: 6700000, createdAt: '2025-08-30', avatar: avatars[0] },
  { id: 7, name: 'Malika Saidova', phone: '+998916778899', region: 'Qashqadaryo', status: 'pending', points: 0, revenue: 0, createdAt: '2026-10-20', avatar: avatars[8] },
  { id: 8, name: 'Farhod Qodirov', phone: '+998902233445', region: 'Toshkent', status: 'active', points: 1, revenue: 890000, createdAt: '2025-12-20', avatar: avatars[11] },
  { id: 9, name: 'Dilshod Ergashev', phone: '+998917889900', region: 'Xorazm', status: 'active', points: 2, revenue: 3100000, createdAt: '2026-04-12', avatar: avatars[7] },
  { id: 10, name: 'Nodira Usmanova', phone: '+998918990011', region: 'Surxondaryo', status: 'pending', points: 0, revenue: 0, createdAt: '2026-10-22', avatar: avatars[3] },
]

export const demoNews: DemoNews[] = [
  { id: 1, title: 'Paynet investitsiya yo‘nalishini kengaytirmoqda', excerpt: 'FurtherIT GoInvest’ga investitsiya kiritadi', content: 'To‘liq matn...', status: 'published', date: '2026-06-20', author: 'Admin', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=320&fit=crop', views: 12400 },
  { id: 2, title: 'Xolis’da EHF imkoniyati', excerpt: 'Tadbirkorlar yuridik shaxslar bilan bitim tuzishi mumkin', content: 'To‘liq matn...', status: 'published', date: '2026-08-20', author: 'Kamola', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=320&fit=crop', views: 8700 },
  { id: 3, title: 'Telefon orqali Visa o‘tkazmalari', excerpt: '16 xonali karta raqamisiz o‘tkazma', content: 'To‘liq matn...', status: 'published', date: '2026-07-13', author: 'Admin', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=320&fit=crop', views: 15200 },
  { id: 4, title: 'Yangi Xolis xizmati', excerpt: 'Yakka tartibdagi tadbirkorlar uchun', content: 'To‘liq matn...', status: 'published', date: '2025-11-25', author: 'Kamola', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=320&fit=crop', views: 22100 },
  { id: 5, title: 'Qoralama: 2027 rejalari', excerpt: 'Ichki hujjat', content: 'Qoralama matn...', status: 'draft', date: '2026-10-15', author: 'Admin', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=320&fit=crop', views: 0 },
  { id: 6, title: 'Steam aksiyasi: 2x foyda', excerpt: 'Steam hisobini to‘ldirishda qo‘shimcha bonus', content: 'To‘liq matn...', status: 'published', date: '2026-10-10', author: 'Kamola', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=320&fit=crop', views: 9800 },
]

export const demoTickets: DemoTicket[] = [
  { id: 101, user: 'Ali Valiyev', subject: 'To‘lov qaytmadi', priority: 'high', status: 'open', date: '2026-10-23', assignee: '—' },
  { id: 102, user: 'Dilnoza Karimova', subject: 'Ilova ishlamayapti', priority: 'medium', status: 'in_progress', date: '2026-10-22', assignee: 'Bobur' },
  { id: 103, user: 'Nilufar Yusupova', subject: 'Cashback hisoblanmadi', priority: 'low', status: 'closed', date: '2026-10-20', assignee: 'Bobur' },
  { id: 104, user: 'Sardor Nematov', subject: 'Agent arizasi haqida', priority: 'medium', status: 'open', date: '2026-10-21', assignee: '—' },
  { id: 105, user: 'Otabek Ismoilov', subject: 'Karta ulash muammosi', priority: 'high', status: 'in_progress', date: '2026-10-23', assignee: 'Bobur' },
  { id: 106, user: 'Zarina Abdullayeva', subject: 'Taklif: yangi xizmat', priority: 'low', status: 'open', date: '2026-10-19', assignee: '—' },
  { id: 107, user: 'Sevara Tursunova', subject: 'SMS kod kelmayapti', priority: 'high', status: 'open', date: '2026-10-24', assignee: '—' },
  { id: 108, user: 'Malika Sobirova', subject: 'Terminal ishlamayapti', priority: 'medium', status: 'in_progress', date: '2026-10-23', assignee: 'Aziz' },
]

export const demoBanners: DemoBanner[] = [
  { id: 1, title: 'Yangi mijozlarga 5% keshbek', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=300&fit=crop', link: '/stocks', active: true },
  { id: 2, title: 'Xolis — tadbirkorlar uchun', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=300&fit=crop', link: '/xolis', active: true },
  { id: 3, title: 'Muddatli to‘lov 18 oygacha', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=300&fit=crop', link: '/installment', active: false },
]

export const demoNotifications: DemoNotification[] = [
  { id: 1, title: 'Texnik ishlar', body: '25-oktabr soat 02:00–04:00 texnik ishlar', audience: 'Barcha', sentAt: '2026-10-20 10:00', readRate: 78 },
  { id: 2, title: 'Yangi aksiya', body: 'Steam to‘ldirishda 2x foyda', audience: 'Faol foydalanuvchilar', sentAt: '2026-10-18 14:30', readRate: 62 },
  { id: 3, title: 'Xavfsizlik eslatmasi', body: 'SMS kodni hech kimga bermang', audience: 'Barcha', sentAt: '2026-10-15 09:00', readRate: 91 },
  { id: 4, title: 'Agentlar uchun yangilik', body: 'Yangi komissiya tariflari', audience: 'Agentlar', sentAt: '2026-10-12 11:20', readRate: 55 },
]

export function formatSum(n: number) {
  return new Intl.NumberFormat('uz-UZ').format(Math.abs(n)) + ' so‘m'
}

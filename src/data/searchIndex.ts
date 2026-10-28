export interface SearchItem {
  id: string
  title: string
  description: string
  type: 'xizmat' | 'sahifa' | 'yangilik' | 'yordam'
  path: string
  keywords: string
}

export const searchIndex: SearchItem[] = [
  // Services
  { id: 's1', title: 'Beeline', description: 'Mobil aloqa to‘lovi', type: 'xizmat', path: '/services', keywords: 'beeline mobil aloqa telefon' },
  { id: 's2', title: 'Ucell', description: 'Mobil aloqa to‘lovi', type: 'xizmat', path: '/services', keywords: 'ucell mobil' },
  { id: 's3', title: 'Uzmobile', description: 'Mobil aloqa to‘lovi', type: 'xizmat', path: '/services', keywords: 'uzmobile mobil' },
  { id: 's4', title: 'Perfectum', description: 'Mobil aloqa', type: 'xizmat', path: '/services', keywords: 'perfectum' },
  { id: 's5', title: 'Uztelecom Internet', description: 'Internet to‘lovi', type: 'xizmat', path: '/services', keywords: 'uztelecom internet wifi' },
  { id: 's6', title: 'Sarkor Telecom', description: 'Internet', type: 'xizmat', path: '/services', keywords: 'sarkor internet' },
  { id: 's7', title: 'Elektr energiyasi', description: 'Kommunal to‘lov', type: 'xizmat', path: '/services', keywords: 'elektr kommunal energiya' },
  { id: 's8', title: 'Tabiiy gaz', description: 'Kommunal to‘lov', type: 'xizmat', path: '/services', keywords: 'gaz kommunal' },
  { id: 's9', title: 'Issiq suv', description: 'Kommunal', type: 'xizmat', path: '/services', keywords: 'suv issiq kommunal' },
  { id: 's10', title: 'Steam', description: 'O‘yin hisobi', type: 'xizmat', path: '/services', keywords: 'steam oyun game' },
  { id: 's11', title: 'PlayStation Store', description: 'O‘yin', type: 'xizmat', path: '/services', keywords: 'playstation ps store' },
  { id: 's12', title: 'MIB jarimalari', description: 'Davlat xizmati', type: 'xizmat', path: '/services', keywords: 'mib jarima davlat' },
  { id: 's13', title: 'Aviabiletlar', description: 'Transport', type: 'xizmat', path: '/services', keywords: 'avia bilet samolyot' },
  { id: 's14', title: 'Temir yo‘l', description: 'Transport', type: 'xizmat', path: '/services', keywords: 'temir yol poyezd' },
  { id: 's15', title: 'Yandex Go', description: 'Taksi', type: 'xizmat', path: '/services', keywords: 'yandex go taksi' },
  { id: 's16', title: 'Soliqlar (DSQ)', description: 'Davlat', type: 'xizmat', path: '/services', keywords: 'soliq dsq' },
  // Pages
  { id: 'p1', title: 'Xizmatlar katalogi', description: '2000+ xizmat', type: 'sahifa', path: '/services', keywords: 'xizmatlar katalog' },
  { id: 'p2', title: 'Biz haqimizda', description: 'Kompaniya', type: 'sahifa', path: '/about', keywords: 'about kompaniya' },
  { id: 'p3', title: 'Agentlar uchun', description: 'Agent tarmog‘i', type: 'sahifa', path: '/for-agents', keywords: 'agent biznes' },
  { id: 'p4', title: 'Agent bo‘lish', description: 'Ariza', type: 'sahifa', path: '/become-agent', keywords: 'agent ariza' },
  { id: 'p5', title: 'Hamkorlar', description: 'Hamkorlik', type: 'sahifa', path: '/for-partners', keywords: 'hamkor partner' },
  { id: 'p6', title: 'Kontaktlar', description: 'Aloqa', type: 'sahifa', path: '/contacts', keywords: 'kontakt telefon email' },
  { id: 'p7', title: 'FAQ', description: 'Savol-javob', type: 'sahifa', path: '/faq', keywords: 'faq savol yordam' },
  { id: 'p8', title: 'Yordam markazi', description: 'Support', type: 'sahifa', path: '/help', keywords: 'yordam support' },
  { id: 'p9', title: 'Terminallar xaritasi', description: 'Punktlar', type: 'sahifa', path: '/terminals-map', keywords: 'terminal xarita punkt' },
  { id: 'p10', title: 'Filiallar', description: 'Ofislar', type: 'sahifa', path: '/branches', keywords: 'filial ofis' },
  { id: 'p11', title: 'Xolis', description: 'Biznes mahsuloti', type: 'sahifa', path: '/xolis', keywords: 'xolis biznes' },
  { id: 'p12', title: 'Muddatli to‘lov', description: 'Bo‘lib to‘lash', type: 'sahifa', path: '/installment', keywords: 'muddatli installment' },
  { id: 'p13', title: 'Aksiyalar', description: 'Keshbek', type: 'sahifa', path: '/stocks', keywords: 'aksiya keshbek bonus' },
  { id: 'p14', title: 'Yangiliklar', description: 'Xabarlar', type: 'sahifa', path: '/news', keywords: 'yangilik news' },
  { id: 'p15', title: 'Admin kirish', description: 'Admin panel', type: 'sahifa', path: '/login', keywords: 'admin login kirish' },
  // News
  { id: 'n1', title: 'Paynet investitsiya', description: 'Investitsiya yo‘nalishi', type: 'yangilik', path: '/news', keywords: 'investitsiya' },
  { id: 'n2', title: 'Xolis EHF', description: 'Elektron hujjat', type: 'yangilik', path: '/news', keywords: 'ehf xolis' },
  { id: 'n3', title: 'Visa telefon o‘tkazmalari', description: 'Karta raqamisiz', type: 'yangilik', path: '/news', keywords: 'visa telefon' },
  // Help
  { id: 'h1', title: 'To‘lov qaytmadi', description: 'Yordam', type: 'yordam', path: '/help', keywords: 'tolov qaytmadi xato' },
  { id: 'h2', title: 'SMS kod', description: 'Yordam', type: 'yordam', path: '/help', keywords: 'sms kod' },
  { id: 'h3', title: 'Komissiya', description: 'FAQ', type: 'yordam', path: '/faq', keywords: 'komissiya foiz' },
]

export function searchAll(query: string, limit = 30): SearchItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const words = q.split(/\s+/).filter(Boolean)
  return searchIndex
    .map((item) => {
      const hay = `${item.title} ${item.description} ${item.keywords} ${item.type}`.toLowerCase()
      let score = 0
      for (const w of words) {
        if (item.title.toLowerCase().includes(w)) score += 10
        if (hay.includes(w)) score += 3
      }
      return { item, score }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.item)
}

searchIndex.push(
  { id: 'p20', title: 'Karyera', description: 'Bo‘sh ish o‘rinlari', type: 'sahifa', path: '/careers', keywords: 'ish karyera vacancy job' },
  { id: 'p21', title: 'Xavfsizlik', description: 'Himoya siyosati', type: 'sahifa', path: '/security', keywords: 'xavfsizlik security' },
  { id: 'p22', title: 'Qanday ishlaydi', description: 'Qo‘llanma', type: 'sahifa', path: '/how-it-works', keywords: 'qanday ishlaydi guide' },
  { id: 'p23', title: 'Kalkulyator', description: 'Komissiya', type: 'sahifa', path: '/calculator', keywords: 'kalkulyator komissiya' },
)

searchIndex.push(
  { id: 'p30', title: 'Hududlar', description: 'Viloyatlar', type: 'sahifa', path: '/regions', keywords: 'hudud viloyat region' },
  { id: 'p31', title: 'Mobil ilova', description: 'Yuklab olish', type: 'sahifa', path: '/app', keywords: 'ilova app download' },
  { id: 'p32', title: 'Tizim statusi', description: 'Monitoring', type: 'sahifa', path: '/status', keywords: 'status monitoring' },
  { id: 'p33', title: 'Blog', description: 'Maqolalar', type: 'sahifa', path: '/blog', keywords: 'blog maqola' },
)

searchIndex.push(
  { id: 'p40', title: 'Sozlamalar', description: 'Til, tema, bildirishnomalar', type: 'sahifa', path: '/settings', keywords: 'sozlama settings til tema' },
)

searchIndex.push(
  { id: 'p50', title: 'To‘lovlar tarixi', description: 'Tranzaksiyalar', type: 'sahifa', path: '/payments', keywords: 'tarix to‘lov payment' },
  { id: 'p51', title: 'Bildirishnomalar', description: 'Xabarlar', type: 'sahifa', path: '/notifications', keywords: 'bildirishnoma notification' },
  { id: 'p52', title: 'Profil', description: 'Shaxsiy ma’lumot', type: 'sahifa', path: '/profile', keywords: 'profil profile' },
)

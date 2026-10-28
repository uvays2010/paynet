export type CatalogService = {
  id: string
  title: string
  category: string
  commission: number
  popular?: boolean
}

export const servicesCatalog: CatalogService[] = [
  { id: 'beeline', title: 'Beeline', category: 'Mobil', commission: 0, popular: true },
  { id: 'ucell', title: 'Ucell', category: 'Mobil', commission: 0, popular: true },
  { id: 'uzmobile', title: 'Uzmobile', category: 'Mobil', commission: 0, popular: true },
  { id: 'mobiuz', title: 'Mobiuz', category: 'Mobil', commission: 0 },
  { id: 'perfectum', title: 'Perfectum', category: 'Mobil', commission: 0 },
  { id: 'uztelecom', title: 'Uztelecom Internet', category: 'Internet', commission: 0, popular: true },
  { id: 'sarkor', title: 'Sarkor Telecom', category: 'Internet', commission: 0 },
  { id: 'istv', title: 'ISTV', category: 'Internet', commission: 1 },
  { id: 'elektr', title: 'Elektr energiyasi', category: 'Kommunal', commission: 0, popular: true },
  { id: 'gaz', title: 'Tabiiy gaz', category: 'Kommunal', commission: 0, popular: true },
  { id: 'suv', title: 'Suv ta’minoti', category: 'Kommunal', commission: 0 },
  { id: 'issiqlik', title: 'Issiqlik', category: 'Kommunal', commission: 0 },
  { id: 'steam', title: 'Steam Wallet', category: 'O‘yin', commission: 2, popular: true },
  { id: 'psn', title: 'PlayStation Store', category: 'O‘yin', commission: 2 },
  { id: 'mib', title: 'MIB jarimalari', category: 'Davlat', commission: 0 },
  { id: 'soliq', title: 'Soliq', category: 'Davlat', commission: 0 },
  { id: 'aviabilet', title: 'Aviabilet', category: 'Transport', commission: 1 },
  { id: 'temir', title: 'Temir yo‘l', category: 'Transport', commission: 1 },
]

export const categories = [...new Set(servicesCatalog.map((s) => s.category))]

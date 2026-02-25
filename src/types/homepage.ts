export interface HomepageCategory {
  id: string
  name: string
  slug: string
  icon: string
  dealCount: number
}

export interface HomepageDealPreview {
  id: string
  title: string
  locationArea: string
  dealPrice: number
  discountPercent: number
}

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
  sourceName: string
  templateType: string
  serviceName: string
  locationArea: string
  originalPrice: number
  discountPrice: number
  discountPercent: number
}

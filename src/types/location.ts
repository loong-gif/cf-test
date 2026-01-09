export interface City {
  id: string
  name: string
  state: string
  stateCode: string
  latitude: number
  longitude: number
  timezone: string
  isActive: boolean
}

export interface LocationArea {
  id: string
  cityId: string
  name: string // e.g., "Downtown", "North Austin", "South Side"
  latitude: number
  longitude: number
  radiusMiles: number
}

export interface UserLocation {
  city: string
  state: string
  latitude: number
  longitude: number
  source: 'geolocation' | 'ip' | 'manual'
}

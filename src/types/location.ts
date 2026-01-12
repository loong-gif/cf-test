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
  isActive?: boolean // Defaults to true if not specified
}

export interface UserLocation {
  city: string
  state: string
  latitude: number
  longitude: number
  source: 'geolocation' | 'ip' | 'manual'
}

export interface LocationState {
  current: {
    type: 'detected' | 'selected' | 'default'
    city: City | null
    area: LocationArea | null
    coordinates: { latitude: number; longitude: number } | null
    accuracy: number | null
  }
  isLoading: boolean
  error: string | null
  hasPermission: boolean | null
}

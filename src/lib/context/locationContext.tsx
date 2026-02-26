'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useGeolocation } from '@/lib/hooks/useGeolocation'
import type { City, LocationArea, LocationState } from '@/types'

const STORAGE_KEY = 'costfinders_location'

interface StoredLocation {
  cityId: string
  areaId: string | null
  type: 'selected' | 'detected'
}

interface LocationContextValue {
  state: LocationState
  cities: City[]
  getAreasForCity: (cityId: string) => LocationArea[]
  detectLocation: () => Promise<void>
  selectCity: (city: City) => void
  selectArea: (area: LocationArea | null) => void
  clearSelection: () => void
}

const LocationContext = createContext<LocationContextValue | null>(null)

function getInitialState(defaultCity: City | null): LocationState {
  return {
    current: {
      type: 'default',
      city: defaultCity,
      area: null,
      coordinates: null,
      accuracy: null,
    },
    isLoading: false,
    error: null,
    hasPermission: null,
  }
}

function loadStoredLocation(): StoredLocation | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    return JSON.parse(stored) as StoredLocation
  } catch {
    return null
  }
}

function saveLocation(
  cityId: string,
  areaId: string | null,
  type: 'selected' | 'detected',
) {
  if (typeof window === 'undefined') return

  const data: StoredLocation = { cityId, areaId, type }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function clearStoredLocation() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

interface LocationProviderProps {
  children: React.ReactNode
  defaultCity?: City | null
}

export function LocationProvider({
  children,
  defaultCity = null,
}: LocationProviderProps) {
  const [state, setState] = useState<LocationState>(
    getInitialState(defaultCity),
  )
  const [cities, setCities] = useState<City[]>(
    defaultCity ? [defaultCity] : [],
  )
  const geolocation = useGeolocation()

  const getAreasForCity = useCallback(
    (_cityId: string) => [] as LocationArea[],
    [],
  )

  const getCityById = useCallback(
    (cityId: string) =>
      cities.find((city) => city.id === cityId) ?? null,
    [cities],
  )

  const findNearestCity = useCallback(
    (_lat: number, _lng: number) =>
      cities.length > 0 ? cities[0] : null,
    [cities],
  )

  // Load cities on mount
  useEffect(() => {
    let isMounted = true

    async function loadCities() {
      try {
        const response = await fetch('/api/cities')
        if (!response.ok) return
        const data = (await response.json()) as { cities?: Array<{ name: string; slug: string }> }
        const loadedCities: City[] = (data.cities ?? []).map((city) => ({
          id: city.slug,
          name: city.name,
          state: '',
          stateCode: '',
          latitude: 0,
          longitude: 0,
          timezone: 'UTC',
          isActive: true,
        }))

        if (!isMounted) return
        if (loadedCities.length > 0) {
          setCities(loadedCities)
          setState((prev) => ({
            ...prev,
            current: {
              ...prev.current,
              city: prev.current.city ?? loadedCities[0],
              type: prev.current.city ? prev.current.type : 'default',
            },
          }))
        }
      } catch {
        // ignore fetch errors
      }
    }

    loadCities()
    return () => {
      isMounted = false
    }
  }, [])

  // Load stored location on mount
  useEffect(() => {
    const stored = loadStoredLocation()
    if (stored) {
      const city = getCityById(stored.cityId)
      if (city) {
        const area = stored.areaId
          ? getAreasForCity(stored.cityId).find(
              (a) => a.id === stored.areaId,
            ) || null
          : null

        setState((prev) => ({
          ...prev,
          current: {
            ...prev.current,
            type: stored.type,
            city,
            area,
          },
        }))
      }
    }
  }, [getAreasForCity, getCityById])

  const detectLocation = useCallback(async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
    }))

    try {
      const position = await geolocation.requestLocation()
      const { latitude, longitude } = position.coords
      const nearestCity = findNearestCity(latitude, longitude)

      if (!nearestCity) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: 'No cities available for detection',
          hasPermission: true,
        }))
        return
      }

      setState((prev) => ({
        ...prev,
        current: {
          type: 'detected',
          city: nearestCity,
          area: null,
          coordinates: { latitude, longitude },
          accuracy: position.coords.accuracy,
        },
        isLoading: false,
        error: null,
        hasPermission: true,
      }))

      saveLocation(nearestCity.id, null, 'detected')
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error:
          error instanceof Error ? error.message : 'Failed to detect location',
        hasPermission: false,
      }))
    }
  }, [geolocation, findNearestCity])

  const selectCity = useCallback((city: City) => {
    setState((prev) => ({
      ...prev,
      current: {
        ...prev.current,
        type: 'selected',
        city,
        area: null, // Reset area when city changes
      },
      error: null,
    }))

    saveLocation(city.id, null, 'selected')
  }, [])

  const selectArea = useCallback((area: LocationArea | null) => {
    setState((prev) => {
      if (!prev.current.city) return prev

      const newState = {
        ...prev,
        current: {
          ...prev.current,
          type: 'selected' as const,
          area,
        },
      }

      saveLocation(prev.current.city.id, area?.id || null, 'selected')
      return newState
    })
  }, [])

  const clearSelection = useCallback(() => {
    setState({
      current: {
        type: 'default',
        city: null,
        area: null,
        coordinates: null,
        accuracy: null,
      },
      isLoading: false,
      error: null,
      hasPermission: null,
    })

    clearStoredLocation()
  }, [])

  const value = useMemo<LocationContextValue>(
    () => ({
      state,
      cities,
      getAreasForCity,
      detectLocation,
      selectCity,
      selectArea,
      clearSelection,
    }),
    [
      state,
      cities,
      getAreasForCity,
      detectLocation,
      selectCity,
      selectArea,
      clearSelection,
    ],
  )

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}

export function useLocation(): LocationContextValue {
  const context = useContext(LocationContext)
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider')
  }
  return context
}

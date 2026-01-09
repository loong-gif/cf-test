import type { City, LocationArea } from '@/types'

export const cities: City[] = [
  {
    id: 'city-austin',
    name: 'Austin',
    state: 'Texas',
    stateCode: 'TX',
    latitude: 30.2672,
    longitude: -97.7431,
    timezone: 'America/Chicago',
    isActive: true,
  },
  {
    id: 'city-dallas',
    name: 'Dallas',
    state: 'Texas',
    stateCode: 'TX',
    latitude: 32.7767,
    longitude: -96.797,
    timezone: 'America/Chicago',
    isActive: true,
  },
  {
    id: 'city-houston',
    name: 'Houston',
    state: 'Texas',
    stateCode: 'TX',
    latitude: 29.7604,
    longitude: -95.3698,
    timezone: 'America/Chicago',
    isActive: true,
  },
]

export const locationAreas: LocationArea[] = [
  // Austin areas
  {
    id: 'area-austin-downtown',
    cityId: 'city-austin',
    name: 'Downtown Austin',
    latitude: 30.2672,
    longitude: -97.7431,
    radiusMiles: 3,
  },
  {
    id: 'area-austin-north',
    cityId: 'city-austin',
    name: 'North Austin',
    latitude: 30.3672,
    longitude: -97.7431,
    radiusMiles: 5,
  },
  {
    id: 'area-austin-south',
    cityId: 'city-austin',
    name: 'South Austin',
    latitude: 30.2072,
    longitude: -97.7631,
    radiusMiles: 5,
  },
  // Dallas areas
  {
    id: 'area-dallas-uptown',
    cityId: 'city-dallas',
    name: 'Uptown Dallas',
    latitude: 32.8067,
    longitude: -96.807,
    radiusMiles: 3,
  },
  {
    id: 'area-dallas-downtown',
    cityId: 'city-dallas',
    name: 'Downtown Dallas',
    latitude: 32.7767,
    longitude: -96.797,
    radiusMiles: 3,
  },
  // Houston areas
  {
    id: 'area-houston-heights',
    cityId: 'city-houston',
    name: 'The Heights',
    latitude: 29.8004,
    longitude: -95.3998,
    radiusMiles: 3,
  },
  {
    id: 'area-houston-galleria',
    cityId: 'city-houston',
    name: 'Galleria Area',
    latitude: 29.7383,
    longitude: -95.4616,
    radiusMiles: 4,
  },
]

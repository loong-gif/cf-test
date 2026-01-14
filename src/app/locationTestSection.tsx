'use client'

import { LocationSelector } from '@/components/features/locationSelector'
import { useLocation } from '@/lib/context/locationContext'

export function LocationTestSection() {
  const { state } = useLocation()
  const { current } = state

  return (
    <div className="space-y-4">
      <LocationSelector showAreaFilter={true} />

      {/* Debug Info */}
      <div className="pt-4 border-t border-glass-border">
        <p className="text-xs text-text-tertiary mb-2">Current State:</p>
        <div className="text-xs font-mono bg-glass-bg rounded-lg p-3 space-y-1">
          <p>
            <span className="text-text-tertiary">Type:</span>{' '}
            <span className="text-brand-primary">{current.type}</span>
          </p>
          <p>
            <span className="text-text-tertiary">City:</span>{' '}
            <span className="text-text-primary">
              {current.city?.name || 'None'}
            </span>
          </p>
          <p>
            <span className="text-text-tertiary">Area:</span>{' '}
            <span className="text-text-primary">
              {current.area?.name || 'All'}
            </span>
          </p>
          {current.coordinates && (
            <p>
              <span className="text-text-tertiary">Coords:</span>{' '}
              <span className="text-text-primary">
                {current.coordinates.latitude.toFixed(4)},{' '}
                {current.coordinates.longitude.toFixed(4)}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useLocation } from '@/lib/context/locationContext'
import { Modal } from '@/components/ui/modal'
import { LocationSelector } from '@/components/features/locationSelector'
import { CaretDown, MapPin } from '@phosphor-icons/react'

export function LocationDisplay() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state } = useLocation()
  const { current } = state

  const getDisplayText = () => {
    if (!current.city) {
      return 'Set location'
    }

    if (current.area) {
      return `${current.area.name}, ${current.city.name}`
    }

    return `${current.city.name}, ${current.city.stateCode}`
  }

  const handleLocationChange = () => {
    // Optionally close modal after selection
    // setIsModalOpen(false)
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={`
          inline-flex items-center gap-1.5
          px-3 py-1.5
          bg-glass-bg hover:bg-glass-bg-hover
          border border-glass-border rounded-full
          text-sm
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-brand-primary/50
        `}
      >
        <MapPin
          size={16}
          weight={current.city ? 'fill' : 'regular'}
          className="text-brand-primary"
        />
        <span className="text-text-primary max-w-32 truncate">
          {getDisplayText()}
        </span>
        <CaretDown size={14} weight="bold" className="text-text-tertiary" />
      </button>

      {/* Location Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Set your location"
        size="sm"
      >
        <LocationSelector
          showAreaFilter={true}
          onLocationChange={handleLocationChange}
        />
      </Modal>
    </>
  )
}

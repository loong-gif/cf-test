'use client'

import { MagnifyingGlass } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'

const TREATMENTS = [
  { value: '', label: 'Any treatment' },
  { value: 'botox', label: 'Botox' },
  { value: 'fillers', label: 'Fillers' },
  { value: 'facials', label: 'Facials' },
  { value: 'other', label: 'Other treatments' },
]

export function HeroSearch() {
  const router = useRouter()
  const [treatment, setTreatment] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(buildDealSearchHref(treatment))
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto grid max-w-2xl gap-2 rounded-2xl border border-white/25 bg-white/95 p-2 shadow-[0_16px_50px_rgba(25,10,2,0.32)] backdrop-blur-sm sm:grid-cols-[1fr_auto] sm:gap-0"
      aria-label="Find medspa prices"
    >
      <label className="sr-only" htmlFor="hero-treatment">
        Treatment
      </label>
      <select
        id="hero-treatment"
        value={treatment}
        onChange={(event) => setTreatment(event.target.value)}
        className="min-h-[52px] rounded-xl bg-transparent px-4 text-[#451a03] outline-none sm:rounded-r-none sm:border-r sm:border-[#d4c4b0]"
      >
        {TREATMENTS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-amber-800 px-5 font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-300"
      >
        <MagnifyingGlass size={19} weight="bold" />
        Compare prices
      </button>
    </form>
  )
}

export function buildDealSearchHref(treatment: string): string {
  const normalizedTreatment = treatment.trim()
  return normalizedTreatment
    ? `/deals?treatment=${encodeURIComponent(normalizedTreatment)}`
    : '/deals'
}

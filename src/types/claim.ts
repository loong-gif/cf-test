export type ClaimStatus =
  | 'pending'
  | 'contacted'
  | 'booked'
  | 'completed'
  | 'cancelled'
  | 'expired'

export interface Claim {
  id: string
  dealId: string
  consumerId: string
  businessId: string
  status: ClaimStatus
  // Request details
  preferredDate?: string
  preferredTime?: string
  notes?: string
  // Response
  businessResponse?: string
  respondedAt?: string
  // Booking
  bookedDate?: string
  bookedTime?: string
  // Timestamps
  createdAt: string
  updatedAt: string
  expiresAt: string // claims expire if not responded to
}

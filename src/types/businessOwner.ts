export type BusinessVerificationStatus = 'unverified' | 'pending' | 'verified'
export type BusinessClaimStatus = 'none' | 'pending' | 'approved' | 'rejected'

export interface BusinessOwner {
  id: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  // Linked business after claim approval
  businessId?: string
  // Verification and claim status
  verificationStatus: BusinessVerificationStatus
  claimStatus: BusinessClaimStatus
  // Timestamps
  createdAt: string
  updatedAt: string
}

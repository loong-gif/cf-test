export interface Message {
  id: string
  claimId: string
  senderId: string
  senderType: 'business' | 'consumer'
  content: string
  createdAt: string
  readAt?: string
}

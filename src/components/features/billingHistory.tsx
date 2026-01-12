'use client'

import { Receipt, DownloadSimple, Warning } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Invoice } from '@/lib/mock-data/billing'

interface BillingHistoryProps {
  invoices: Invoice[]
  onDownload?: (invoiceId: string) => void
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function getStatusVariant(status: Invoice['status']): 'success' | 'warning' | 'error' {
  switch (status) {
    case 'paid':
      return 'success'
    case 'pending':
      return 'warning'
    case 'failed':
      return 'error'
  }
}

function getStatusLabel(status: Invoice['status']): string {
  switch (status) {
    case 'paid':
      return 'Paid'
    case 'pending':
      return 'Pending'
    case 'failed':
      return 'Failed'
  }
}

export function BillingHistory({ invoices, onDownload }: BillingHistoryProps) {
  if (invoices.length === 0) {
    return (
      <Card variant="glass" padding="lg">
        <div className="text-center py-8">
          <div className="w-12 h-12 rounded-xl bg-glass-bg flex items-center justify-center mx-auto mb-3">
            <Receipt size={24} weight="light" className="text-text-tertiary" />
          </div>
          <h3 className="font-medium text-text-primary mb-1">No billing history</h3>
          <p className="text-sm text-text-secondary">
            Your invoices will appear here once you have an active subscription.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card variant="glass" padding="lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Billing History</h3>
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-glass-border">
              <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wide py-3">
                Date
              </th>
              <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wide py-3">
                Description
              </th>
              <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wide py-3">
                Amount
              </th>
              <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wide py-3">
                Status
              </th>
              <th className="text-right text-xs font-medium text-text-tertiary uppercase tracking-wide py-3">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-glass-border">
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="py-3 text-sm text-text-primary">
                  {formatDate(invoice.date)}
                </td>
                <td className="py-3 text-sm text-text-secondary">
                  {invoice.description}
                </td>
                <td className="py-3 text-sm text-text-primary font-medium">
                  ${invoice.amount.toFixed(2)}
                </td>
                <td className="py-3">
                  <Badge variant={getStatusVariant(invoice.status)} size="sm">
                    {getStatusLabel(invoice.status)}
                  </Badge>
                </td>
                <td className="py-3 text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDownload?.(invoice.id)}
                    className="inline-flex items-center gap-1.5"
                  >
                    <DownloadSimple size={16} weight="light" />
                    <span>Download</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-3">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="p-4 bg-glass-bg rounded-xl border border-glass-border"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm font-medium text-text-primary">
                  {invoice.description}
                </p>
                <p className="text-xs text-text-tertiary mt-0.5">
                  {formatDate(invoice.date)}
                </p>
              </div>
              <Badge variant={getStatusVariant(invoice.status)} size="sm">
                {getStatusLabel(invoice.status)}
              </Badge>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-glass-border">
              <span className="text-lg font-semibold text-text-primary">
                ${invoice.amount.toFixed(2)}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDownload?.(invoice.id)}
                className="inline-flex items-center gap-1.5"
              >
                <DownloadSimple size={16} weight="light" />
                <span>Download</span>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Failed Payment Notice */}
      {invoices.some((inv) => inv.status === 'failed') && (
        <div className="mt-4 p-3 bg-red-500/10 rounded-xl border border-red-500/20 flex items-start gap-3">
          <Warning size={18} weight="fill" className="text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-400">Payment failed</p>
            <p className="text-xs text-text-secondary mt-0.5">
              One or more payments failed. Please update your payment method to avoid service interruption.
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}

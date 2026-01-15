import { Lock, MagnifyingGlass, ShieldCheck } from '@phosphor-icons/react/dist/ssr'

const valueProps = [
  {
    icon: ShieldCheck,
    title: 'Verified deals',
    description: 'Every deal is from a licensed medspa. No hidden fees, no surprises.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Compare prices',
    description: 'See real prices from multiple providers. Find the best value for your treatment.',
  },
  {
    icon: Lock,
    title: 'Private until ready',
    description: "Browse anonymously. Business details are revealed only when you claim a deal.",
  },
]

export function ValuePropsSection() {
  return (
    <section className="py-12 border-t border-glass-border">
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-text-primary">
          Why CostFinders
        </h2>
        <p className="text-text-secondary mt-2">
          Trusted by thousands of consumers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {valueProps.map((prop) => (
          <div
            key={prop.title}
            className="p-6 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-sm text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 mb-4">
              <prop.icon size={24} weight="light" className="text-brand-primary" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">
              {prop.title}
            </h3>
            <p className="text-sm text-text-secondary">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

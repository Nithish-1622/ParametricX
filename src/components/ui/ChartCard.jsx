import { GlassCard } from './GlassCard'
import { SectionHeader } from './SectionHeader'

export function ChartCard({ title, subtitle, action, children, className = '' }) {
  return (
    <GlassCard className={className}>
      <SectionHeader title={title} subtitle={subtitle} action={action} />
      {children}
    </GlassCard>
  )
}

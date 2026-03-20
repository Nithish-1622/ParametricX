import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { StatusBadge } from '../ui/StatusBadge'

const level = (risk) => {
  if (risk >= 70) return 'high'
  if (risk >= 40) return 'warning'
  return 'safe'
}

export function DisruptionMapPanel({ zones }) {
  return (
    <GlassCard>
      <SectionHeader title="Disruption Map" subtitle="Mock zone heatmap with dynamic risk labels" />
      <div className="grid gap-3 sm:grid-cols-2">
        {zones.map((zone) => (
          <article key={zone.zone} className="rounded-xl border border-white/10 bg-slate-900/35 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-100">{zone.zone}</h3>
              <StatusBadge status={level(zone.risk)} label={`${zone.risk}% risk`} />
            </div>
            <p className="mt-2 text-xs text-slate-400">Claims in 24h: {zone.claims}</p>
          </article>
        ))}
      </div>
    </GlassCard>
  )
}

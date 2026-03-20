import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { StatusBadge } from '../ui/StatusBadge'

export function ClaimsTimeline({ claims, timeline }) {
  return (
    <GlassCard>
      <SectionHeader title="Claims Timeline" subtitle="Latest claim outcomes and lifecycle events" />
      <div className="space-y-3">
        {claims.map((claim) => (
          <article key={claim.id} className="rounded-xl border border-white/10 bg-slate-900/40 p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold text-slate-100">{claim.id} · {claim.type}</p>
              <StatusBadge status={claim.status.toLowerCase()} label={claim.status} />
            </div>
            <p className="mt-1 text-xs text-slate-400">{claim.note}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-slate-900/30 p-3">
        {timeline.map((item) => (
          <div key={`${item.time}-${item.title}`} className="flex items-center justify-between py-1 text-sm">
            <p className="text-slate-300">{item.title}</p>
            <span className="text-xs text-slate-500">{item.time}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}

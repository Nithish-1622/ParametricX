import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { StatusBadge } from '../ui/StatusBadge'

export function FraudDetectionPanel({ workers }) {
  return (
    <GlassCard>
      <SectionHeader title="Fraud Detection" subtitle="Suspicious workers flagged by AI anomaly scoring" />
      <div className="space-y-3">
        {workers.map((worker) => (
          <article key={worker.id} className="rounded-xl border border-white/10 bg-slate-900/40 p-3">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-slate-100">{worker.name} ({worker.id})</p>
              <StatusBadge status={worker.fraudScore > 75 ? 'high' : 'warning'} label={`Fraud ${worker.fraudScore}`} />
            </div>
            <p className="mt-1 text-xs text-slate-400">{worker.reason}</p>
          </article>
        ))}
      </div>
    </GlassCard>
  )
}

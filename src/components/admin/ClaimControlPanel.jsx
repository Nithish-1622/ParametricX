import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { StatusBadge } from '../ui/StatusBadge'

export function ClaimControlPanel({ claims, onAction }) {
  return (
    <GlassCard>
      <SectionHeader title="Claim Control" subtitle="Approve, flag, or reject incoming claims" />
      <div className="space-y-3">
        {claims.map((claim) => (
          <article key={claim.id} className="rounded-xl border border-white/10 bg-slate-900/35 p-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-100">{claim.worker} · {claim.claimType}</p>
                <p className="text-xs text-slate-400">Amount ${claim.amount}</p>
              </div>
              <StatusBadge status={claim.risk} />
            </div>
            <div className="mt-3 flex gap-2 text-xs">
              <button onClick={() => onAction(claim.id, 'Approved')} type="button" className="rounded-lg bg-neon/20 px-2.5 py-1.5 text-neon hover:bg-neon/30">Approve</button>
              <button onClick={() => onAction(claim.id, 'Flagged')} type="button" className="rounded-lg bg-warning/20 px-2.5 py-1.5 text-warning hover:bg-warning/30">Flag</button>
              <button onClick={() => onAction(claim.id, 'Rejected')} type="button" className="rounded-lg bg-danger/20 px-2.5 py-1.5 text-danger hover:bg-danger/30">Reject</button>
            </div>
            {claim.status ? <p className="mt-2 text-xs text-slate-400">Status updated: {claim.status}</p> : null}
          </article>
        ))}
      </div>
    </GlassCard>
  )
}

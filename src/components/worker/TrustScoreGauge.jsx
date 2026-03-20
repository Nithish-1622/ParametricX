import { GlassCard } from '../ui/GlassCard'
import { getRiskColor, getRiskLabel } from '../../utils/formatters'

export function TrustScoreGauge({ score }) {
  return (
    <GlassCard className="h-full">
      <p className="text-sm text-slate-400">Trust Score</p>
      <div className="mt-4">
        <div className="h-3 rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-neon via-warning to-danger" style={{ width: `${score}%` }} />
        </div>
        <p className={`mt-3 font-heading text-3xl font-bold ${getRiskColor(100 - score)}`}>{score}%</p>
        <p className="text-sm text-slate-400">Profile status: {getRiskLabel(100 - score)}</p>
      </div>
    </GlassCard>
  )
}

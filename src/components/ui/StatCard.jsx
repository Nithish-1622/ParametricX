import { motion } from 'framer-motion'
import { GlassCard } from './GlassCard'

export function StatCard({ icon: Icon, title, value, subtitle, valueColor = 'text-slate-100' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <GlassCard className="h-full">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-slate-400">{title}</p>
            <h3 className={`mt-2 font-heading text-2xl font-bold ${valueColor}`}>{value}</h3>
            <p className="mt-2 text-xs text-slate-400">{subtitle}</p>
          </div>
          {Icon ? (
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-2 text-electric">
              <Icon size={18} />
            </div>
          ) : null}
        </div>
      </GlassCard>
    </motion.div>
  )
}

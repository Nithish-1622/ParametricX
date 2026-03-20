import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { StatusBadge } from '../ui/StatusBadge'

export function LiveEventFeed({ events }) {
  return (
    <GlassCard>
      <SectionHeader title="Live Event Feed" subtitle="Rain, heat, and AQI alerts in your active zones" />
      <div className="space-y-2">
        {events.map((event) => (
          <motion.article
            key={event.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2"
          >
            <div>
              <p className="text-sm font-semibold text-slate-100">{event.type} · {event.zone}</p>
              <p className="text-xs text-slate-400">{event.message}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">{event.eta}</span>
              <StatusBadge status={event.severity} />
            </div>
          </motion.article>
        ))}
      </div>
    </GlassCard>
  )
}

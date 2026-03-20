import { clsx } from 'clsx'

const toneMap = {
  safe: 'bg-neon/20 text-neon border-neon/40',
  warning: 'bg-warning/20 text-warning border-warning/40',
  high: 'bg-danger/20 text-danger border-danger/40',
  approved: 'bg-neon/20 text-neon border-neon/40',
  pending: 'bg-warning/20 text-warning border-warning/40',
  rejected: 'bg-danger/20 text-danger border-danger/40',
}

export function StatusBadge({ status = 'safe', label }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide',
        toneMap[status.toLowerCase()] || toneMap.safe,
      )}
    >
      {label || status}
    </span>
  )
}

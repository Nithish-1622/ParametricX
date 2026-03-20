import { clsx } from 'clsx'

export function GlassCard({ className, children }) {
  return <section className={clsx('glass rounded-2xl p-5', className)}>{children}</section>
}

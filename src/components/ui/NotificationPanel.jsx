import { AnimatePresence, motion } from 'framer-motion'
import { LuBell } from 'react-icons/lu'
import { useAppStore } from '../../store/useAppStore'

export function NotificationPanel() {
  const notificationsOpen = useAppStore((state) => state.notificationsOpen)
  const notifications = useAppStore((state) => state.notifications)
  const toggleNotifications = useAppStore((state) => state.toggleNotifications)

  return (
    <div className="relative">
      <button
        onClick={toggleNotifications}
        className="glass inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:border-electric/40"
        type="button"
      >
        <LuBell /> Alerts
        <span className="rounded-full bg-electric/20 px-2 py-0.5 text-xs">{notifications.length}</span>
      </button>

      <AnimatePresence>
        {notificationsOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass absolute right-0 z-20 mt-3 w-80 rounded-2xl p-3"
          >
            <h3 className="mb-2 font-heading text-sm text-slate-100">Notifications</h3>
            <div className="max-h-72 space-y-2 overflow-y-auto pr-1 scrollbar-thin">
              {notifications.map((notification) => (
                <article key={notification.id} className="rounded-xl border border-white/10 bg-slate-900/40 p-3">
                  <h4 className="text-sm font-semibold text-slate-100">{notification.title}</h4>
                  <p className="mt-1 text-xs text-slate-400">{notification.body}</p>
                </article>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppStore } from '../../store/useAppStore'

export function ToastContainer() {
  const toasts = useAppStore((state) => state.toasts)
  const removeToast = useAppStore((state) => state.removeToast)

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => removeToast(toast.id), 2800),
    )

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [toasts, removeToast])

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex w-80 flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="glass rounded-xl p-3 text-sm"
          >
            <p className="font-semibold text-slate-100">{toast.title}</p>
            <p className="mt-1 text-xs text-slate-300">{toast.message}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

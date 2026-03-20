import { LuMoonStar, LuSunMedium } from 'react-icons/lu'
import { useAppStore } from '../../store/useAppStore'

export function ThemeToggle() {
  const theme = useAppStore((state) => state.theme)
  const toggleTheme = useAppStore((state) => state.toggleTheme)

  return (
    <button
      onClick={toggleTheme}
      className="glass inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:border-electric/40"
      type="button"
    >
      {theme === 'dark' ? <LuSunMedium /> : <LuMoonStar />}
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}

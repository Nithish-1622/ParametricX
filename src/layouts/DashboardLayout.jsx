import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LuActivity,
  LuChartBar,
  LuHouse,
  LuShield,
  LuCircleUserRound,
} from 'react-icons/lu'
import { NotificationPanel } from '../components/ui/NotificationPanel'
import { ThemeToggle } from '../components/ui/ThemeToggle'

const navItems = [
  { to: '/worker', label: 'Worker Dashboard', icon: LuHouse },
  { to: '/admin', label: 'Admin Dashboard', icon: LuChartBar },
  { to: '/policy', label: 'Policy Management', icon: LuShield },
]

export function DashboardLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-aurora px-3 py-4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-7xl gap-4 md:gap-6">
        <motion.aside
          initial={{ x: -24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass hidden h-[calc(100vh-2rem)] w-72 shrink-0 rounded-2xl p-4 md:flex md:flex-col"
        >
          <div className="mb-8 flex items-center gap-3 px-2">
            <div className="rounded-xl bg-electric/20 p-2 text-electric">
              <LuActivity size={20} />
            </div>
            <div>
              <h1 className="font-heading text-xl text-slate-100">ParametriX</h1>
              <p className="text-xs text-slate-400">AI insurance intelligence</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-electric/20 text-electric'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <item.icon className="text-base" /> {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="rounded-xl border border-white/10 bg-slate-900/30 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-400">Current Context</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">{location.pathname}</p>
          </div>
        </motion.aside>

        <div className="flex-1">
          <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/35 px-3 py-2 text-xs text-slate-300 md:hidden">
              <LuCircleUserRound /> Role-aware workspace
            </div>
            <div className="ml-auto flex items-center gap-2">
              <NotificationPanel />
              <ThemeToggle />
            </div>
          </header>

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

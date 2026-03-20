import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LuArrowRight, LuRadar, LuShieldCheck, LuWallet } from 'react-icons/lu'

const features = [
  {
    title: 'Autonomous Claims',
    detail: 'Detect weather disruptions and generate claims instantly using event streams.',
    icon: LuShieldCheck,
  },
  {
    title: 'Fraud AI',
    detail: 'Continuously score anomalies with explainable fraud signals and confidence tiers.',
    icon: LuRadar,
  },
  {
    title: 'Real-Time Payouts',
    detail: 'Push approved compensation directly to worker wallets in minutes.',
    icon: LuWallet,
  },
]

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-10 md:px-8">
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <div className="relative mx-auto max-w-6xl">
        <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-electric">AI-Powered Parametric Insurance</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-slate-100 md:text-6xl">
            Protect every delivery hour with <span className="gradient-text">real-time risk intelligence</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
            ParametriX safeguards gig workers by correlating environmental disruptions with route data,
            then auto-triggering trustworthy claims and instant payouts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/login" className="inline-flex items-center gap-2 rounded-xl bg-electric px-5 py-3 font-semibold text-white transition hover:brightness-110">
              Login <LuArrowRight />
            </Link>
            <Link to="/register" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:border-neon/50">
              Register Worker
            </Link>
          </div>
        </motion.header>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              className="glass rounded-2xl p-6"
            >
              <feature.icon className="text-electric" size={22} />
              <h2 className="mt-4 font-heading text-xl font-bold text-slate-100">{feature.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{feature.detail}</p>
            </motion.article>
          ))}
        </section>
      </div>
    </div>
  )
}

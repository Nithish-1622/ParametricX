import { useMemo, useState } from 'react'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeader } from '../components/ui/SectionHeader'
import { CoverageRadialChart } from '../components/charts/CoverageRadialChart'
import { policyTemplates } from '../data/mockData'

const buildCoverageData = (riskScore) => [
  { label: 'Rain', coverage: Math.max(45, 100 - riskScore) },
  { label: 'Heat', coverage: Math.max(40, 90 - Math.floor(riskScore * 0.7)) },
  { label: 'AQI', coverage: Math.max(35, 88 - Math.floor(riskScore * 0.8)) },
  { label: 'Delay', coverage: Math.max(42, 95 - Math.floor(riskScore * 0.65)) },
]

export function PolicyManagementPage() {
  const [template, setTemplate] = useState(policyTemplates[0].id)
  const [riskScore, setRiskScore] = useState(58)

  const selected = policyTemplates.find((item) => item.id === template)
  const premium = useMemo(() => selected.basePremium + Math.floor(riskScore * 0.68), [selected, riskScore])
  const coverageData = useMemo(() => buildCoverageData(riskScore), [riskScore])

  return (
    <div className="space-y-4 pb-4">
      <header>
        <h1 className="font-heading text-3xl font-bold text-slate-100 md:text-4xl">Policy Management</h1>
        <p className="mt-2 text-sm text-slate-400">Design, price, and preview policy plans using dynamic risk intelligence.</p>
      </header>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <GlassCard>
          <SectionHeader title="Create Policy" subtitle="Select template and configure worker risk inputs" />

          <label className="mb-4 block text-sm text-slate-300">
            Policy Template
            <select
              className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:border-electric"
              value={template}
              onChange={(event) => setTemplate(event.target.value)}
            >
              {policyTemplates.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </label>

          <label className="block text-sm text-slate-300">
            Risk Score ({riskScore})
            <input
              type="range"
              min="1"
              max="100"
              value={riskScore}
              onChange={(event) => setRiskScore(Number(event.target.value))}
              className="mt-3 w-full accent-electric"
            />
          </label>

          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-slate-900/35 p-3">
              <p className="text-slate-400">Estimated Premium</p>
              <p className="mt-1 font-heading text-2xl text-neon">${premium}/mo</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/35 p-3">
              <p className="text-slate-400">Coverage Cap</p>
              <p className="mt-1 font-heading text-2xl text-electric">${selected.coverageCap}</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Coverage Visualization" subtitle="Scenario-based allocation across disruption triggers" />
          <CoverageRadialChart data={coverageData} />
        </GlassCard>
      </section>
    </div>
  )
}

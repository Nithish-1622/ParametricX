import { useEffect, useMemo, useState } from 'react'
import { LuCircleDollarSign, LuFileStack, LuShield, LuTriangleAlert } from 'react-icons/lu'
import { StatCard } from '../components/ui/StatCard'
import { ChartCard } from '../components/ui/ChartCard'
import { SkeletonLoader } from '../components/ui/SkeletonLoader'
import { OrdersAreaChart } from '../components/charts/OrdersAreaChart'
import { ClaimsTimeline } from '../components/worker/ClaimsTimeline'
import { LiveEventFeed } from '../components/worker/LiveEventFeed'
import { TrustScoreGauge } from '../components/worker/TrustScoreGauge'
import {
  activityData,
  liveEventsSeed,
  workerClaims,
  workerStats,
  workerTimeline,
} from '../data/mockData'
import { useRealtimeEvents } from '../hooks/useRealtimeEvents'
import { formatCurrency } from '../utils/formatters'

export function WorkerDashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { events, eventSummary } = useRealtimeEvents(liveEventsSeed)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 850)
    return () => clearTimeout(timer)
  }, [])

  const statData = useMemo(
    () => [
      {
        title: 'Active Policy',
        value: workerStats.activePolicy,
        subtitle: 'Coverage enabled for disruption auto-claims',
        icon: LuShield,
      },
      {
        title: 'Current Risk Score',
        value: `${workerStats.currentRiskScore}`,
        subtitle: `${eventSummary.high} high-risk and ${eventSummary.warning} warning events nearby`,
        icon: LuTriangleAlert,
        valueColor: workerStats.currentRiskScore > 70 ? 'text-danger' : 'text-warning',
      },
      {
        title: 'Earnings Protected',
        value: formatCurrency(workerStats.earningsProtected),
        subtitle: 'Projected compensation under active plan',
        icon: LuCircleDollarSign,
        valueColor: 'text-neon',
      },
      {
        title: 'Recent Claims',
        value: workerStats.recentClaims,
        subtitle: 'In the past 30 days',
        icon: LuFileStack,
      },
    ],
    [eventSummary.high, eventSummary.warning],
  )

  if (isLoading) {
    return (
      <div className="grid gap-4">
        <SkeletonLoader className="h-32" />
        <SkeletonLoader className="h-80" />
        <SkeletonLoader className="h-80" />
      </div>
    )
  }

  return (
    <div className="space-y-4 pb-4">
      <header>
        <h1 className="font-heading text-3xl font-bold text-slate-100 md:text-4xl">Worker Dashboard</h1>
        <p className="mt-2 text-sm text-slate-400">Monitor your coverage, live disruptions, and auto-claim status.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statData.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <LiveEventFeed events={events} />
        <TrustScoreGauge score={workerStats.trustScore} />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.3fr_1fr]">
        <ChartCard title="Activity Insights" subtitle="Orders per hour and active working duration">
          <OrdersAreaChart data={activityData} />
        </ChartCard>
        <ClaimsTimeline claims={workerClaims} timeline={workerTimeline} />
      </section>
    </div>
  )
}

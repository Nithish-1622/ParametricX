import { useEffect } from 'react'
import {
  LuBadgeDollarSign,
  LuFileBadge,
  LuShieldAlert,
  LuUsers,
} from 'react-icons/lu'
import { StatCard } from '../components/ui/StatCard'
import { DisruptionMapPanel } from '../components/admin/DisruptionMapPanel'
import { FraudDetectionPanel } from '../components/admin/FraudDetectionPanel'
import { ClaimControlPanel } from '../components/admin/ClaimControlPanel'
import { AIInsightsPanel } from '../components/admin/AIInsightsPanel'
import {
  adminMetrics,
  claimQueue,
  mapZones,
  riskTrendData,
  suspiciousWorkers,
} from '../data/mockData'
import { formatCompactNumber, formatCurrency } from '../utils/formatters'
import { useAppStore } from '../store/useAppStore'

export function AdminDashboardPage() {
  const setInitialClaimQueue = useAppStore((state) => state.setInitialClaimQueue)
  const queue = useAppStore((state) => state.claimQueue)
  const updateClaimStatus = useAppStore((state) => state.updateClaimStatus)
  const addToast = useAppStore((state) => state.addToast)
  const pushNotification = useAppStore((state) => state.pushNotification)

  useEffect(() => {
    setInitialClaimQueue(claimQueue)
  }, [setInitialClaimQueue])

  const handleAction = (claimId, status) => {
    updateClaimStatus(claimId, status)
    addToast({ title: `Claim ${status}`, message: `${claimId} marked as ${status.toLowerCase()}` })
    pushNotification({ title: `Claim ${claimId}`, body: `Control panel action: ${status}` })
  }

  return (
    <div className="space-y-4 pb-4">
      <header>
        <h1 className="font-heading text-3xl font-bold text-slate-100 md:text-4xl">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-slate-400">System-wide disruption response, fraud analytics, and claim governance.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={LuUsers} title="Active Workers" value={formatCompactNumber(adminMetrics.activeWorkers)} subtitle="Live across all insured zones" />
        <StatCard icon={LuFileBadge} title="Total Claims" value={formatCompactNumber(adminMetrics.totalClaims)} subtitle="Last rolling month" />
        <StatCard icon={LuShieldAlert} title="Fraud Alerts" value={adminMetrics.fraudAlerts} subtitle="AI confidence > 60" valueColor="text-danger" />
        <StatCard icon={LuBadgeDollarSign} title="Payout Volume" value={formatCurrency(adminMetrics.payoutVolume)} subtitle="Executed this week" valueColor="text-neon" />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <DisruptionMapPanel zones={mapZones} />
        <FraudDetectionPanel workers={suspiciousWorkers} />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <AIInsightsPanel data={riskTrendData} />
        <ClaimControlPanel claims={queue} onAction={handleAction} />
      </section>
    </div>
  )
}

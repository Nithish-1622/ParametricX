import { ChartCard } from '../ui/ChartCard'
import { RiskTrendLineChart } from '../charts/RiskTrendLineChart'

export function AIInsightsPanel({ data }) {
  return (
    <ChartCard title="AI Insights" subtitle="Zone-based risk trend and fraud trend forecasts">
      <RiskTrendLineChart data={data} />
    </ChartCard>
  )
}

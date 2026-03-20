import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export function RiskTrendLineChart({ data }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="rgba(148,163,184,0.2)" />
          <XAxis dataKey="day" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip contentStyle={{ background: '#101827', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 12 }} />
          <Legend />
          <Line type="monotone" dataKey="cityRisk" stroke="#3B82F6" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="fraudRisk" stroke="#EF4444" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

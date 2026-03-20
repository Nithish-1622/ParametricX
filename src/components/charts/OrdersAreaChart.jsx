import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export function OrdersAreaChart({ data }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.08} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(148,163,184,0.2)" strokeDasharray="4 4" />
          <XAxis dataKey="hour" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip contentStyle={{ background: '#101827', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 12 }} />
          <Area type="monotone" dataKey="orders" stroke="#3B82F6" fill="url(#ordersGradient)" strokeWidth={2.5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

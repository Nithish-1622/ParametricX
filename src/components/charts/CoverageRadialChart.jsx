import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'

export function CoverageRadialChart({ data }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <RadarChart outerRadius="75%" data={data}>
          <PolarGrid stroke="rgba(148,163,184,0.25)" />
          <PolarAngleAxis dataKey="label" stroke="#94A3B8" />
          <Radar name="Coverage" dataKey="coverage" stroke="#22C55E" fill="#22C55E" fillOpacity={0.35} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

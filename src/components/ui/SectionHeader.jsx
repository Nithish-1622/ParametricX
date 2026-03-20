export function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="font-heading text-xl font-bold text-slate-100">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-400">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  )
}

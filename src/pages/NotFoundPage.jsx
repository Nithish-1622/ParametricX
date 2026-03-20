import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-4">
      <h1 className="font-heading text-4xl text-slate-100">404</h1>
      <p className="text-slate-400">The page you requested does not exist.</p>
      <Link className="rounded-xl bg-electric px-4 py-2 text-white" to="/">
        Return Home
      </Link>
    </div>
  )
}

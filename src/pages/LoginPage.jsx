import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8">
      <motion.form
        onSubmit={(event) => {
          event.preventDefault()
          navigate('/worker')
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass w-full max-w-md rounded-2xl p-7"
      >
        <h1 className="font-heading text-3xl font-bold text-slate-100">Sign In</h1>
        <p className="mt-2 text-sm text-slate-400">Access your worker or admin workspace.</p>

        <label className="mt-6 block text-sm text-slate-300">
          Email
          <input className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:border-electric" type="email" required />
        </label>

        <label className="mt-4 block text-sm text-slate-300">
          Password
          <input className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:border-electric" type="password" required />
        </label>

        <button className="mt-6 w-full rounded-xl bg-electric px-4 py-2.5 font-semibold text-white transition hover:brightness-110" type="submit">
          Continue
        </button>

        <p className="mt-4 text-sm text-slate-400">
          New here? <Link to="/register" className="text-neon">Create account</Link>
        </p>
      </motion.form>
    </div>
  )
}

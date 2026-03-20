import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export function RegisterPage() {
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
        className="glass w-full max-w-xl rounded-2xl p-7"
      >
        <h1 className="font-heading text-3xl font-bold text-slate-100">Create Worker Account</h1>
        <p className="mt-2 text-sm text-slate-400">Enroll in adaptive coverage tailored to your zone risk.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="text-sm text-slate-300">Full Name
            <input className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:border-electric" required />
          </label>
          <label className="text-sm text-slate-300">City Zone
            <input className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:border-electric" required />
          </label>
          <label className="text-sm text-slate-300">Email
            <input className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:border-electric" type="email" required />
          </label>
          <label className="text-sm text-slate-300">Password
            <input className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:border-electric" type="password" required />
          </label>
        </div>

        <button className="mt-6 w-full rounded-xl bg-neon px-4 py-2.5 font-semibold text-slate-900 transition hover:brightness-110" type="submit">
          Register and Continue
        </button>

        <p className="mt-4 text-sm text-slate-400">
          Already registered? <Link to="/login" className="text-electric">Sign in</Link>
        </p>
      </motion.form>
    </div>
  )
}

import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { WorkerDashboardPage } from '../pages/WorkerDashboardPage'
import { AdminDashboardPage } from '../pages/AdminDashboardPage'
import { PolicyManagementPage } from '../pages/PolicyManagementPage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { DashboardLayout } from '../layouts/DashboardLayout'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<DashboardLayout />}>
        <Route path="/worker" element={<WorkerDashboardPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/policy" element={<PolicyManagementPage />} />
      </Route>

      <Route path="/home" element={<Navigate to="/worker" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

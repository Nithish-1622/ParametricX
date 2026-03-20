export const workerStats = {
  activePolicy: 'PX-GLD-2026',
  currentRiskScore: 61,
  earningsProtected: 12420,
  recentClaims: 6,
  trustScore: 82,
}

export const workerClaims = [
  { id: 'CLM-101', type: 'Heavy Rain', amount: 120, status: 'Approved', date: '2026-03-19', note: 'Auto-triggered due to route disruption' },
  { id: 'CLM-100', type: 'Heat Surge', amount: 90, status: 'Pending', date: '2026-03-18', note: 'Review in progress' },
  { id: 'CLM-097', type: 'Air Quality Spike', amount: 60, status: 'Rejected', date: '2026-03-15', note: 'Signal mismatch with GPS path' },
]

export const workerTimeline = [
  { title: 'Weather alert triggered', time: '09:10' },
  { title: 'Claim generated automatically', time: '09:12' },
  { title: 'AI risk check complete', time: '09:13' },
  { title: 'Payout sent to wallet', time: '09:14' },
]

export const liveEventsSeed = [
  { id: 1, zone: 'Downtown', type: 'Rain', severity: 'warning', eta: '5 min', message: 'Rainfall intensity climbed to 32 mm/h' },
  { id: 2, zone: 'Midtown', type: 'Heat', severity: 'high', eta: 'Now', message: 'Surface heat index exceeded safe range' },
  { id: 3, zone: 'South Loop', type: 'AQI', severity: 'safe', eta: '12 min', message: 'Air quality stabilizing around 78 AQI' },
]

export const activityData = [
  { hour: '08:00', orders: 3, activeMinutes: 42 },
  { hour: '09:00', orders: 5, activeMinutes: 49 },
  { hour: '10:00', orders: 4, activeMinutes: 44 },
  { hour: '11:00', orders: 7, activeMinutes: 54 },
  { hour: '12:00', orders: 8, activeMinutes: 58 },
  { hour: '13:00', orders: 6, activeMinutes: 52 },
  { hour: '14:00', orders: 4, activeMinutes: 41 },
]

export const adminMetrics = {
  activeWorkers: 12840,
  totalClaims: 3420,
  fraudAlerts: 67,
  payoutVolume: 492500,
}

export const mapZones = [
  { zone: 'Zone A', risk: 22, claims: 210 },
  { zone: 'Zone B', risk: 49, claims: 380 },
  { zone: 'Zone C', risk: 81, claims: 670 },
  { zone: 'Zone D', risk: 64, claims: 500 },
]

export const suspiciousWorkers = [
  { id: 'W-2208', name: 'Liam Carter', fraudScore: 84, reason: 'Repeated overlapping GPS patterns' },
  { id: 'W-5482', name: 'Nora Patel', fraudScore: 72, reason: 'Abnormal claim spikes in low-risk zone' },
  { id: 'W-9917', name: 'Daniel Moss', fraudScore: 65, reason: 'Mismatch between weather event and route logs' },
]

export const claimQueue = [
  { id: 'Q-221', worker: 'Aisha R', claimType: 'Heat', amount: 78, risk: 'warning' },
  { id: 'Q-222', worker: 'Kenji T', claimType: 'Rain', amount: 110, risk: 'safe' },
  { id: 'Q-223', worker: 'Mina L', claimType: 'AQI', amount: 95, risk: 'high' },
]

export const riskTrendData = [
  { day: 'Mon', cityRisk: 36, fraudRisk: 44 },
  { day: 'Tue', cityRisk: 38, fraudRisk: 47 },
  { day: 'Wed', cityRisk: 42, fraudRisk: 52 },
  { day: 'Thu', cityRisk: 55, fraudRisk: 60 },
  { day: 'Fri', cityRisk: 49, fraudRisk: 57 },
  { day: 'Sat', cityRisk: 61, fraudRisk: 66 },
  { day: 'Sun', cityRisk: 58, fraudRisk: 62 },
]

export const notificationsSeed = [
  { id: 'n1', title: 'Claim Approved', body: 'CLM-101 was auto-approved and paid out.' },
  { id: 'n2', title: 'Fraud Alert', body: 'Worker W-2208 exceeded fraud threshold.' },
]

export const policyTemplates = [
  { id: 'micro-rain', name: 'Micro Rain Shield', basePremium: 20, coverageCap: 250 },
  { id: 'heat-flex', name: 'HeatFlex Pro', basePremium: 26, coverageCap: 340 },
  { id: 'urban-air', name: 'Urban Air Guard', basePremium: 18, coverageCap: 190 },
]

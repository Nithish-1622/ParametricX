export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

export const formatCompactNumber = (value) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)

export const getRiskColor = (value) => {
  if (value >= 75) return 'text-danger'
  if (value >= 45) return 'text-warning'
  return 'text-neon'
}

export const getRiskLabel = (value) => {
  if (value >= 75) return 'High Risk'
  if (value >= 45) return 'Warning'
  return 'Safe'
}

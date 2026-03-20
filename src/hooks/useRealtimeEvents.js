import { useEffect, useMemo, useState } from 'react'

const eventTypes = ['Rain', 'Heat', 'AQI']
const severities = ['safe', 'warning', 'high']
const zones = ['Downtown', 'Midtown', 'East Hub', 'South Loop', 'Airport']

export function useRealtimeEvents(seed, speed = 4500) {
  const [events, setEvents] = useState(seed)

  useEffect(() => {
    const interval = setInterval(() => {
      const severity = severities[Math.floor(Math.random() * severities.length)]
      const type = eventTypes[Math.floor(Math.random() * eventTypes.length)]
      const zone = zones[Math.floor(Math.random() * zones.length)]

      const nextEvent = {
        id: Date.now(),
        zone,
        type,
        severity,
        eta: severity === 'high' ? 'Now' : `${Math.ceil(Math.random() * 15)} min`,
        message: `${type} anomaly updated in ${zone}`,
      }

      setEvents((prev) => [nextEvent, ...prev].slice(0, 8))
    }, speed)

    return () => clearInterval(interval)
  }, [speed])

  const eventSummary = useMemo(() => {
    const high = events.filter((event) => event.severity === 'high').length
    const warning = events.filter((event) => event.severity === 'warning').length
    return { high, warning }
  }, [events])

  return { events, eventSummary }
}

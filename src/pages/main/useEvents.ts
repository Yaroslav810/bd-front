import { useCallback, useEffect, useState } from 'react'
import { getEvents } from '../../api/events/events'
import { Event } from './model/types'

function useEvents() {
  const [events, setEvents] = useState<Event[] | null>([])
  const [loaded, setLoaded] = useState(false)

  const handler = useCallback(() => {
    setEvents([])
    setLoaded(false)
    getEvents()
      .then(data => setEvents(data))
      .catch(() => setEvents(null))
      .finally(() => setLoaded(true))
  }, [getEvents])

  useEffect(() => {
    handler()
  }, [handler])

  return {
    events,
    loaded,
    loadData: handler
  }
}

export {
  useEvents
}

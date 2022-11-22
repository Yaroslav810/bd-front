import { useCallback, useEffect, useState } from 'react'
import { getEvent } from '../../api/events/events'
import { Event } from './model/types'

function useEvents(id: string) {
  const [event, setEvent] = useState<Event | null>(null)
  const [loaded, setLoaded] = useState(false)

  const handler = useCallback(() => {
    setEvent(null)
    setLoaded(false)
    getEvent(id)
      .then(data => setEvent(data))
      .catch(() => setEvent(null))
      .finally(() => setLoaded(true))
  }, [getEvent])

  useEffect(() => {
    handler()
  }, [handler])

  return {
    event,
    loaded,
    loadData: handler
  }
}

export {
  useEvents
}

import { useCallback, useEffect, useState } from 'react'
import { getEvent } from '../../api/events/events'
import { useAction, useAtom } from '@reatom/npm-react'
import { actions, state } from './model/store'

function useEvents(id: string) {
  const [event] = useAtom(state.event)
  const handleSetEvent = useAction(actions.setEvent)
  const [loaded, setLoaded] = useState(false)

  const handler = useCallback(() => {
    handleSetEvent(null)
    setLoaded(false)
    getEvent(id)
      .then(data => handleSetEvent(data))
      .catch(() => handleSetEvent(null))
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

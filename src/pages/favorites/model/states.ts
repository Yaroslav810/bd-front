import { reatomAsync, withAbort, withDataAtom } from '@reatom/async'
import { getFavoriteEvents } from '../../../api/events/events'
import { onConnect } from '@reatom/hooks'

const initEvents = reatomAsync(
  async(ctx) => {
    initEvents.dataAtom(ctx, null)
    return await getFavoriteEvents()
  },
  'initEvents'
).pipe(
  withDataAtom(null, (_, data) => data),
  withAbort()
)
onConnect(initEvents.dataAtom, initEvents)

const favoriteStates = {
  loaded: initEvents.pendingAtom,
  events: initEvents.dataAtom
}

export {
  favoriteStates
}

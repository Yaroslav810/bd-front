import { action, atom } from '@reatom/core'

const event = atom(null)

const setEvent = action((ctx, payload) =>
  event(ctx, payload)
)

const state = {
  event
}

const actions = {
  setEvent
}

export {
  state,
  actions
}

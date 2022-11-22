interface Event {
  id: string
  title: string
  description?: string
  userName: string
  start: Date
  duration: number
  price?: number
  participantsCount: number
  isLikeSet: boolean
}

export {
  type Event
}

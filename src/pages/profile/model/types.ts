interface MyEvent {
  id: string
  title: string
  description?: string
  userName: string
  start: Date
  duration: number
  price?: number
  image?: string
  participantsCount: number
  isLikeSet: boolean
}

export {
  type MyEvent
}

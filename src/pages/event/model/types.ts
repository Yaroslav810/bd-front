interface Event {
  id: string
  title: string
  description?: string
  userName: string
  start: Date
  duration: number
  price?: number
  image?: string
  tags: string[]
  links: string[]
  participantsCount: number
  isLikeSet: boolean
  isCanDelete: boolean
  isCanEdit: boolean
}

export {
  type Event
}

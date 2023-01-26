interface CreateEvent {
  title: string
  description?: string
  start: Date
  duration: number
  price: number
  participantsCount: number
  image?: File
  links: string[]
  tags: string[]
}

export {
  type CreateEvent
}

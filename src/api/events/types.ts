interface GetEventsEventDto {
  id: string
  title: string
  description?: string
  user_name: string
  start: Date
  duration: number
  price?: number
  participants_count: number
  is_like_set: boolean
}

interface GetEventEventDto {
  id: string
  title: string
  description?: string
  user_name: string
  start: Date
  duration: number
  price?: number
  participants_count: number
  is_like_set: boolean
}

export {
  type GetEventsEventDto,
  type GetEventEventDto
}

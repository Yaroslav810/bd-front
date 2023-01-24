import { Event } from './types'
import { GetEventsEventDto } from '../../../api/events/types'

function mapGetEventsEventDtoToEvent(eventDto: GetEventsEventDto): Event {
  return {
    id: eventDto.id,
    title: eventDto.title,
    description: eventDto.description,
    userName: eventDto.user_name,
    start: eventDto.start,
    duration: eventDto.duration,
    price: eventDto.price,
    image: eventDto.image,
    participantsCount: eventDto.participants_count,
    isLikeSet: eventDto.is_like_set
  }
}

export {
  mapGetEventsEventDtoToEvent
}

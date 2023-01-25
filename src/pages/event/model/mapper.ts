import { Event } from './types'
import { GetEventEventDto } from '../../../api/events/types'

function mapGetEventEventDtoToEvent(eventDto: GetEventEventDto): Event {
  return {
    id: eventDto.id,
    title: eventDto.title,
    description: eventDto.description,
    userName: eventDto.user_name,
    start: eventDto.start,
    duration: eventDto.duration,
    price: eventDto.price,
    participantsCount: eventDto.participants_count,
    image: eventDto.image,
    tags: eventDto.tags,
    links: eventDto.links,
    isLikeSet: eventDto.is_like_set
  }
}

export {
  mapGetEventEventDtoToEvent
}

import axios from 'axios'
import { isMock, serverPath } from '../api'
import { mapGetEventsEventDtoToEvent } from '../../pages/main/model/mapper'
import { Event as EventMainPage } from '../../pages/main/model/types'
import { Event as EventEventPage } from '../../pages/event/model/types'
import { getMockDataGetEvent, getMockDataGetEvents } from './mockData'
import { mapGetEventEventDtoToEvent } from '../../pages/event/model/mapper'
import { getAuthHeader } from '../auth'
import { CreateEvent } from '../../pages/createEvent/model/types'
import { FavoriteEvent } from '../../pages/favorites/model/types'
import { MyEvent } from '../../pages/profile/model/types'

const path = `${serverPath}/event`

async function getEvents(): Promise<EventMainPage[]> {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(getMockDataGetEvents())
      }, 2000)
    })
  }

  const response = await axios.get(`${path}/get`, {
    headers: getAuthHeader()
  })
  return response.data.map(mapGetEventsEventDtoToEvent)
}

async function getEvent(id: string): Promise<EventEventPage> {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(getMockDataGetEvent())
      }, 2000)
    })
  }

  const response = await axios.get(`${path}/get/${id}`, {
    headers: getAuthHeader()
  })
  return mapGetEventEventDtoToEvent(response.data)
}

async function createEvent(event: CreateEvent): Promise<boolean> {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
  }

  const formData = new FormData()
  const data: string = JSON.stringify({
    title: event.title,
    description: event.description,
    start: event.start,
    duration: event.duration,
    price: event.price,
    participantsCount: event.participantsCount,
    links: event.links,
    tags: event.tags
  })
  formData.append('data', data)
  if (event.image) {
    formData.append('image', event.image)
  }

  await axios.post(`${path}/create`, formData, {
    headers: getAuthHeader()
  })
  return true
}

async function addLike(id: string) {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
  }

  try {
    await axios.post(`${path}/add-like/${id}`, {}, {
      headers: getAuthHeader()
    })
    return true
  } catch {
    return false
  }
}

async function removeLike(id: string) {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
  }

  try {
    await axios.post(`${path}/remove-like/${id}`, {}, {
      headers: getAuthHeader()
    })
    return true
  } catch {
    return false
  }
}

async function getFavoriteEvents(): Promise<FavoriteEvent[]> {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(getMockDataGetEvents())
      }, 2000)
    })
  }

  const response = await axios.get(`${path}/liked`, {
    headers: getAuthHeader()
  })
  return response.data.map(mapGetEventsEventDtoToEvent)
}

async function getMyEvents(): Promise<MyEvent[]> {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(getMockDataGetEvents())
      }, 2000)
    })
  }

  const response = await axios.get(`${path}/my`, {
    headers: getAuthHeader()
  })
  return response.data.map(mapGetEventsEventDtoToEvent)
}

export {
  getEvents,
  getEvent,
  createEvent,
  addLike,
  removeLike,
  getFavoriteEvents,
  getMyEvents
}

import axios from 'axios'
import { isMock, serverPath } from '../api'
import { mapGetEventsEventDtoToEvent } from '../../pages/main/model/mapper'
import { Event as EventMainPage } from '../../pages/main/model/types'
import { Event as EventEventPage } from '../../pages/event/model/types'
import { getMockDataGetEvent, getMockDataGetEvents } from './mockData'
import { mapGetEventEventDtoToEvent } from '../../pages/event/model/mapper'
import { getAuthHeader } from '../auth'

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

  const response = await axios.get(`${path}/get/${id}`)
  return mapGetEventEventDtoToEvent(response.data)
}

export {
  getEvents,
  getEvent
}

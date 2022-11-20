import axios from 'axios'
import { isMock, serverPath } from '../api'
import { mapEventDtoToEvent } from '../../pages/main/model/mapper'
import { Event } from '../../pages/main/model/types'
import { getMockData } from './mockData'

const path = `${serverPath}/event`

async function getEvents(): Promise<Event[]> {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(getMockData())
      }, 2000)
    })
  }

  const response = await axios.get(`${path}/get`)
  return response.data.map(mapEventDtoToEvent)
}

export {
  getEvents
}

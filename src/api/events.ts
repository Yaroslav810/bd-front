import axios from 'axios'
import { serverPath } from './api'

const path = `${serverPath}/event`

async function getEvents() {
  const response = await axios.get(`${path}/get`)
  return response.data
}

export {
  getEvents
}

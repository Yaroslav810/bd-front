import axios from 'axios'
import { isMock, serverPath } from '../api'
import { mapGetCurrentUserDtoToUser } from './mappers'
import { getMockCurrentUser } from './mockData'
import { User } from '../../model/types'
import { getAuthHeader, updateToken } from '../auth'

const path = `${serverPath}/user`

async function getCurrentUser(): Promise<User | null> {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(getMockCurrentUser())
      }, 2000)
    })
  }

  const response = await axios.post(`${path}/current-user`, {}, {
    headers: getAuthHeader()
  })
  return (response.data != null) ? mapGetCurrentUserDtoToUser(response.data) : null
}

async function authentication() {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(getMockCurrentUser())
      }, 2000)
    })
  }

  const response = await axios.post(`${path}/authentication`, {
    login: 'Yaroslav8',
    password: '12345Q'
  }, {
    headers: getAuthHeader()
  })
  updateToken(response.data)
  if (response.data !== null) {
    window.location.reload()
  }
}

async function logout() {
  updateToken(null)
  window.location.reload()
}

export {
  getCurrentUser,
  authentication,
  logout
}

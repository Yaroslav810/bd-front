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

async function registration(
  login: string,
  name: string,
  lastName: string | null,
  birthdayDay: Date | null,
  password: string,
  type: 'user' | 'company'): Promise<boolean> {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
  }

  return (await axios.post(`${path}/registration`, {
    login,
    first_name: name,
    last_name: lastName ?? undefined,
    birth_date: birthdayDay ?? undefined,
    password,
    type
  }, {
    headers: getAuthHeader()
  })).data
}

async function authentication(login: string, password: string) {
  if (isMock) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(getMockCurrentUser())
      }, 2000)
    })
  }

  const response = await axios.post(`${path}/authentication`, {
    login,
    password
  }, {
    headers: getAuthHeader()
  })
  updateToken(response.data)
  if (response.data !== null) {
    window.location.reload()
    return true
  }

  return false
}

async function logout() {
  updateToken(null)
  window.location.reload()
}

export {
  getCurrentUser,
  registration,
  authentication,
  logout
}

import { KEY } from './api'

function getAuthHeader() {
  const user = window.localStorage.getItem(KEY)
  return user !== null ? { 'x-access-token': user } : {}
}

function updateToken(data: string | null) {
  if (data == null) {
    window.localStorage.removeItem(KEY)
  } else {
    window.localStorage.setItem(KEY, data)
  }
}

export {
  getAuthHeader,
  updateToken
}

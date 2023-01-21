import { User } from './types'

let user: null | User = null

function initUser(data: null | User) {
  user = data
}

function getUser() {
  return user
}

export {
  initUser,
  getUser
}

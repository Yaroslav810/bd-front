import { User, UserType } from '../../model/types'

function getMockCurrentUser(): User {
  return {
    id: '1',
    firstName: 'Yaroslav',
    lastName: 'Kuzmin',
    login: 'Yaroslav',
    type: UserType.user,
    token: ''
  }
}

export {
  getMockCurrentUser
}

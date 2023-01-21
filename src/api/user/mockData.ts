import { User, UserType } from '../../model/types'

const user: User = {
  id: '1',
  firstName: 'Yaroslav',
  lastName: 'Kuzmin',
  login: 'Yaroslav',
  type: UserType.user,
  token: ''
}

function getMockCurrentUser(): User | null {
  return user
}

export {
  getMockCurrentUser
}

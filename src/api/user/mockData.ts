import { User, UserType } from '../../model/types'

const user: User = {
  id: '1',
  firstName: 'Yaroslav',
  lastName: 'Kuzmin',
  login: 'Yaroslav@mail.com',
  type: UserType.user,
  token: ''
}


//const user = null

function getMockCurrentUser(): User | null {
  return user
}

export {
  getMockCurrentUser
}

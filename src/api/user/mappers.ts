import { GetCurrentUserDto } from './types'
import { User } from '../../model/types'

function mapGetCurrentUserDtoToUser(currentUser: GetCurrentUserDto): User {
  return {
    id: currentUser.id,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    login: currentUser.login,
    type: currentUser.type,
    token: currentUser.token
  }
}

export {
  mapGetCurrentUserDtoToUser
}

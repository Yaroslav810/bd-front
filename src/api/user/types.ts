import { UserType } from '../../model/types'

interface Get
    Dto {
  id: string
  firstName: string
  lastName?: string
  login: string
  type: UserType
  token: string
}

export {
  type GetCurrentUserDto
}

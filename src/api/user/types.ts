import { UserType } from '../../model/types'

interface GetCurrentUserDto {
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

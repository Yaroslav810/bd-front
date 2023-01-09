enum UserType {
  user,
  company,
}

interface User {
  id: string
  firstName: string
  lastName?: string
  login: string
  type: UserType
  token: string
}

export {
  UserType,
  type User
}

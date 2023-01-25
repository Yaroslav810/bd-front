import { Login } from './Login'
import { useEffect } from 'react'
import { getUser } from '../../model/states'
import { useMainRoute } from '../../routes/mainRoute/mainRoute'

function LoginWrapper() {
  const user = getUser()
  const main = useMainRoute()

  useEffect(() => {
    if (user) {
      main.goTo()
    }
  })

  return <div>
    <Login />
  </div>
}

export {
  LoginWrapper
}

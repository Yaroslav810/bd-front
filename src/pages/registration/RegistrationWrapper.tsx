import { Registration } from './Registration'
import { getUser } from '../../model/states'
import { useEffect } from 'react'
import { useMainRoute } from '../../routes/mainRoute/mainRoute'

function RegistrationWrapper() {
  const user = getUser()
  const main = useMainRoute()

  useEffect(() => {
    if (user) {
      main.goTo()
    }
  })

  return <div>
    <Registration />
  </div>
}

export {
  RegistrationWrapper
}

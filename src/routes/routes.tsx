import { createBrowserRouter } from 'react-router-dom'
import { createEventRoute } from './createEventRoute/createEventRoute'
import { CreateEventWrapper } from '../pages/createEvent/CreateEventWrapper'
import { eventRoute } from './eventRoute/eventRoute'
import { EventWrapper } from './eventRoute/EventWrapper'
import { favoritesRoute } from './favoritesRoute/favoritesRoute'
import { FavoritesWrapper } from './favoritesRoute/FavoritesWrapper'
import { loginRoute } from './loginRoute/loginRoute'
import { LoginWrapper } from '../pages/login/LoginWrapper'
import { logoutRoute } from './logoutRoute/logoutRoute'
import { LogoutWrapper } from './logoutRoute/LogoutWrapper'
import { mainRoute, useMainRoute } from './mainRoute/mainRoute'
import { MainWrapper } from '../pages/main/MainWrapper'
import { ReactElement, useEffect } from 'react'
import { RouteObject } from 'react-router'
import { getUser } from '../model/states'
import { registrationRoute } from './registrationRoute/registrationRoute'
import { RegistrationWrapper } from '../pages/registration/RegistrationWrapper'

function ProtectedLayout({ component }: { component: ReactElement }) {
  const user = getUser()
  const main = useMainRoute()

  useEffect(() => {
    if (user === null) {
      main.goTo()
    }
  }, [user, main])

  return <>{component}</>
}

const routes: RouteObject[] = [
  {
    path: mainRoute().getPath(),
    element: <MainWrapper />
  },
  {
    path: favoritesRoute().getPath(),
    element: <ProtectedLayout component={<FavoritesWrapper />} />
  },
  {
    path: logoutRoute().getPath(),
    element: <ProtectedLayout component={<LogoutWrapper />} />
  },
  {
    path: eventRoute().getPath(),
    element: <EventWrapper />
  },
  {
    path: loginRoute().getPath(),
    element: <LoginWrapper />
  },
  {
    path: createEventRoute().getPath(),
    element: <ProtectedLayout component={<CreateEventWrapper />} />
  },
  {
    path: registrationRoute().getPath(),
    element: <RegistrationWrapper />
  }
]

function getRouter() {
  return createBrowserRouter(routes)
}

export {
  getRouter
}

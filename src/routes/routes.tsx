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
import { mainRoute } from './mainRoute/mainRoute'
import { MainWrapper } from '../pages/main/MainWrapper'
import { RouteObject } from 'react-router'

const routes: RouteObject[] = [
  {
    path: mainRoute().getPath(),
    element: <MainWrapper />
  },
  {
    path: favoritesRoute().getPath(),
    element: <FavoritesWrapper />
  },
  {
    path: logoutRoute().getPath(),
    element: <LogoutWrapper />
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
    element: <CreateEventWrapper />
  }
]

function getRouter() {
  return createBrowserRouter(routes)
}

export {
  getRouter
}

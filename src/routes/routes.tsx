import { createBrowserRouter } from 'react-router-dom'
import { CreateEvent } from '../pages/createEvent/CreateEvent'
import { createEventRoute } from './createEventRoute/createEventRoute'
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
import { Sidebar } from '../common/sidebar/Sidebar'

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
    element: (
      <div>
        <Sidebar />
        <CreateEvent />
      </div>
    )
  }
]

function getRouter() {
  return createBrowserRouter(routes)
}

export {
  getRouter
}

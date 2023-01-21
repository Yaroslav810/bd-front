import { RouteObject } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { mainRoute } from './mainRoute/mainRoute'
import { favoritesRoute } from './favoritesRoute/favoritesRoute'
import { logoutRoute } from './logoutRoute/logoutRoute'
import { loginRoute } from './loginRoute/loginRoute'
import { Sidebar } from '../common/sidebar/Sidebar'
import { createEventRoute } from './createEventRoute/createEventRoute'
import { CreateEvent } from '../pages/createEvent/CreateEvent'
import { eventRoute } from './eventRoute/eventRoute'
import { FavoritesWrapper } from './favoritesRoute/FavoritesWrapper'
import { LogoutWrapper } from './logoutRoute/LogoutWrapper'
import { EventWrapper } from './eventRoute/EventWrapper'
import { MainWrapper } from '../pages/main/MainWrapper'
import { LoginWrapper } from '../pages/login/LoginWrapper'

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

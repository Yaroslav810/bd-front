import { RouteObject } from 'react-router'
import { Favorites } from '../pages/favorites/Favorites'
import { Main } from '../pages/main/Main'
import { createBrowserRouter } from 'react-router-dom'
import { mainRoute } from './mainRoute/mainRoute'
import { favoritesRoute } from './favoritesRoute/favoritesRoute'
import { logoutRoute } from './logoutRoute/logoutRoute'

const routes: RouteObject[] = [
  {
    path: mainRoute().getPath(),
    element: <Main/>
  },
  {
    path: favoritesRoute().getPath(),
    element: <Favorites/>
  },
  {
    path: logoutRoute().getPath()
  }
]

function getRouter () {
  return createBrowserRouter(routes)
}

export {
  getRouter
}

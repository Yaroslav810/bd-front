import { RouteObject } from 'react-router'
import { Favorites } from '../pages/favorites/Favorites'
import { Main } from '../pages/main/Main'
import { createBrowserRouter } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/fav',
    element: <Favorites/>
  }
]

function getRouter () {
  return createBrowserRouter(routes)
}

export {
  getRouter
}

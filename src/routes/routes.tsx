import { RouteObject } from 'react-router'
import { Favorites } from '../pages/favorites/Favorites'
import { Main } from '../pages/main/Main'
import { createBrowserRouter } from 'react-router-dom'
import { mainRoute } from './mainRoute/mainRoute'
import { favoritesRoute } from './favoritesRoute/favoritesRoute'
import { logoutRoute } from './logoutRoute/logoutRoute'
import { Sidebar } from '../common/sidebar/Sidebar'
import React from 'react'
import { Logout } from '../pages/logout/Logout'

const routes: RouteObject[] = [
  {
    path: mainRoute().getPath(),
    element: (
      <div>
        <Sidebar />
        <Main/>
      </div>
    )
  },
  {
    path: favoritesRoute().getPath(),
    element: (
      <div>
        <Sidebar />
        <Favorites/>
      </div>
    )
  },
  {
    path: logoutRoute().getPath(),
    element: (
      <div>
        <Logout />
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

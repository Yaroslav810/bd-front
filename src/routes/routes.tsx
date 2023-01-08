import React from 'react'
import { RouteObject } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { mainRoute } from './mainRoute/mainRoute'
import { favoritesRoute } from './favoritesRoute/favoritesRoute'
import { logoutRoute } from './logoutRoute/logoutRoute'
import { eventRoute } from './eventRoute/eventRoute'
import { MainWrapper } from '../pages/main/MainWrapper'
import { FavoritesWrapper } from './favoritesRoute/FavoritesWrapper'
import { LogoutWrapper } from './logoutRoute/LogoutWrapper'
import { EventWrapper } from './eventRoute/EventWrapper'

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
  }
]

function getRouter() {
  return createBrowserRouter(routes)
}

export {
  getRouter
}

import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/main/Main'
import { Favorites } from './pages/favorites/Favorites'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/fav',
    element: <Favorites/>
  }
])

function App () {
  return (
      <div>
          <RouterProvider router={router}/>
      </div>
  )
}

export default App

import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Sidebar } from './common/sidebar/Sidebar'
import { getRouter } from './routes/routes'

function App () {
  return (
      <div>
          <Sidebar />
          <RouterProvider router={getRouter()}/>
      </div>
  )
}

export default App

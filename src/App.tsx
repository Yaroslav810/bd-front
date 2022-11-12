import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { getRouter } from './routes/routes'

function App() {
  return (
    <div>
      <RouterProvider router={getRouter()} />
    </div>
  )
}

export default App

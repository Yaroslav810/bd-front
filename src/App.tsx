import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { getRouter } from './routes/routes'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={getRouter()}/>
    </div>
  )
}

export default App

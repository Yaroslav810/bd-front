import React from 'react'
import { createCtx } from '@reatom/core'
import { reatomContext } from '@reatom/npm-react'
import { RouterProvider } from 'react-router-dom'
import { getRouter } from './routes/routes'

import styles from './App.module.css'

function App() {
  const store = createCtx()

  return (
    <div className={styles.app}>
      <reatomContext.Provider value={store}>
        <RouterProvider router={getRouter()} />
      </reatomContext.Provider>
    </div>
  )
}

export default App

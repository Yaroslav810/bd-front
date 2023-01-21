import React, { useEffect, useState } from 'react'
import { createCtx } from '@reatom/core'
import { reatomContext } from '@reatom/npm-react'
import { RouterProvider } from 'react-router-dom'
import { getRouter } from './routes/routes'

import styles from './App.module.css'
import { getCurrentUser } from './api/user/user'
import { initUser } from './model/states'
import { Preloader } from './common/preloader/Preloader'

function ContentImpl() {
  return (
    <>
      <RouterProvider router={getRouter()} />
    </>
  )
}

function Content() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    void getCurrentUser()
      .then(user => {
        initUser(user)
        setLoaded(true)
      })
  }, [])

  return (
    <>
      {loaded
        ? <ContentImpl />
        : <Preloader />}
    </>
  )
}

function App() {
  const store = createCtx()

  return (
    <div className={styles.app}>
      <reatomContext.Provider value={store}>
        <Content />
      </reatomContext.Provider>
    </div>
  )
}

export default App

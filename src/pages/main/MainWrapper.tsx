import React from 'react'
import { Sidebar } from '../../common/sidebar/Sidebar'
import { Main } from './Main'

function MainWrapper() {
  return <div>
    <Sidebar />
    <Main />
  </div>
}

export {
  MainWrapper
}

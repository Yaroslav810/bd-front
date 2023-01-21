import React from 'react'
import { Sidebar } from '../../common/sidebar/Sidebar'
import { Event } from '../../pages/event/Event'

function EventWrapper() {
  return <div>
    <Sidebar />
    <Event />
  </div>
}

export {
  EventWrapper
}

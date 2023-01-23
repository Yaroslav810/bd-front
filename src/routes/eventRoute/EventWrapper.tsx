import { Event } from '../../pages/event/Event'
import { Sidebar } from '../../common/sidebar/Sidebar'

function EventWrapper() {
  return <div>
    <Sidebar />
    <Event />
  </div>
}

export {
  EventWrapper
}

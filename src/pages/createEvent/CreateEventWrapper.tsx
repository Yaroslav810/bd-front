import { CreateEvent } from './CreateEvent'
import { Sidebar } from '../../common/sidebar/Sidebar'

function CreateEventWrapper() {
  return <div>
    <Sidebar />
    <CreateEvent />
  </div>
}

export {
  CreateEventWrapper
}

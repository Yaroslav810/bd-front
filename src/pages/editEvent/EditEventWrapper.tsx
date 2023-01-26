import { EditEvent } from './EditEvent'
import { Sidebar } from '../../common/sidebar/Sidebar'

function EditEventWrapper() {
  return <div>
    <Sidebar />
    <EditEvent />
  </div>
}

export {
  EditEventWrapper
}

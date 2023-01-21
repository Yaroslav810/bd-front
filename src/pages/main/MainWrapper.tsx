import { Main } from './Main'
import { Sidebar } from '../../common/sidebar/Sidebar'

function MainWrapper() {
  return <div>
    <Sidebar />
    <Main />
  </div>
}

export {
  MainWrapper
}

import { Profile } from './Profile'
import { Sidebar } from '../../common/sidebar/Sidebar'

function ProfileWrapper() {
    return <div>
        <Sidebar />
        <Profile />
    </div>
}

export {
    ProfileWrapper
}

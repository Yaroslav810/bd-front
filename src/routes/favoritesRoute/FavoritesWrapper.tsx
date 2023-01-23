import { Favorites } from '../../pages/favorites/Favorites'
import { Sidebar } from '../../common/sidebar/Sidebar'

function FavoritesWrapper() {
  return <div>
    <Sidebar />
    <Favorites />
  </div>
}

export {
  FavoritesWrapper
}

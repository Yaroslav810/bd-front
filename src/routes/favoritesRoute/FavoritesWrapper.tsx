import React from 'react'
import { Sidebar } from '../../common/sidebar/Sidebar'
import { Favorites } from '../../pages/favorites/Favorites'

function FavoritesWrapper() {
  return <div>
    <Sidebar />
    <Favorites />
  </div>
}

export {
  FavoritesWrapper
}

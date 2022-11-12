import { useNavigate } from 'react-router'

const path = '/fav'

function favoritesRoute () {
  return {
    getPath: () => path
  }
}

function useFavoritesRoute () {
  const navigate = useNavigate()
  return {
    goTo: () => navigate(path)
  }
}

export {
  favoritesRoute,
  useFavoritesRoute
}

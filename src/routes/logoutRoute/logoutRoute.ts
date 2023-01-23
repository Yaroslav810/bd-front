import { useNavigate } from 'react-router'

const path = '/logout'

function logoutRoute() {
  return {
    getPath: () => path
  }
}

function useLogoutRoute() {
  const navigate = useNavigate()
  return {
    goTo: () => navigate(path)
  }
}

export {
  logoutRoute,
  useLogoutRoute
}

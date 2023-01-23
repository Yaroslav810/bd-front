import { useNavigate } from 'react-router'

const path = '/login'

function loginRoute() {
  return {
    getPath: () => path
  }
}

function useLoginRoute() {
  const navigate = useNavigate()
  return {
    goTo: () => navigate(path)
  }
}

export {
  loginRoute,
  useLoginRoute
}

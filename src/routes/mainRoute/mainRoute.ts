import { useNavigate } from 'react-router'

const path = '/'

function mainRoute () {
  return {
    getPath: () => path
  }
}

function useMainRoute () {
  const navigate = useNavigate()
  return {
    goTo: () => navigate(path)
  }
}

export {
  mainRoute,
  useMainRoute
}

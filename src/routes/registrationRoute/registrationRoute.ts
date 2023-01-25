import { useNavigate } from 'react-router'

const path = '/registration'

function registrationRoute() {
  return {
    getPath: () => path
  }
}

function useRegistrationRoute() {
  const navigate = useNavigate()
  return {
    goTo: () => navigate(path)
  }
}

export {
  registrationRoute,
  useRegistrationRoute
}

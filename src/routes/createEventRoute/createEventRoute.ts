import { useNavigate } from 'react-router'

const path = '/createEvent'

function createEventRoute() {
  return {
    getPath: () => path
  }
}

function useCreateEventRoute() {
  const navigate = useNavigate()
  return {
    goTo: () => navigate(path)
  }
}

export {
  createEventRoute,
  useCreateEventRoute
}

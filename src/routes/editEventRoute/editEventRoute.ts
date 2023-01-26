import { useNavigate } from 'react-router'

const path = '/edit-event'

function editEventRoute() {
  return {
    getPath: () => path
  }
}

function useEditEventRoute() {
  const navigate = useNavigate()
  return {
    goTo: () => navigate(path)
  }
}

export {
  editEventRoute,
  useEditEventRoute
}

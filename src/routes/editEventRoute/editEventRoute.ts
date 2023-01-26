import { useNavigate } from 'react-router'

const path = '/edit-event/:id'

function editEventRoute() {
  return {
    getPath: () => path
  }
}

function useEditEventRoute() {
  const navigate = useNavigate()
  return {
    goTo: (id: string) => navigate(`/edit-event/${id}`)
  }
}

export {
  editEventRoute,
  useEditEventRoute
}

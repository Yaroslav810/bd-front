import { useNavigate } from 'react-router'

const path = '/event/:id'

function eventRoute() {
  return {
    getPath: () => path
  }
}

function useEventRoute() {
  const navigate = useNavigate()
  return {
    goTo: (id: string) => navigate(`/event/${id}`)
  }
}

export {
  eventRoute,
  useEventRoute
}

import { useNavigate } from 'react-router'

const path = '/profile'

function profileRoute() {
    return {
        getPath: () => path
    }
}

function useProfileRoute() {
    const navigate = useNavigate()
    return {
        goTo: () => navigate(path)
    }
}

export {
    profileRoute,
    useProfileRoute
}

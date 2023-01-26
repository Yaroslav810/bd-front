import { ErrorContent } from '../../common/error/ErrorContent'
import { List } from '../main/components/List'
import { profileStates } from './model/states'
import { Preloader } from '../../common/preloader/Preloader'
import styles from './Profile.module.css'
import { useAtom } from '@reatom/npm-react'
import { Typography } from '@mui/material'
import { getUser } from '../../model/states'

function Profile() {
  const [data] = useAtom(profileStates.events)
  const [isLoading] = useAtom(profileStates.loaded)
  const user = getUser()

  let content
  if (isLoading > 0) {
    content = <Preloader />
  } else {
    content = (data != null)
      ? <List events={data} />
      : <ErrorContent />
  }
  let infoUser
  if (user) {
    infoUser = <div>
      <p>Имя: {user.firstName}</p>
      <p>Фамилия: {user.lastName ?? '-'}</p>
      <p>Логин: {user.login}</p>
    </div>
  }

  return <div className={styles.profile}>
    <Typography variant="h4" gutterBottom>
      Профиль
    </Typography>
    <div className={styles.content}>
      {infoUser}
      {content}
    </div>
  </div>
}

export {
  Profile
}

import { ErrorContent } from '../../common/error/ErrorContent'
import { List } from '../main/components/List'
import { profileStates } from './model/states'
import { Preloader } from '../../common/preloader/Preloader'
import styles from './Profile.module.css'
import { useAtom } from '@reatom/npm-react'
import { Typography } from '@mui/material'
import { getMockCurrentUser } from '../../api/user/mockData'
import { Avatar } from '@mui/material'


function Profile() {
  const [data] = useAtom(profileStates.events)
  const [isLoading] = useAtom(profileStates.loaded)
  const user = getMockCurrentUser()

  let content
  if (isLoading > 0) {
    content = <Preloader />
  } else {
    content = (data != null)
      ? <List events={data} />
      : <ErrorContent />
  }
    let infoUser
    if (user)
    {
        infoUser = <div>
            <span className={styles.firstName}>{user.firstName}</span>
            <span> </span>
            <span className={styles.lastName}>{user.lastName}</span>
            <p className={styles.login}>{user.login}</p>
        </div>
    }

  return <div className={styles.profile}>
      <div className={styles.infoProfile}>
          <Typography variant="h4" gutterBottom>
              Профиль
          </Typography>
          
              <Avatar src="/static/images/avatar/2.jpg" className={styles.avatar}/>
          
          {infoUser}
      </div>
      <div className={styles.content}> 
      {content}
    </div>
  </div>
}

export {
  Profile
}

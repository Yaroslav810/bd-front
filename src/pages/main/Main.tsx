import { Avatar, IconButton } from '@mui/material'
import styles from './Main.module.css'
import { user } from '../../common/sidebar/Sidebar'
//import { useCreateEventRoute } from '../../routes/createEventRoute/createEventRoute'

//const createEvent = useCreateEventRoute()


//TODO: добавить автоматическое подгружение количества "лайкнутых" меропри€тий
const countOfFavoritesEvents = 0;
//TODO: добавить автоматическое подгружение количества посещенных меропри€тий(тех, где чел перещел по ссылке "записатьс€")
const countOfVisitedEvents = 0;
//TODO: добавить автоматическое подгружение количества созданных меропри€тий
const countOfCreatedEvents = 0;
import { Preloader } from '../../common/preloader/Preloader'
import styles from './Main.module.css'
import { useAtom } from '@reatom/npm-react'
import { mainStates } from './model/states'
import { ErrorContent } from '../../common/error/ErrorContent'
import { List } from './components/List'

function Main() {
  const [data] = useAtom(mainStates.events)
  const [isLoading] = useAtom(mainStates.loaded)

  let content
  if (!(isLoading === 0)) {
    content = <Preloader />
  } else {
    content = (data != null)
      ? <List events={data}/>
      : <ErrorContent />
  }

  return <div className={styles.main}>
    {content}
  </div>
    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <IconButton sx={{ p: 2 }} className={styles.iconButton}>
                    <Avatar className={styles.icon} alt={user.name} src="/static/images/avatar/2.jpg" />
                </IconButton>
                <p className={styles.userInfo}>
                    {user.name}
                </p>
                <p className={styles.userInfo}>
                    {user.login}
                </p>
                <div className={styles.createEvent}>
                    <a href='/createEvent' className={styles.createEventLink} > —оздать новое меропри€тие </a>
                </div>
            </div>
            <div className={styles.rightContent}>
                <div className={ styles.infoTop}>
                    <div className={styles.info}>
                        <p> оличество &#x1f497; меропри€тий</p>
                        <p>{countOfFavoritesEvents}</p>
                    </div>
                    <div className={styles.info}>
                        <p> оличество посещенных меропр€тий</p>
                        <p>{countOfVisitedEvents}</p>
                    </div>
                </div>
                <div className={styles.infoBottom}>
                    <div className={styles.info}>
                        <p> оличество созданных меропр€тий</p>
                        <p>{countOfCreatedEvents}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
}

export {
  Main
}
